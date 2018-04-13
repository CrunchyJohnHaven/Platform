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

module.exports = "<p>\n  admin works!\n</p>\n"

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
var web_design_component_1 = __webpack_require__("./src/app/pages/web-design/web-design.component.ts");
var custom_apps_component_1 = __webpack_require__("./src/app/pages/custom-apps/custom-apps.component.ts");
var marketing_component_1 = __webpack_require__("./src/app/pages/marketing/marketing.component.ts");
var contact_component_1 = __webpack_require__("./src/app/pages/contact/contact.component.ts");
var blog_component_1 = __webpack_require__("./src/app/pages/blog/blog.component.ts");
var admin_component_1 = __webpack_require__("./src/app/admin/admin/admin.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about-us', component: about_us_component_1.AboutUsComponent },
    { path: 'learning', component: learning_platform_component_1.LearningPlatformComponent },
    { path: 'web', component: web_design_component_1.WebDesignComponent },
    { path: 'apps', component: custom_apps_component_1.CustomAppsComponent },
    { path: 'marketing', component: marketing_component_1.MarketingComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'blog', component: blog_component_1.BlogComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
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

module.exports = ""

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
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
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
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var aboutme_component_1 = __webpack_require__("./src/app/body/aboutme/aboutme.component.ts");
var resume_component_1 = __webpack_require__("./src/app/body/resume/resume.component.ts");
var form_component_1 = __webpack_require__("./src/app/body/forms/form/form.component.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent] //ID's the root module that angular should bootstrap when it starts the application 
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

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <div class=\"footer-container\">\n        Use of this Site is subject to express Terms of Use. By using this site\n        , you signify that you agree to be bound by these, \n      <br>\n        which were last revised on the date shown in the footer of our legal page or in the relevant\n      <br>\n        document linked on our legal page.\n      <br><br>\n        Legal - Privacy Policy\n      <br><br>\n      <div class=\"row center\">\n          <div class=\"col m3 s6 btn_links\">\n            <div (click)=\"mediaRedirect('linkedIn')\" class=\"linkedInIcon\"><br>\n              <a [href]=\"socialMediaInfo['linkedIn']\" class=\"icon-linkedIn\" target=\"_blank\"><br><br><br></a>\n            </div>\n            <div (click)=\"mediaRedirect('blog')\" class=\"blogIcon\"><br>\n              <a [href]=\"socialMediaInfo['blog']\" class=\"icon-blog\" target=\"_blank\"><br><br><br></a>\n            </div>\n            <div (click)=\"mediaRedirect('email')\" class=\"emailIcon\"><br>\n               <a [href]=\"socialMediaInfo['email']\" class=\"icon-email\" target=\"_blank\"><br><br><br></a>\n            </div>                    \n          </div>\n        </div>\n    </div>\n    <!-- <div class=\"hiddenForm\" [hidden]=\"project.hide\">\n    </div> -->\n  </body>\n</html>\n"

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
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(httpService) {
        this.httpService = httpService;
    }
    FooterComponent.prototype.ngOnInit = function () {
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
                return location.href = 'johnhavenbradley@sappercoding.com';
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

module.exports = ".navBardemoBasicUsage md-content .ext-content {\n    padding: 50px;\n    margin: 20px;\n    background-color: #FFF2E0; }\n\n.container {\n    background-color: black;\n    color: white;\n    margin-left: inherit;\n    padding-left: 5rem;\n}\n\nbody {\n    background-color: black;\n    min-height: 120px;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%\n}\n\n.nav-bar-col {\n    padding-right: 40px;\n}\n\n.row {\n    padding-top: 50px;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\n.nav-icon-container {\n    display: inline-block;\n    padding-left: 0px;\n    background-color: blue;\n    height: inherit;\n    width: 11rem;\n}"

/***/ }),

/***/ "./src/app/base-components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <div class=\"nav-icon-container\">\n      NAV ICON\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/home\">Home</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/learning\">Learning Platform</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/web\">Web Design</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/apps\">Custom Apps</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/marketing\">Web Marketing</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/contact\">Contact</a>\n        </div>\n        <div class=\"nav-bar-col\">\n          <a routerLink=\"/blog\">Blog</a>\n        </div>\n        <div class=\"nav-bar-col\">\n            <a routerLink=\"/about-us\">About Us</a>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n\n\n"

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
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.row1 = "HOME";
        this.row2 = "LEARNING PLATFORM";
        this.row3 = "WEB DESIGN";
        this.row4 = "CUSTOM APPS";
        this.row5 = "WEB MARKETING";
        this.row6 = "CONTACT";
        this.row7 = "BLOG";
        this.row8 = "ABOUT US";
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/base-components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/base-components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
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

module.exports = "<p>\n  body-admin works!\n</p>\n"

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

module.exports = ""

/***/ }),

