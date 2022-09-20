import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

// ici le routing de login-routing.module.ts
const routes: Routes = [
  // sign-in = s'identifier
  { path: 'sign-in', component: PageSignInComponent },
  // créer les routes pour les autres composants de login
  // sign-up = s'enregistrer
  { path: 'sign-up', component: PageSignUpComponent },
  // reset-password
  { path: 'reset-password', component: PageResetPasswordComponent },
  // forgot-password
  { path: 'forgot-password', component: PageForgotPasswordComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
