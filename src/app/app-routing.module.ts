import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PanelComponent } from './pages/admin/panel/panel.component';
import { AddComponent } from './pages/admin/add/add.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ArticleComponent } from './pages/article/article.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'art/:title',
    component: ArticleComponent
  },
  {
    path: 'admin',
    component: PanelComponent
  },
  {
    path: 'admin/add/:id',
    component: AddComponent
  },
  {
    path: 'admin/add',
    component: AddComponent
  },
  {
    path: 'login',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
