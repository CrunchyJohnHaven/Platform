import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headers/header/header.component';
import {HttpService} from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutmeComponent } from './body/aboutme/aboutme.component';
import { ResumeComponent } from './body/resume/resume.component';
import { FormComponent } from './body/./forms/form/form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NavBarComponent } from './base-components/nav-bar/nav-bar.component';
import { PortfolioComponent } from './body/portfolio-container/portfolio/portfolio.component';
import { PortfolioContainerComponent } from './body/portfolio-container/portfolio-container.component';
import { WorkFormContentComponent } from './body/./forms/work-form-content/work-form-content.component';
import { FooterComponent } from './base-components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BodyAboutUsComponent } from './body/body-about-us/body-about-us.component';
import { HeaderAboutComponent } from './headers/header-about/header-about.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LearningPlatformComponent } from './pages/learning-platform/learning-platform.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BodyAdminComponent } from './body/body-admin/body-admin.component';
import { BodyLearningComponent } from './body/body-learning/body-learning.component';
import { HeaderAdminComponent } from './headers/header-admin/header-admin.component';
import { HeaderLearningComponent } from './headers/header-learning/header-learning.component';
import { PlatformDashboardComponent } from './platform/platform-dashboard/platform-dashboard.component';
// import { NgStyle } from '@angular/common';

@NgModule({ //annotated decorator for root module AppModule
  declarations: [ //List of components or directives belonging to this module 
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    ResumeComponent,
    FormComponent,
    NavBarComponent,
    PortfolioComponent,
    PortfolioContainerComponent,
    WorkFormContentComponent,
    FooterComponent,
    HomeComponent,
    BodyAboutUsComponent,
    HeaderAboutComponent,
    AboutUsComponent,
    LearningPlatformComponent,
    AdminComponent,
    BodyAdminComponent,
    BodyLearningComponent,
    HeaderAdminComponent,
    HeaderLearningComponent,
    PlatformDashboardComponent,
    // NgStyle
  ],
  imports: [ //The other angular modules that export material we need in this module
    BrowserModule, //All bits and pieces to run our app in the browser
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    // NgStyle

  ],
  providers: [HttpService],
  bootstrap: [AppComponent] //ID's the root module that angular should bootstrap when it starts the application 
})
export class AppModule { }
