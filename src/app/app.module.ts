import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyroutingModule } from './myrouting/myrouting.module';
import { UserService } from './user.service';
import { MyguardGuard } from './myguard.guard';
import { HttpClientModule } from '@angular/common/http';
import { UserDirective } from './user.directive';

@NgModule({
  imports: [MyroutingModule, BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, UserDirective],
  bootstrap: [AppComponent],
  providers: [UserService, MyguardGuard],
})
export class AppModule {}
