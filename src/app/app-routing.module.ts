import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "my",
        loadChildren: () => import("./my-github/my-github.module").then((m) => m.MyGithubModule),
      },
      {
        path: "",
        redirectTo: "my",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "my",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
