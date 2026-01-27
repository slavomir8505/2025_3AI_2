import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OllamaService } from '../../services/ollama.service';


interface Message {
  role: 'user' | 'assistant';
  text: string;
}

@Component({
  selector: 'app-llama',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './llama.component.html',
  styleUrls: ['./llama.component.css']
})
export class LlamaComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  messages: Message[] = [];
  promptInput: string = '';
  isLoading: boolean = false;
  isConnected: boolean = false;

  constructor(private ollamaService: OllamaService) {}

  ngOnInit(): void {
    this.checkConnection();
    // Pridaj uvítaciu správu
    this.messages.push({
      role: 'assistant',
      text: 'Ahoj! Som SportFlow AI asistent. Opýtaj sa ma na čokoľvek o športe! ⚽🏀🎾'
    });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  checkConnection(): void {
    this.ollamaService.checkConnection().subscribe({
      next: (response) => {
        this.isConnected = true;
        console.log('✓ Ollama pripojená', response);
      },
      error: (error) => {
        this.isConnected = false;
        console.error('✗ Ollama nie je dostupná:', error);
        console.log('Skontroluj či beží: ollama serve');
      }
    });
  }

  sendMessage(): void {
    const trimmedInput = this.promptInput.trim();
    
    if (!trimmedInput || this.isLoading) {
      return;
    }

    // Pridaj user správu
    const userMessage: Message = {
      role: 'user',
      text: trimmedInput
    };
    this.messages.push(userMessage);

    // Uložíme prompt a vymažeme input
    const prompt = trimmedInput;
    this.promptInput = '';
    this.isLoading = true;

    // Zavolaj Ollama API
    this.ollamaService.processPrompt(prompt).subscribe({
      next: (response) => {
        console.log('Odpoveď z Ollama:', response);
        const assistantMessage: Message = {
          role: 'assistant',
          text: response.response || 'Prepáč, nedostal som žiadnu odpoveď.'
        };
        this.messages.push(assistantMessage);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Chyba pri komunikácii s Ollama:', error);
        let errorText = 'Prepáč, nastala chyba pri spracovaní tvojej otázky.';
        
        if (error.status === 0) {
          errorText = 'Nemôžem sa pripojiť k Ollama. Skontroluj či beží "ollama serve".';
        } else if (error.status === 404) {
          errorText = 'Model llama3.2:3b nebol nájdený. Spusti: ollama pull llama3.2:3b';
        }

        const errorMessage: Message = {
          role: 'assistant',
          text: errorText
        };
        this.messages.push(errorMessage);
        this.isLoading = false;
        this.isConnected = false;
      }
    });
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = 
          this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch(err) {
      console.error('Scroll error:', err);
    }
  }
}