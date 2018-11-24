import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LaddaModule } from 'angular2-ladda';
import { MomentModule } from 'angular2-moment';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthService, AuthInterceptor, TranslationsUrl } from 'app';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './services/firebase-credentials';

// GUARD
import { AuthGuardService } from './guards/auth.guard';

// VIEWS
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ComponentsComponent } from './views/components/components.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminEditComponent } from './views/admin/edit/admin-edit.component';
import { AdminNewComponent } from './views/admin/new/admin-new.component';

// C0MPONENTS
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading-spinner/loading.component';
import { TreeStructureComponent } from './components/tree-structure/tree-structure.component';
import { AnimateComponent } from './components/animate/animate.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TaskBarComponent } from './components/task-bar/task-bar.component';

// SERVICES
import { LoadingService } from './services/loading.service';
import { FirebaseAuthService } from './services/firebase-auth.service';

import { UserService } from './services/user.service';
import * as firebase from 'firebase';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${TranslationsUrl}/`, '');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ComponentsComponent,
    CalendarComponent,
    AdminComponent,
    AdminEditComponent,
    AdminNewComponent,

    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    TreeStructureComponent,
    AnimateComponent,
    ScheduleComponent,
    TaskBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    routing,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    LaddaModule,
    MomentModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center' // custom class
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    FirebaseAuthService,
    UserService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
