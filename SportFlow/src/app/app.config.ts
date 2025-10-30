import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

const firebaseConfig = {
  apiKey: "AIzaSyC2YcuOqn7Mo3mbp00VygeLjyezlO2XVqc",
  authDomain: "sportflow-d83ea.firebaseapp.com",
  projectId: "sportflow-d83ea",
  storageBucket: "sportflow-d83ea.firebasestorage.app",
  messagingSenderId: "499865264964",
  appId: "1:499865264964:web:d222c399eb0393fe73ed11",
  measurementId: "G-3YM33E2CVT"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      AngularFirestoreModule,
      AngularFireAuthModule,
      AngularFireModule.initializeApp(firebaseConfig)
    ),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())]
};
