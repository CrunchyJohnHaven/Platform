import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headers/header/header.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutmeComponent } from './body/aboutme/aboutme.component';
import { ResumeComponent } from './body/resume/resume.component';
import { FormComponent } from './body/./forms/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
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
import { AdminComponent } from './admin/admin/admin.component';
import { BodyAdminComponent } from './body/body-admin/body-admin.component';
import { BodyLearningComponent } from './body/body-learning/body-learning.component';
import { HeaderAdminComponent } from './headers/header-admin/header-admin.component';
import { HeaderLearningComponent } from './headers/header-learning/header-learning.component';
import { PlatformDashboardComponent } from './platform/platform-dashboard/platform-dashboard.component';
import { WebDesignComponent } from './pages/web-design/web-design.component';
import { CustomAppsComponent } from './pages/custom-apps/custom-apps.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HeaderWebComponent } from './headers/header-web/header-web.component';
import { HeaderCustomAppsComponent } from './headers/header-custom-apps/header-custom-apps.component';
import { HeaderContactComponent } from './headers/header-contact/header-contact.component';
import { BodyWebComponent } from './body/body-web/body-web.component';
import { BodyCustomAppsComponent } from './body/body-custom-apps/body-custom-apps.component';
import { BodyMarketingComponent } from './body/body-marketing/body-marketing.component';
import { BodyContactComponent } from './body/body-contact/body-contact.component';
import { BodyBlogComponent } from './body/body-blog/body-blog.component';
import { HeaderMarketingComponent } from './headers/header-marketing/header-marketing.component';
import { HeaderBlogComponent } from './headers/header-blog/header-blog.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FooterFormComponent } from './body/forms/footer-form/footer-form.component';
import { FormWebComponent } from './body/forms/form-web/form-web.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

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
    // NgStyle
  ],
  imports: [ // The other angular modules that export material we need in this module
    BrowserModule, // All bits and pieces to run our app in the browser
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    // NgStyle

  ],
  providers: [HttpService],
  bootstrap: [AppComponent] // ID's the root module that angular should bootstrap when it starts the application
})
export class AppModule { }
