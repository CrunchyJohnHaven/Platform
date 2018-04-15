webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n<form>\n  <input type=\"text\" label=\"Administrative Action(s):\" >\n  <input type='submit' value='Send'>\n</form>"

/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var about_us_component_1 = __webpack_require__("./src/app/pages/about-us/about-us.component.ts");
var home_component_1 = __webpack_require__("./src/app/pages/home/home.component.ts");
var learning_platform_component_1 = __webpack_require__("./src/app/pages/learning-platform/learning-platform.component.ts");
var body_learning_component_1 = __webpack_require__("./src/app/body/body-learning/body-learning.component.ts");
var body_admin_component_1 = __webpack_require__("./src/app/body/body-admin/body-admin.component.ts");
var web_design_component_1 = __webpack_require__("./src/app/pages/web-design/web-design.component.ts");
var custom_apps_component_1 = __webpack_require__("./src/app/pages/custom-apps/custom-apps.component.ts");
var marketing_component_1 = __webpack_require__("./src/app/pages/marketing/marketing.component.ts");
var contact_component_1 = __webpack_require__("./src/app/pages/contact/contact.component.ts");
var blog_component_1 = __webpack_require__("./src/app/pages/blog/blog.component.ts");
var admin_component_1 = __webpack_require__("./src/app/admin/admin/admin.component.ts");
var auth_guard_service_1 = __webpack_require__("./src/app/services/auth-guard.service.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about-us', component: about_us_component_1.AboutUsComponent },
    {
        path: 'learning',
        component: learning_platform_component_1.LearningPlatformComponent
        // currently serving as login page
    },
    {
        path: 'learning-content',
        component: body_learning_component_1.BodyLearningComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
        // dashboard functionality will go here
    },
    { path: 'web', component: web_design_component_1.WebDesignComponent },
    { path: 'apps', component: custom_apps_component_1.CustomAppsComponent },
    { path: 'marketing', component: marketing_component_1.MarketingComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'blog', component: blog_component_1.BlogComponent },
    {
        path: 'admin-login',
        canActivate: [auth_guard_service_1.AuthGuard],
        component: body_admin_component_1.BodyAdminComponent
    },
    {
        path: 'admin',
        canActivate: [auth_guard_service_1.AuthGuard],
        component: admin_component_1.AdminComponent
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n\n\n\n\n\n\n\n\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/services/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/headers/header/header.component.ts");
var http_service_1 = __webpack_require__("./src/app/services/http.service.ts");
var aboutme_component_1 = __webpack_require__("./src/app/body/aboutme/aboutme.component.ts");
var resume_component_1 = __webpack_require__("./src/app/body/resume/resume.component.ts");
var form_component_1 = __webpack_require__("./src/app/body/forms/form/form.component.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var nav_bar_component_1 = __webpack_require__("./src/app/base-components/nav-bar/nav-bar.component.ts");
var portfolio_component_1 = __webpack_require__("./src/app/body/portfolio-container/portfolio/portfolio.component.ts");
var portfolio_container_component_1 = __webpack_require__("./src/app/body/portfolio-container/portfolio-container.component.ts");
var work_form_content_component_1 = __webpack_require__("./src/app/body/forms/work-form-content/work-form-content.component.ts");
var footer_component_1 = __webpack_require__("./src/app/base-components/footer/footer.component.ts");
var home_component_1 = __webpack_require__("./src/app/pages/home/home.component.ts");
var body_about_us_component_1 = __webpack_require__("./src/app/body/body-about-us/body-about-us.component.ts");
var header_about_component_1 = __webpack_require__("./src/app/headers/header-about/header-about.component.ts");
var about_us_component_1 = __webpack_require__("./src/app/pages/about-us/about-us.component.ts");
var learning_platform_component_1 = __webpack_require__("./src/app/pages/learning-platform/learning-platform.component.ts");
var admin_component_1 = __webpack_require__("./src/app/admin/admin/admin.component.ts");
var body_admin_component_1 = __webpack_require__("./src/app/body/body-admin/body-admin.component.ts");
var body_learning_component_1 = __webpack_require__("./src/app/body/body-learning/body-learning.component.ts");
var header_admin_component_1 = __webpack_require__("./src/app/headers/header-admin/header-admin.component.ts");
var header_learning_component_1 = __webpack_require__("./src/app/headers/header-learning/header-learning.component.ts");
var platform_dashboard_component_1 = __webpack_require__("./src/app/platform/platform-dashboard/platform-dashboard.component.ts");
var web_design_component_1 = __webpack_require__("./src/app/pages/web-design/web-design.component.ts");
var custom_apps_component_1 = __webpack_require__("./src/app/pages/custom-apps/custom-apps.component.ts");
var marketing_component_1 = __webpack_require__("./src/app/pages/marketing/marketing.component.ts");
var contact_component_1 = __webpack_require__("./src/app/pages/contact/contact.component.ts");
var blog_component_1 = __webpack_require__("./src/app/pages/blog/blog.component.ts");
var header_web_component_1 = __webpack_require__("./src/app/headers/header-web/header-web.component.ts");
var header_custom_apps_component_1 = __webpack_require__("./src/app/headers/header-custom-apps/header-custom-apps.component.ts");
var header_contact_component_1 = __webpack_require__("./src/app/headers/header-contact/header-contact.component.ts");
var body_web_component_1 = __webpack_require__("./src/app/body/body-web/body-web.component.ts");
var body_custom_apps_component_1 = __webpack_require__("./src/app/body/body-custom-apps/body-custom-apps.component.ts");
var body_marketing_component_1 = __webpack_require__("./src/app/body/body-marketing/body-marketing.component.ts");
var body_contact_component_1 = __webpack_require__("./src/app/body/body-contact/body-contact.component.ts");
var body_blog_component_1 = __webpack_require__("./src/app/body/body-blog/body-blog.component.ts");
var header_marketing_component_1 = __webpack_require__("./src/app/headers/header-marketing/header-marketing.component.ts");
var header_blog_component_1 = __webpack_require__("./src/app/headers/header-blog/header-blog.component.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var angularfire2_1 = __webpack_require__("./node_modules/angularfire2/index.js");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var footer_form_component_1 = __webpack_require__("./src/app/body/forms/footer-form/footer-form.component.ts");
var form_web_component_1 = __webpack_require__("./src/app/body/forms/form-web/form-web.component.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var auth_guard_service_1 = __webpack_require__("./src/app/services/auth-guard.service.ts");
var map_component_1 = __webpack_require__("./src/app/body/map/map.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
// // changed prev line to following 2 lines; hopefully fix error
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
// import { NgStyle } from '@angular/common';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                aboutme_component_1.AboutmeComponent,
                resume_component_1.ResumeComponent,
                form_component_1.FormComponent,
                nav_bar_component_1.NavBarComponent,
                portfolio_component_1.PortfolioComponent,
                portfolio_container_component_1.PortfolioContainerComponent,
                work_form_content_component_1.WorkFormContentComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                body_about_us_component_1.BodyAboutUsComponent,
                header_about_component_1.HeaderAboutComponent,
                about_us_component_1.AboutUsComponent,
                learning_platform_component_1.LearningPlatformComponent,
                admin_component_1.AdminComponent,
                body_admin_component_1.BodyAdminComponent,
                body_learning_component_1.BodyLearningComponent,
                header_admin_component_1.HeaderAdminComponent,
                header_learning_component_1.HeaderLearningComponent,
                platform_dashboard_component_1.PlatformDashboardComponent,
                web_design_component_1.WebDesignComponent,
                custom_apps_component_1.CustomAppsComponent,
                marketing_component_1.MarketingComponent,
                contact_component_1.ContactComponent,
                blog_component_1.BlogComponent,
                header_web_component_1.HeaderWebComponent,
                header_custom_apps_component_1.HeaderCustomAppsComponent,
                header_contact_component_1.HeaderContactComponent,
                body_web_component_1.BodyWebComponent,
                body_custom_apps_component_1.BodyCustomAppsComponent,
                body_marketing_component_1.BodyMarketingComponent,
                body_contact_component_1.BodyContactComponent,
                body_blog_component_1.BodyBlogComponent,
                header_marketing_component_1.HeaderMarketingComponent,
                header_blog_component_1.HeaderBlogComponent,
                footer_form_component_1.FooterFormComponent,
                form_web_component_1.FormWebComponent,
                map_component_1.MapComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                auth_1.AngularFireAuthModule,
                database_1.AngularFireDatabaseModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDrON3E42miBTlNmnccp9Aaln7SSm_YC1I'
                }),
            ],
            providers: [
                auth_guard_service_1.AuthGuard,
                auth_service_1.AuthService,
                http_service_1.HttpService
            ],
            bootstrap: [app_component_1.AppComponent] // ID's the root module that angular should bootstrap when it starts the application
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/base-components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n    background-color: black;\n    min-height: 237px;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%\n}\n.footer-container {\n    background-color: black;\n    color: white;\n    margin-left: inherit;\n    padding: 7px;\n    padding-top: 7px;\n    padding-right: 7px;\n    padding-bottom: 1px;\n    padding-left: 7px;\n    margin: auto;\n    text-align: center;\n}\n.githubIcon {\n    display: inline-block;\n    min-height: 32px;\n    min-width: 62px;\n    background-image: url('data:image/x-icon;base64,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//8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf+cAKX/EAAAAAAAAAAAAAAAAAAAAAAApf8CAKT/egCl//gApf//AKX+/wCl/14Apf9uAKT+/wCk//8Apf/4AKX/oACk/lYApf82AKX/EgCl/wQApP4CAKT/BgCl/g4ApP5kAKX+8ACk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf/qAKX/XgCl/wQAAAAAAAAAAAAAAAAApP8IAKX/bACk//AApf//AKT//wCk/pAApf+aAKX+/wCl/v8Apf/mAKT/XgCl/yYApf9IAKX/YgCl/2wApf9wAKX/cACk/moApP7aAKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX/1ACk/oYApf90AKX/eACl/34ApP90AKX/egCl/uQApf//AKX//wCl/7gApP66AKX+/wCl//8Apf/oAKX/kgCl/3gApf9mAKX/XgCl/2IApP9sAKX/dACl/5IApf/8AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKT++ACl/54Apf90AKX/bgCk/24Apf50AKX/gACl/+AApf//AKX+/wCl/9wApP/EAKT+/wCk//8Apf7OAKX+IACl/wAApf4MAKX/GACl/xgApf4MAKX/AgCl/04Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKX//ACl/lAApf8CAKX/AgCk/gIApf8AAKX+BgCl/8AApf//AKT//wCl/+YApf/KAKX+/wCl/v8Apf/KAKT+GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACk/2QApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/14AAAAAAAAAAAAAAAAAAAAAAKX/BACl/74Apf//AKX//wCl/+YApf/KAKX//wCk//8Apf/KAKX/FgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/mIApf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/l4AAAAAAAAAAAAAAAAAAAAAAKT/BACl/74Apf//AKX//wCl/uYApf/GAKX+/wCl//8Apf/OAKX/HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/0IApf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX/+ACl/0oAAAAAAAAAAAAAAAAAAAAAAKX+CgCl/8IApP7/AKX//wCl/+YApf+6AKX//wCl//8Apf/WAKX/LgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/xIApP72AKX//wCl//8ApP//AKX//wCl//8ApP//AKX//wCl//8ApP//AKX//wCl//8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+2gCl/y4AAAAAAAAAAAAAAAAAAAAAAKT/FgCl/soApf//AKX+/wCl/twApf+aAKX//wCk//8Apf/kAKT/SgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf+cAKT+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf/6AKT+lACl/w4AAAAAAAAAAAAAAAAAAAAAAKX+MgCl/9gApf//AKX//wCl/7oApf5uAKX+/wCl//8ApP70AKX/bACk/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8+AKX/4ACl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8Apf/eAKX/QgCl/wAAAAAAAAAAAAAAAAAAAAAAAKX/VACl/ugApP7/AKX//wCl/5AApf9EAKX/9gCl//8Apf//AKT+lACl/gwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8KAKX/iACl//gApP//AKX//wCl//8ApP//AKX//wCl//8ApP//AKX//wCl//8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8ApP+EAKX/CAAAAAAAAAAAAAAAAAAAAAAApf4EAKT/fACk/voApf//AKX+/wCl/14Apf8kAKX/yACk//8Apf//AKX/0ACl/yoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKX/WACl/+oApf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf9eAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8cAKX/tgCl//8Apf//AKX+4ACl/zAApf8OAKX+mACl/vwApP7/AKX/+ACl/1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8CAKX/dgCl//gApf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP6SAAAAAAAAAAAAAAAAAAAAAAAAAAAApf9CAKX+6gCl//8ApP7/AKX/sACl/xgApf8AAKX/YACl/+4Apf//AKT+/wCk/r4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8IAKX/kACl//8ApP//AKX//wCl//8ApP//AKX//wCl//8ApP//AKX//wCl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');\n    background-repeat: no-repeat;\n    background-position: top center;\n    margin-left: 0px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.linkedInIcon {\n    display: inline-block;\n    min-height: 32px;\n    min-width: 62px;\n    background-image: url('data:image/x-icon;base64,AAABAAEAMDAAAAEAIACoJQAAFgAAACgAAAAwAAAAYAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8CAKT/FgCk/i4Apf9YAKX/igCl/7QApf7YAKX/5gCl/uYApf/mAKX+5gCk/9gApf+0AKX/jACk/loApf8wAKX/GACl/wQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKX/AgCl/ygApf5yAKX/qgCl/twApf7/AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8ApP7eAKT+rgCk/3YApf8sAKX/BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf4cAKX/hgCl/s4Apf/0AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//YApf/SAKX/jACl/yIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8CAKX/HACl/24Apf7wAKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//IApP92AKX/HgCk/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8+AKT/sACl//YApf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf72AKT/tACk/0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKX/AACl/0YApP7aAKX//ACl//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKT+/ACl/94ApP5MAKX/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8MAKX/cACl/uwApf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP7sAKT/cACk/wwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/wAApf9uAKT+6ACl/v8Apf7/AKX//wCl/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKX/5gCl/3AApf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACk/kQApf/qAKX+/wCl//8Apf//AKX+/wCl//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCk/uwApf9OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8CAKX/PACl/9oApf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf/eAKX/RgCk/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8YAKX/rACl//wApf7/AKX//wCl/v8Apf7/AKX//wCl/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8ApP78AKT/tACl/x4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP9oAKT+9ACl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX/9gCl/3QAAAAAAAAAAAAAAAAAAAAAAAAAAACk/xgApf/sAKX+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP+kAKX/ZACl/2QApf9kAKX/ZACl/pwApf//AKX//wCl//8Apf5mAKX/ZACl/2QApf9kAKT/fgCl/+QApf//AKX+/wCl//8Apf//AKX/9gCk/ogApf9kAKX/ZACl/2QApP5wAKX/yACl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//AApf8gAAAAAAAAAAAAAAAAAKX/AgCl/34Apf7/AKX//wCl//8Apf7/AKX//wCl/v8Apf7/AKX//wCl/v8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/1wApf//AKX//wCk/v8ApP8CAAAAAAAAAAAAAAAAAKX/KgCl/tQApf//AKT//wCl/v8Apf//AKT/8ACl/zgAAAAAAAAAAAAAAAAApf8UAKT/pgCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8ApP+IAKX/AgAAAAAAAAAAAKX/IgCl/8oApf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApP//AKT+/wCk//8Apf4CAAAAAAAAAAAAAAAAAKX/KgCl/9IApf//AKX//wCl//8Apf//AKX/8ACl/jgAAAAAAAAAAAAAAAAApP4UAKT+pgCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP7QAKX/KgAAAAAApP4CAKT+agCl//IApf//AKX+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApf//AKX//wCl//8Apf4CAAAAAAAAAAAAAAAAAKT/JgCl/9IApf//AKX+/wCl//8Apf//AKX+7gCl/zgAAAAAAAAAAAAAAAAApP4UAKT+pgCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf/0AKX+cgCl/wIApP4SAKX/ogCk/v8Apf7/AKX//wCl//8Apf7/AKX//wCl/v8Apf7/AKX//wCl/v8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/1wApf//AKX//wCk/v8ApP8CAAAAAAAAAAAAAAAAAKT/JgCk/tIApf//AKT//wCl/v8Apf//AKX/7ACl/zgAAAAAAAAAAAAAAAAApf8UAKT/pgCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT+qgCl/xYApf8qAKT+1ACl/v8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApP//AKT+/wCk//8Apf4CAAAAAAAAAAAAAAAAAKX/JACl/tAApf//AKX//wCl//8Apf//AKX+7ACk/zYAAAAAAAAAAAAAAAAApP4UAKT+pgCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX+2gCl/y4Apf9QAKT+/ACl//8Apf//AKX+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApf//AKX//wCl//8Apf4CAAAAAAAAAAAAAAAAAKX/JACl/9AApf//AKX+/wCl//8Apf//AKT/6gCl/zYAAAAAAAAAAAAAAAAApP4UAKT+pgCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/ACl/lYApf+AAKT+/wCk//8Apf7/AKX//wCl//8Apf7/AKX//wCl/v8Apf7/AKX//wCl/v8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/1wApf//AKX//wCk/v8ApP8CAAAAAAAAAAAAAAAAAKT/IgCl/9AApf//AKT//wCl/v8Apf//AKX/6ACl/zQAAAAAAAAAAAAAAAAApf8UAKT/pgCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/ooApf+oAKX+/wCl/v8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApP//AKT+/wCk//8Apf4CAAAAAAAAAAAAAAAAAKX/IACl/84Apf//AKX//wCl//8Apf//AKX/5ACk/zIAAAAAAAAAAAAAAAAApP4UAKT+pgCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/7YApf/KAKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApf//AKX//wCl//8Apf4CAAAAAAAAAAAAAAAAAKT/HACl/8wApf//AKX+/wCl//8Apf//AKX+3gCl/zAAAAAAAAAAAAAAAAAApf8UAKX/pgCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl/9QApf7aAKT+/wCk//8Apf7/AKX//wCl//8Apf7/AKX//wCl/v8Apf7/AKX//wCl/v8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/1wApf//AKX//wCk/v8ApP8CAAAAAAAAAAAAAAAAAKX/EACl/8QApf//AKT//wCl/v8Apf//AKX/0gCl/yoAAAAAAAAAAAAAAAAApf8UAKT/qACl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/+AApf/iAKX+/wCl/v8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApP//AKT+/wCk//8Apf4CAAAAAAAAAAAAAAAAAKX/AgCl/4QApf//AKX//wCl//8Apf//AKX/rACl/xYAAAAAAAAAAAAAAAAApP4YAKT+rACl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/uYApf/iAKX//wCk//8Apf//AKX//wCl//8Apf7/AKX//wCk//8Apf7/AKX//wCk//8Apf9oAAAAAAAAAAAAAAAAAAAAAACl/1wApf//AKX//wCl//8Apf8CAAAAAAAAAAAAAAAAAAAAAACl/wYApf+eAKX+1gCl/9oApf+wAKT+LgAAAAAAAAAAAAAAAAAAAAAApP8eAKT/ugCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/+YApf/YAKX+/wCl//8ApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACl/1wApf//AKT+/wCl//8Apf8CAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8KAKT/LgCl/zgApf8UAAAAAAAAAAAAAAAAAAAAAAAAAAAApf4qAKX/1ACl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl/+AApf/GAKX//wCl//8Apf//AKT+/wCl/v8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf9oAAAAAAAAAAAAAAAAAAAAAACl/1wApP//AKX//wCl//8Apf8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf9aAKX/9gCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/tIApf6kAKX//wCk//8Apf//AKX//wCl//8Apf7/AKX//wCk//8Apf7/AKX//wCk//8Apf9oAAAAAAAAAAAAAAAAAAAAAACl/1wApf//AKX//wCl//8Apf8CAAAAAAAAAAAAAAAAAKX/HgCl/0gApP8GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKX/AACl/xwApf/aAKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCk/rIApf96AKX+/wCl//8ApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACl/1wApf//AKT+/wCl//8Apf8CAAAAAAAAAAAAAAAAAKX+KgCl/8YApf9sAKX/EgAAAAAAAAAAAAAAAAAAAAAApf8EAKX/MgCl/6gApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl/4YApf9MAKX/+gCl//8Apf//AKT+/wCl/v8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf/IAKX/pACl/6QApf+kAKX/pACl/sQApP//AKX//wCl//8Apf+kAKX/pACl/6QApf+kAKX+sgCl/+4Apf7uAKX/tACl/2gApf86AKX/NgCk/kgApf+QAKX/1ACl/vgApf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKT+/ACl/1IApf4oAKT+0ACk//8Apf//AKX//wCl//8Apf7/AKX//wCk//8Apf7/AKX//wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKT+1gCl/ywApf8QAKX/nACk/v8ApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP78AKX/1gCl/6QApf+kAKT+2ACl//wApf//AKT+/wCl//8Apf//AKT+/wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX/pACl/xQApf4CAKX+ZACk/u4Apf//AKT+/wCl/v8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf/AAKX/NgCl/xIApf8SAKX/OgCk/sYApP//AKX//wCl//8ApP//AKX//wCl//8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf/yAKX+bACl/wIAAAAAAKX/HACl/sQApf//AKX//wCl//8Apf7/AKX//wCk//8Apf7/AKX//wCk//wApf8yAAAAAAAAAAAAAAAAAAAAAACl/zoApf7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP7KAKX/JAAAAAAAAAAAAKX/AACl/3IApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCk/vgApf8GAAAAAAAAAAAAAAAAAAAAAACl/wYApf/4AKT+/wCl//8Apf//AKT+/wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8Apf9+AKX/AgAAAAAAAAAAAAAAAACl/hIApf/iAKT+/wCl/v8Apf//AKX//wCl//8Apf//AKX//wCl//oApf8UAAAAAAAAAAAAAAAAAAAAAACk/xAApP76AKX//wCl//8ApP//AKX//wCl//8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/uoApP8aAAAAAAAAAAAAAAAAAAAAAAAAAAAApf5cAKX/8ACl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf6KAKT/EACl/wAApf8AAKX/EgCl/44Apf//AKX//wCk//8Apf//AKX//wCk//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX/9ACk/2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf4WAKT+oACl//oApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7sAKX/lgCk/1oApP9aAKX/mgCl//AApf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP76AKT+qgCk/xgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8CAKT+MgCl/9IApf7/AKT+/wCl/v8Apf7/AKT+/wCl/v8ApP//AKX/+gCl/+wApf/sAKX/+gCk//8ApP//AKX//wCk//8ApP//AKX//wCk//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf/YAKT/OgCl/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/zQApf7kAKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCk//8Apf//AKX//wCk//8Apf//AKX//wCk//8Apf//AKX//wCk//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl/+YApf8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf9eAKX/3gCl//8ApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX/4ACl/2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8IAKX/XgCl/uQApf7/AKT+/wCl/v8ApP//AKX//wCk//8ApP//AKX//wCk//8ApP//AKX//wCk//8ApP//AKX//wCk//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf/mAKX/YACl/wgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/zIApf/QAKX/+gCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKT//wCl//8Apf//AKT//wCl//8Apf//AKT//wCl//8Apf//AKT//wCl//8Apf//AKT++gCl/9QApf86AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8wAKX/nACk/vAApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP7yAKX/pgCl/jYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8AAKX+FACl/1YApf/gAKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/uYApf9iAKX/FgCl/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8QAKX/bACl/sIApP7uAKX+/ACk//8Apf//AKX//wCk//8Apf//AKX//wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKT+/wCl//AApP7GAKX/eACl/xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKX/AACl/xoApP5iAKX+mgCk/swApf/4AKX//wCl//8Apf//AKX//wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl/voApf/QAKX/oACk/2gApf8eAKX/AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8CAKX/DgCk/yYApf9GAKX/dACl/6IApf/GAKX/3ACl/+IApf/eAKX/0gCl/8IApf+gAKX/eACl/0oApP8oAKT+EACl/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//+AH//8AAP//AAD//wAA//gAAB//AAD/8AAAD/8AAP/AAAAD/wAA/4AAAAH/AAD/AAAAAP8AAP4AAAAAfwAA/AAAAAA/AAD4AAAAAB8AAPAAAAAADwAA8AAAAAAPAADgB4fAeAcAAOAPx8D4AwAAwA/HwPgDAADAD8fA+AMAAIAPx8D4AQAAgA/HwPgBAACAD8fA+AEAAAAPx8D4AAAAAA/HwPgAAAAAD8fA+AAAAAAPx8D4AAAAAA/HwPgAAAAAD8fh+AAAAAAPx//4AAAAAA/H//gAAAAAD8f/8AAAAIAPx9/gAAAAgAAAB4ABAACAAAAAAAEAAIAAAAAAAQAAwAeAAAADAADAD8AAAAMAAOAPwAAABwAA4A/AAAAHAADwB4AAAA8AAPADAAAADwAA+AAAAAAfAAD8AAAAAD8AAP4AAAAAfwAA/wAAAAD/AAD/gAAAAf8AAP/AAAAD/wAA//AAAA//AAD//AAAP/8AAP//AAD//wAA///wD///AAA=');\n    background-repeat: no-repeat;\n    background-position: top center;\n    margin-left: 30px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.blogIcon {\n    display: inline-block;\n    min-height: 32px;\n    min-width: 62px;\n    background-image: url('data:image/png;base64,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');\n    background-repeat: no-repeat;\n    background-position: top center;\n    margin-left: 30px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.emailIcon {\n    display: inline-block;\n    min-height: 32px;\n    min-width: 62px;\n    background-image: url('data:image/png;base64,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');\n    background-repeat: no-repeat;\n    background-position: top center;\n    margin-left: 30px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.icon-text {\n    margin-top: 32px;\n}\n"

/***/ }),

/***/ "./src/app/base-components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <div class=\"footer-container\">\n        Use of this Site is subject to express Terms of Use. By using this site\n        , you signify that you agree to be bound by these, \n      <br>\n        which were last revised on the date shown in the footer of our legal page or in the relevant\n      <br>\n        document linked on our legal page.\n      <br><br>\n        Legal - Privacy Policy\n      <br><br>\n      <div class=\"row center\">\n          <div class=\"col m3 s6 btn_links\">\n            <div class=\"hiddenForm\" [hidden]=hideForm>\n              <app-footer-form></app-footer-form>    \n            </div>  \n            <div (click)=\"mediaRedirect('linkedIn')\" class=\"linkedInIcon\"><br>\n              <a [href]=\"socialMediaInfo['linkedIn']\" class=\"icon-linkedIn\" target=\"_blank\"><br><br><br></a>\n            </div>\n            <div (click)=\"mediaRedirect('blog')\" class=\"blogIcon\"><br>\n              <a [href]=\"socialMediaInfo['blog']\" class=\"icon-blog\" target=\"_blank\"><br><br><br></a>\n            </div>\n            <div (click)=\"mediaRedirect('email')\" class=\"emailIcon\"><br>\n              <a [href]=\"socialMediaInfo['email']\" class=\"icon-email\" target=\"_blank\"><br><br><br></a>\n            </div>             \n          </div>\n        </div>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/base-components/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/services/http.service.ts");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(httpService) {
        this.httpService = httpService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.hideForm = true;
        this.socialMediaInfo = this.httpService.getSocialMediaInfo();
    };
    FooterComponent.prototype.mediaRedirect = function (title) {
        console.log('media: ', title);
        switch (title) {
            case 'linkedIn':
                return location.href = 'https://www.linkedin.com/in/johnhavenbradley';
            case 'blog':
                return location.href = 'https://theamericanelement.com';
            case 'email':
                window.location.hash = 'your-page-element';
                return this.hideForm = !this.hideForm;
        }
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/base-components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/base-components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/base-components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n    color: #fff;\n    text-decoration: none;\n}\n\n.header_block {\n    background: #1f2022;\n    display: block;\n    margin: 56px 0px 0px;\n    width: 100%;\n}\n\n.header_block .main_nav_block {\n    background-color: #1f2022;\n    color: #fff;\n    height: 56px;\n    padding: 0px 40px 0px 0px;\n    position: fixed;\n    text-align: right;\n    top: 0px;\n    z-index: 9999;\n    width: 100%;\n}\n\n:after, :before {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.header_block .main_nav_block .cd_logo {\n    display: block;\n    height: 42px;\n    position: absolute;\n    left: 30px;\n    width: 140px;\n    top: 50%;\n    background-color: yellow;\n}\n\n.header_block .main_nav_block .nav_option_block {\n    height: 56px;\n    list-style-type: none;\n    margin: 0px;\n    padding: 0px;\n}\n\n.header_block .main_nav_block .nav_option_block>li {\n    cursor: pointer;\n    display: inline-block;\n    font-style: normal;\n    -webkit-font-variant-ligatures: normal;\n            font-variant-ligatures: normal;\n    font-variant-caps: normal;\n    font-variant-numeric: normal;\n    font-variant-east-asian: normal;\n    font-weight: normal;\n    font-stretch: normal;\n    font-size: 16px;\n    line-height: 20px;\n    font-family: ProximaNova-Bold, tahoma, verdana, arial, sans-serif;\n    height: 56px;\n    margin: 0px 0px 0px 28px;\n    padding: 12px 18px;\n    position: relative;\n    vertical-align: middle;\n    z-index: 999;\n}\n\n.header_block .main_nav_block .nav_option_block>li:first-child {\n    margin: 0px;\n    margin-top: 0px;\n    margin-right: 0px;\n    margin-bottom: 0px;\n    margin-left: 0px;\n}\n\n.header_block .main_nav_block .nav_option_block>li>.dropdown_menu {\n    display: none;\n    background-color: #272634;\n    padding: 0px 0px 1px;\n    position: absolute;\n    left: 0px;\n    text-align: left;\n    top: 56px;\n    width: 220px;\n}\n\n/* .header_block .main_nav_block .nav_option_block>li:after {\n    color: #06aae2;\n    content: \"\\e114\";\n    display: inline-block;\n    font-family: 'Glyphicons Halflings';\n    font-size: 7px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1;\n    position: absolute;\n    top: 55%;\n    transform: translateY(-50%);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    margin: 0px 0px 0px 5px;\n} */\n\nli {\n    display: list-item;\n    text-align: -webkit-match-parent;\n}\n\n.header_block .main_nav_block .nav_option_block, .header_block .main_nav_block .cta_btns {\n    display: inline-block;\n    margin: 0px 0px 0px 20px;\n    vertical-align: middle;\n}"

/***/ }),

/***/ "./src/app/base-components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE-edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1 minimum-scale=1.0\">\n    <meta name=\"description\" content=\"Interested in becoming a self-sustaining web and mobile app developer with a team of military Veterans dedicated to ensuring your long-term success? Build a portfolio of real-world projects with a team that understands where you've been, and how to get where you are going next.\">\n    <meta name=\"author\" content>\n    <link rel=\"sapper icon\" href=\"./../../../assets/favicon.ico\" type=\"image/x-icon\">\n    <title>Sapper Coding - Web and Mobile App Development and Education By and for Veterans</title>\n  </head>\n  <body class=\"home\">\n    <div class=\"header_block home\">\n      <div class=\"main_nav_block\">\n        <!-- <a href=\"/\" class=\"cd_logo uses_sprite vertical_centered\">\n          <img src=\"./../../../assets/\" alt=\"logo\">\n        </a> -->\n        <ul class=\"nav_option_block\">\n          <li class=\"home\">\n            <li class=\"programs_menu open\">\n              <a href=\"javascript:void(0)\">\n              <a routerLink=\"/home\">Home</a>\n              </a>\n              <div class=\"dropdown_menu\">\n                <ul>\n                  <li>\n                    <a routerLink=\"/learning\">Learning</a>\n                  </li>\n                </ul>\n              </div>\n            <!-- </li> -->\n          </li>\n          <li class=\"home\">\n              <li class=\"programs_menu open\">\n                <a href=\"javascript:void(0)\">\n                  <a routerLink=\"/learning\">Learning Platform</a>\n                </a>\n                <div class=\"dropdown_menu\">\n                  <ul>\n                    <li>\n                      <a routerLink=\"/learning\">Learning</a>\n                    </li>\n                  </ul>\n                </div>\n              <!-- </li> -->\n            </li>\n            <li class=\"home\">\n                <li class=\"programs_menu open\">\n                  <a href=\"javascript:void(0)\">\n                      <a routerLink=\"/web\">Web Design</a>\n                  </a>\n                  <div class=\"dropdown_menu\">\n                    <ul>\n                      <li>\n                          <a routerLink=\"/apps\">Custom Apps</a>\n                      </li>\n                    </ul>\n                  </div>\n                <!-- </li> -->\n              </li>\n              <li class=\"home\">\n                  <li class=\"programs_menu open\">\n                    <a href=\"javascript:void(0)\">\n                        <a routerLink=\"/marketing\">Web Marketing</a>\n                    </a>\n                    <div class=\"dropdown_menu\">\n                      <ul>\n                        <li>\n                            <a routerLink=\"/contact\">Contact</a>\n                        </li>\n                      </ul>\n                    </div>\n                  <!-- </li> -->\n                </li>\n                <li class=\"home\">\n                    <li class=\"programs_menu open\">\n                      <a href=\"javascript:void(0)\">\n                          <a routerLink=\"/about-us\">About Us</a>\n                      </a>\n                      <div class=\"dropdown_menu\">\n                        <ul>\n                          <li>\n                            <a routerLink=\"/learning\">Learning</a>\n                          </li>\n                        </ul>\n                      </div>\n                    <!-- </li> -->\n                  </li>\n                <li class='home'>\n                    <div class=\"cta_btns\">\n                        <p *ngIf='authService.isLoggedIn()'>\n                          Signed in as {{ authService.getCurrentUserDisplayName() }}\n                          <input (click)='doUserLogout()' class=\"campus_tour_button cta_blue_btn\" value='Sign Out'>\n                        </p>\n                        <a *ngIf='!authService.isLoggedIn()' routerLink=\"/learning\" class=\"campus_tour_button cta_blue_btn\">Sign In</a>\n                    </div>\n                </li>\n\n                <li class='home'>\n                    <div class=\"cta_btns\">\n                      <a routerLink=\"/admin\" class=\"contact_us_button cta_blue_btn_light\">Admin login</a>\n                    </div>\n                </li>\n\n\n\n\n            </ul>\n            <div class=\"cta_btns\">\n                <a routerLink=\"/contact\" class=\"contact_us_button cta_blue_btn_light\">Contact Us</a>\n            </div>\n      </div>\n    </div>\n    <!-- <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/home\">Home</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/learning\">Learning Platform</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/web\">Web Design</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/apps\">Custom Apps</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/marketing\">Web Marketing</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/contact\">Contact</a>\n        </div>\n        <!-- <div class=\"nav-bar-col\">\n          <a routerLink=\"/blog\">Blog</a>\n        </div> -->\n        <!-- <div class=\"nav-bar-col\">\n          <a routerLink=\"/admin\">Admin</a>\n        </div>\n\n\n        <div class=\"nav-bar-col\">\n            <a routerLink=\"/about-us\">About Us</a>\n        </div>\n      </div>\n    </div>  -->\n  </body>\n</html>\n\n\n"

/***/ }),

