import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { MenuComponent } from './menu/menu.component';
import { MerchandisePipe } from './merchandise/merchandise.pipe';
import { UsersPipe } from './users/users.pipe';
import { PostPipe } from './users/post.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MerchandiseComponent,
    MenuComponent,
    MerchandisePipe,
    UsersPipe,
    PostPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
