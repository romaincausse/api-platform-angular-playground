import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { GreatingComponent } from './core/greating/greating.component';
import { ErrorComponent } from './core/error/error.component';
import { UserComponent } from './user/user.component';
import { MissionComponent } from './mission/mission.component';
import { FormComponent as MissionFormComponent } from './mission/form/form.component';
import { FormComponent as UserFormComponent } from './user/form/form.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RouteGuardServiceAdmin } from './services/guard/route-guard-admin.service';
import { RouteGuardServiceUser } from './services/guard/route-guard-user.service';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "greating", component: GreatingComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "user", children:[
    {path: "", component: UserComponent},
    {path: ":id", component: UserFormComponent}
  ]},
  { path: "mission", canActivate: [RouteGuardServiceUser] ,children:[
    {path: "", component: MissionComponent},
    {path: ":id", component: MissionFormComponent, canActivate: [RouteGuardServiceAdmin]}
  ]},
  // { path: "logout", component: LogoutComponent },
  // { path: "welcome/:name", component: WelcomeComponent, canActivate: [RouteGuardService] },
  // { path: "todos", component: ListTodosComponent, canActivate:[RouteGuardService] },
  // { path: "todos/:id", component: TodoComponent, canActivate:[RouteGuardService] },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