/***/ "./src/app/body/body-custom-apps/body-custom-apps.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  body-custom-apps works!\n</p>\n"

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

module.exports = "<p>\n  body-learning works!\n  <a routerLink=\"/admin\">Admin</a>\n</p>\n"

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
var BodyLearningComponent = /** @class */ (function () {
    function BodyLearningComponent() {
    }
    BodyLearningComponent.prototype.ngOnInit = function () {
    };
    BodyLearningComponent = __decorate([
        core_1.Component({
            selector: 'app-body-learning',
            template: __webpack_require__("./src/app/body/body-learning/body-learning.component.html"),
            styles: [__webpack_require__("./src/app/body/body-learning/body-learning.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = ""

/***/ }),

/***/ "./src/app/body/body-web/body-web.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  body-web works!\n</p>\n"

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

/***/ "./src/app/body/forms/form/form.component.css":
/***/ (function(module, exports) {

module.exports = ".form-request-work {\n  background-color: black;\n  width: 22rem;\n  min-height: 12rem;\n}\nbody {\n  width: 25%;\n  margin-left: 36%;\n\n}\n/* .jumbotron {\n    background-attachment: fixed;\n    min-height: 390px;\n    margin-bottom: 0px;\n    background-image: url('../../assets/CPUBackground.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    text-shadow: black 0.3em 0.3em 0.3em;\n  }\n.logo {\n    min-height: 490px; \n    min-width: 300px;\n    background-image: url('../../assets/profile2PNG.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-top: -15px;\n    top: 50%;\n  }\n  \n  .title {\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    color: #feff00;\n    font-style: italic;\n    font-family: cursive;\n    font-size: 50px;\n    padding-top: 120px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n  }\n  .email-icon {\n    background-image: url('../../assets/emailIcon.png');\n    background-position: center;\n    height: 48px;\n    width: 48px;\n    margin-top: 1%;\n    margin-left: 50%;\n  }\n  .center {\n    text-align: center;\n}\nh1 {\n  color: #feff00;\n  font-family: cursive;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n\n} */"

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
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
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

module.exports = ".btn {\n    text-shadow: none;\n}\n.form {\n    text-shadow: none;\n}\n.card {\n    width: 40%;\n    margin-left: 30%;\n}\n.form-group {\n    text-align: left;\n}"

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
            template: "\n  <div class=\"form\"\n    *ngFor=\"let project of projects\">\n    <a class=\"btn btn-primary\" (click)=\"toggle(project)\">Request a quote from a Sapper</a>\n    <br><br>\n    <div class=\"card card-block\" [hidden]=\"project.hide\">\n      <h4 class=\"card-title\" [hidden]=\"project.hide\">{{project.title}}</h4>\n      <br><br>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"firstName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Email</label>\n          <input type=\"text\" class=\"form-control\" id=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phoneNumber\">Phone Number</label>\n          <input type=\"text\" class=\"form-control\" id=\"phoneNumber\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      </form>\n    </div>\n  </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], WorkFormContentComponent);
    return WorkFormContentComponent;
}());
exports.WorkFormContentComponent = WorkFormContentComponent;


/***/ }),

/***/ "./src/app/body/portfolio-container/portfolio-container.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n    min-height: 500px;\n    margin-left: 2%;\n    margin-top: 6%;\n}\n.port-cont-title {\n    padding-bottom: 40px;\n    margin-left: 20%;\n    color: black;\n    font-style: normal;\n    font-size: 40px;\n    padding-top: 0px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: block;\n  }\n.port-cont-class {\n    margin-left: 10%;\n}"

/***/ }),

/***/ "./src/app/body/portfolio-container/portfolio-container.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n    <head>\n    </head>\n    <body>\n      <div class=\"port-cont-title\">\n        <h1>{{title}}</h1>\n      </div>\n      <div class=\"port-cont-class\">\n        <app-portfolio></app-portfolio>\n      </div>\n    </body>\n</html>\n"

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
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
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
// background={{project.backgroundImage}} 
// Turnery operator: 
// <div class="card card-block"
//  *ngFor="let project of projectInfo" [ngStyle]="{'background-color': project.title === 'TheAmericanElement.com' ? 'green' : 'red'}">
// onclick="location.href='http://www.theamericanelement.com'" 


/***/ }),

