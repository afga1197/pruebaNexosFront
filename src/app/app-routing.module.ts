import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { MerchandiseComponent } from './merchandise/merchandise.component'

const routes: Routes = [
  {path:'', component: UsersComponent},
  {path:'merchandise', component: MerchandiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
