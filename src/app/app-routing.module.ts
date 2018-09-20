import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menuPage', loadChildren: './menu/menu.module#MenuPageModule' },  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'special', loadChildren: './special/special.module#SpecialPageModule' },

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// Site de referencia para o desenvolvimento:
// https://itnext.io/part-2-complete-step-by-step-firebase-authentication-in-angular-2-25d284102632