/***/ "./src/app/base-components/nav-bar/nav-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var NavBarComponent = /** @class */ (function () {
    // user = {
    //   displayName: '',
    //   isLoggedIn: true
    // };
    // may not need this info as we can get it straight from service in template
    function NavBarComponent(authService) {
        this.authService = authService;
    }
    NavBarComponent.prototype.doUserLogout = function () {
        this.authService.logout();
    };
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/base-components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/base-components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;


/***/ }),

/***/ "./src/app/body/aboutme/aboutme.component.css":
/***/ (function(module, exports) {

module.exports = ".main-header {\n    background-image: url('CPUBackground.551bbe77ee6695c5887c.jpg');\n    height: 500px;\n    background-size: cover;\n    background-size: auto contain;\n    position: top center;\n    background-attachment: fixed;\n    min-height: 300px;\n}\n.logo {\n    min-height: 490px; \n    min-width: 300px;\n    background-image: url('profile2PNG.32c7157a88b81dccc23c.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-top: -15px;\n    top: 50%;\n  }\n.about-me {\n    background-position: center;\n    display: inline;\n    margin-left: 80px;\n  }\n.content {\n    background-color: white;\n    background-size: cover;\n    display: inline-block;\n}\n.about-me {\n    display: inline-block;\n    height: 460px;\n    background-size: cover;\n    background-size: auto contain;\n    position: top center;\n    background-attachment: fixed;\n    min-height: 300px;\n    font-style: normal;\n    font-size: 15px;\n}\n.pic2 {\n    display: inline-block;\n    min-height: 300px;\n    min-width: 310px;\n    background-image: url('profilePNG.dcbdd7da7a18ba62eba2.png');\n    background-repeat: no-repeat;\n    background-position: top left;\n    margin-left: 220px;\n    margin-top: 55px;\n    margin-bottom: -20px;\n    top: 50%;\n}\n.content {\n    margin-top: -15px;\n    position: top center;\n    margin-top: 0%;\n    height: 30%;\n    width: 50%;\n    background-color: white;\n    display: inline-block;\n}\ndiv p {\n    font-size: 15px;\n    font-style: normal;\n}\narticle {\n    margin-top: 0px;\n}\n.githubIcon {\n    display: inline-block;\n    min-height: 32px;\n    min-width: 32px;\n    background-image: url('data:image/x-icon;base64,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//8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf+cAKX/EAAAAAAAAAAAAAAAAAAAAAAApf8CAKT/egCl//gApf//AKX+/wCl/14Apf9uAKT+/wCk//8Apf/4AKX/oACk/lYApf82AKX/EgCl/wQApP4CAKT/BgCl/g4ApP5kAKX+8ACk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf/qAKX/XgCl/wQAAAAAAAAAAAAAAAAApP8IAKX/bACk//AApf//AKT//wCk/pAApf+aAKX+/wCl/v8Apf/mAKT/XgCl/yYApf9IAKX/YgCl/2wApf9wAKX/cACk/moApP7aAKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX/1ACk/oYApf90AKX/eACl/34ApP90AKX/egCl/uQApf//AKX//wCl/7gApP66AKX+/wCl//8Apf/oAKX/kgCl/3gApf9mAKX/XgCl/2IApP9sAKX/dACl/5IApf/8AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKT++ACl/54Apf90AKX/bgCk/24Apf50AKX/gACl/+AApf//AKX+/wCl/9wApP/EAKT+/wCk//8Apf7OAKX+IACl/wAApf4MAKX/GACl/xgApf4MAKX/AgCl/04Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKX//ACl/lAApf8CAKX/AgCk/gIApf8AAKX+BgCl/8AApf//AKT//wCl/+YApf/KAKX+/wCl/v8Apf/KAKT+GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACk/2QApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/14AAAAAAAAAAAAAAAAAAAAAAKX/BACl/74Apf//AKX//wCl/+YApf/KAKX//wCk//8Apf/KAKX/FgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/mIApf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/l4AAAAAAAAAAAAAAAAAAAAAAKT/BACl/74Apf//AKX//wCl/uYApf/GAKX+/wCl//8Apf/OAKX/HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/0IApf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX/+ACl/0oAAAAAAAAAAAAAAAAAAAAAAKX+CgCl/8IApP7/AKX//wCl/+YApf+6AKX//wCl//8Apf/WAKX/LgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/xIApP72AKX//wCl//8ApP//AKX//wCl//8ApP//AKX//wCl//8ApP//AKX//wCl//8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+2gCl/y4AAAAAAAAAAAAAAAAAAAAAAKT/FgCl/soApf//AKX+/wCl/twApf+aAKX//wCk//8Apf/kAKT/SgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf+cAKT+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf/6AKT+lACl/w4AAAAAAAAAAAAAAAAAAAAAAKX+MgCl/9gApf//AKX//wCl/7oApf5uAKX+/wCl//8ApP70AKX/bACk/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8+AKX/4ACl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8Apf/eAKX/QgCl/wAAAAAAAAAAAAAAAAAAAAAAAKX/VACl/ugApP7/AKX//wCl/5AApf9EAKX/9gCl//8Apf//AKT+lACl/gwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8KAKX/iACl//gApP//AKX//wCl//8ApP//AKX//wCl//8ApP//AKX//wCl//8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8ApP+EAKX/CAAAAAAAAAAAAAAAAAAAAAAApf4EAKT/fACk/voApf//AKX+/wCl/14Apf8kAKX/yACk//8Apf//AKX/0ACl/yoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKX/WACl/+oApf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf9eAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8cAKX/tgCl//8Apf//AKX+4ACl/zAApf8OAKX+mACl/vwApP7/AKX/+ACl/1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8CAKX/dgCl//gApf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP6SAAAAAAAAAAAAAAAAAAAAAAAAAAAApf9CAKX+6gCl//8ApP7/AKX/sACl/xgApf8AAKX/YACl/+4Apf//AKT+/wCk/r4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8IAKX/kACl//8ApP//AKX//wCl//8ApP//AKX//wCl//8ApP//AKX//wCl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');\n    background-repeat: no-repeat;\n    background-position: top center;\n    margin-left: 0px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.linkedInIcon {\n    display: inline-block;\n    min-height: 32px;\n    min-width: 32px;\n    background-image: url('data:image/x-icon;base64,AAABAAEAMDAAAAEAIACoJQAAFgAAACgAAAAwAAAAYAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8CAKT/FgCk/i4Apf9YAKX/igCl/7QApf7YAKX/5gCl/uYApf/mAKX+5gCk/9gApf+0AKX/jACk/loApf8wAKX/GACl/wQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKX/AgCl/ygApf5yAKX/qgCl/twApf7/AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8ApP7eAKT+rgCk/3YApf8sAKX/BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf4cAKX/hgCl/s4Apf/0AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//YApf/SAKX/jACl/yIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8CAKX/HACl/24Apf7wAKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//IApP92AKX/HgCk/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8+AKT/sACl//YApf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf72AKT/tACk/0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKX/AACl/0YApP7aAKX//ACl//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKT+/ACl/94ApP5MAKX/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8MAKX/cACl/uwApf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP7sAKT/cACk/wwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/wAApf9uAKT+6ACl/v8Apf7/AKX//wCl/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKX/5gCl/3AApf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACk/kQApf/qAKX+/wCl//8Apf//AKX+/wCl//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCk/uwApf9OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8CAKX/PACl/9oApf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf/eAKX/RgCk/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8YAKX/rACl//wApf7/AKX//wCl/v8Apf7/AKX//wCl/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKX//wCk/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8ApP78AKT/tACl/x4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP9oAKT+9ACl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8ApP//AKT+/wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX/9gCl/3QAAAAAAAAAAAAAAAAAAAAAAAAAAACk/xgApf/sAKX+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP+kAKX/ZACl/2QApf9kAKX/ZACl/pwApf//AKX//wCl//8Apf5mAKX/ZACl/2QApf9kAKT/fgCl/+QApf//AKX+/wCl//8Apf//AKX/9gCk/ogApf9kAKX/ZACl/2QApP5wAKX/yACl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//AApf8gAAAAAAAAAAAAAAAAAKX/AgCl/34Apf7/AKX//wCl//8Apf7/AKX//wCl/v8Apf7/AKX//wCl/v8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/1wApf//AKX//wCk/v8ApP8CAAAAAAAAAAAAAAAAAKX/KgCl/tQApf//AKT//wCl/v8Apf//AKT/8ACl/zgAAAAAAAAAAAAAAAAApf8UAKT/pgCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8ApP+IAKX/AgAAAAAAAAAAAKX/IgCl/8oApf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApP//AKT+/wCk//8Apf4CAAAAAAAAAAAAAAAAAKX/KgCl/9IApf//AKX//wCl//8Apf//AKX/8ACl/jgAAAAAAAAAAAAAAAAApP4UAKT+pgCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP7QAKX/KgAAAAAApP4CAKT+agCl//IApf//AKX+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApf//AKX//wCl//8Apf4CAAAAAAAAAAAAAAAAAKT/JgCl/9IApf//AKX+/wCl//8Apf//AKX+7gCl/zgAAAAAAAAAAAAAAAAApP4UAKT+pgCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf/0AKX+cgCl/wIApP4SAKX/ogCk/v8Apf7/AKX//wCl//8Apf7/AKX//wCl/v8Apf7/AKX//wCl/v8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/1wApf//AKX//wCk/v8ApP8CAAAAAAAAAAAAAAAAAKT/JgCk/tIApf//AKT//wCl/v8Apf//AKX/7ACl/zgAAAAAAAAAAAAAAAAApf8UAKT/pgCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT+qgCl/xYApf8qAKT+1ACl/v8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApP//AKT+/wCk//8Apf4CAAAAAAAAAAAAAAAAAKX/JACl/tAApf//AKX//wCl//8Apf//AKX+7ACk/zYAAAAAAAAAAAAAAAAApP4UAKT+pgCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX+2gCl/y4Apf9QAKT+/ACl//8Apf//AKX+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApf//AKX//wCl//8Apf4CAAAAAAAAAAAAAAAAAKX/JACl/9AApf//AKX+/wCl//8Apf//AKT/6gCl/zYAAAAAAAAAAAAAAAAApP4UAKT+pgCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/ACl/lYApf+AAKT+/wCk//8Apf7/AKX//wCl//8Apf7/AKX//wCl/v8Apf7/AKX//wCl/v8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/1wApf//AKX//wCk/v8ApP8CAAAAAAAAAAAAAAAAAKT/IgCl/9AApf//AKT//wCl/v8Apf//AKX/6ACl/zQAAAAAAAAAAAAAAAAApf8UAKT/pgCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/ooApf+oAKX+/wCl/v8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApP//AKT+/wCk//8Apf4CAAAAAAAAAAAAAAAAAKX/IACl/84Apf//AKX//wCl//8Apf//AKX/5ACk/zIAAAAAAAAAAAAAAAAApP4UAKT+pgCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/7YApf/KAKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApf//AKX//wCl//8Apf4CAAAAAAAAAAAAAAAAAKT/HACl/8wApf//AKX+/wCl//8Apf//AKX+3gCl/zAAAAAAAAAAAAAAAAAApf8UAKX/pgCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl/9QApf7aAKT+/wCk//8Apf7/AKX//wCl//8Apf7/AKX//wCl/v8Apf7/AKX//wCl/v8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/1wApf//AKX//wCk/v8ApP8CAAAAAAAAAAAAAAAAAKX/EACl/8QApf//AKT//wCl/v8Apf//AKX/0gCl/yoAAAAAAAAAAAAAAAAApf8UAKT/qACl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/v8Apf//AKT//wCl/+AApf/iAKX+/wCl/v8Apf//AKX//wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACk/lwApP//AKT+/wCk//8Apf4CAAAAAAAAAAAAAAAAAKX/AgCl/4QApf//AKX//wCl//8Apf//AKX/rACl/xYAAAAAAAAAAAAAAAAApP4YAKT+rACl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/uYApf/iAKX//wCk//8Apf//AKX//wCl//8Apf7/AKX//wCk//8Apf7/AKX//wCk//8Apf9oAAAAAAAAAAAAAAAAAAAAAACl/1wApf//AKX//wCl//8Apf8CAAAAAAAAAAAAAAAAAAAAAACl/wYApf+eAKX+1gCl/9oApf+wAKT+LgAAAAAAAAAAAAAAAAAAAAAApP8eAKT/ugCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/+YApf/YAKX+/wCl//8ApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACl/1wApf//AKT+/wCl//8Apf8CAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8KAKT/LgCl/zgApf8UAAAAAAAAAAAAAAAAAAAAAAAAAAAApf4qAKX/1ACl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl/+AApf/GAKX//wCl//8Apf//AKT+/wCl/v8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf9oAAAAAAAAAAAAAAAAAAAAAACl/1wApP//AKX//wCl//8Apf8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf9aAKX/9gCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/tIApf6kAKX//wCk//8Apf//AKX//wCl//8Apf7/AKX//wCk//8Apf7/AKX//wCk//8Apf9oAAAAAAAAAAAAAAAAAAAAAACl/1wApf//AKX//wCl//8Apf8CAAAAAAAAAAAAAAAAAKX/HgCl/0gApP8GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKX/AACl/xwApf/aAKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCk/rIApf96AKX+/wCl//8ApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP9oAAAAAAAAAAAAAAAAAAAAAACl/1wApf//AKT+/wCl//8Apf8CAAAAAAAAAAAAAAAAAKX+KgCl/8YApf9sAKX/EgAAAAAAAAAAAAAAAAAAAAAApf8EAKX/MgCl/6gApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl/4YApf9MAKX/+gCl//8Apf//AKT+/wCl/v8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf/IAKX/pACl/6QApf+kAKX/pACl/sQApP//AKX//wCl//8Apf+kAKX/pACl/6QApf+kAKX+sgCl/+4Apf7uAKX/tACl/2gApf86AKX/NgCk/kgApf+QAKX/1ACl/vgApf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKT+/ACl/1IApf4oAKT+0ACk//8Apf//AKX//wCl//8Apf7/AKX//wCk//8Apf7/AKX//wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKT+1gCl/ywApf8QAKX/nACk/v8ApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP78AKX/1gCl/6QApf+kAKT+2ACl//wApf//AKT+/wCl//8Apf//AKT+/wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX/pACl/xQApf4CAKX+ZACk/u4Apf//AKT+/wCl/v8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf/AAKX/NgCl/xIApf8SAKX/OgCk/sYApP//AKX//wCl//8ApP//AKX//wCl//8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf/yAKX+bACl/wIAAAAAAKX/HACl/sQApf//AKX//wCl//8Apf7/AKX//wCk//8Apf7/AKX//wCk//wApf8yAAAAAAAAAAAAAAAAAAAAAACl/zoApf7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP7KAKX/JAAAAAAAAAAAAKX/AACl/3IApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCk/vgApf8GAAAAAAAAAAAAAAAAAAAAAACl/wYApf/4AKT+/wCl//8Apf//AKT+/wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8Apf9+AKX/AgAAAAAAAAAAAAAAAACl/hIApf/iAKT+/wCl/v8Apf//AKX//wCl//8Apf//AKX//wCl//oApf8UAAAAAAAAAAAAAAAAAAAAAACk/xAApP76AKX//wCl//8ApP//AKX//wCl//8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/v8Apf//AKX+/wCl/uoApP8aAAAAAAAAAAAAAAAAAAAAAAAAAAAApf5cAKX/8ACl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf6KAKT/EACl/wAApf8AAKX/EgCl/44Apf//AKX//wCk//8Apf//AKX//wCk//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX/9ACk/2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf4WAKT+oACl//oApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7sAKX/lgCk/1oApP9aAKX/mgCl//AApf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP76AKT+qgCk/xgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8CAKT+MgCl/9IApf7/AKT+/wCl/v8Apf7/AKT+/wCl/v8ApP//AKX/+gCl/+wApf/sAKX/+gCk//8ApP//AKX//wCk//8ApP//AKX//wCk//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf/YAKT/OgCl/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/zQApf7kAKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCk//8Apf//AKX//wCk//8Apf//AKX//wCk//8Apf//AKX//wCk//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl/+YApf8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf9eAKX/3gCl//8ApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX/4ACl/2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8IAKX/XgCl/uQApf7/AKT+/wCl/v8ApP//AKX//wCk//8ApP//AKX//wCk//8ApP//AKX//wCk//8ApP//AKX//wCk//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf//AKX+/wCl//8Apf/mAKX/YACl/wgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACl/zIApf/QAKX/+gCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKT//wCl//8Apf//AKT//wCl//8Apf//AKT//wCl//8Apf//AKT//wCl//8Apf//AKT++gCl/9QApf86AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8wAKX/nACk/vAApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8ApP7/AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8ApP7yAKX/pgCl/jYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8AAKX+FACl/1YApf/gAKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKX//wCl/uYApf9iAKX/FgCl/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApf8QAKX/bACl/sIApP7uAKX+/ACk//8Apf//AKX//wCk//8Apf//AKX//wCk//8Apf//AKX//wCl//8Apf//AKX//wCl//8Apf//AKT+/wCl//AApP7GAKX/eACl/xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKX/AACl/xoApP5iAKX+mgCk/swApf/4AKX//wCl//8Apf//AKX//wCl//8Apf//AKT+/wCl//8Apf//AKT+/wCl/voApf/QAKX/oACk/2gApf8eAKX/AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApP8CAKX/DgCk/yYApf9GAKX/dACl/6IApf/GAKX/3ACl/+IApf/eAKX/0gCl/8IApf+gAKX/eACl/0oApP8oAKT+EACl/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//+AH//8AAP//AAD//wAA//gAAB//AAD/8AAAD/8AAP/AAAAD/wAA/4AAAAH/AAD/AAAAAP8AAP4AAAAAfwAA/AAAAAA/AAD4AAAAAB8AAPAAAAAADwAA8AAAAAAPAADgB4fAeAcAAOAPx8D4AwAAwA/HwPgDAADAD8fA+AMAAIAPx8D4AQAAgA/HwPgBAACAD8fA+AEAAAAPx8D4AAAAAA/HwPgAAAAAD8fA+AAAAAAPx8D4AAAAAA/HwPgAAAAAD8fh+AAAAAAPx//4AAAAAA/H//gAAAAAD8f/8AAAAIAPx9/gAAAAgAAAB4ABAACAAAAAAAEAAIAAAAAAAQAAwAeAAAADAADAD8AAAAMAAOAPwAAABwAA4A/AAAAHAADwB4AAAA8AAPADAAAADwAA+AAAAAAfAAD8AAAAAD8AAP4AAAAAfwAA/wAAAAD/AAD/gAAAAf8AAP/AAAAD/wAA//AAAA//AAD//AAAP/8AAP//AAD//wAA///wD///AAA=');\n    background-repeat: no-repeat;\n    background-position: top center;\n    margin-left: 30px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.blogIcon {\n    display: inline-block;\n    min-height: 32px;\n    min-width: 32px;\n    background-image: url('data:image/png;base64,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');\n    background-repeat: no-repeat;\n    background-position: top center;\n    margin-left: 30px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.emailIcon {\n    display: inline-block;\n    min-height: 32px;\n    min-width: 32px;\n    background-image: url('data:image/png;base64,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');\n    background-repeat: no-repeat;\n    background-position: top center;\n    margin-left: 30px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.icon-text {\n    margin-top: 32px;\n}\n\n"

/***/ }),

