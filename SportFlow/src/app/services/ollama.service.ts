import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { OllamaResponse } from '../interfaces/models/ollama-response';


@Injectable({
  providedIn: 'root'
})
export class OllamaService {

  constructor(private httpClient: HttpClient) { }

  processPrompt(prompt: string): Observable<OllamaResponse> {
    const requestBody = {
      model: environment.llamaModel,
      prompt: prompt,
      stream: false
    };

    return this.httpClient.post<OllamaResponse>(environment.llamaApiUrl, requestBody)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Nastala neznáma chyba!';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Chyba: ${error.error.message}`;
    } else {
      errorMessage = `Server Error ${error.status}: ${error.message}`;
    }
    
    console.error('Ollama Service Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}