/***/ "./src/app/body/resume/resume.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n    background-attachment: fixed;\n    min-height: 390px;\n    margin-bottom: 0px;\n    background-image: url('CPUBackground.551bbe77ee6695c5887c.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    text-shadow: black 0.3em 0.3em 0.3em;\n  }\n  \n  .title {\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    color: #feff00;\n    font-style: italic;\n    font-family: cursive;\n    font-size: 50px;\n    padding-top: 120px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n  }\n  \n  .logo {\n    min-height: 300px; \n    min-width: 300px;\n    background-image: url('300Logo.6aee8e28d88e7e08acbd.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-top: -15px;\n    top: 50%;\n  }\n  \n  .section {\n    background-color: white;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n  \n  .collection {\n    margin-top: 0.5rem;\n    margin-right: 0px;\n    margin-bottom: 1rem;\n    margin-left: 0px;\n    border-top-color: rgb(224,224,224);\n    border-top-style: solid;\n    border-right-width: 1px;\n    border-style: solid;\n    border-color:rgb(224,224,224);\n    border-width: 1px;\n    margin-top: 0.5rem;\n    margin-right: 0px;\n    margin-left: 0px;\n    margin-bottom: 1rem;\n    \n}\n  \n  .collection .collection-item {\n    line-height: 1.5rem;\n    border-bottom: 1px solid #e0e0e0;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: rgb(224,224,224);\n}\n  \n  ul {\n    list-style-type: none;\n    padding-left: 0px;\n}\n  \n  .row {\n    margin-top: 0px;\n}\n  \n  .row .col {\n    float: left;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-top: 0px;\n    padding-right: 0.75rem;\n    padding-bottom: 0px; \n    padding-left: 0.75rem;\n    min-height: 1px; \n}\n  \n  .row .col.m4 {\n    width: 33.33333%;\n    margin-left: auto;\n    left: 30px;\n    right: 0rem;\n}\n  \n  .resume-container {\n    background-color: white;\n    min-height: 350px;\n    background-size: cover;\n\n}\n  \n  .container .row {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n}\n  \n  h5 { \n    color: white;\n    font-size: 1.64rem;\n    line-height: 110%;\n    margin-top: 0.82rem;\n    margin-right: 0px;\n    margin-bottom: 0.656rem;\n}\n  \n  .collection.with-header .collection-header {\n    border: 1px solid #9b6629;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-color: black;\n    padding-top: 10px;\n    padding-right: 20px;\n    padding-bottom: 10px;\n    padding-left: 20px;\n}\n  \n  .collection.with-header .collection-item {\n    line-height: 1.5rem;\n    padding-top: 10px;\n    padding-right: 20px;\n    padding-bottom: 10px;\n}\n  \n  .gold.accent-4 {\n    background-color: #9b6629; \n}\n  \n  li {\n    display: list-item;\n    text-align: -webkit-match-parent;\n}\n  \n  .section {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n  \n  .container .row {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n}\n  \n  p {\n    line-height: 2rem;\n}\n  \n  .center {\n    text-align: center;\n}\n  \n  html {\n    font-size: 15px;\n    font-family: \"Roboto\", sans-sarif;\n    font-weight: normal;\n    color: black;\n}\n"