/***/ "./src/app/body/aboutme/aboutme.component.html":
/***/ (function(module, exports) {

module.exports = "  <header class=\"main-header\">\n    <div class=\"logo\"></div>\n  </header>\n\n<div class=\"about-me\">\n  <div class=\"pic2\"></div>\n  <div class=\"content\">\n      <section class=\"section-dark\">\n\n        <article class=\"my-story\">\n          <h1>Hi, I'm John</h1>\n          <hr>\n          <p>I'm a software engineer and freelance web and mobile app developer passionate about building sophisticated yet accessible programs to meet the needs of the end user. Through obtaining a bachelors in literature, a degree in military science at Georgetown, and serving as a Army engineer and an Army Ranger for four years, I gained extensive analytical and project management skills, and an ability to solve technical challenges with precision. Having studied software engineering both academically and as an obsession, I left the military and moved to Silicon Valley to practice development at the highest level. If you need a developer for your project, I would love to hear about it.</p>\n          <hr>\n        </article>\n\n        <div class=\"row center\">\n\n          <div class=\"col m3 s6 btn_links\">\n            <div class=\"githubIcon\"><br>\n              <a [href]=\"userInfo['githubAccount']\" class=\"icon-github\" target=\"_blank\"><br><br>Go To My Github</a>\n            </div>\n            <div class=\"linkedInIcon\"><br>\n              <a [href]=\"userInfo['linkedIn']\" class=\"icon-linkedIn\" target=\"_blank\"><br><br>Go To My LinkedIn</a>\n            </div>\n            <div class=\"blogIcon\"><br>\n              <a [href]=\"userInfo['AmericanElement']\" class=\"icon-blog\" target=\"_blank\"><br><br>Go To My Blog/Podcast</a>\n            </div>\n            <div class=\"emailIcon\"><br>\n               <a [href]=\"userInfo['Email']\" class=\"icon-email\" target=\"_blank\"><br><br>Send Me An Email</a>\n            </div>                    \n          </div>\n\n        </div>\n\n      </section>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/body/aboutme/aboutme.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/services/http.service.ts");
var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent(_httpService) {
        this._httpService = _httpService;
    }
    AboutmeComponent.prototype.ngOnInit = function () {
        this.userInfo = this._httpService.getProjectInfo();
    };
    AboutmeComponent = __decorate([
        core_1.Component({
            selector: 'app-aboutme',
            template: __webpack_require__("./src/app/body/aboutme/aboutme.component.html"),
            styles: [__webpack_require__("./src/app/body/aboutme/aboutme.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AboutmeComponent);
    return AboutmeComponent;
}());
exports.AboutmeComponent = AboutmeComponent;


/***/ }),

/***/ "./src/app/body/body-about-us/body-about-us.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n    min-height: 500px;\n    margin-left: 2%;\n    margin-top: 6%;\n}\n.about-cont-title {\n    padding-bottom: 40px;\n    margin-left: 20%;\n    color: black;\n    font-style: normal;\n    font-size: 40px;\n    padding-top: 0px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: block;\n  }\n.about-cont-class {\n    margin-left: 10%;\n}"

/***/ }),

/***/ "./src/app/body/body-about-us/body-about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n    <head>\n    </head>\n    <body>\n\n      <div class=\"about-cont-class\">\n          <div class=\"about-cont-title\">\n              <h1>{{title}}</h1>\n          </div>\n          <br>\n          <div class=\"about-summary\">\n            <h2>{{summary}}</h2>\n          </div>\n          <br>\n          <div class=\"about-founding\">\n            <h2>{{founding}}</h2>\n          </div>\n      </div>\n    </body>\n</html>\n"

/***/ }),

/***/ "./src/app/body/body-about-us/body-about-us.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BodyAboutUsComponent = /** @class */ (function () {
    function BodyAboutUsComponent() {
        this.title = "A Service-Disabled Veteran Owned Small Business (SDVOSB)";
        this.summary = "Sapper Coding was founded in Silicon Valley to train military Veterans to provide the highest caliber of web and mobile-app services through the rigorous selection, training, and management of our nations brightest service men and women in the heart of Silicon Valley.";
        this.founding = "Sapper Coding was founded by Loy O'Kelley (CPT. Ret.) and John Bradley (CPT. Ret.). In the Army, 'Sappers' are elite combat engineers, technical experts who abide by the Sapper Creed, which includes the stanza: 'The cutting edge of my countries sword.' As a Veteran of both Army Sapper and Army Ranger School, and as a veteran developer, John Bradley applies the Sapper and Ranger standard to training and leading the best and brightest Veterans into the tech industry. As a decorated combat veteran & coder who earned an MBA & M.S. in Finance while in uniform, Loy O'Kelley ensures that every Sapper Coder is trained for professional and financial longevity in the technology industry.";
    }
    BodyAboutUsComponent.prototype.ngOnInit = function () {
    };
    BodyAboutUsComponent = __decorate([
        core_1.Component({
            selector: 'app-body-about-us',
            template: __webpack_require__("./src/app/body/body-about-us/body-about-us.component.html"),
            styles: [__webpack_require__("./src/app/body/body-about-us/body-about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyAboutUsComponent);
    return BodyAboutUsComponent;
}());
exports.BodyAboutUsComponent = BodyAboutUsComponent;


/***/ }),

/***/ "./src/app/body/body-admin/body-admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/body-admin/body-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main__body\">\n  <div class=\"container\">\n\n    <div class=\"login__page\">\n      <div class=\"row\">\n          <div class=\"card col-md-4 col-md-offset-4\">\n            <div class=\"login__card\">\n              <div class=\"card-block\">\n\n                  <form name=\"userform\" method=\"post\" #formCtrl=\"ngForm\">\n                    <h3 align=\"center\">Login Form</h3>\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email\" required>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputPassword1\">Password</label>\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Password\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button type=\"buton\" class=\"btn btn-primary btn-block\" style=\"margin-bottom: 20px\" (click)=\"signInWithEmail()\" [disabled]=\"formCtrl.form.invalid\">\n                          Login with Email\n                        </button>\n                    </div>\n                  </form>\n\n              </div>\n            </div>\n          </div>\n\n      </div>\n    </div> <!-- end card -->\n\n  </div>  <!-- end container -->\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/body/body-admin/body-admin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BodyAdminComponent = /** @class */ (function () {
    function BodyAdminComponent() {
    }
    BodyAdminComponent.prototype.ngOnInit = function () {
    };
    BodyAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-body-admin',
            template: __webpack_require__("./src/app/body/body-admin/body-admin.component.html"),
            styles: [__webpack_require__("./src/app/body/body-admin/body-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyAdminComponent);
    return BodyAdminComponent;
}());
exports.BodyAdminComponent = BodyAdminComponent;


/***/ }),

