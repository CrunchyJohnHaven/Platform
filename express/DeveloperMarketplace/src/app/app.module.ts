import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { HttpService } from './services/http.service';
import { AboutmeComponent } from './body/aboutme/aboutme.component';
import { ResumeComponent } from './body/resume/resume.component';
import { FormComponent } from './body/./forms/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NavBarComponent } from './base-components/nav-bar/nav-bar.component';
import { PortfolioComponent } from './pages/home/portfolio-container/portfolio/portfolio.component';
import { PortfolioContainerComponent } from './pages/home/portfolio-container/portfolio-container.component';
import { WorkFormContentComponent } from './body/./forms/work-form-content/work-form-content.component';
import { FooterComponent } from './base-components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BodyAboutUsComponent } from './pages/about-us/body-about-us/body-about-us.component';
import { HeaderAboutComponent } from './pages/about-us/header-about/header-about.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LearningPlatformComponent } from './pages/learning-platform/learning-platform.component';
import { AdminComponent } from './admin/admin/admin.component';
import { BodyAdminComponent } from './admin/admin/body-admin/body-admin.component';
import { BodyLearningComponent } from './pages/learning-platform/body-learning/body-learning.component';
import { HeaderAdminComponent } from './admin/admin/header-admin/header-admin.component';
import { HeaderLearningComponent } from './pages/learning-platform/header-learning/header-learning.component';
import { PlatformDashboardComponent } from './platform/platform-dashboard/platform-dashboard.component';
import { WebDesignComponent } from './pages/web-design/web-design.component';
import { CustomAppsComponent } from './pages/custom-apps/custom-apps.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HeaderWebComponent } from './pages/web-design/header-web/header-web.component';
import { HeaderCustomAppsComponent } from './pages/custom-apps/header-custom-apps/header-custom-apps.component';
import { HeaderContactComponent } from './pages/contact/header-contact/header-contact.component';
import { BodyWebComponent } from './pages/web-design/body-web/body-web.component';
import { BodyCustomAppsComponent } from './pages/custom-apps/body-custom-apps/body-custom-apps.component';
import { BodyMarketingComponent } from './pages/marketing/body-marketing/body-marketing.component';
import { BodyContactComponent } from './pages/contact/body-contact/body-contact.component';
import { BodyBlogComponent } from './pages/blog/body-blog/body-blog.component';
import { HeaderMarketingComponent } from './pages/marketing/header-marketing/header-marketing.component';
import { HeaderBlogComponent } from './pages/blog/header-blog/header-blog.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FooterFormComponent } from './body/forms/footer-form/footer-form.component';
import { FormWebComponent } from './body/forms/form-web/form-web.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { DataService } from './services/data.service';
import { MapComponent } from './body/map/map.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { IntroLearningComponent } from './pages/learning-platform/intro-learning/intro-learning.component';
import { NoQuitCalloutComponent } from './pages/learning-platform/no-quit-callout/no-quit-callout.component';
import { InfoRequestFormComponent } from './pages/learning-platform/info-request-form/info-request-form.component';
import { LearnOnlineMoreInfoComponent } from './pages/learning-platform/learn-online-more-info/learn-online-more-info.component';
import { AboutUsDifferentComponent } from './pages/learning-platform/about-us-different/about-us-different.component';
import { MissionLoginComponent } from './pages/learning-platform/mission-login/mission-login.component';
import { FormFreeQuoteComponent } from './body/forms/form-free-quote/form-free-quote.component';
import { MobilePortfolioComponent } from './body/mobile-portfolio/mobile-portfolio.component';
import { ConsultationComponent } from './body/consultation/consultation.component';
import { HomeOperatesComponent } from './pages/home/home-operates/home-operates.component';
import { HomeTeamLeadsComponent } from './pages/home/home-team-leads/home-team-leads.component';
// import { NgStyle } from '@angular/common';

@NgModule({ // annotated decorator for root module AppModule
  declarations: [ // List of components or directives belonging to this module
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
    WebDesignComponent,
    CustomAppsComponent,
    MarketingComponent,
    ContactComponent,
    BlogComponent,
    HeaderWebComponent,
    HeaderCustomAppsComponent,
    HeaderContactComponent,
    BodyWebComponent,
    BodyCustomAppsComponent,
    BodyMarketingComponent,
    BodyContactComponent,
    BodyBlogComponent,
    HeaderMarketingComponent,
    HeaderBlogComponent,
    FooterFormComponent,
    FormWebComponent,
    MapComponent,
    IntroLearningComponent,
    NoQuitCalloutComponent,
    InfoRequestFormComponent,
    LearnOnlineMoreInfoComponent,
    AboutUsDifferentComponent,
    MissionLoginComponent,
    FormFreeQuoteComponent,
    MobilePortfolioComponent,
    ConsultationComponent,
    HomeOperatesComponent,
    HomeTeamLeadsComponent
  ],
  imports: [ // The other angular modules that export material we need in this module
    BrowserModule, // All bits and pieces to run our app in the browser
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrON3E42miBTlNmnccp9Aaln7SSm_YC1I'
    }),
    // NgStyle

  ],
  providers: [
    // AngularFirestore,
    AuthGuard,
    AuthService,
    DataService,
    HttpService
  ], // added AuthGuard & AuthService here; hoping to fix injector error
  bootstrap: [AppComponent] // ID's the root module that angular should bootstrap when it starts the application
})
export class AppModule { }
