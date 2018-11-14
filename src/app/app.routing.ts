import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views\/home/home.component';
import { LoginComponent } from './views\/login/login.component';
import { ComponentsComponent } from './views\/components\/components.component';
import { CalendarComponent } from './views\/calendar\/calendar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ComponentsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);