/***/ "./src/app/body/body-blog/body-blog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/body-blog/body-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  body-blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/body/body-blog/body-blog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BodyBlogComponent = /** @class */ (function () {
    function BodyBlogComponent() {
    }
    BodyBlogComponent.prototype.ngOnInit = function () {
    };
    BodyBlogComponent = __decorate([
        core_1.Component({
            selector: 'app-body-blog',
            template: __webpack_require__("./src/app/body/body-blog/body-blog.component.html"),
            styles: [__webpack_require__("./src/app/body/body-blog/body-blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyBlogComponent);
    return BodyBlogComponent;
}());
exports.BodyBlogComponent = BodyBlogComponent;


/***/ }),

/***/ "./src/app/body/body-contact/body-contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/body-contact/body-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  body-contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/body/body-contact/body-contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BodyContactComponent = /** @class */ (function () {
    function BodyContactComponent() {
    }
    BodyContactComponent.prototype.ngOnInit = function () {
    };
    BodyContactComponent = __decorate([
        core_1.Component({
            selector: 'app-body-contact',
            template: __webpack_require__("./src/app/body/body-contact/body-contact.component.html"),
            styles: [__webpack_require__("./src/app/body/body-contact/body-contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyContactComponent);
    return BodyContactComponent;
}());
exports.BodyContactComponent = BodyContactComponent;


/***/ }),

/***/ "./src/app/body/body-custom-apps/body-custom-apps.component.css":
/***/ (function(module, exports) {

module.exports = ".web-cont-class {\n    padding-top: 2vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.left-content {\n    width: 66%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.web-form {\n    display: inline-block;\n    width:30%\n}\n.web-col1 {\nwidth: 30vw;\nmargin-right: 1vw;\n}\n.web-col2 {\nwidth: 30vw;\nmargin-right: 1vw;\n}"

/***/ }),

/***/ "./src/app/body/body-custom-apps/body-custom-apps.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n    <head>\n    </head>\n    <body>\n      <div class=\"web-cont-class\">\n          <div class=\"left-content\">\n            <div class=\"web-col1\">\n              <h2>{{title1}}</h2>\n              <br><br>\n              <p>{{text1a}}</p>\n              <br>\n              <p>{{text1b}}</p>\n              <br>\n              <p>{{text1c}}</p>\n            </div>\n            <br>\n            <div class=\"web-col2\">\n              <h2>{{title2}}</h2>\n              <br><br>\n              <p>{{text2a}}</p>\n              <br>\n              <p>{{text2b}}</p>\n            </div>\n          </div>\n          <div class=\"web-form\">\n              <app-form-web></app-form-web>\n          </div>\n      </div>\n      <app-resume></app-resume>\n    </body>\n</html>\n"

/***/ }),

/***/ "./src/app/body/body-custom-apps/body-custom-apps.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BodyCustomAppsComponent = /** @class */ (function () {
    function BodyCustomAppsComponent() {
        this.title1 = "Simply tell us about your business and we'll design a website to achieve your goals!";
        this.text1a = "Track your progress and set your goals.";
        this.text1b = "Receive weekly analytics reports, Facebook insights, and SEO reports to ensure your site and Internet marketing activities are performing for you.";
        this.text1c = "Our sappers will instruct your team to understand our reports in a way that will allow you to take informed action.";
        this.title2 = "Save Time & Money. Get Results, like traffic, leads, and sales through your small business website.";
        this.text2a = "Save time and save money while working with an experienced Sapper Team Leader every step of the way during your website design process.";
        this.text2b = "Your Sapper Team Leader can deliver services far beyond the creation of your web site. We help get your web site seen and performing to provide clicks, leads, and sales.";
    }
    BodyCustomAppsComponent.prototype.ngOnInit = function () {
    };
    BodyCustomAppsComponent = __decorate([
        core_1.Component({
            selector: 'app-body-custom-apps',
            template: __webpack_require__("./src/app/body/body-custom-apps/body-custom-apps.component.html"),
            styles: [__webpack_require__("./src/app/body/body-custom-apps/body-custom-apps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyCustomAppsComponent);
    return BodyCustomAppsComponent;
}());
exports.BodyCustomAppsComponent = BodyCustomAppsComponent;


/***/ }),

/***/ "./src/app/body/body-learning/body-learning.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/body-learning/body-learning.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main__body\">\n  <p>\n    You are signed in to the Learning Platform as {{ authService.getCurrentUserDisplayName() }}\n  </p>\n  <a routerLink='/home'>Go Home</a>\n</div>\n"

/***/ }),

/***/ "./src/app/body/body-learning/body-learning.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var BodyLearningComponent = /** @class */ (function () {
    function BodyLearningComponent(authService) {
        this.authService = authService;
        this.user = {
            email: '',
            password: ''
        };
    }
    BodyLearningComponent.prototype.ngOnInit = function () { };
    BodyLearningComponent = __decorate([
        core_1.Component({
            selector: 'app-body-learning',
            template: __webpack_require__("./src/app/body/body-learning/body-learning.component.html"),
            styles: [__webpack_require__("./src/app/body/body-learning/body-learning.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], BodyLearningComponent);
    return BodyLearningComponent;
}());
exports.BodyLearningComponent = BodyLearningComponent;


/***/ }),

/***/ "./src/app/body/body-marketing/body-marketing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/body-marketing/body-marketing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  body-marketing works!\n</p>\n"

/***/ }),

/***/ "./src/app/body/body-marketing/body-marketing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BodyMarketingComponent = /** @class */ (function () {
    function BodyMarketingComponent() {
    }
    BodyMarketingComponent.prototype.ngOnInit = function () {
    };
    BodyMarketingComponent = __decorate([
        core_1.Component({
            selector: 'app-body-marketing',
            template: __webpack_require__("./src/app/body/body-marketing/body-marketing.component.html"),
            styles: [__webpack_require__("./src/app/body/body-marketing/body-marketing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyMarketingComponent);
    return BodyMarketingComponent;
}());
exports.BodyMarketingComponent = BodyMarketingComponent;


/***/ }),

/***/ "./src/app/body/body-web/body-web.component.css":
/***/ (function(module, exports) {

module.exports = ".web-cont-class {\n    padding-top: 2vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.left-content {\n    width: 66%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.web-form {\n    display: inline-block;\n    width:30%\n}\n.web-col1 {\nwidth: 30vw;\nmargin-right: 1vw;\n}\n.web-col2 {\nwidth: 30vw;\nmargin-right: 1vw;\n}"

/***/ }),

/***/ "./src/app/body/body-web/body-web.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n    <head>\n    </head>\n    <body>\n\n      <div class=\"web-cont-class\">\n          <div class=\"left-content\">\n            <div class=\"web-col1\">\n              <h2>{{title1}}</h2>\n              <br><br>\n              <p>{{text1a}}</p>\n              <br>\n              <p>{{text1b}}</p>\n              <br>\n              <p>{{text1c}}</p>\n            </div>\n            <br>\n            <div class=\"web-col2\">\n              <h2>{{title2}}</h2>\n              <br><br>\n              <p>{{text2a}}</p>\n              <br>\n              <p>{{text2b}}</p>\n            </div>\n          </div>\n          <div class=\"web-form\">\n              <app-form-web></app-form-web>\n          </div>\n      </div>\n      <app-resume></app-resume>\n    </body>\n</html>\n"

/***/ }),

/***/ "./src/app/body/body-web/body-web.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BodyWebComponent = /** @class */ (function () {
    function BodyWebComponent() {
        this.title1 = "Simply tell us about your business and we'll design a website to achieve your goals!";
        this.text1a = "Track your progress and set your goals.";
        this.text1b = "Receive weekly analytics reports, Facebook insights, and SEO reports to ensure your site and Internet marketing activities are performing for you.";
        this.text1c = "Our sappers will instruct your team to understand our reports in a way that will allow you to take informed action.";
        this.title2 = "Save Time & Money. Get Results, like traffic, leads, and sales through your small business website.";
        this.text2a = "Save time and save money while working with an experienced Sapper Team Leader every step of the way during your website design process.";
        this.text2b = "Your Sapper Team Leader can deliver services far beyond the creation of your web site. We help get your web site seen and performing to provide clicks, leads, and sales.";
        // this.text2c =
        // this.text2d =
    }
    BodyWebComponent.prototype.ngOnInit = function () {
    };
    BodyWebComponent = __decorate([
        core_1.Component({
            selector: 'app-body-web',
            template: __webpack_require__("./src/app/body/body-web/body-web.component.html"),
            styles: [__webpack_require__("./src/app/body/body-web/body-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyWebComponent);
    return BodyWebComponent;
}());
exports.BodyWebComponent = BodyWebComponent;


/***/ }),

/***/ "./src/app/body/forms/footer-form/footer-form.component.css":
/***/ (function(module, exports) {

module.exports = ".form {\n    text-shadow: none;\n    color: black;\n}\n.card {\n    width: 100%;\n    margin-left: 4%;\n}\n.form-group {\n    text-align: left;\n}\n\n\n"

/***/ }),

/***/ "./src/app/body/forms/footer-form/footer-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">How can we help?</h4>\n      <br><br>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"firstName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Email</label>\n          <input type=\"text\" class=\"form-control\" id=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phoneNumber\">Phone Number</label>\n          <input type=\"text\" class=\"form-control\" id=\"phoneNumber\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phoneNumber\">How can we help?</label>\n          <textarea name=\"message\" rows=\"10\" cols=\"30\" class=\"form-control\" id=\"message\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/body/forms/footer-form/footer-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterFormComponent = /** @class */ (function () {
    function FooterFormComponent() {
    }
    FooterFormComponent.prototype.ngOnInit = function () {
    };
    FooterFormComponent = __decorate([
        core_1.Component({
            selector: 'app-footer-form',
            template: __webpack_require__("./src/app/body/forms/footer-form/footer-form.component.html"),
            styles: [__webpack_require__("./src/app/body/forms/footer-form/footer-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterFormComponent);
    return FooterFormComponent;
}());
exports.FooterFormComponent = FooterFormComponent;


/***/ }),

/***/ "./src/app/body/forms/form-web/form-web.component.css":
/***/ (function(module, exports) {

module.exports = ".form-request-work {\n    background-color: black;\n    width: 22rem;\n    min-height: 12rem;\n  }\n  body {\n    width: 25%;\n    margin-left: 36%;\n  \n  }\n"

/***/ }),

/***/ "./src/app/body/forms/form-web/form-web.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">How can we help?</h4>\n      <br><br>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"firstName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Email</label>\n          <input type=\"text\" class=\"form-control\" id=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phoneNumber\">Phone Number</label>\n          <input type=\"text\" class=\"form-control\" id=\"phoneNumber\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phoneNumber\">Tell us about your project?</label>\n          <textarea name=\"message\" rows=\"10\" cols=\"30\" class=\"form-control\" id=\"message\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/body/forms/form-web/form-web.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FormWebComponent = /** @class */ (function () {
    function FormWebComponent() {
    }
    FormWebComponent.prototype.ngOnInit = function () {
    };
    FormWebComponent = __decorate([
        core_1.Component({
            selector: 'app-form-web',
            template: __webpack_require__("./src/app/body/forms/form-web/form-web.component.html"),
            styles: [__webpack_require__("./src/app/body/forms/form-web/form-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormWebComponent);
    return FormWebComponent;
}());
exports.FormWebComponent = FormWebComponent;


/***/ }),

/***/ "./src/app/body/forms/form/form.component.css":
/***/ (function(module, exports) {

module.exports = ".form-request-work {\n  background-color: black;\n  width: 22rem;\n  min-height: 12rem;\n}\nbody {\n  width: 25%;\n  margin-left: 36%;\n\n}\n"

/***/ }),

/***/ "./src/app/body/forms/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n  </body>\n    <app-work-form-content></app-work-form-content>\n</html>\n"

/***/ }),

/***/ "./src/app/body/forms/form/form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/services/http.service.ts");
var FormComponent = /** @class */ (function () {
    function FormComponent(_httpService) {
        this._httpService = _httpService;
        this.newContact = { firstName: 'John', lastName: 'Bradley' };
    }
    FormComponent.prototype.ngOnInit = function () {
        console.log("onInit");
        console.log("newContact: ", this._httpService.newContact);
    };
    FormComponent.prototype.onSubmit = function () {
        var observable = this._httpService.newContact(this.newContact);
        observable.subscribe(function (data) {
        });
        console.log("onSubmit");
        this.newContact = '';
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'app-form',
            template: __webpack_require__("./src/app/body/forms/form/form.component.html"),
            styles: [__webpack_require__("./src/app/body/forms/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;


/***/ }),

/***/ "./src/app/body/forms/work-form-content/work-form-content.component.css":
/***/ (function(module, exports) {

module.exports = ".btn {\n    text-shadow: none;\n}\n.form {\n    text-shadow: none;\n}\n.card {\n    width: 40%;\n    margin-left: 30%;\n}\n.form-group {\n    text-align: left;\n}\n.btn {\n    text-shadow: none;\n    border-width: 0.1vw;\n    border-color: white;\n}\na:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\n    color: white;\n    text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/body/forms/work-form-content/work-form-content.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n  </head>\n  <body class=\"container m-t-1\">      \n    </div>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/body/forms/work-form-content/work-form-content.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var WorkFormContentComponent = /** @class */ (function () {
    function WorkFormContentComponent() {
        this.projects = [
            {
                title: "Request A Quote",
                summary: "Fullstack Web Development",
                hide: true
            },
        ];
    }
    WorkFormContentComponent.prototype.ngOnInit = function () {
    };
    WorkFormContentComponent.prototype.toggle = function (project) {
        project.hide = !project.hide;
    };
    WorkFormContentComponent = __decorate([
        core_1.Component({
            selector: 'app-work-form-content',
            template: __webpack_require__("./src/app/body/forms/work-form-content/work-form-content.component.html"),
            styles: [__webpack_require__("./src/app/body/forms/work-form-content/work-form-content.component.css")],
            template: "\n  <div class=\"form\"\n    *ngFor=\"let project of projects\">\n    <div class=\"card card-block\" [hidden]=\"project.hide\">\n      <h4 class=\"card-title\" [hidden]=\"project.hide\">{{project.title}}</h4>\n      <br><br>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"firstName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Email</label>\n          <input type=\"text\" class=\"form-control\" id=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phoneNumber\">Phone Number</label>\n          <input type=\"text\" class=\"form-control\" id=\"phoneNumber\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      </form>\n    </div>\n    <a class=\"btn btn-primary\" (click)=\"toggle(project)\">Request a quote from a Sapper</a>\n    <br><br>\n  </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], WorkFormContentComponent);
    return WorkFormContentComponent;
}());
exports.WorkFormContentComponent = WorkFormContentComponent;


/***/ }),

/***/ "./src/app/body/map/map.component.css":
/***/ (function(module, exports) {

module.exports = ".map-container {\n    background-color: blue;\n    width: 24vw;\n    height: 20vw;\n    margin-left: 24%\n}\nagm-map {\n    height: 380px;\n  }"

/***/ }),

/***/ "./src/app/body/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n  </agm-map>\n</div>\n"

/***/ }),

/***/ "./src/app/body/map/map.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.lat = 37.330474;
        this.lng = -121.873862;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'app-map',
            template: __webpack_require__("./src/app/body/map/map.component.html"),
            styles: [__webpack_require__("./src/app/body/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;


/***/ }),

/***/ "./src/app/body/portfolio-container/portfolio-container.component.css":
/***/ (function(module, exports) {

module.exports = "Pitch Element\n.page_data_carrier {\n    position: relative;\n    z-index: 1000;\n}\n.upper_container {\n    position: relative;\n    background: #272634;\n    text-align: center;\n    padding: 80px;\n    padding-top: 48px;\n    color: #fff;\n}\n.container {\n    width: 100%;\n    padding: 0px;\n    margin: 0px auto;\n}\nh3 {\n    margin-bottom: 21px;\n}\nh6 {\n    width: 70%;\n    display: inline-block;\n    margin-bottom: 50px;\n}\n#stack_list {\n    text-align: center;\n    position: absolute;\n    bottom: -23px;\n    width: 100%;\n    left: 0;\n    z-index: 500;\n}\n.list-unstyled {\n    padding-left: 0;\n    list-style: none;\n}\n.stack_item > div > span.icon_block .stack_icon {\n    display: block;\n    cursor: pointer;\n    height: 100px;\n    width: 100px;\n    background-position: 0px -4px;\n    background-image: url(https://cutecdn.codingdojo.com/new_design_image/global/sprite_images/stacks_iconography.png);\n    -webkit-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    position: relative;\n}\n.stack_item {\n    margin-right: 34px;\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 100%;\n    height: 100px;\n    width: 100px;\n    cursor: pointer;\n}\n.python > div > span.icon_block .stack_icon {\n    background-position: 0px 1px;\n    background-image: url('python100.2281699ff7641902cd30.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    \n}\n.mean > div > span.icon_block .stack_icon {\n    background-position: 0px 1px;\n    background-image: url('data:image/png;base64,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');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.django > div > span.icon_block .stack_icon {\n    background-position: 0px 1px;\n    background-image: url('data:image/png;base64,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');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.django > div > span.icon_block .stack_icon {\n    background-position: 0px 1px;\n    background-image: url('data:image/png;base64,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');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.angular > div > span.icon_block .stack_icon {\n    background-position: 0px 1px;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAgAElEQVR4XtVdB3iT1fr/ZTRpkzRtuhelpdAWioWWsorsIVcFBQEXKCqggoDIEmTLkr0RUBCVqyJ6RRmybEUo0MVs2RS66J5p05Hxf96vfL1p+yX50qH3f56nT+DJ2b+8553nPQL8PymZ8fGyygdpgTkXY9oV37rtpcnMcRTa2drK3F09jJdQkVeQo1WXldu6OZWo2gdnOnfpet8x0P+Oc48eJf8flir4X5xk/sWLyrQTZ3rmXLjUV2Rn101bqm5XUVDgA4NB2Nj5SlSqDImD8o5eUxGvCu/0p+u/Bse07t27sLH9tVS7/wlADAaD4M7WXaGPjh8fKRDbDNBkZXU1aLXSllo0069IVC1zd78KgyHKs2/vQ8n+PgljxozRteiYPDr/RwFJPXzY6/43379aVVI2tiI3pxOAf2w+ti7ONyVK5QG/UcMP+L/66kMee9ciVf72DSBquPLx0p55SdfmarKyhxp0OkmLrKyRnQpEQq2tq1uUQ2DA+ke9up/+u6nmbwPk4MGDojYXEgcW3Eyeq8nJ7dcUftDIvba2mUHq7BSvDApa5TB5wtGQkJAqaztoTP2/BZDEmXP75N1IXqHJye31Tx5LjdkgaiN1Ul1zCApe0MPN4ahgyRJ9Y/vh065FAbm3c6fbo9+jlpdlZLzZEkeTQCyGrYszBMIa4ctgMKAyLx/66mo+a7eujlCok3t5/uLTp8fs4NmzU6xrzL92iwASHx9vo9m2a1zJ3XsrtOWaOnoC/6nV1LSxt4fqqRAo27WForUv5K1bQeHrC6mzk9muqopLoH74EGWp6VA/SkXp/QcovH4DlQVNk3RFEkmxws93RcD0ydtaRUZqrF2PpfrNDkjSmu0ej8+e2VqWkflSY44noUQCl4hwuHTrCpeIMCgD20EoFltaB6/vDTodSh+kIC8uAblxCci7FAddRQWvtvUr2bq7RXl37zmp49J59xrVgYlGzQpI7EfzB+bGxe7WqtVtrJqkQADH9sFoNexf8Bw0ELYWfv1W9W2mclVJCR6fiUbakWMovHYDBJg1RWgrzXHr0vmDbi6qn5qLtzQLIElJSZKcxSvmlKamzTdUV9vxXZTQxgaeA/qh7fixcAgK5NusReqVpjzEgwM/IP3YcegqKvmPIRJVK3x9P/d4ZcT8kDFj1PwbctdsMiBJBw8qsg4c2qBOTZ3A94gS2UrhPXQIAsa9Bnt/v6auoVnba7KycP/A90g9fARadRnvvmXeXr+69xo0PnTe5CYxqSYBcnnjRsf8qPN7ytLSR/GduWvP7giZMRXKtgF8m/wj9cofP0by5h3IPP0HoOcn6dq6uUWpQsNf67Z2SVZjJ91oQK7PX+H++PKlf2uycgbwGdzO0wMdpk2G16ABEIhEfJr843VIjM69GIukDVsYKY1PsXV2inftFDYqfP2KR3zq16/TKEBuzlvpnJZ44RCjcVsqAgG8hw5Gx1kfQqpSWar9P/m9tqwMt3buQcrBQzBoLTN+icrxsioidHiPNWvSrV2Q1YDE79rlUHjk5P7y9IwXLA0mVsjRYfoH8H3h+WYTXS2N2VLfE7U8PhOF62s2MMqnpWLr5vaXX88+I4OWzMqzVNf4e6sASYuJsbu9av3OsvSMNy0NYh/QBmHLFsGxfZClqo3+Xq/XM9o5fVIRCoUQCATMZ0uVsrR0JC5YgsLrSRaHkHl7H3EZ+PS4sBkziixWflKBNyBRUVFi3cYd68rS0qZZkqZIs+6yejlknk1S0jnXQJuv0+mg1WqZ7+nfLCAEBv2JxeI6n80NUFVRERIXLkPO+QsW91nu5fVVwKyp7/v3789LA+UNyF8TJr9RePXabkuOI7dePRH+6SJIHB0tTpZvBZYSqqqqGIogEKqrq5k/+ndlZSVEIlEtCDY2NpBIJAwwBAZ919zUU12qxtWVa5B54pT5ZQiFOvs2recM+PG7DXzWywuQxLkLO2X+efZ3XWWl2Z+8W2QPdFm1jLE/NUchKqA/AoE+afMrKioYAOizorIS+qxs6OMSUV5VBVFYKORk55LZQSqVMn8EDAFEfyz1sAA1dY6kQN5YtwmPfv7FbFdCiaTIPbL7i902rv3T0pgWAUna8IVT+vH//FqRl0+mc5PFqXMouq5bTaZqS2Oa/Z7deNp89jgiAIgaysrKGGAqs3NguJ4M2wtxkD5Mg1anQ0p1BapggM7bEw4R4bDtEgZZKx/Y2dnB1taWAYQ+iWpYQIz/3dhJa8vLcXnxcobhmys2Svskj+5hQ8LXrMk0V88sIOTdOzN89Nqy9PSZ5johA2D3TWtg59E4nkEbT1RAm04bTkcUHU/07/LycoYiKgsKoLt1B/LYy7C5dQ/Ccg0EohrmXWUw1AICgYDs8DCIRLDx9oKwWziUnUIh9/GGRCqFTCZjKIfAIOohcFhgiILo/9YWsiwnzFvI6Czmiszb62vxzKnv9O/fv4YBchSzgFz6cFbPnEtxx/QVlSYZAoHQfet6KAOssycaM2f6N20+gUDgECXQvyvLyqC/ex/CC3GQJd+BuLik1vdhvJYGgLBfGgw14IjFEPu3hl1EOOw6h0Lu6cGAQeCwoNAn/VGhT2ulNU1WNi5+MIOxJpvcbBsbjVtY2Kgeu7YcsxqQq1+fkGd9u+U/Fbn5g001JptU2KdL4DXQsn7I9lH/SCKqYDb/CV+oLCuHLjMToksJkF69AZusXGZzzBWTgNRvRGIy8ZMAf8i6dYEk9CnYu7sxwLB8hqiHqIT+T5+ssMCHcvLiExH70Vxo1aZtjDZK+/iQl0cMaT2Z2+ZlcqV/vj7+7aJbd3ZDrzdJw23fegPtp7zL+as13gsuEAgI5iiqrISmvBzl2TmQxF2GTeJVyNIyITAAAqFFFsd9ZPE4c+jMEEtsIG4bALue3SAnynF0rBUEWKGAPdKMxWlz4Nz/5t9I2rzdnP3LoGwbML//jwdW8z6ybi/f4H3vxLE/tGq1SZu4c5cwdNu4FjYKOefyjaUjOpJYMZUBQKNhpCRNYRGEiVdgd/k6bG/fh5COmEYU3hRiqm8aVyqBMDgQ9pE9IAvtCJm9fa2kxkprxmI0C1T9LnWVlUj8ZDEe/2FaoBLLZenuPSP7Raxdfr9+e86f4J+vvTG36OYdTgSpA7Fcju6b18E5vHODJbI6AjFp2nRGKqqsZD6JN2jUaoiSbzN8QUGf1Sb5G29oDPYKPNBWory4GAxTb0LR63QQ2NpC2vkpiCPC4Ny5E6RyeR1wWIGAdBuWBxkPWXznLi5Mno4qM+5iZduA1f1/PDDPIiBEHXePH4nWlZe3NbUu/1dGM8ZCNriA6hEVsNIR8QRWXyBqoI0ypDyCzaV42F5NhrhEXSshNWHvmKYGvQH2Lw1DWSsvXN+4FQaepnK+41bb2kIeEQZ5twhI2wVAYW/PiM/0x/IeVtcx7vP27r24/fkek8OYopIGPydL1CHz8UHkrq0NzCKslERiKoFQUliI6oePIIy/AumV67DJyYegkUeSuc0T2ErhtmMD4OKEmIlTUJ6ewXev+ddj5+3oAGl4Z8i7doFD+yAoHR2hUChqATLmLVVFxbgwZTqKb942OQ4XldQBJHnXLs+Ubw5Ga8vKTPKO0Hmz4Td6ZINBiEcQGCVZWdAcOwX9pXjYpGVC+MTmxH/1/GsSddj26wWP5QshlEpxc9cXuPv5F00+tszO4Ak4Ync3KHr1gO+oEVB5edUqn8Z2s/RjJ5C4aJlJBi+Wy9Pcnu7dr+vqJbXOljqA/DXundEFScnfm4oqtG8bwFBHfb8GHVV0RBGPKLpwCYJVmyBq5qODc5NEIrivWw5ZZHfm6+KHj3Dp/WmoyM7hj2oTahLvartiCTzaB9daBIwBIXsXUUnRjWSToziFdvyg9/4vtrMVagExLFkiPHk+/oeKvDyT7lhT1MHamEpKSlCSeAWitVsh0vAybjZ6Oxjq6NwR7ps+g0guq+3nxsatePDVt8ATLb7RA/BoqHdSwe/TRfDw94NSqWSopL5l2RKV2Cjto9svmf8v1hpcC0jC4sVts6LORWtLy7y55qLw90Ov3ds5A9QIEIZvlJQg/9ZtSFdtgk1JKY8lNb6KQSCA8yez4DDsX3U6KbhzF7HvTQWd4S1ayOrs442AxfPg5uNjEhCGSt6fhqLkm5zTEUolpQq/1gP6f/9NPFWoBeTs+IkTC69e321qEW1efwUdZ07n/NqYQnJTHsJ27VbYZDbaz29xH4k6JP6+8Ny9BSJHhzr1DVotEpevRsbhIy3OSwxhoWgzbTI8vL0ZiYsMmVy+l7v7vsbNrTtNrsuxQ/vlfQ/sW1gLCDmfNItXHK0uVQ/hakUmkh7bN8M5jK5wNCysuFtcXIystDRg3TYoU1ItbmxjK5D66DhlApzeeI2zi7wbSYh9dyrIEttUvcTUHEm8FvbvjXbvTYSLs3OttMVVv+TefcRMmmKSasV2ssvBS+f1Dxg8uJihkORt21o//PFwdHVJKWeQlGNIe0Tu2gax7L9ntfHABAgpf6WlpcjLy4Ng2x7YJlxt7H5bbCdydYb755sg9eE8XUHacsKiZcg6eabFACGnsXz4c/Ab+wqcVCrI5XKGh3D+YLVaxH44GzkxFzm/F9nZFTkEB/brvXfXVQaQ6NGvDi5JeXTMoNNzBtEGvfsOgt6lODjThaQsEntzc3NR+fV3UJyIbjblz3hUg04Ph7Fj4PzhZLPzyb4Yi7gPZ0Nf1TLXOggQ24nj0XbwQKhUKoaHkEHSVEk9/BuuLF1p8nvnzqHjn963ez8DyF/jJqwquHHjY67aArEIPbZthGu3rrwBKTnyO5z//TOobXMXgVwGj23rYNsh2GzXVeXliJ35MQrIR9FEcwrXQDqREKqPpqFNr55wcHBgKIT4hyn/ffHtO8yxRUyeq8h9vL8a9NtPbwkoLjdl4gendBpNH86KrXwQuXs77NzdzG4AKYYkadGRVXTmTzh+8U2zXxgkZi4bOhBuS+fziixJPXkaVz9ZDKKq5i7VdnbwWjgHPiEhDHWQxm7OCkz87PzEKSi+eYtzKmKZ/EqH5Qv6C25u3OmX8svPxD9ac9WkoAUyJBrbrbjqsZp6YWEhChIuQ7lxJ0TNYDg0HktAVxU2roIiIqzOFLRPrhSI653hlWo1Lr4/DcWkmDUzleidneC5YC582gYwFEISliWfybWVa/Dw0H+4AZHL8ly7duon+GP0a13K0jOi9RWVCq6aIR9NQ8DYVy3+wMiWRRRSVFSE3Os3oCDRt7z5lEOiDmmPCHiu/RTCehtfeOoP5D1IQcDEtxpQzoMff8aN1esYz2GzFYoF820Fv0Ufw83TsxYQS+FGGSdOIWHeIu5pCIU6mcppkODMC2OGqVNTfzU12Z47NsO1RzeLa2GVQxJ98+7eY3QRSV6BxXZ8K+gFAjh9+glUg+uGEpPekb5gGdKu30DIzk1w8PWt02VVcTHOv/0e6LpBsxUCJOwpBM78EC6urrUiryVAKLju/KQp0FdyX3dwiQifJIiZNGV2blzCGq7JUjhP5J7tcAhsZ3EtJPoShajVamQ/fAjJhh1MREhzFWFgAHy2rYPIoa4iqHmQgoz3P8K9nCz4T5mEoAlvNRjy9r6vcXvLjmY7tlgdpO27E+Dq4mJWBzGeDEU9EiCmbG2qkA4bBKdfHPNl2aPUt5vC0Kkta2AkXSQnMxPYuhuKJNOmZ2uAIqasmjsdqtEj6jSjMQt27UX+vm+RUl0Jm1be6PH5Vsi9POvUK8/ORsyEyTWm+WbgJXqDAdIxI9Bu9EuMyMtGsliikOrSUoaxl9y5a4KPyI8IjvTse1xXUTmUq4Zjxw7otXsHSFPnU0gXIQrJz8+H9ov9kJ3lVoT49GVcR+zlAY+dG2Hj4V6nqa6oGI/fn4Gy+ylIqdaANI72M6ejHQfPS9qxC/d376UAYGuHb1CfZDbFO2+g9ZBBcHlCIeZ0ELYD8qJSZEruhUuccxBKpRcFh7tEnoVe35urBl28jPx8C+8F0JFFJngCRHPoFyh/+Z13oIKpQYiZK998BU6TJzZg2EVnolGwaCVzDZpcuBUGPRRt/DmNoCX3HzBu1cpcq4LROadFkSsOM6bAr0d3hqGTyMsHEOqMYoLTjx7nphCZ/DJRyCVdRSUn1/Yc0JeJRuRTWBcuY/HNz0fJyTNQ7fu+ydq60EEJzz1bIGldl1lrKyuRPW8Jqs5fqgmU01LkIpjLQMGzPkS7lxt6Ea6uXotH3x9qMpVUy2Xw/GQOfDq0h5OTEy+Rl93Da6vW4uGPP3NuqY29fbLgaO+BV7TqMk6rYathzyJsKWOE5FVIF6Fji5TD0rhEKNZvb5JyyPrLXWZNAyUJMC7ld+4i+/2PAHXZfyMXye5gMMA+sC0i9+yAVKms0ybv1m3ETZ6O6iaa5vVuLvAgQPz94fgkdIgvhSRv2YF7X33DDYiD8r7geN8hN6tKSjjtEBTM8NScj3iBQZVI9CV7FlFIwbUbkJPoW9X4rAoCO1u4bFgFRXjd3wvDzHfvQ+m+A8zcdHp9zZH1xJlAIaadFnwM3xeG1eU5VVVIWLYSWUd/bzxzp0hIXx+0WjQf3j7ejJbOFXliatPufLEPt3ZwezlslMp0wbG+Q25Vl5Rw3qpp89rLTHQJ38ICQsph3u07kH22BZJGOqqIOuz6RMJt1WKInoR4svPQ5uQiY+ps6B/WmPhr47JY747BAGXHDiAdSlovEj83IRGx02dBV9ZI0zxF4nfqiHYzp8PNzc1qQMz5RmyU9hmCY70HXa1Wq0O5Nt3aI4vVRRjl8NEjSNZthzTdbLC3aaxFIgYMed+nG9Qp/eMscuctqT0O61MINSAqeWrpQvg9W1eAJDNL/LyFyIn+q3FUYjBAPLg/At4Zz0hYZHI35ZjiWtzNbTtxd+/X3EeWUvlAcDSyX6xWU8FpyvUc2B9d15o2GdfvldXWSdLKTUuDYPPnkN3hd3vVuC+iDnFIMLx3boDIrm4eAtJyc+Ytgeb8f0VHohA6sqoNdY2ITp1C0X3bBtgo6lqFss9fYKikMTFclO1BOmYk2r4ymvGD2Nvb85awaI10RzHl+x9NAGJ/U/BrRK+/DDpdw58hwJhMiOytKcTUSdLKyc2FYeeXkF+6bLXoy/jLP54BhxefbzC0jqiP3LPqckaiIhuaSCBAsUGHqnqpMeio8x/5ImzdXOv0U61W49L0WShIvGI1lVSJRHB8exzaPDOYUQqtEXlpEpcXf4q037iD38Vy+RXBb937nNBXVXG6bp06PcVIK9Ykf2EdVVlZWdAdOAjF6bPW4MnUFfu2gueuTRA38fKPuYFTfz+FK58sttroaJBIoPxwMvx7dK/V0vlKWDSfi1M/Mnk3kVEMTz0/cn95RuYbXJNX+LVmfCGUk4pvYQEhM3zxL0eg/OEX5hfMt9BxpXrvLaje4ZwS324s1iOjI2nNTMyUFfOrslfAe94s+IR0qHVMWTK71wojFnwiIqn0lODchMkL8xMSl3GtQKJyZLReuuLMt5AuQuaTgsJClPxxFg679lt1ZIlcnOG6Yz3s6imCfMe3pt7dH3/Gzc/W806dQX0bXJzhtXAuvNq04e0HYedU/jgLMRMnozzzMec0HYMCtwmiXxs/uvjmrYOcNYRCRO7cApeuXXivk70BRRSSH5dQ46jikf2AWazeAMWYF+E2mzvciPckeFaszC9AzIT3UfrwEX8q8W0Fn0Xz4OHhztsPwk6n6OZtxEyaDC2J3BzFrVvENMGZ51/sVp6bH62v4k6rFDp/DvxG1bWymlsvCwiJvrk3kmuUQxMTqN+PwF4Bj21rYRvcUC0iymPvo/Pc7zrVyBJb/6yn/u7t3W9SUWswDgXHdX4KQbNnwPWJH8QapfDxH9GIm9XgBgI7jMHOw2Wo4PqaNQFpR05FV5eW+nAt1PuZQeiy6lPee2AcxZh77z6kqzZCWmA5kQGjCA7pD4+l8xuYScgfnTNvKXSZjxlRldzJxp/EAzK0lTCV5YqkNkVwEMIWz0d9N29Z5mPEvP0uNBQPbImXkGNqUD8EP9FByOzOFT5qarPoCvWDf//A+bVYZlfo3D64nyAnKkoR+8nSKJ2mIoKrpsK/NWOCt5TjkG3L+kWIQnLS0yFduw2SlFTLfEQggOvm1VB0b6gSlcRcRP68ZYCJdHym9BDj9RAQXcn7yRHsd33TNqTs/9YyIHo95C+PhP/LoxkbFkWaENVZ8oPQPOhOe8y7HzB5H7mK2N7+lt9bE/vXxGWNGbe5+O5dSpnRoFCYP0W8O4U+xYtKWG2dbFpZ6ekQ7NwL+VXLeUHE3cLh+dmyBsF41F/20lXQHDttElQuTZ3ruPF+cRjCF3zcID1UUUoKLr071WJSGb1QCMWkt9Bm0AAGEGuUQnIhUxgQ8S2uInVy+umZ00dHM4BEjRn7Ysnde2QT5pRPQ2ZOR8Drr/AChCqxom9OdjYqdn8F5blYsxRCm+62cjHsB/dvMEZ15mM8fnc6dDmm/RjG5ndzk5S6OKPnzi2cV7ivrFqD1IM/m6USrcQGqplT4d+1q9U6SOaZKMTPnm9yes7hnd97+svPdzEAXJm3ODDz3PnoarW6ru/zSXOXrhHMXfT6Rj5TvbN3RcgMX/XDT1AcPW1yIkw0SUgQPOhaQb3AaWpU8P0hFG/aaVaB40Uh1JnBgMD3JiCYIwoz7+o1xE6fDW2J6VctSAfxmT8L3h2s00HIU0iJBTIptJX7FFLLW3n3G/DjvxMYQCwFy4kVCia2l2+qJWPlsOD4Kai+OQhzMYz2H0yE0+svNziL9eUaZM34GJVXrpulzgbWXlO1DQYQT4zcvaOBskvRKwmfLEHmydMmqUTr4YZW82bBOyCAsfLyicWiqTDBDRMnoyInl5t/yBU32s6d3j9o2LC82iPq3PhJs/OvXuOMPqFegt6biKBJnLEQDQZhU2IUFBSgIOYSHLfsNnm/UOjuVuMR5IiM1Fy5hqwPZgMWMlVbcy2aJLSOn8yB/4iG+deyLlxELImlJi4bGdr4wYcA8fZm+AdfKy8Fx1GQnKmi8PfbNvDn76fS97WAxE6cEpKTnBytK9e4cDV0CA5kqIRPph9jQIqvXod8ww6IOFKvmvOXk1U1b/1WqH8yGTJWO03eR9aTY8sxtGNNNH+9gDuKmqd44FzKg1VfBDbSQcgPwl72tMRYtZoKxkRTcPkK93FlI65wCGg3tM93+5iL7bWAUHrwvDmfHK4sLK57JYntRihE+LJF8Hn2GUtzYCywFPDAXE+4ew/SlRsgKWp4NpO/3O3zjbBr49+QmWdlMxElOh4Xf/gydXYQka0twtethGdkzwbjZkafRcLs+Q2TKhsMsHnuGQS+9UatyEtKoSWRN/tcDJNug45EriKWyeIC5kwfGPzCC8yVs7qXPt+c8EbBtRtfmZK2KCyo5/bNsLHnjDqtHY+9L8KEBGVkQLD4M0iyshvMR+/jBeUQikQ0gJQ3WhxRBv1bm/EYlcdNn+fGnVlzZDHtDAao2gdB1btXg+wR+ooKpB39HdWFdZVZmpds/OsIHjWy9riiDA/mCkXDxM2ej+yz50xWcwrtuKD3/i9WsBXqAHJ51Sq/zKOn6Vo0Z+A1xTTxpRImwVhFBYrz81G+ZRdsLsQ1sPrSkVWbE/dJWiVmYhQ7ZTDwjlipAaQmLsuitm28NU/ifVm3FkVsMf+mH4dxPUqK4OYK/5nT4BnWufZyjiUrb25sPGI/nGUyU7bIzjbXJSioX499u2qv6TbQO6JGv76q5N59zrsiNEeH9sGM00riUDeio/5PgE2pQVRSWlSEkqizsP3PUUgKi60yx1s8H2t96o0AxFLnlN9RoYBkQB/4vjgMjq6uDHWwaZ3MNddqNIzdylRQHLWV+/ruGvjLD+8LBJRqp6Y0ACR+9oKA7Asx0dqyck7bFjUKnvIuAt8Zb55cjRLOkEuX+ElJTg60J6Pg8NcF2JSUWTanWNqwJ983mkJM9E92Mp3EBsJuEXB/4Xkovb3goFQylEGSFZu6ydz0Un/5DVeWrzZp2hdJpcVOnUOHRH6+tU7WM07N3BKVSJxUiNy5Fcp25tOFGyerZPNhMeBQjO3xU1DExEFSrWsyMM0GCIX4ANB2CILTiOFwCQpkQGAlKjaXFiWfMVcs+T2orczL80Dhm6++Wf+NK05AEmZ83DYrNjZaW17OfasSYF41CF+5lJf2zh5frCWYDTktv58C8c+/wj75bpOOsSYDQkBQptNWPnAY9QLcwsNqGTdLEcYJzcyBQf1c+2w9Hpm4mENtTVEH55HFDvbHyFcWlqY85PQkMg1FIiZmy58jZLP+hAkISgBmnNaVMgaRAZL5u54EycFfIE/LhKgRwdBNAoTSgjirYD/sWbj17sVQA2nhRAXGx5MlqmDXTJdyKCmmucumcl+fLQPDOs7genPEpLObspGmHj54sqqkxKS70MZBySQxc+7MGdbF+UNis8uxVENHmbqsDBVqNcrOXYDs2GkocgusOsYaBYjBgCpbKWyfGQi3Z4bA0dmpDo9gdQw27y8fdkYB3Rcnf4iKXG4TCfUhlsvv+kT2HtBpzRLOvPBmow9i3pv+fF5i4kFzj7RQRlK6pWtNIARLMWz6VzbVH0MtuXnQRZ2F/Zm/IKZQHx5p/qwChDRukRCCpyPh+dxQKH28a8VYNp2scWZsPkBQHbr7QQpgfsJlk03ojUSHDu0n9P36y/2mKpkFhLT3wiUrvyzPyBxnbmJNSaBMlMKmh2XS/mk0NXlT0jMg/O04kxZWauEWLS9AKASUvI0hwXB46UV4BAcxyciIURMQbBIyAoPmxPeIon0h88hVSudx/IRZ/Ozc3Y91nDJhtNewYdxOdUs53Kn3+LlLfHPO/3WyuqzMbFZ9ryGD0HnRPJPZHszNlM3JyKboYC/+qMvLob33AKKjJ2F/4xYEOnLfNvwNmQWEKILEWP/WcBz+HNwpwfKTpHTcLiYAAAaJSURBVGMsj2DTkltS9LjWQNo4vS+S8sMhs2CIpNIMr16RQ8LXrzKdq4kPIDRK3Mw5g7POXTykr6oyqw1SYjNyZvH1m9RfgTF/YdPHkphMfxUJV2B75ATkqQ0zxnECQv5v0rxVjpANfxbuvXrC/kkKDDapJSvGWrJHmdpp0lfu7NmH23v2mg0lEtjYaFw7hY7vuWc7d3SP0QC8I9j+GP3qR6UPHq0xlzaWTA6tR7yAkJnTIK4Xk8v3LKZ6rC2MeA2bv5GopayoCJoLsXD67SSkxf81VjYAhDJjUyLLQf3gOnQwnNzcGImJ/WMjUKw5lurPnyjjzpdf4e7e/ZYeeTHIW/uuHti5wwI+L7nxBiQlKsr23vqtxE+4U/AYzZh0lE6L5kFS78KMNaAwjPJJ6A+bJYJJMUuxw+SXPnEGtiejIKvWPrmOUGM60YlFEHSPgMfIF+Dk89/c7yzDZpMkWzsX4/rEM5I3ba1JAmDh/rudh/tJ/9dHj243dqxpV2RjKITaJC3Z4JR+IfpQRU5OQ+d3vRXS45Bhy5fArl6gs7UbYZySnAWGqKZUrYYmIxPC46cgiYlDWnUFtCHBUI4YDtegwNqsocYMu7G53Y3nTG8fXluxBpmnuN2xxnWlKsdEj55dhndesYJ3Zk7eFMIOlLh4sVfOX7G/VhYWWgxnlHl7odOCuXDtbjnxgCWgWMbP6i8ESu1fykNUaCogC2xbe1+Dza3LMmxrc7lzzYciD68sXWHyWrNxG7FcfserZ8/nw9Yu574DbWLBVgPCSF5TZwdkX048Zi57KTsehREFvvMmAt54vdHM3njuLMWwryewj7xQHTYdOGvmIKbdWIZtPCaZQyi9UtKmbbzeNhTZ2WV49Os7PGLlkkRLP7T63zcKEOokYdb80KxLsYe0arXlNA8AnMPD0GHGB1CFdLB2jpz1jZ+4ICAIKBaQ5nxNR/3wEZI3b0cWOZl45EsR29mle/Z9ekz4qk8tv4fEsbJGA0J9XV2wwD/rYuLBivwCzqjH+uPRw8OtRwxH4KS3m+UJvfqxvs1BDeyc6am8+99+h/vffFeTKpBHoWPKvVfkqIjPPjUfJmOmryYBwoCyeK1bdtz5bzWPs0w+a1F/fKmLCwLGvsKAwydogsdeNFsVkqDSj/0OeuWgLJV/rhaJyjHRKzJiVKfly5v01nqTAaGdYJ5gjb6wuSwtbaypJMxcO0Z+Ff/RL8FvzEuQqprvEbHGoEPX3Oj92wcHvgc9zmJNsfP0OO4Y0vntpjy5yo7XLIBQZ5TZVLj3wNuld+6s0VVV1U3ZY2F1Ykrb17cPfJ4bytxFseYKnTUbV7+uXqtlnu0miqBQz2ojZZNPv6SB27fyWeHzzrh17Z591oonpk333myAsEPEz58fnnshYW9VUTF3TlkLK6U3c0mxJGDoobGmKpf1h6tWl6Hw2nVQAEJW9FmrjiXjvsRyeYpb17BJXTeuMx0nywfVenWaHRD2CCs8H7dInZr2njXvq9efPyXRVLZrB+fwTlC2awt5q1ZQ+PnyFgjIJF6a8ojZdHXKQ+RfvoKipJtMsppGF5GoWu7t/Z1nr75zQ+ZMafZs0S0CCLvYuI8XhhVcvrK+ouYR42Yby4ZSsirkkKhUTOooCnxjrkjTI2JV1aik9FDl5c2ebpwYt0to55kRG1f9aRwp0mhwORo22yaZmhT5VCr3fPVyUfKtFVq1um5Kn+ZcSQv2JZbZ5SoD2qzwe++d3a0iIzUtOFTz/WotTTLp4EFF/tHT49QPH86qLinhf63XUsct+L2NvX2m3MtzS5uRr+1pNWZo8yWQNDPnFqeQ+mPTi9Op+759ueRByuyqgsLmUdubGRQbpfKBzMtjk+uI5/eFjBlj+g28Zh6XuvvbAWHXQGKy6s/zPfISL4+ryC8YrSvXNO3N1iZujlAqLbVzczns0C7oa8GrI6MjIiKawPkbP5l/DBDjKdMjluUxR58ry8wcVVlc3EdbUlo3uWLj12e2pVguK5Q6O5+zdVH95D321cP+/ftbvi7cQnNhu/2fAMR4jQcPHhSFV+jbpx3+z0CdVt9PW6buUplfSGGtTZ6rRKXKsFEqLkNviPYb9nx0UVjHa/8UJZjCtcmLbOEfDNN9TlKSovj69cC8c7HtCq9fD5I4KH0hFImFIhG9hizVV1U5GQwGoUgqzQMMVXq9Pgs6vbaqsDjdIajtXY+BfW45+vvfce7Rg5fX7u9Yk6kx/g8jsqISonrS1AAAAABJRU5ErkJggg==');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.js > div > span.icon_block .stack_icon {\n    background-position: 0px 1px;\n    background-image: url('data:image/png;base64,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');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.swift > div > span.icon_block .stack_icon {\n    background-position: 0px 1px;\n    background-image: url('data:image/png;base64,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');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.page_data_carrier #local_job_demand .upper_container #stack_list .stack_item>div>span.icon_block {\n    height: 100px;\n    opacity: 1;\n    width: 100px;\n}\n.stack_item>div>span {\n    display: block;\n    font: 20px/24px ProximaNova-Extrabld, tahoma, verdana, arial, sans-serif;\n    margin: 10px auto;\n    opacity: .5;\n\n}\n.location_container {\n    -o-object-fit: cover;\n       object-fit: cover;\n    min-height: 26vw;\n    min-width: 39vw;\n    background-size: 100% !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-image: url('america350x225.15d5079d5e76073e9184.png')\n}\n.stack_icon {\n    display: block;\n    cursor: pointer;\n    height: 100px;\n    width: 100px;\n    background-position: 0px -4px;\n    background-size: cover;\n    background-size: auto contain;\n    background-repeat: no-repeat;\n    position: top center;\n    -webkit-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    position: relative;\n}\n.stack_name {\n    color: #fffd54;\n}\n.page_data_carrier #local_job_demand .upper_container #stack_list .stack_item > div > span.icon_block .stack_icon:before {\n    position: absolute;\n    top: 0px;\n    content: '';\n    height: 100%;\n    width: 100%;\n    background: #fff;\n    left: 1px;\n    opacity: .5;\n    border-radius: 100%;\n}\n/* Lower Container */\n.lower_container {\nbackground-color: #F4F4F4;\n    padding: 80px;\n    position: relative;\n    -webkit-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n.stack_tab_container {\n    width: 100%;\n    text-align: center;\n    height: 100%;\n}\n.content:first-child {\n    width: 250px;\n    text-align: left;\n}\n.content {\n    display: inline-block;\n    vertical-align: top;\n}\nbody {\n    min-height: 500px;\n    margin-left: 2%;\n    margin-top: 6%;\n}\n.page_data_carrier #local_job_demand .lower_container .stack_tab_container .content h4 {\n    font: 26px/28px ProximaNova-Bold, tahoma, verdana, arial, sans-serif;\n    margin-bottom: 24px;\n    -webkit-text-decoration-style: bold;\n            text-decoration-style: bold; \n}\n.port-cont-title {\n    padding-bottom: 40px;\n    margin-left: 20%;\n    margin-top: 10vw;\n    color: black;\n    font-style: normal;\n    font-size: 40px;\n    padding-top: 0px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: block;\n  }\n.port-cont-class {\n    \n    margin-left: 10%;\n}\n.companies_using_stack_list {\n    opacity: .5;\n    vertical-align: top;\n    margin-bottom: 20px;\n    display: inline-block;\n    margin-bottom: 7px;\n    /* width: 200px; */\n    vertical-align: middle;\n    text-align: center;\n    height: 48px;\n}\n\n"

/***/ }),

/***/ "./src/app/body/portfolio-container/portfolio-container.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n    <head>\n    </head>\n      <div class=\"page_data_carrier\">\n          <div id=\"local_job_demand\">\n            <div class=\"upper_container\">\n              <div class=\"container\">\n                <h3>Building small teams of military Veterans to develop great products</h3>\n                <h6>Sapper Coding trains exceptional military Veterans to form small teams building a portfolio of real-world projects. </h6>\n                <p>Sapper Specializations</p>\n              </div>\n              <ul id=\"stack_list\" class=\"list-unstyled\">\n                <li class=\"stack_item python\" data-stack-name=\"python\" data-tab-href=\"what-is-python-programming\">\n                  <div>\n                    <span class=\"stack_name\">PYTHON</span>\n                    <span class=\"icon_block\">\n                      <span class=\"stack_icon\"></span>\n                    </span>\n                  </div>\n                </li>\n                <li class=\"stack_item mean\" data-stack-name=\"mean\" data-tab-href=\"what-is-mean-programming\">\n                    <div>\n                      <span class=\"stack_name\">MEAN</span>\n                      <span class=\"icon_block mean\">\n                        <span class=\"stack_icon\"></span>\n                      </span>\n                    </div>\n                  </li>\n                  <li class=\"stack_item django\" data-stack-name=\"django\" data-tab-href=\"what-is-django-programming\">\n                      <div>\n                        <span class=\"stack_name\">DJANGO</span>\n                        <span class=\"icon_block django\">\n                          <span class=\"stack_icon\"></span>\n                        </span>\n                      </div>\n                    </li>\n                    <li class=\"stack_item js\" data-stack-name=\"javascript\" data-tab-href=\"what-is-javascript-programming\">\n                        <div>\n                          <span class=\"stack_name\">JAVASCRIPT</span>\n                          <span class=\"icon_block django\">\n                            <span class=\"stack_icon\"></span>\n                          </span>\n                        </div>\n                      </li>\n                      <li class=\"stack_item swift\" data-stack-name=\"swift\" data-tab-href=\"what-is-swift-programming\">\n                          <div>\n                            <span class=\"stack_name\">iOS SWIFT</span>\n                            <span class=\"icon_block swfit\">\n                              <span class=\"stack_icon\"></span>\n                            </span>\n                          </div>\n                        </li>\n                        <li class=\"stack_item angular\" data-stack-name=\"angular\" data-tab-href=\"what-is-angular-programming\">\n                            <div>\n                              <span class=\"stack_name\">ANGULAR</span>\n                              <span class=\"icon_block angular\">\n                                <span class=\"stack_icon\"></span>\n                              </span>\n                            </div>\n                          </li>\n              </ul>\n        </div>\n        <div class=\"lower_container\">\n          <div class=\"stack_tab_container\">\n            <div class=\"content\">\n              <h4>Where We Come From</h4>\n              <ul id=\"location_list\" class=\"list_unstyled\">\n                <li>\n                  <span class=\"stack_place_text\">Fort Leonard Wood, MO</span>\n                </li>\n                <li>\n                  <span class=\"stack_place_text\">Fort Campbell, KY</span>\n                </li>\n                <li>\n                  <span class=\"stack_place_text\">Fort Belvoir, DC</span>\n                </li>\n                <li>\n                  <span class=\"stack_place_text\">Fort Bragg, NC</span>\n                </li>\n                <li>\n                    <span class=\"stack_place_text\">Fort Benning, GA</span>\n                </li>\n                <li>\n                  <span class=\"stack_place_text\">Fort Hood, TX</span>\n                </li>\n              </ul>\n              <h4>Where We Are Today</h4>\n              <ul id=\"location_list\" class=\"list_unstyled\">\n                <li>\n                  <span class=\"stack_place_text\">Silicon Valley, CA</span>\n                </li>\n              </ul>\n            </div>\n            <div class=\"content\">\n              <div class=\"location_container\"></div>\n            </div>\n            <div class=\"content\">\n                <h4>Companies Supporting Sappers</h4>\n                <ul class=\"list_unstyled companies_using_stack_list\">\n                  <li class=\"companies_using_stack_list\" style=\"background-position: -491px -9px;\">Wounded Warrior Project<li>\n                  <li class=\"companies_using_stack_list\" style=\"background-position: -491px -9px;\">Veteran Service Organization<li>\n                </ul>\n              </div>\n            </div>\n        </div>\n        </div>\n      <div class=\"port-cont-title \">\n        <h1>{{title}}</h1>\n      </div>\n      <div class=\"port-cont-class\">\n        <app-portfolio></app-portfolio>\n      </div>\n"

/***/ }),

/***/ "./src/app/body/portfolio-container/portfolio-container.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PortfolioContainerComponent = /** @class */ (function () {
    function PortfolioContainerComponent() {
        this.title = "Some web development work by our Veterans...";
    }
    PortfolioContainerComponent.prototype.ngOnInit = function () {
    };
    PortfolioContainerComponent = __decorate([
        core_1.Component({
            selector: 'app-portfolio-container',
            template: __webpack_require__("./src/app/body/portfolio-container/portfolio-container.component.html"),
            styles: [__webpack_require__("./src/app/body/portfolio-container/portfolio-container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioContainerComponent);
    return PortfolioContainerComponent;
}());
exports.PortfolioContainerComponent = PortfolioContainerComponent;


/***/ }),

/***/ "./src/app/body/portfolio-container/portfolio/portfolio.component.css":
/***/ (function(module, exports) {

module.exports = ".card-block {\n    display: inline-block;\n    width: 29%;\n    padding-top: 0px;\n    margin-right: 2%;\n    height: 271px;\n    /* background-image:url(\"../../../../assets/coverPhoto.png\") */\n}\n.card-title {\n    margin-bottom: .75rem;\n    text-align: center;\n}\n.card-text:last-child {\n    margin-bottom: 0;\n    text-align: center;\n}\n.card-background {\n    width: 100%;\n    height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/body/portfolio-container/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <script src=\"//code.angularjs.org/snapshot/angular.min.js\"></script>\n    <meta charset=\"UTF-8\">\n  </head>\n  <body class=\"container m-t-1\">\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/body/portfolio-container/portfolio/portfolio.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/services/http.service.ts");
var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(httpService) {
        this.httpService = httpService;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.projectInfo = this.httpService.getProjectInfo();
        console.log("this.projectInfo: ", this.projectInfo[0].backgroundImage);
    };
    PortfolioComponent.prototype.getUrl = function (title) {
        switch (title) {
            case 'TheAmericanElement.com':
                return 'url(../../../../assets/AmericanElement.png)';
            case 'Belgrade Lakes Yacht Club':
                return 'url(../../../../assets/GreatPondYacht.png)';
            case 'The New Dawn Trading Company':
                return 'url(../../../../assets/NewDawnTrading.png)';
        }
    };
    PortfolioComponent.prototype.redirect = function (title) {
        switch (title) {
            case 'TheAmericanElement.com':
                return location.href = 'http://www.theamericanelement.com';
            case 'Belgrade Lakes Yacht Club':
                return location.href = 'https://greatpondyachtclub.com';
            case 'The New Dawn Trading Company':
                return location.href = 'http://www.newdawntradingcompany.com';
        }
    };
    PortfolioComponent = __decorate([
        core_1.Component({
            selector: 'app-portfolio',
            template: __webpack_require__("./src/app/body/portfolio-container/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("./src/app/body/portfolio-container/portfolio/portfolio.component.css")],
            template: "\n<div (click)=redirect(project.title) class=\"card card-block\"\n     *ngFor=\"let project of projectInfo\" [ngStyle]=\"{'background-image': getUrl(project.title)}\">\n      <h4 class=\"card-title\"></h4>\n      <p class=\"card-text\"></p>\n</div>\n  "
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;


/***/ }),

/***/ "./src/app/body/resume/resume.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n    background-attachment: fixed;\n    min-height: 390px;\n    margin-bottom: 0px;\n    background-image: url('CPUBackground.551bbe77ee6695c5887c.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    text-shadow: black 0.3em 0.3em 0.3em;\n  }\n  \n  .title {\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    color: #feff00;\n    font-style: normal;\n    font-family: cursive;\n    font-size: 50px;\n    padding-top: 120px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n  }\n  \n  .logo {\n    min-height: 300px; \n    min-width: 300px;\n    background-image: url('300Logo.6aee8e28d88e7e08acbd.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-top: -15px;\n    top: 50%;\n  }\n  \n  .section {\n    background-color: white;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n  \n  .collection {\n    margin-top: 0.5rem;\n    margin-right: 0px;\n    margin-bottom: 1rem;\n    margin-left: 0px;\n    border-top-color: rgb(224,224,224);\n    border-top-style: solid;\n    border-right-width: 1px;\n    border-style: solid;\n    border-color:rgb(224,224,224);\n    border-width: 1px;\n    margin-top: 0.5rem;\n    margin-right: 0px;\n    margin-left: 0px;\n    margin-bottom: 1rem;\n    \n}\n  \n  .collection .collection-item {\n    line-height: 1.5rem;\n    border-bottom: 1px solid #e0e0e0;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: rgb(224,224,224);\n}\n  \n  ul {\n    list-style-type: none;\n    padding-left: 0px;\n}\n  \n  .row {\n    margin-top: 0px;\n}\n  \n  .row .col {\n    float: left;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-top: 0px;\n    padding-right: 0.75rem;\n    padding-bottom: 0px; \n    padding-left: 0.75rem;\n    min-height: 1px; \n}\n  \n  .row .col.m4 {\n    width: 33.33333%;\n    margin-left: auto;\n    left: 30px;\n    right: 0rem;\n}\n  \n  .resume-container {\n    background-color: white;\n    min-height: 350px;\n    background-size: cover;\n\n}\n  \n  .container .row {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n}\n  \n  h5 { \n    color: white;\n    font-size: 1.64rem;\n    line-height: 110%;\n    margin-top: 0.82rem;\n    margin-right: 0px;\n    margin-bottom: 0.656rem;\n}\n  \n  .collection.with-header .collection-header {\n    border: 1px solid #9b6629;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-color: black;\n    padding-top: 10px;\n    padding-right: 20px;\n    padding-bottom: 10px;\n    padding-left: 20px;\n}\n  \n  .collection.with-header .collection-item {\n    line-height: 1.5rem;\n    padding-top: 10px;\n    padding-right: 20px;\n    padding-bottom: 10px;\n}\n  \n  .gold.accent-4 {\n    background-color: #9b6629; \n}\n  \n  li {\n    display: list-item;\n    text-align: -webkit-match-parent;\n}\n  \n  .section {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n  \n  .container .row {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n}\n  \n  p {\n    line-height: 2rem;\n}\n  \n  .center {\n    text-align: center;\n}\n  \n  html {\n    font-size: 15px;\n    font-family: \"Roboto\", sans-sarif;\n    font-weight: normal;\n    color: black;\n}\n"

/***/ }),

/***/ "./src/app/body/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"text-center project-referal\">\n    <div class=\"title text-center\">Some of our core capabilities</div>\n  </div>\n</div>\n<div class=\"resume-container\">\n    <div class=\"section center\">\n        <div class=\"row center\">\n            <div class=\"col s12 m4\">\n                <div class=\"panel\">\n                    <ul class=\"collection with-header\">\n                        <li class=\"collection-header gold accent-4\">\n                            <h5>Languages</h5>\n                        </li>\n                        <li class=\"collection-item\">JavaScript (ES6)</li>\n                        <li class=\"collection-item\">TypeScript</li>\n                        <li class=\"collection-item\">Python</li>\n                        <li class=\"collection-item\">Java</li>\n                        <li class=\"collection-item\">CSS</li>\n                        <li class=\"collection-item\">HTML</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col s12 m4\">\n                <div class=\"panel\">\n                    <ul class=\"collection with-header\">\n                        <li class=\"collection-header gold accent-4\">\n                            <h5>Front End Web</h5>\n                        </li>\n                        <li class=\"collection-item\">React</li>\n                        <li class=\"collection-item\">Angular</li>\n                        <li class=\"collection-item\">jQuery</li>\n                        <li class=\"collection-item\">AJAX, JSON</li>\n                        <li class=\"collection-item\">RESTful APIs</li>\n                        <li class=\"collection-item\">Bootstrap</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col s12 m4\">\n                <div class=\"panel\">\n                    <ul class=\"collection with-header\">\n                        <li class=\"collection-header gold accent-4\">\n                            <h5>Back End</h5>\n                        </li>\n                        <li class=\"collection-item\">Node.js</li>\n                        <li class=\"collection-item\">Express</li>\n                        <li class=\"collection-item\">Django</li>\n                        <li class=\"collection-item\">Flask</li>\n                        <li class=\"collection-item\">AWS(EC2, Lambda)</li>\n                        <li class=\"collection-item\">RESTful Routing</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"row center\">\n                <div class=\"col s12 m4\">\n                    <div class=\"panel\">\n                        <ul class=\"collection with-header\">\n                            <li class=\"collection-header gold accent-4\">\n                                <h5>Database</h5>\n                            </li>\n                            <li class=\"collection-item\">MySQL</li>\n                            <li class=\"collection-item\">NoSQL</li>\n                            <li class=\"collection-item\">MongoDB, Mongoose</li>\n                            <li class=\"collection-item\">Django, ORM</li>\n                            <li class=\"collection-item\">SWIFT Core Data</li>\n                            <li class=\"collection-item\">PostgreSQL</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col s12 m4\">\n                    <div class=\"panel\">\n                        <ul class=\"collection with-header\">\n                            <li class=\"collection-header gold accent-4\">\n                                <h5>Software</h5>\n                            </li>\n                            <li class=\"collection-item\">Git</li>\n                            <li class=\"collection-item\">MySQLWorkbench</li>\n                            <li class=\"collection-item\">Postman</li>\n                            <li class=\"collection-item\">Babel</li>\n                            <li class=\"collection-item\">Webpack</li>\n                            <li class=\"collection-item\">Apple ARKit</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col s12 m4\">\n                    <div class=\"panel\">\n                        <ul class=\"collection with-header\">\n                            <li class=\"collection-header gold accent-4\">\n                                <h5>Methodologies</h5>\n                            </li>\n                            <li class=\"collection-item\">OOP</li>\n                            <li class=\"collection-item\">MVC</li>\n                            <li class=\"collection-item\">RESTful Architecture</li>\n                            <li class=\"collection-item\">CRUD Operations</li>\n                            <li class=\"collection-item\">AWS(EC2, Lambda)</li>\n                            <li class=\"collection-item\">RESTful Routing</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/body/resume/resume.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/services/http.service.ts");
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(_httpService) {
        this._httpService = _httpService;
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        core_1.Component({
            selector: 'app-resume',
            template: __webpack_require__("./src/app/body/resume/resume.component.html"),
            styles: [__webpack_require__("./src/app/body/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], ResumeComponent);
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;


/***/ }),

/***/ "./src/app/headers/header-about/header-about.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n    background-attachment: fixed;\n    min-height: 550px;\n    margin-bottom: 0px;\n    \n    background-repeat: no-repeat;\n    text-shadow: black 0.3em 0.3em 0.3em;\n    background:\n    -webkit-gradient(\n      linear, \n      left top, left bottom, \n      from(rgba(0,0,0,.5)), \n      to(rgba(0,0,0,.5))\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background:\n    linear-gradient(\n      rgba(0,0,0,.5), \n      rgba(0,0,0,.5)\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background-size: cover;\n    }\n  .title {\n    color: #feff00;\n    font-style: normal;\n    font-family: normal;\n    font-size: 80px;\n    padding-top: 120px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n  }\n  .subtitle {\n    font-size: 28px;\n    color: #feff00;\n    font-style: italic;\n  }"

/***/ }),

/***/ "./src/app/headers/header-about/header-about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"text-center project-referal\">\n      <div class=\"title text-center\">{{title}}</div>\n      <div class=\"subtitle\"><p>{{subtitle}}</p></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/headers/header-about/header-about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderAboutComponent = /** @class */ (function () {
    function HeaderAboutComponent() {
        this.title = "About Sapper Coding";
        this.subtitle = "A bridge between military and technological excellence";
    }
    HeaderAboutComponent.prototype.ngOnInit = function () {
    };
    HeaderAboutComponent = __decorate([
        core_1.Component({
            selector: 'app-header-about',
            template: __webpack_require__("./src/app/headers/header-about/header-about.component.html"),
            styles: [__webpack_require__("./src/app/headers/header-about/header-about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderAboutComponent);
    return HeaderAboutComponent;
}());
exports.HeaderAboutComponent = HeaderAboutComponent;


/***/ }),

/***/ "./src/app/headers/header-admin/header-admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/headers/header-admin/header-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/headers/header-admin/header-admin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderAdminComponent = /** @class */ (function () {
    function HeaderAdminComponent() {
    }
    HeaderAdminComponent.prototype.ngOnInit = function () {
    };
    HeaderAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-header-admin',
            template: __webpack_require__("./src/app/headers/header-admin/header-admin.component.html"),
            styles: [__webpack_require__("./src/app/headers/header-admin/header-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderAdminComponent);
    return HeaderAdminComponent;
}());
exports.HeaderAdminComponent = HeaderAdminComponent;


/***/ }),

/***/ "./src/app/headers/header-blog/header-blog.component.css":
/***/ (function(module, exports) {

module.exports = ".overlay {\n    position: absolute;\n    z-index: 1000;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    background: #6F9FD8;\n    margin-top: 5%;\n    padding: 20px;\n    margin-left: 17%;\n    border-radius: 5px;\n}\n.overlay p {\n    padding: 15px;\n    margin: 0;\n    font-family: sans-serif;\n    font-size: 12px;\n}\n.learning-content {\n    width: 100%;\n    height: 420px;\n    background:\n    -webkit-gradient(\n      linear, \n      left top, left bottom, \n      from(rgba(0,0,0,.5)), \n      to(rgba(0,0,0,.5))\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background:\n    linear-gradient(\n      rgba(0,0,0,.5), \n      rgba(0,0,0,.5)\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background-size: cover;\n    text-align: -webkit-center;\n}\n.title {\n    color: #feff00;\n    font-style: normal;\n    font-family: normal;\n    font-size: 4vw;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n    \n}\n.subtitle {\n    font-size: 28px;\n    color: #feff00;\n    font-style: italic;\n    text-align: -webkit-center;\n  }"

/***/ }),

/***/ "./src/app/headers/header-blog/header-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n  <header>\n    <title>Sapper Apps</title>\n  </header>\n  <body>\n    <div class=\"overlay\">\n        <div class=\"title\">\n          The Sapper Blog\n        </div>\n        <div class=\"subtitle\">\n        </div>\n      </div>    \n      <!-- Just some background image -->\n      <div class=\"learning-content\"></div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/headers/header-blog/header-blog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderBlogComponent = /** @class */ (function () {
    function HeaderBlogComponent() {
    }
    HeaderBlogComponent.prototype.ngOnInit = function () {
    };
    HeaderBlogComponent = __decorate([
        core_1.Component({
            selector: 'app-header-blog',
            template: __webpack_require__("./src/app/headers/header-blog/header-blog.component.html"),
            styles: [__webpack_require__("./src/app/headers/header-blog/header-blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderBlogComponent);
    return HeaderBlogComponent;
}());
exports.HeaderBlogComponent = HeaderBlogComponent;


/***/ }),

/***/ "./src/app/headers/header-contact/header-contact.component.css":
/***/ (function(module, exports) {

module.exports = ".overlay {\n    position: absolute;\n    z-index: 1000;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    background: #6F9FD8;\n    margin-top: 5%;\n    padding: 20px;\n    margin-left: 24%;\n    border-radius: 5px;\n}\n.overlay p {\n    padding: 15px;\n    margin: 0;\n    font-family: sans-serif;\n    font-size: 12px;\n}\n.learning-content {\n    width: 100%;\n    height: 420px;\n    background:\n    -webkit-gradient(\n      linear, \n      left top, left bottom, \n      from(rgba(0,0,0,.5)), \n      to(rgba(0,0,0,.5))\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background:\n    linear-gradient(\n      rgba(0,0,0,.5), \n      rgba(0,0,0,.5)\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background-size: cover;\n    text-align: -webkit-center;\n}\n.title {\n    color: #feff00;\n    font-style: normal;\n    font-family: normal;\n    font-size: 4vw;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n    \n}\n.subtitle {\n    font-size: 28px;\n    color: #feff00;\n    font-style: italic;\n    text-align: -webkit-center;\n  }"

/***/ }),

/***/ "./src/app/headers/header-contact/header-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n  <header>\n    <title>Sapper Apps</title>\n  </header>\n  <body>\n    <div class=\"overlay\">\n        <div class=\"title\">\n          Grow Your Business With Sappers\n        </div>\n        <div class=\"subtitle\">\n          We're coded to serve, let us serve your business.\n        </div>\n      </div>    \n      <!-- Just some background image -->\n      <div class=\"learning-content\"></div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/headers/header-contact/header-contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderContactComponent = /** @class */ (function () {
    function HeaderContactComponent() {
    }
    HeaderContactComponent.prototype.ngOnInit = function () {
    };
    HeaderContactComponent = __decorate([
        core_1.Component({
            selector: 'app-header-contact',
            template: __webpack_require__("./src/app/headers/header-contact/header-contact.component.html"),
            styles: [__webpack_require__("./src/app/headers/header-contact/header-contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderContactComponent);
    return HeaderContactComponent;
}());
exports.HeaderContactComponent = HeaderContactComponent;


/***/ }),

/***/ "./src/app/headers/header-custom-apps/header-custom-apps.component.css":
/***/ (function(module, exports) {

module.exports = ".overlay {\n    position: absolute;\n    z-index: 1000;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    background: #6F9FD8;\n    top: 38%;\n    left: 42%;\n    padding: 40px;\n    margin-left: -240px;\n    margin-top: -100px;\n    border-radius: 5px;\n}\n.overlay p {\n    padding: 15px;\n    margin: 0;\n    font-family: sans-serif;\n    font-size: 12px;\n}\n.learning-content {\n    width: 100%;\n    height: 420px;\n    background:\n    -webkit-gradient(\n      linear, \n      left top, left bottom, \n      from(rgba(0,0,0,.5)), \n      to(rgba(0,0,0,.5))\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background:\n    linear-gradient(\n      rgba(0,0,0,.5), \n      rgba(0,0,0,.5)\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background-size: cover;\n}\n.title {\n    color: #feff00;\n    font-style: normal;\n    font-family: normal;\n    font-size: 80px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n}\n.subtitle {\n    font-size: 28px;\n    color: #feff00;\n    font-style: italic;\n    text-align: -webkit-center;\n  }"

/***/ }),

/***/ "./src/app/headers/header-custom-apps/header-custom-apps.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n  <header>\n    <title>Sapper Apps</title>\n  </header>\n  <body>\n    <div class=\"overlay\">\n        <div class=\"title\">\n          Sapper Mobile Apps\n        </div>\n        <div class=\"subtitle\">\n          Move from concept to product fast with Sappers\n        </div>\n      </div>    \n      <!-- Just some background image -->\n      <div class=\"learning-content\"></div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/headers/header-custom-apps/header-custom-apps.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderCustomAppsComponent = /** @class */ (function () {
    function HeaderCustomAppsComponent() {
    }
    HeaderCustomAppsComponent.prototype.ngOnInit = function () {
    };
    HeaderCustomAppsComponent = __decorate([
        core_1.Component({
            selector: 'app-header-custom-apps',
            template: __webpack_require__("./src/app/headers/header-custom-apps/header-custom-apps.component.html"),
            styles: [__webpack_require__("./src/app/headers/header-custom-apps/header-custom-apps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderCustomAppsComponent);
    return HeaderCustomAppsComponent;
}());
exports.HeaderCustomAppsComponent = HeaderCustomAppsComponent;


/***/ }),

/***/ "./src/app/headers/header-learning/header-learning.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n    background-attachment: fixed;\n    min-height: 550px;\n    margin-bottom: 0px;\n    background:\n    -webkit-gradient(\n      linear, \n      left top, left bottom, \n      from(rgba(0,0,0,.5)), \n      to(rgba(0,0,0,.5))\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background:\n    linear-gradient(\n      rgba(0,0,0,.5), \n      rgba(0,0,0,.5)\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background-size: cover;\n    background-repeat: no-repeat;\n    text-shadow: black 0.3em 0.3em 0.3em;\n  }\n  .title {\n    color: #feff00;\n    font-style: normal;\n    font-family: normal;\n    font-size: 80px;\n    padding-top: 120px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n  }\n  .subtitle {\n    font-size: 28px;\n    color: #feff00;\n    font-style: italic;\n  }"

/***/ }),

/***/ "./src/app/headers/header-learning/header-learning.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"text-center project-referal\">\n      <div class=\"title text-center\">{{title}}</div>\n      <div class=\"subtitle\"><p>{{subtitle}}</p></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/headers/header-learning/header-learning.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderLearningComponent = /** @class */ (function () {
    function HeaderLearningComponent() {
        this.title = "Too Well Trained to Be Destroyed";
        this.subtitle = " <~> Coding is like anything else, the best go further, faster, for longer <~> ";
    }
    HeaderLearningComponent.prototype.ngOnInit = function () {
    };
    HeaderLearningComponent = __decorate([
        core_1.Component({
            selector: 'app-header-learning',
            template: __webpack_require__("./src/app/headers/header-learning/header-learning.component.html"),
            styles: [__webpack_require__("./src/app/headers/header-learning/header-learning.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderLearningComponent);
    return HeaderLearningComponent;
}());
exports.HeaderLearningComponent = HeaderLearningComponent;


/***/ }),

/***/ "./src/app/headers/header-marketing/header-marketing.component.css":
/***/ (function(module, exports) {

module.exports = ".overlay {\n    position: absolute;\n    z-index: 1000;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    background: #6F9FD8;\n    margin-top: 5%;\n    padding: 20px;\n    margin-left: 17%;\n    border-radius: 5px;\n}\n.overlay p {\n    padding: 15px;\n    margin: 0;\n    font-family: sans-serif;\n    font-size: 12px;\n}\n.learning-content {\n    width: 100%;\n    height: 420px;\n    background:\n    -webkit-gradient(\n      linear, \n      left top, left bottom, \n      from(rgba(0,0,0,.5)), \n      to(rgba(0,0,0,.5))\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background:\n    linear-gradient(\n      rgba(0,0,0,.5), \n      rgba(0,0,0,.5)\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background-size: cover;\n    text-align: -webkit-center;\n}\n.title {\n    color: #feff00;\n    font-style: normal;\n    font-family: normal;\n    font-size: 4vw;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n    \n}\n.subtitle {\n    font-size: 28px;\n    color: #feff00;\n    font-style: italic;\n    text-align: -webkit-center;\n  }"

/***/ }),

/***/ "./src/app/headers/header-marketing/header-marketing.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n  <header>\n    <title>Sapper Marketing</title>\n  </header>\n  <body>\n    <div class=\"overlay\">\n        <div class=\"title\">\n          Small Business Marketing Service Plans\n        </div>\n        <div class=\"subtitle\">\n          Marketing Concierge Services from those who've served\n        </div>\n      </div>    \n      <!-- Just some background image -->\n      <div class=\"learning-content\"></div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/headers/header-marketing/header-marketing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderMarketingComponent = /** @class */ (function () {
    function HeaderMarketingComponent() {
    }
    HeaderMarketingComponent.prototype.ngOnInit = function () {
    };
    HeaderMarketingComponent = __decorate([
        core_1.Component({
            selector: 'app-header-marketing',
            template: __webpack_require__("./src/app/headers/header-marketing/header-marketing.component.html"),
            styles: [__webpack_require__("./src/app/headers/header-marketing/header-marketing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderMarketingComponent);
    return HeaderMarketingComponent;
}());
exports.HeaderMarketingComponent = HeaderMarketingComponent;


/***/ }),

/***/ "./src/app/headers/header-web/header-web.component.css":
/***/ (function(module, exports) {

module.exports = ".overlay {\n    position: absolute;\n    z-index: 1000;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    background: #6F9FD8;\n    margin-top: 5%;\n    padding: 20px;\n    margin-left: 30%;\n    border-radius: 5px;\n}\n.overlay p {\n    padding: 15px;\n    margin: 0;\n    font-family: sans-serif;\n    font-size: 12px;\n}\n.learning-content {\n    width: 100%;\n    height: 420px;\n    background:\n    -webkit-gradient(\n      linear, \n      left top, left bottom, \n      from(rgba(0,0,0,.5)), \n      to(rgba(0,0,0,.5))\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background:\n    linear-gradient(\n      rgba(0,0,0,.5), \n      rgba(0,0,0,.5)\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png') no-repeat;\n    background-size: cover;\n    text-align: -webkit-center;\n}\n.title {\n    color: #feff00;\n    font-style: normal;\n    font-family: normal;\n    font-size: 4vw;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n    \n}\n.subtitle {\n    font-size: 28px;\n    color: #feff00;\n    font-style: italic;\n    text-align: -webkit-center;\n  }"

/***/ }),

/***/ "./src/app/headers/header-web/header-web.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n  <header>\n    <title>Sapper Learning</title>\n  </header>\n  <body>\n    <div class=\"overlay\">\n        <div class=\"title\">\n          Sapper Web Applications\n        </div>\n        <div class=\"subtitle\">\n          Modern Web Design With spec ops subtlety\n        </div>\n        \n      </div>    \n      <!-- Just some background image -->\n      <div class=\"learning-content\"></div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/headers/header-web/header-web.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderWebComponent = /** @class */ (function () {
    function HeaderWebComponent() {
    }
    HeaderWebComponent.prototype.ngOnInit = function () {
    };
    HeaderWebComponent = __decorate([
        core_1.Component({
            selector: 'app-header-web',
            template: __webpack_require__("./src/app/headers/header-web/header-web.component.html"),
            styles: [__webpack_require__("./src/app/headers/header-web/header-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderWebComponent);
    return HeaderWebComponent;
}());
exports.HeaderWebComponent = HeaderWebComponent;


/***/ }),

/***/ "./src/app/headers/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.header_block {\n  background: #1f2022;\n  display: block;\n  margin: 56px 0px 0px;\n  width: 100%;\n}\n\n.splash_image_block {\n  background: url(https://cutecdn.codingdojo.com/new_images/home/splash_image.png) no-repeat !important;\n  background-size: 100% 764px !important;\n  background-position: 0 0;\n  height: 670px;\n  overflow: hidden;\n  position: relative;\n  z-index: 99;\n}\n\n.information_block {\n  left: 140px;\n  position: absolute;\n  text-align: left;\n  top: 42%;\n}\n\n.vertical_centered {\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  text-align: center;\n}\n\n#video_parent {\n  height: inherit;\n  overflow: hidden;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  z-index: 1;\n}\n\n#video_mask {\n  width: 100%;\n  height: 100%;\n  background: #272737;\n  position: absolute;\n}\n\nimg {\n  width: 100%;\n  vertical-align: middle;\n}\n\n#splash_link {\n  padding: 0px 0px 0px 40px !important;\n  position: relative;\n  z-index: 600;\n}\n\nheader {\nmargin-top: 0px;\n}\n\n#future_links {\n    display: inline-block;\n    vertical-align: top;\n    height: 1125.8px;\n    width: 1125.8px;\n    margin-left: -173.832px;\n    margin-top: -85.0784px;\n    top: 0px;\n}\n\n/* RADIAL */\n\n.radial {\n  position: absolute;\n  height: inherit;\n  width: inherit;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#radial_frame {\n  background-image: url(https://assets.codingdojo.com/images/home/radial_frame2.png) !important;\n  /* animation: animate_frame 35s infinite, fade_in 1s;\n  -webkit-animation: animate_frame 35s infinite, fade_in 1s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  transform: rotate(-40deg); */\n}\n\n#radial_ring_code {\nbackground-image: url(https://cdn2.codingdojo.com/images/home/radial_ringcode.png) !important;\n/* animation: animate_ring_code 35s infinite, fade_in 1s;\n-webkit-animation: animate_ring_code 35s infinite, fade_in 1s;\n-webkit-animation-timing-function: linear;\nanimation-timing-function: linear;\ntransform: rotate(40deg); */\n}\n\n#future_links {\n  display: inline-block;\n  vertical-align: top;\n  height: 1125.8px;\n  width: 1125.8px;\n  margin-left: -173.832px;\n  margin-top: -85.0784px;\n  top: 0px;\n  overflow: visible;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  text-align: right;\n}\n\n#link_parent {\n  display: -webkit-flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  animation: fade_in 3s;\n  -webkit-box-pack: justify;\n  -webkit-box-orient: vertical;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -webkit-justify-content: center;\n  -webkit-animation: fade_in 3s;\n  z-index: 9999;\n}\n\n#link_parent a {\n  content: '';\n  background-image: url(https://cutecdn.codingdojo.com/images/home/your_future_2.png);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  display: inline-block !important;\n  height: 235px;\n  width: 235px;\n  cursor: pointer;\n}\n\n/*  */\n\n.title_block {\n  display: inline-block;\n  z-index: 9999;\n  position: absolute;\n  right: 180px;\n  top: 140px;\n  width: 500px;\n}\n\nh2 {\n  -webkit-animation: fade_in 5s, drive_right 3s;\n  animation: fade_in 5s, drive_right 3s;\n  font: 64px/70px ProximaNova-Extrabld, tahoma, verdana, arial, sans-serif;\n  margin: 0px;\n  width: 904px;\n  color:#fffd54;\n}\n\nh3 {\n  color: #fffd54;\n}\n\n#home_video_placeholder {\n  -webkit-filter: blur(0px) grayscale(1);\n  filter: blur(0px) grayscale(1);\n  opacity: 0.25;\n}\n\nvideo {\n    display: inline-block;\n    height: auto;\n    width: 100%;\n    -webkit-filter: blur(0px) grayscale(1);\n    filter: blur(0px) grayscale(1);\n    opacity: 0.25;\n    z-index: 400;\n}\n\n.splash_image_block {\n  background: url(https://cutecdn.codingdojo.com/new_images/home/splash_image.png) no-repeat !important;\n  background-size: 100% 764px !important;\n  background-position: 0 0;\n  height: 670px;\n  overflow: hidden;\n}\n\n.information_block {\n  left: 140px;\n  position: absolute;\n  text-align: left;\n  top: 42%;\n}\n\n.blue_line {\n  position: absolute;\n  right: 0;\n  height: 1276px;\n  width: 1276px;\n  background-repeat: no-repeat;\n  background-image: url(https://cutecdn.codingdojo.com/images/home/top_line_2.png);\n}\n\n.radial {\n  position: absolute;\n  height: inherit;\n  width: inherit;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.information_block {\n  left: 140px;\n  position: absolute;\n  text-align: left;\n  top: 42%;\n}\n\n#video_mask {\n  width: 100%;\n  height: 100%;\n  background: #272737;\n  position: absolute;\n}\n\n.cta_btn_block {\n  -webkit-animation: none;\n  animation: none;\n  display: block;\n  margin: 30px 0px 0px;\n}\n\n.cta_blue_btn {\n  background-color: #06aae2;\n  color: #fff !important;\n  display: inline-block;\n  font: bold 16px/20px ProximaNova-Light, tahoma, verdana, arial, sans-serif !important;\n  padding: 8px 0px;\n  text-decoration: none !important;\n  text-align: center;\n  vertical-align: middle;\n  width: 200px;\n}\n\n.cta_blue_btn_light {\n  background-color: transparent;\n  display: inline-block;\n  font: bold 16px/20px ProximaNova-Light, tahoma, verdana, arial, sans-serif !important;\n  padding: 8px 0px;\n  text-decoration: none !important;\n  text-align: center;\n  vertical-align: middle;\n  width: 200px;\n}\n\n.jumbotron {\n  background-attachment: fixed;\n  min-height: 390px;\n  margin-bottom: 0px;\n  background-image: url('CPUBackground.551bbe77ee6695c5887c.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  text-shadow: black 0.3em 0.3em 0.3em;\n}\n\n.title {\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  color: #feff00;\n  padding-top: 120px;\n  border-bottom: 1px solid #FFFFFF;\n  border-bottom-color: rgba(255,255,255,0.35);\n  display: inline-block;\n}\n\n.center {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/headers/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header_block\">\n    <div id=\"made-in-ny\"></div>\n    <script src=\"https://player.vimeo.com/api/player.js\"></script>\n    <script src=\"angular-fancybox-plus.js\"></script>\n    <script>\n        var options = {\n            id: 59777392,\n            width: 640,\n            loop: true\n        };\n    \n        var player = new Vimeo.Player('video_mask', options);\n    \n        player.setVolume(0);\n    \n        player.on('play', function() {\n            console.log('played the video!');\n        });\n    </script>\n  <div class=\"splash_image_block\">\n\n    <div class=\"information_block vertical_centered\"></div>\n    <div id=\"video_parent\">\n      <div id=\"video_mask\"></div>\n          <img src=\"https://cdn2.codingdojo.com/new_images/home/splash_image.png\" alt=\"sapper-life\" id=\"home_video_placeholder\" style=\"display:none;\">\n          <video id=\"splash_main_video\" loop=\"loop\" class=\"sophis-video\" sophis-video-control=\"true\">\n            <source src=\"https://player.vimeo.com/video/264854162\" title=\"A day as a Sapper\">\n          </video>\n        \n      \n\n        <div class=\"splash_image_block\">\n          <div class=\"information_block vertical_centered\"></div>\n        </div>\n      </div>\n      <div id=\"splash_link\"> \n          <header>\n\n            <div id=\"future_links\"> \n              <div id=\"radial_ring_code\" class=\"radial\"></div>\n              <div id=\"radial_frame\" class=\"radial\"></div>\n              <div id=\"radial_ring_1\" class=\"radial\"></div>\n              <div id=\"radial_ring_2\" class=\"radial\"></div>\n              <div id=\"radial_ring_3\" class=\"radial\"></div>\n              <div class=\"blue_line_parent\">\n                <div class=\"blue_line\"></div>\n              </div>\n              <div id=\"link_parent\" class=\"radial\">\n                <div class=\"invisible\"></div>\n                  <a class=\"fancybox/iframe\" href=\"https://player.vimeo.com/video/264854162?api=1&player_id=vimeo_video&autoplay=1\"></a>\n                  <div class=\"invisible\"></div>\n              </div>\n            </div>\n\n            <div class=\"title_block\" id=\"desktop_version\">\n              <h2>SAPPER CODING</h2>\n              <h3>Web and mobile app development by those who serve, to serve your business</h3>\n              <div class=\"cta_btn_block\">\n                  <a routerLink=\"/contact\" class=\"cta_blue_btn\">Hire Sappers</a>\n                  <a routerLink=\"/learning\" class=\"cta_blue_btn_light\">Become a Sapper</a>\n              </div>\n            </div>\n\n            </header>\n        </div>\n      </div>\n    </div>\n    <div class=\"jumbotron\">\n        <div class=\"text-center project-referal\">\n          <div class=\"title text-center\">\n            <h2>Elite Veteran Developer Teams</h2> \n              <h3>For Your Next Project</h3>\n          </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/headers/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('********* HEADER **********');
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = "Sapper Coding";
        this.subtitle = "Web, mobile, and viral marketing, with military precision";
        this.learn = "<~> Do you have what it takes to be a Sapper <~>";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/headers/header/header.component.html"),
            styles: [__webpack_require__("./src/app/headers/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <app-header-about></app-header-about>\n    <app-body-about-us></app-body-about-us>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        core_1.Component({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__("./src/app/pages/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
exports.AboutUsComponent = AboutUsComponent;


/***/ }),

/***/ "./src/app/pages/blog/blog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <app-header-blog></app-header-blog>\n    <app-body-blog></app-body-blog>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/pages/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/pages/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;


/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".contact-cont-class {\n    padding-top: 2vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.left-content {\n    width: 45%;\n    display: inline-block;\n    text-align: center;\n    margin-left: 8vw\n}\n.web-form {\n    display: inline-block;\n    width:40%\n}\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n    <head>\n    </head>\n    <body>\n      <div class=\"contact-cont-class\">\n        <div class=\"left-content\">\n            <h2>Come visit us</h2>\n            <br><br>\n            <app-map></app-map>\n            <div class=\"address\">\n              <br>\n              <p>Sapper Coding LLC.<br>\n              665 South 10th St<br>\n              San Jose CA 95112 United States</p>\n            </div>\n          </div>\n          <div class=\"web-form\">\n            <app-form-web></app-form-web>\n          </div>\n      </div>\n        <app-resume></app-resume>\n    </body>\n</html>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/pages/custom-apps/custom-apps.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/custom-apps/custom-apps.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <app-header-custom-apps></app-header-custom-apps>\n    <app-body-custom-apps></app-body-custom-apps>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/pages/custom-apps/custom-apps.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CustomAppsComponent = /** @class */ (function () {
    function CustomAppsComponent() {
    }
    CustomAppsComponent.prototype.ngOnInit = function () {
    };
    CustomAppsComponent = __decorate([
        core_1.Component({
            selector: 'app-custom-apps',
            template: __webpack_require__("./src/app/pages/custom-apps/custom-apps.component.html"),
            styles: [__webpack_require__("./src/app/pages/custom-apps/custom-apps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomAppsComponent);
    return CustomAppsComponent;
}());
exports.CustomAppsComponent = CustomAppsComponent;


/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <app-header></app-header>\n    <app-portfolio-container></app-portfolio-container>\n  </body>\n</html>\n    "

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/pages/learning-platform/learning-platform.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/learning-platform/learning-platform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main__body\">\n  <div class=\"container\">\n\n    <div class=\"login__page\">\n      <div class=\"row\">\n          <div class=\"card col-md-4 col-md-offset-4\">\n            <div class=\"login__card\">\n              <div class=\"card-block\">\n\n                  <form name=\"userform\" method=\"post\" #formCtrl=\"ngForm\">\n                    <h3 align=\"center\">Login Form</h3>\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email\" required>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputPassword1\">Password</label>\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Password\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button type=\"buton\" class=\"btn btn-primary btn-block\" style=\"margin-bottom: 20px\" (click)=\"signInWithEmail()\" [disabled]=\"formCtrl.form.invalid\">\n                          Login with Email\n                        </button>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <button type=\"buton\" class=\"btn btn-block\" (click)=\"signInWithFacebook()\">\n                          <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                          Login with Facebook\n                        </button>\n\n                        <button type=\"button\" class=\"btn btn-block\" (click)=\"signInWithTwitter()\">\n                          <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                          Login with Twitter\n                        </button>\n\n                        <button type=\"button\" class=\"btn btn-block\" (click)=\"signInWithGithub()\">\n                          <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n                          Login with Github\n                        </button>\n\n                        <button type=\"button\" class=\"btn btn-block\" (click)=\"signInWithGoogle()\">\n                          <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n                          Login with Google\n                        </button>\n                    </div>\n                  </form>\n\n              </div>\n            </div>\n          </div>\n\n      </div>\n    </div> <!-- end card -->\n\n  </div>  <!-- end container -->\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/learning-platform/learning-platform.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var LearningPlatformComponent = /** @class */ (function () {
    function LearningPlatformComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            email: '',
            password: ''
        };
    }
    LearningPlatformComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authService.signInWithFacebook()
            .then(function (res) {
            _this.router.navigate(['learning-content']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LearningPlatformComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function (res) {
            _this.router.navigate(['learning-content']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LearningPlatformComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.authService.signInWithGithub()
            .then(function (res) {
            _this.router.navigate(['learning-content']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LearningPlatformComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.authService.signInRegular(this.user.email, this.user.password)
            .then(function (res) {
            console.log(res);
            _this.router.navigate(['learning-content']);
        })
            .catch(function (err) { return console.log('error: ' + err); });
    };
    LearningPlatformComponent.prototype.ngOnInit = function () {
    };
    LearningPlatformComponent = __decorate([
        core_1.Component({
            selector: 'app-learning-platform',
            template: __webpack_require__("./src/app/pages/learning-platform/learning-platform.component.html"),
            styles: [__webpack_require__("./src/app/pages/learning-platform/learning-platform.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], LearningPlatformComponent);
    return LearningPlatformComponent;
}());
exports.LearningPlatformComponent = LearningPlatformComponent;


/***/ }),

/***/ "./src/app/pages/marketing/marketing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/marketing/marketing.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <app-header-marketing></app-header-marketing>\n    <app-body-marketing></app-body-marketing>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/pages/marketing/marketing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MarketingComponent = /** @class */ (function () {
    function MarketingComponent() {
    }
    MarketingComponent.prototype.ngOnInit = function () {
    };
    MarketingComponent = __decorate([
        core_1.Component({
            selector: 'app-marketing',
            template: __webpack_require__("./src/app/pages/marketing/marketing.component.html"),
            styles: [__webpack_require__("./src/app/pages/marketing/marketing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketingComponent);
    return MarketingComponent;
}());
exports.MarketingComponent = MarketingComponent;


/***/ }),

/***/ "./src/app/pages/web-design/web-design.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/web-design/web-design.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <app-header-web></app-header-web>\n    <app-body-web></app-body-web>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/pages/web-design/web-design.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var WebDesignComponent = /** @class */ (function () {
    function WebDesignComponent() {
    }
    WebDesignComponent.prototype.ngOnInit = function () {
    };
    WebDesignComponent = __decorate([
        core_1.Component({
            selector: 'app-web-design',
            template: __webpack_require__("./src/app/pages/web-design/web-design.component.html"),
            styles: [__webpack_require__("./src/app/pages/web-design/web-design.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebDesignComponent);
    return WebDesignComponent;
}());
exports.WebDesignComponent = WebDesignComponent;


/***/ }),

/***/ "./src/app/platform/platform-dashboard/platform-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/platform-dashboard/platform-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  platform-dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/platform/platform-dashboard/platform-dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PlatformDashboardComponent = /** @class */ (function () {
    function PlatformDashboardComponent() {
    }
    PlatformDashboardComponent.prototype.ngOnInit = function () {
    };
    PlatformDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-platform-dashboard',
            template: __webpack_require__("./src/app/platform/platform-dashboard/platform-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/platform/platform-dashboard/platform-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlatformDashboardComponent);
    return PlatformDashboardComponent;
}());
exports.PlatformDashboardComponent = PlatformDashboardComponent;


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var firebase = __webpack_require__("./node_modules/firebase/app/index.js");
var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                console.log("\n            >>  >>  >>>>>>>\n            >>  >>  >>>>>>>\n            >>  >>  >>>>>>>\n            >>  >>  >>>>>>>\n            >>  >>  >>>>>>>\n            >>  >>  >>>>>>>\n            >>  >>  >>>>>>>\n           ");
                console.log(_this.userDetails.displayName);
            }
            else {
                _this.userDetails = null;
                console.log('user == null; no user signed in');
            }
        });
    }
    AuthService.prototype.signInWithFacebook = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };
    AuthService.prototype.signInWithGithub = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    };
    AuthService.prototype.signInRegular = function (email, password) {
        var credential = firebase.auth.EmailAuthProvider.credential(email, password);
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.getCurrentUserDisplayName = function () {
        if (this.isLoggedIn()) {
            return this.userDetails.displayName;
        }
        else {
            return null;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut()
            .then(function (res) { return _this.router.navigate(['/home']); });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth,
            router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/services/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('********* HTTP **********');
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.projectInfo = [
            {
                title: 'TheAmericanElement.com',
                summary: 'Fullstack Web Development',
                backgroundImage: '../../../../assets/coverPhoto.png',
                url: 'http://www.theamericanelement.com'
            },
            {
                title: 'Belgrade Lakes Yacht Club',
                summary: 'Fullstack Web Development',
                backgroundImage: '../../../../assets/coverPhoto.png',
                url: 'https://greatpondyachtclub.com'
            },
            {
                title: 'The New Dawn Trading Company',
                summary: 'Fullstack Web Development',
                backgroundImage: '../../../../assets/coverPhoto.png',
                url: 'http://www.newdawntradingcompany.com'
            },
        ];
        this.socialMediaInfo = [
            { linkedIn: 'https://linkedin.com/in/johnhavenbradley' },
            { blog: 'http://www.theamericanelement.com/' },
            { email: 'http://johnhavenbradley@sapperCoding.com' },
        ];
    }
    //   githubAccount: 'https://github.com/CrunchyJohnHaven',
    //   linkedIn: 'https://linkedin.com/in/johnhavenbradley',
    //   AmericanElement: 'http://www.theamericanelement.com/',
    //   Email: 'http://johnhavenbradley@gmail.com',
    // };
    HttpService.prototype.getProjectInfo = function () {
        return this.projectInfo;
    };
    HttpService.prototype.getSocialMediaInfo = function () {
        return this.socialMediaInfo;
    };
    HttpService.prototype.newContact = function (newContact) {
        console.log('addContact http');
        return this._http.post('/contact', newContact);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyB7wCZAkS6oRbboZD4hSSESMBDJduzOkEs',
        authDomain: 'sappercodingdevelopermktplace.firebaseapp.com',
        databaseURL: 'https://sappercodingdevelopermktplace.firebaseio.com',
        projectId: 'sappercodingdevelopermktplace',
        storageBucket: 'sappercodingdevelopermktplace.appspot.com',
        messagingSenderId: '713566980415'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map