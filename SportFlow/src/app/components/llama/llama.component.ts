import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OllamaService } from '../../services/ollama.service';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-llama',  // <-- Zmenené z 'app-chat' na 'app-llama'
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './llama.component.html',
  styleUrls: ['./llama.component.css']
})
export class LlamaComponent {  // <-- Zmenené z ChatComponent na LlamaComponent
  messages: Message[] = [{
    text: 'Ahoj! Ako ti môžem pomôcť?',
    isUser: false,
    timestamp: new Date()
  }];
  
  userInput: string = '';
  isLoading: boolean = false;

  constructor(private ollamaService: OllamaService) {}

  sendMessage(): void {
    const trimmedInput = this.userInput.trim();
    if (!trimmedInput || this.isLoading) return;

    // Pridať správu používateľa
    this.messages.push({
      text: trimmedInput,
      isUser: true,
      timestamp: new Date()
    });

    this.isLoading = true;
    const prompt = trimmedInput;
    this.userInput = '';

    // Volať Ollama API
    this.ollamaService.generateResponse(prompt).subscribe({
      next: (response) => {
        this.messages.push({
          text: response.response,
          isUser: false,
          timestamp: new Date()
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Chyba pri volaní Ollama API:', error);
        this.messages.push({
          text: 'Prepáčte, nastala chyba pri spracovaní vašej správy.',
          isUser: false,
          timestamp: new Date()
        });
        this.isLoading = false;
      }
    });
  }
}