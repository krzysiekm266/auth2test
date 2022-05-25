import { WelcomeComponent } from './components/welcome/welcome.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  //{ path: '',  redirectTo: '/auth' ,pathMatch: 'full'}
  {path: '',component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
