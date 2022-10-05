import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users/users-list/users-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ConfirmDlgComponent } from './ui/confirm-dlg/confirm-dlg.component';
import { AppHeaderComponent } from './ui/app-header/app-header.component';
import { AppFooterComponent } from './ui/app-footer/app-footer.component';
import { AppMenuComponent } from './ui/app-menu/app-menu.component';
import { UsersFormComponent } from './users/users-form/users-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ConfirmDlgComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppMenuComponent,
    UsersFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
