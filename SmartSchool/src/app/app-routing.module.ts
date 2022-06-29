import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  {path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
  {path: 'professores', component: ProfessoresComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'Perfil', component: PerfilComponent},
  {path: 'Dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
