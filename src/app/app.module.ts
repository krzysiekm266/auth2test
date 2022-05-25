import { AuthService } from './services/auth.service';
import { AuthUserInterceptor } from './interceptors/auth-user.interceptor';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";
import { HttpClientModule,HttpClientXsrfModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CookieService } from 'ngx-cookie-service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WelcomeComponent,
    FooterComponent,
    SocialmediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpClientXsrfModule

  ],
  providers: [AuthService,CookieService,{provide:HTTP_INTERCEPTORS,useClass:AuthUserInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
