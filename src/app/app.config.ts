import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      [
        {
          path: '',
          loadComponent: () => import('./layout/layout.component'),
          loadChildren: () => import('./layout/layout.routes'),
        },
      ],
      withHashLocation()
    ), provideAnimationsAsync(),
  ],
};
