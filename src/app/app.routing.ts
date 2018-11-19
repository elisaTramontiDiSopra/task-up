import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views\/home/home.component';
import { LoginComponent } from './views\/login/login.component';
import { ComponentsComponent } from './views\/components\/components.component';
import { CalendarComponent } from './views\/calendar\/calendar.component';
import { AdminComponent } from './views\/admin\/admin.component';
import { AdminEditComponent } from './views\/admin\/edit\/admin-edit.component';
import { AdminNewComponent } from './views\/admin\/new\/admin-new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },

  { path: 'admin-edit', component: AdminEditComponent },
  { path: 'admin-new', component: AdminNewComponent },
  { path: 'calendar', component: CalendarComponent },

  { path: '**', redirectTo: 'login' }
/*
  { path: '', canActivate: [AuthGuard], children: [
    { path: 'home', component: HomeComponent },
  //{ path: 'patients', component: PatientsComponent },
  //{ path: 'patients/create', component: PatientsDetailComponent },
  //{ path: 'patients/:id', component: PatientsDetailComponent },
  //{ path: 'patients/:id/assisted-therapy', component: AssistedTherapyComponent },
  //{ path: 'patients/:id/manual-therapy', component: ManualTherapyComponent },
  //{ path: 'patients/:patientId/therapies/:id', component: PatientTherapyComponent },
  //{ path: 'analytics', component: AnalyticsComponent }
 */];

export const routing = RouterModule.forRoot(routes);
