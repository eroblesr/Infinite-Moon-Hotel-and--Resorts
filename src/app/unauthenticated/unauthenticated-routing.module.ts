import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/unauthenticated/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      // {
      //   path: 'start',
      //   component: LoginComponent,
      // },
      // {
      //   path: 'contact',
      //   component: LoginComponent,
      // },
      // {
      //   path: 'about',
      //   component: LoginComponent,
      // },
      // {
      //   path: 'rooms',
      //   component: LoginComponent,
      // },
      // {
      //   path: 'reserve',
      //   component: LoginComponent,
      // },
    ],
  },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
