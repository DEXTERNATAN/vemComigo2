import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  {
    path: 'members',
    canActivate: [AuthGuardService],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  }
  // { path: 'menuPage', loadChildren: './menu/menu.module#MenuPageModule' },
  // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  // { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  // { path: 'special', loadChildren: './special/special.module#SpecialPageModule' },
  // { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  // { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  // { path: 'dashboard', loadChildren: './public/dashboard/dashboard.module#DashboardPageModule' },
  // { path: 'authentication', loadChildren: './services/authentication/authentication.module#AuthenticationPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// Site de referencia para o desenvolvimento:
// https://itnext.io/part-2-complete-step-by-step-firebase-authentication-in-angular-2-25d284102632