/***/ }),

/***/ "./src/app/body/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"text-center project-referal\">\n    <div class=\"title text-center\">What We Can Do For Your Project</div>\n  </div>\n</div>\n<div class=\"resume-container\">\n    <div class=\"section center\">\n        <div class=\"row center\">\n            <div class=\"col s12 m4\">\n                <div class=\"panel\">\n                    <ul class=\"collection with-header\">\n                        <li class=\"collection-header gold accent-4\">\n                            <h5>Languages</h5>\n                        </li>\n                        <li class=\"collection-item\">JavaScript (ES6)</li>\n                        <li class=\"collection-item\">TypeScript</li>\n                        <li class=\"collection-item\">Python</li>\n                        <li class=\"collection-item\">Java</li>\n                        <li class=\"collection-item\">CSS</li>\n                        <li class=\"collection-item\">HTML</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col s12 m4\">\n                <div class=\"panel\">\n                    <ul class=\"collection with-header\">\n                        <li class=\"collection-header gold accent-4\">\n                            <h5>Front End Web</h5>\n                        </li>\n                        <li class=\"collection-item\">React</li>\n                        <li class=\"collection-item\">Angular</li>\n                        <li class=\"collection-item\">jQuery</li>\n                        <li class=\"collection-item\">AJAX, JSON</li>\n                        <li class=\"collection-item\">RESTful APIs</li>\n                        <li class=\"collection-item\">Bootstrap</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col s12 m4\">\n                <div class=\"panel\">\n                    <ul class=\"collection with-header\">\n                        <li class=\"collection-header gold accent-4\">\n                            <h5>Back End</h5>\n                        </li>\n                        <li class=\"collection-item\">Node.js</li>\n                        <li class=\"collection-item\">Express</li>\n                        <li class=\"collection-item\">Django</li>\n                        <li class=\"collection-item\">Flask</li>\n                        <li class=\"collection-item\">AWS(EC2, Lambda)</li>\n                        <li class=\"collection-item\">RESTful Routing</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"row center\">\n                <div class=\"col s12 m4\">\n                    <div class=\"panel\">\n                        <ul class=\"collection with-header\">\n                            <li class=\"collection-header gold accent-4\">\n                                <h5>Database</h5>\n                            </li>\n                            <li class=\"collection-item\">MySQL</li>\n                            <li class=\"collection-item\">NoSQL</li>\n                            <li class=\"collection-item\">MongoDB, Mongoose</li>\n                            <li class=\"collection-item\">Django, ORM</li>\n                            <li class=\"collection-item\">SWIFT Core Data</li>\n                            <li class=\"collection-item\">PostgreSQL</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col s12 m4\">\n                    <div class=\"panel\">\n                        <ul class=\"collection with-header\">\n                            <li class=\"collection-header gold accent-4\">\n                                <h5>Software</h5>\n                            </li>\n                            <li class=\"collection-item\">Git</li>\n                            <li class=\"collection-item\">MySQLWorkbench</li>\n                            <li class=\"collection-item\">Postman</li>\n                            <li class=\"collection-item\">Babel</li>\n                            <li class=\"collection-item\">Webpack</li>\n                            <li class=\"collection-item\">Apple ARKit</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col s12 m4\">\n                    <div class=\"panel\">\n                        <ul class=\"collection with-header\">\n                            <li class=\"collection-header gold accent-4\">\n                                <h5>Methodologies</h5>\n                            </li>\n                            <li class=\"collection-item\">OOP</li>\n                            <li class=\"collection-item\">MVC</li>\n                            <li class=\"collection-item\">RESTful Architecture</li>\n                            <li class=\"collection-item\">CRUD Operations</li>\n                            <li class=\"collection-item\">AWS(EC2, Lambda)</li>\n                            <li class=\"collection-item\">RESTful Routing</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n    </div>\n</div>"

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
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
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

