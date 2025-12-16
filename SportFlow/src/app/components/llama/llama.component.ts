import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OllamaService } from '../../services/ollama.service';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-ollama',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './llama.component.html',
  styleUrls: ['./llama.component.css']
})
export class LlamaComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  
  userPrompt: string = '';
  messages: ChatMessage[] = [];
  isLoading: boolean = false;
  private shouldScrollToBottom = false;

  constructor(private ollamaService: OllamaService) {}

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  sendMessage() {
    if (!this.userPrompt.trim() || this.isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: this.userPrompt.trim(),
      timestamp: new Date()
    };
    this.messages.push(userMessage);
    
    const prompt = this.userPrompt;
    this.userPrompt = '';
    this.isLoading = true;
    this.shouldScrollToBottom = true;

    this.ollamaService.processPrompt(prompt).subscribe({
      next: (response) => {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: response.response,
          timestamp: new Date()
        };
        this.messages.push(assistantMessage);
        this.isLoading = false;
        this.shouldScrollToBottom = true;
      },
      error: (error) => {
        const errorMessage: ChatMessage = {
          role: 'assistant',
          content: `Chyba: ${error.message || 'Nepodarilo sa získať odpoveď z Ollama.'}`,
          timestamp: new Date()
        };
        this.messages.push(errorMessage);
        this.isLoading = false;
        this.shouldScrollToBottom = true;
      }
    });
  }

  onEnterPress(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.shiftKey) {
      return;
    }
    event.preventDefault();
    this.sendMessage();
  }

  clearChat() {
    this.messages = [];
    this.userPrompt = '';
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = 
        this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) {
      console.error('Chyba pri scrollovaní:', err);
    }
  }
}