import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),]
};
const firebaseConfig = {
  apiKey: "AIzaSyC2YcuOqn7Mo3mbp00VygeLjyezlO2XVqc",
  authDomain: "sportflow-d83ea.firebaseapp.com",
  projectId: "sportflow-d83ea",
  storageBucket: "sportflow-d83ea.firebasestorage.app",
  messagingSenderId: "499865264964",
  appId: "1:499865264964:web:d222c399eb0393fe73ed11",
  measurementId: "G-3YM33E2CVT"
};