module.exports = ""

/***/ }),

/***/ "./src/app/headers/header-blog/header-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header-blog works!\n</p>\n"

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

module.exports = ""

/***/ }),

/***/ "./src/app/headers/header-contact/header-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header-contact works!\n</p>\n"

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

module.exports = ""

/***/ }),

/***/ "./src/app/headers/header-custom-apps/header-custom-apps.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header-custom-apps works!\n</p>\n"

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

module.exports = ".jumbotron {\n    background-attachment: fixed;\n    min-height: 550px;\n    margin-bottom: 0px;\n    background-image: url('coverPhoto.9c2f0ebf77e21efe0e31.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    text-shadow: black 0.3em 0.3em 0.3em;\n  }\n  .title {\n    color: #feff00;\n    font-style: normal;\n    font-family: normal;\n    font-size: 80px;\n    padding-top: 120px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n  }\n  .subtitle {\n    font-size: 28px;\n    color: #feff00;\n    font-style: italic;\n  }"

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
        this.subtitle = "Coding is like anything else, the best are those with no quit in them.";
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

module.exports = ""

/***/ }),

/***/ "./src/app/headers/header-marketing/header-marketing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header-marketing works!\n</p>\n"

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

module.exports = ".overlay {\n    position: absolute;\n    z-index: 1000;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    background: #6F9FD8;\n    top: 50%;\n    left: 50%;\n    padding: 40px;\n    margin-left: -240px;\n    margin-top: -100px;\n    border-radius: 5px;\n}\n\n/* just needed some styling love */\n\n.overlay p {\n    padding: 15px;\n    margin: 0;\n    font-family: sans-serif;\n    font-size: 12px;\n}\n\n/* because we need something in the background */\n\n.learning-content {\n    background-size: cover;\n    width: 100%;\n    height: 680px;\n    background:\n    -webkit-gradient(\n      linear, \n      left top, left bottom, \n      from(rgba(0,0,0,.5)), \n      to(rgba(0,0,0,.5))\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png');\n    background:\n    linear-gradient(\n      rgba(0,0,0,.5), \n      rgba(0,0,0,.5)\n    ),\n    url('coverPhoto.9c2f0ebf77e21efe0e31.png');\n}\n\n.title {\n    color: #feff00;\n    font-style: normal;\n    font-family: normal;\n    font-size: 80px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n}\n\n.subtitle {\n    font-size: 28px;\n    color: #feff00;\n    font-style: italic;\n    text-align: -webkit-center;\n  }"

/***/ }),

/***/ "./src/app/headers/header-web/header-web.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n  <header>\n    <title>Sapper Learning</title>\n  </header>\n  <body>\n    <div class=\"overlay\">\n        <div class=\"title\">\n          Sapper Web Applications\n        </div>\n        <div class=\"subtitle\">\n          Modern Modern Web Design With Spec Ops Subtlety\n        </div>\n      </div>    \n      <!-- Just some background image -->\n      <div class=\"learning-content\"></div>\n  </body>\n</html>\n"

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

