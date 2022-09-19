import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';

// ici le routing
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  // sign-in = s'identifier
  { path: 'sign-in', component: PageSignInComponent },
  // créer les routes pour les autres composants de login
  // sign-up = s'enregistrer
  { path: 'sign-up', component: PageSignUpComponent },
  // reset-password
  { path: 'reset-password', component: PageResetPasswordComponent },
  // forgot-password
  { path: 'forgot-password', component: PageForgotPasswordComponent },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  // faire la même chose pour le module clients
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },

  // créer un module PageNotFound
  // dedans un composant pageNotFound
  // mettre en place le lazyloading sur ce module
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
