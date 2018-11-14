import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LaddaModule } from 'angular2-ladda';
import { MomentModule } from 'angular2-moment';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthService, AuthInterceptor } from 'app';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './services/firebase-credentials';

// VIEWS
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ComponentsComponent } from './views/components/components.component';
import { CalendarComponent } from './views/calendar/calendar.component';

// C0MPONENTS
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading-spinner/loading.component';
import { TreeStructureComponent } from './components/tree-structure/tree-structure.component';
import { AnimateComponent } from './components/animate/animate.component';

// SERVICES
import { LoadingService } from './services/loading.service';
import * as firebase from 'firebase';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ComponentsComponent,
    CalendarComponent,

    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    TreeStructureComponent,
    AnimateComponent
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
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [
    AuthService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