module.exports = ".jumbotron {\n  background-attachment: fixed;\n  min-height: 1100px;\n  margin-bottom: 0px;\n  background:\n  -webkit-gradient(\n    linear, \n    left top, left bottom, \n    from(rgba(0,0,0,.5)), \n    to(rgba(0,0,0,.5))\n  ),\n  url('coverPhoto.9c2f0ebf77e21efe0e31.png');\n  background:\n  linear-gradient(\n    rgba(0,0,0,.5), \n    rgba(0,0,0,.5)\n  ),\n  url('coverPhoto.9c2f0ebf77e21efe0e31.png');\n  \n  background-size: cover;\n  background-repeat: no-repeat;\n  text-shadow: black 0.3em 0.3em 0.3em;\n}\n\n.title {\n  color: #feff00;\n  font-style: normal;\n  font-family: normal;\n  font-size: 80px;\n  padding-top: 120px;\n  border-bottom: 1px solid #FFFFFF;\n  border-bottom-color: rgba(255,255,255,0.35);\n  display: inline-block;\n}\n\n.subtitle {\n  font-size: 28px;\n  color: #feff00;\n  font-style: italic;\n}\n\n.learn {\n  font-size: 21px;\n  color: black;\n  text-decoration: underline;\n  font-style: normal;\n  text-shadow: none;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: rgb(211, 211, 211, 0.6);\n  margin-top: 20px;\n  border-radius: 100px;\n  padding: 7px;\n  padding-top: 7px;\n  padding-right: 7px;\n  padding-bottom: 1px;\n  padding-left: 7px;\n  position: absolute;\n  top:580;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  margin: auto;\n}\n\n"

/***/ }),

/***/ "./src/app/headers/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"text-center project-referal\">\n    <div class=\"title text-center\">{{title}}</div>\n    <div class=\"subtitle\"><p>{{subtitle}}</p></div>\n    <br><br>\n    <div class=\"learn\">\n      <!-- <p>{{learn}}</p> -->\n      <a routerLink=\"/learning\">{{learn}}</a>\n    </div>\n    <app-form></app-form>\n    \n  </div>\n</div>"

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
        this.learn = "Do you have what it takes to be a Sapper?";
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

/***/ "./src/app/http.service.ts":
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
                title: "TheAmericanElement.com",
                summary: "Fullstack Web Development",
                backgroundImage: "../../../../assets/coverPhoto.png",
                url: 'http://www.theamericanelement.com'
            },
            {
                title: "Belgrade Lakes Yacht Club",
                summary: "Fullstack Web Development",
                backgroundImage: "../../../../assets/coverPhoto.png",
                url: 'https://greatpondyachtclub.com'
            },
            {
                title: "The New Dawn Trading Company",
                summary: "Fullstack Web Development",
                backgroundImage: "../../../../assets/coverPhoto.png",
                url: 'http://www.newdawntradingcompany.com'
            },
        ];
        this.socialMediaInfo = [
            { linkedIn: "https://linkedin.com/in/johnhavenbradley" },
            { blog: "http://www.theamericanelement.com/" },
            { email: "http://johnhavenbradley@sapperCoding.com" },
        ];
    }
    //   githubAccount: "https://github.com/CrunchyJohnHaven",
    //   linkedIn: "https://linkedin.com/in/johnhavenbradley",
    //   AmericanElement: "http://www.theamericanelement.com/",
    //   Email: "http://johnhavenbradley@gmail.com",
    // };
    HttpService.prototype.getProjectInfo = function () {
        return this.projectInfo;
    };
    HttpService.prototype.getSocialMediaInfo = function () {
        return this.socialMediaInfo;
    };
    HttpService.prototype.newContact = function (newContact) {
        console.log("addContact http");
        return this._http.post('/contact', newContact);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
;


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

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <app-header-contact></app-header-contact>\n    <app-body-contact></app-body-contact>\n  </body>\n</html>"

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

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <app-header-learning></app-header-learning>\n    <app-body-learning></app-body-learning>\n  </body>\n</html>"

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
var LearningPlatformComponent = /** @class */ (function () {
    function LearningPlatformComponent() {
    }
    LearningPlatformComponent.prototype.ngOnInit = function () {
    };
    LearningPlatformComponent = __decorate([
        core_1.Component({
            selector: 'app-learning-platform',
            template: __webpack_require__("./src/app/pages/learning-platform/learning-platform.component.html"),
            styles: [__webpack_require__("./src/app/pages/learning-platform/learning-platform.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
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