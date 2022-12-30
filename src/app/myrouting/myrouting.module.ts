import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';
import { MyguardGuard } from '../myguard.guard';
import { AuthService } from '../auth.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [MyguardGuard],
    children: [
      {
        path: 'contact/:id',
        component: ContactComponent,
        //canActivate: [MyguardGuard],
      },
    ],
  },
  {
    path: 'info',
    loadChildren: () => import('../info/info.module').then((m) => m.InfoModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, ContactsComponent, ContactComponent],
  providers: [AuthService],
})
export class MyroutingModule {}
