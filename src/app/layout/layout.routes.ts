import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../map/map.component'),
  },
] as Routes;
