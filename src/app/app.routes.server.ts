import { RenderMode, ServerRoute } from '@angular/ssr';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';

// Rotas para o servidor (SSR)
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

// Rotas principais da aplicação
export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TaskListComponent },
];
