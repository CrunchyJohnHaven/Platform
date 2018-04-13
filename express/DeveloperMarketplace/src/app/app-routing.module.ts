import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/./home/home.component';
import { LearningPlatformComponent } from './pages/./learning-platform/learning-platform.component';
import { WebDesignComponent } from './pages/./web-design/web-design.component'import { CustomAppsComponent } from './pages/custom-apps/custom-apps.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'learning', component: LearningPlatformComponent},
  { path: 'web', component: WebDesignComponent},
  { path: 'apps', component: CustomAppsComponent},
  { path: 'marketing', component: MarketingComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'blog', component: BlogComponent},

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
