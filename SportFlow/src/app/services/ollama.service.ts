import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { OllamaResponse } from '../interfaces/models/ollama-response';

@Injectable({
  providedIn: 'root'
})
export class OllamaService {
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private httpClient: HttpClient) { }

  processPrompt(prompt: string): Observable<OllamaResponse> {
    const requestBody = {
      model: environment.llamaModel,
      prompt: prompt,
      stream: false
    };
    
    console.log('Posielam request na Ollama:', requestBody);
    
    return this.httpClient.post<OllamaResponse>(
      environment.llamaApiUrl, 
      requestBody,
      { headers: this.headers }
    );
  }

  checkConnection(): Observable<any> {
    // Odstráň /api/generate z URL pre check
    const baseUrl = 'http://localhost:11434';
    return this.httpClient.get(`${baseUrl}/api/tags`);
  }
}