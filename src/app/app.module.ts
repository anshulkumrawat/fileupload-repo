import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FileUploadService } from './shared/file-upload.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-user' },
  { path: 'add-user', component: CreateUserComponent },
  { path: 'users-list', component: UsersListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
