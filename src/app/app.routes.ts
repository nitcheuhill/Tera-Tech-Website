// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    title: 'Accueil - Tera Tech Solutions',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (c) => c.ServicesComponent
      ),
    title: 'Nos Services - Tera Tech Solutions',
    children: [
      {
        path: 'prestation',
        loadComponent: () =>
          import('./pages/services/prestation/prestation.component').then(
            (c) => c.PrestationComponent
          ),
        title: 'Prestation de Services - Tera Tech Solutions',
      },
      {
        path: 'materiel-informatique',
        loadComponent: () =>
          import(
            './pages/services/materiel-informatique/materiel-informatique.component'
          ).then((c) => c.MaterielInformatiqueComponent),
        title: 'Matériel Informatique - Tera Tech Solutions',
      },
      {
        path: 'location-engins',
        loadComponent: () =>
          import(
            './pages/services/location-engins/location-engins.component'
          ).then((c) => c.LocationEnginsComponent),
        title: 'Location Engins et Terrassement - Tera Tech Solutions',
      },
      {
        path: 'logistique-transport',
        loadComponent: () =>
          import(
            './pages/services/logistique-transport/logistique-transport.component'
          ).then((c) => c.LogistiqueTransportComponent),
        title: 'Logistique et Transport - Tera Tech Solutions',
      },
    ],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
    title: 'À Propos - Tera Tech Solutions',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
    title: 'Contact - Tera Tech Solutions',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
