import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'listar', loadChildren: './listar/listar.module#ListarPageModule' },
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
