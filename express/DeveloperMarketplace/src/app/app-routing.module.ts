import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/./home/home.component';
import { LearningPlatformComponent } from './pages/learning-platform/learning-platform.component';
import { BodyLearningComponent } from './pages/learning-platform/body-learning/body-learning.component';
import { BodyAdminComponent } from './admin/admin/body-admin/body-admin.component';
import { WebDesignComponent } from './pages/./web-design/web-design.component';
import { CustomAppsComponent } from './pages/custom-apps/custom-apps.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdminComponent } from './admin/admin/admin.component';

import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'learning',
    component: LearningPlatformComponent
    // currently serving as login page
  },
  {
    path: 'learning-content',
    component: BodyLearningComponent,
    canActivate: [AuthGuard]
    // dashboard functionality will go here
  },

  { path: 'web', component: WebDesignComponent},
  { path: 'apps', component: CustomAppsComponent},
  { path: 'marketing', component: MarketingComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'blog', component: BlogComponent},
  {
    path: 'admin-login',
    canActivate: [AuthGuard],
    component: BodyAdminComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent
  },
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
