import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OllamaService } from '../../services/ollama.service';

@Component({
  selector: 'app-llama',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './llama.component.html',
  styleUrl: './llama.component.css'
})
export class LlamaComponent implements OnInit {  // ← Pridaj 'export'
  messages: Array<{ text: string; role: 'user' | 'assistant' }> = [];
  promptInput = '';
  isLoading = false;
  isConnected = false;

  constructor(private ollamaService: OllamaService) {}

  ngOnInit() {
    this.checkConnection();
    this.addMessage('Ahoj! 👋 Som tvoj AI asistent. Ako ti môžem pomôcť s informáciami o športe?', 'assistant');
  }

  checkConnection() {
    this.ollamaService.checkConnection().subscribe({
      next: () => {
        this.isConnected = true;
      },
      error: () => {
        this.isConnected = false;
      }
    });
  }

  sendMessage() {
    if (!this.promptInput.trim() || this.isLoading) return;

    this.addMessage(this.promptInput, 'user');
    const prompt = this.promptInput;
    this.promptInput = '';
    this.isLoading = true;

    this.ollamaService.processPrompt(prompt).subscribe({
      next: (response) => {
        this.addMessage(response.response, 'assistant');
        this.isLoading = false;
      },
      error: (error) => {
        this.addMessage('Oops! Vyskytla sa chyba. Skús to neskôr.', 'assistant');
        this.isLoading = false;
      }
    });
  }

  private addMessage(text: string, role: 'user' | 'assistant') {
    this.messages.push({ text, role });
  }
}