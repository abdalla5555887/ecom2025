import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './core/interceptors/header/header.interceptor';
import { errorsInterceptor } from './core/interceptors/err/err.interceptor';
import { error } from 'console';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { loadInterceptor } from './core/interceptors/load/load.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(),withInterceptors  ([headerInterceptor,errorsInterceptor,loadInterceptor])),
    provideAnimations (),
  provideToastr(),
  importProvidersFrom(NgxSpinnerModule)

  ]
}


