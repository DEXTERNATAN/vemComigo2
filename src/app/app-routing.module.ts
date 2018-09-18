import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'contact', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },  { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// Site de referencia para o desenvolvimento:

// https://itnext.io/part-2-complete-step-by-step-firebase-authentication-in-angular-2-25d284102632