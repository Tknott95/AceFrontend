webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<tk-nav>\n    <router-outlet></router-outlet>\n</tk-nav>\n\n\n <!--<tk-intro-section></tk-intro-section>\n\n\n  <tk-contact-sec></tk-contact-sec>\n      <tk-lang-cara></tk-lang-cara>\n\n <tk-footer></tk-footer>-->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  text-align: center; }\n\n.intro {\n  padding-top: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'tk';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/bundles/platform-browser-animations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_reverse_pipe__ = __webpack_require__("../../../../../src/app/pipes/reverse.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_intro_section_intro_section_component__ = __webpack_require__("../../../../../src/app/components/intro-section/intro-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_lang_cara_lang_cara_component__ = __webpack_require__("../../../../../src/app/components/lang-cara/lang-cara.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_contact_sec_contact_sec_component__ = __webpack_require__("../../../../../src/app/components/contact-sec/contact-sec.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_pages_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/pages/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pages_about_about_component__ = __webpack_require__("../../../../../src/app/components/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pages_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/pages/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_pages_contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/components/pages/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_contact_form_contact_form_component__ = __webpack_require__("../../../../../src/app/components/contact-form/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_quote_widget_quote_widget_component__ = __webpack_require__("../../../../../src/app/components/quote-widget/quote-widget.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* Services */



/* PIPES */

/* Gesture Support (W/ M Design) */












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_18__components_pages_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_17__components_pages_about_about_component__["a" /* AboutComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_16__components_pages_blog_blog_component__["a" /* BlogComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_19__components_pages_contact_page_contact_page_component__["a" /* ContactPageComponent */] }
    // { path: '**', component: PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_intro_section_intro_section_component__["a" /* IntroSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_lang_cara_lang_cara_component__["a" /* LangCaraComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_contact_sec_contact_sec_component__["a" /* ContactSecComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_pages_blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_pages_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_pages_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_pages_contact_page_contact_page_component__["a" /* ContactPageComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_contact_form_contact_form_component__["a" /* ContactFormComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_quote_widget_quote_widget_component__["a" /* QuoteWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_reverse_pipe__["a" /* ReversePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["BrowserAnimationsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["NoopAnimationsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdButtonModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_7__services_lang_service__["a" /* LangService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact-form/contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrpr col-md-8 col-md-offset-2\">\n\n<md-card class=\"first\">\n\t<md-tab-group>\n  <md-tab label=\"CONTACT via. Text\">\n\n\t<md-card>\n    <h1>CONTACT VIA TEXT</h1>\n  \t<form action=\"http://localhost:8080/txt\" method=\"POST\">\n\t\t\t\t\t<div class=\"col-md-6 form-line\">\n\t\t\t  \t\t\t<div class=\"form-group\">\n\t\t\t  \t\t\t\t<label for=\"exampleInputUsername\">Full Name</label>\n\t\t\t\t\t    \t<input name=\"msg-name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\" Enter Name\">\n\t\t\t\t  \t\t</div>\n\t\t\t\t  \n\t\t\t\t\t  \t<div class=\"form-group\">\n\t\t\t\t\t    \t<label for=\"telephone\">Phone Number</label>\n\t\t\t\t\t    \t<input  name=\"msg-num\" type=\"tel\" class=\"form-control\" id=\"telephone\" placeholder=\" Enter 10-digit mobile no.\">\n\t\t\t  \t\t\t</div>\n\t\t\t  \t\t</div>\n\t\t\t  \t\t<div class=\"col-md-6\">\n\t\t\t  \t\t\t<div class=\"form-group\">\n\t\t\t  \t\t\t\t<label for =\"description\"> Message</label>\n\t\t\t  \t\t\t \t<textarea name=\"msg-to-trev\" class=\"form-control\" id=\"description\" placeholder=\"Enter Your Message\"></textarea>\n\t\t\t  \t\t\t</div>\n\t\t\t  \t\t\t<div>\n\n\t\t\t  \t\t\t\t<button  type=\"submit\" class=\"btn btn-default submit\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>  Send Message</button>\n\t\t\t  \t\t\t</div>\n\t\t\t  \t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n</md-card>\n\n  </md-tab>\n  <md-tab label=\"CONTACT via. Email\">\n\n\n  <md-card>\n    <h1>CONTACT VIA EMAIL</h1>\n  \t<form action=\"http://localhost:8080/email\" method=\"POST\">\n\t\t\t\t\t<div class=\"col-md-6 form-line\">\n\t\t\t  \t\t\t<div class=\"form-group\">\n\t\t\t  \t\t\t\t<label for=\"exampleInputUsername\">Your name</label>\n\t\t\t\t\t    \t<input name=\"mail-author\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\" Enter Name\">\n\t\t\t\t  \t\t</div>\n\t\t\t\t  \t\t<div class=\"form-group\">\n\t\t\t\t\t    \t<label for=\"exampleInputEmail\">Email Address</label>\n\t\t\t\t\t    \t<input  name=\"mail-from\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail\" placeholder=\" Enter Email id\">\n\t\t\t\t\t  \t</div>\t\n\t\t\t\t\t  \t<div class=\"form-group\">\n\t\t\t\t\t    \t<label for=\"telephone\">Subject</label>\n\t\t\t\t\t    \t<input  name=\"mail-subj\" type=\"tel\" class=\"form-control\" id=\"telephone\" placeholder=\" Enter 10-digit mobile no.\">\n\t\t\t  \t\t\t</div>\n\t\t\t  \t\t</div>\n\t\t\t  \t\t<div class=\"col-md-6\">\n\t\t\t  \t\t\t<div class=\"form-group\">\n\t\t\t  \t\t\t\t<label for =\"description\"> Message</label>\n\t\t\t  \t\t\t \t<textarea name=\"mail-to-trev\"  class=\"form-control\" id=\"description\" placeholder=\"Enter Your Message\"></textarea>\n\t\t\t  \t\t\t</div>\n\t\t\t  \t\t\t<div>\n\n\t\t\t  \t\t\t\t<button  type=\"submit\" class=\"btn btn-default submit\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>  Send Message</button>\n\t\t\t  \t\t\t</div>\n\t\t\t  \t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n</md-card>\n\n  </md-tab>\n</md-tab-group>\n</md-card>\n\n<md-card>\n\t  <h4>Many, many jobs aren’t advertised, so if you want to be in with a chance of getting that internal promotion or taking a role outside your company as a step up, you have to network to find out about them. People recommend people they like, so while you might not have met the person you will be working for in the future you might have met one of their contacts <span>who could put you forward for that dream job.</span></h4>\n\n</md-card>\n \n\n</div>\n\n\n<tk-footer></tk-footer>"

/***/ }),

/***/ "../../../../../src/app/components/contact-form/contact-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrpr {\n  margin-bottom: 150px; }\n  .wrpr md-tab {\n    font-family: 'Bevan', cursive;\n    color: white; }\n  .wrpr md-card {\n    box-shadow: black 1px 1px;\n    color: white;\n    background-color: rgba(33, 33, 33, 0.1);\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -ms-flex-item-align: textarea;\n        -ms-grid-row-align: textarea;\n        align-self: textarea;\n      align-self-width: 500px;\n      align-self-height: 80px;\n    margin-bottom: 200px; }\n    .wrpr md-card.first {\n      margin: 230px 50px 100px;\n      background-color: transparent; }\n    .wrpr md-card h1 {\n      color: lightcyan;\n      text-shadow: black 4px 4px; }\n    .wrpr md-card h4 {\n      color: lightcyan;\n      box-shadow: black 1px 1px;\n      font-family: 'Playfair Display', serif;\n      font-size: 40px; }\n      .wrpr md-card h4 span {\n        color: cyan;\n        opacity: .5; }\n    .wrpr md-card input,\n    .wrpr md-card form,\n    .wrpr md-card td,\n    .wrpr md-card table {\n      color: white;\n      background-color: rgba(33, 33, 33, 0) !important; }\n  .wrpr .content-header {\n    font-family: 'Oleo Script', cursive;\n    color: #fcc500;\n    font-size: 45px; }\n  .wrpr .section-content {\n    text-align: center; }\n  .wrpr #contact {\n    font-family: 'Teko', sans-serif;\n    padding-top: 60px;\n    width: 100%;\n    width: 100vw;\n    height: 100%;\n    background: #3a6186;\n    /* fallback for old browsers */\n    /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to left, #3a6186, black);\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    color: #fff; }\n  .wrpr .contact-section {\n    padding-top: 40px; }\n  .wrpr .contact-section .col-md-6 {\n    width: 50%; }\n  .wrpr .form-line {\n    border-right: 1px solid #B29999; }\n  .wrpr .form-group {\n    margin-top: 10px; }\n  .wrpr label {\n    font-size: 1.3em;\n    line-height: 1em;\n    font-weight: normal;\n    color: lightcyan; }\n  .wrpr .form-control {\n    font-size: 1.3em;\n    color: #080808; }\n  .wrpr textarea.form-control {\n    height: 135px;\n    opacity: .8;\n    /* margin-top: px;*/ }\n  .wrpr .submit {\n    font-size: 1.1em;\n    float: right;\n    width: 150px;\n    background-color: transparent;\n    color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact-form/contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_contact_model__ = __webpack_require__("../../../../../src/app/models/contact.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MdSnackBar } from '@angular/material';

var ContactFormComponent = (function () {
    // activeButton: string = 'firstName.value && message.value && lastName.value'; FormControl add later @TODO
    // disabledButton: string = '!firstName.value || !message.value || !lastName.value';
    function ContactFormComponent() {
        this.contactModel = new __WEBPACK_IMPORTED_MODULE_1__models_contact_model__["a" /* ContactModel */]();
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        console.log(this.contactModel);
    };
    // /* NEED TO BE CORRELATED W/ MODEL @TODO */
    // openSnackBar(message: string, action: string) {
    //   message = 'Message Sent to Trevor Knott Successfully!';
    //   action = '(970) 581-3161';
    //   this.snackBar.open(message, action, {
    //     duration: 2000,
    //   });
    // }
    ContactFormComponent.prototype.sendInfo = function () {
        // this.openSnackBar('s', 'a');
        console.log(this.contactModel);
        // return this._http.put('https://evening-dusk-42226.herokuapp.com/new', this.contactModel);
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-contact-form',
        template: __webpack_require__("../../../../../src/app/components/contact-form/contact-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact-form/contact-form.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactFormComponent);

//# sourceMappingURL=contact-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact-sec/contact-sec.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"jumbotron text-center\">\n  <div class=\"col-md-8 col-md-offset-2\">\n    <!--<h1>GET IN TOUCH</h1> \n  <p>Enter your email to begin</p> \n  <form class=\"form-inline\">\n    <div class=\"input-group\">\n      <input type=\"email\" class=\"form-control\" size=\"50\" placeholder=\"Email Address\" required>\n      <div class=\"input-group-btn\">\n        <button type=\"button\" class=\"btn btn-danger\">Begin Message</button>\n      </div>\n    </div>\n  </form>-->\n\n    <section id=\"services\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <h1 class=\"section-heading\">At Your Service</h1>\n                    <hr class=\"primary\">\n                </div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box animated fadeInUp\">\n                        <i class=\"fa fa-4x fa-diamond text-primary sr-icons\"></i>\n                        <h3>Modern Design</h3>\n                        <p class=\"text-muted\">Always keeping up to date with the newest trends.</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box animated fadeInUp\">\n                        <i class=\"fa fa-4x fa-paper-plane text-primary sr-icons\"></i>\n                        <h3>Ready to Ship</h3>\n                        <p class=\"text-muted\">Within a few weeks you will have a full scale immersive application.</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box animated fadeInUp\">\n                        <i class=\"fa fa-4x fa-newspaper-o text-primary sr-icons\"></i>\n                        <h3>Up to Date</h3>\n                        <p class=\"text-muted\">We update dependencies to keep things fresh.</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box animated fadeInUp\">\n                        <i class=\"fa fa-4x fa-heart text-primary sr-icons\"></i>\n                        <h3>Made with Love</h3>\n                        <p class=\"text-muted\">You have to make your websites with love these days!</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact-sec/contact-sec.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: lightcyan;\n  padding: 100px 25px;\n  margin-bottom: 0;\n  height: 500px; }\n  .jumbotron h1 {\n    font-size: 90px;\n    color: black;\n    text-shadow: lightcyan 2px 2px; }\n  .jumbotron img {\n    height: 250px; }\n\n.container-fluid {\n  padding: 60px 50px; }\n\nh3 {\n  text-shadow: lightcyan .25px .25px; }\n\n.bg-grey {\n  background-color: #f6f6f6; }\n\n.logo-small {\n  color: lightcyan;\n  font-size: 50px; }\n\n.logo {\n  color: lightcyan;\n  font-size: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact-sec/contact-sec.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSecComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactSecComponent = (function () {
    function ContactSecComponent() {
    }
    ContactSecComponent.prototype.ngOnInit = function () {
    };
    return ContactSecComponent;
}());
ContactSecComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-contact-sec',
        template: __webpack_require__("../../../../../src/app/components/contact-sec/contact-sec.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact-sec/contact-sec.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactSecComponent);

//# sourceMappingURL=contact-sec.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrapper\">\n  <footer>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-10 col-md-offset-1\">\n         <div class=\"col-xs-6 text-center\" style=\"padding-top: 10px;\">\n           <h4>Trevor Knott</h4>\n           <p>OTHER is OLD ADDRESSS.. <br> now in Denver, CO</p>\n           <p>1993 Cataluna dr.<br>Windsor, CO 80550</p>\n           <ul class=\"list-unstyled\">\n             <li><i class=\"fa fa-phone fa-fw\"></i> (970) 581-3161</li>\n             <li><i class=\"fa fa-envelope-o fa-fw\"></i>  <a href=\"mailto:tknott95@hotmail.com\">tknott95@hotmail.com</a>\n             </li>\n           </ul>\n         </div>\n\n          <div class=\"col-xs-6\">\n            <h3 style=\"font-family: 'Merriweather', serif;\">Links to other profiles!</h3>\n            <a href=\"https://www.linkedin.com/in/trevor-knott-32184269\n\"><i class=\"fa fa-linkedin fa-fw fa-5x\"></i></a>\n            <a href=\"https://github.com/Tknott95\"><i class=\"fa fa-github fa-fw fa-5x\"></i></a>\n            <a href=\"https://trevorknott.wordpress.com/\"><i class=\"fa fa-comments fa-fw fa-5x\"></i></a>\n            <a href=\"http://ec2-54-153-114-109.us-west-1.compute.amazonaws.com/\"><i class=\"fa fa-cloud fa-fw fa-5x\"></i></a>\n\n            <br>\n\n            <hr class=\"small\">\n            <p class=\"text-muted\">Copyright &copy; TrevorKnott 2017</p>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-wrapper {\n  background-color: rgba(39, 43, 48, 0.2);\n  color: white; }\n  .footer-wrapper h4, .footer-wrapper strong {\n    color: white;\n    font-weight: bolder; }\n  .footer-wrapper a {\n    color: lightcyan;\n    opacity: .5; }\n  .footer-wrapper a:hover {\n    color: rgba(47, 79, 79, 0.5);\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/intro-section/intro-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"intro-sec\">\n  <div class=\"intro-content col-md-8 col-md-offset-2\">\n    `\n    <div class=\"col-lg-4 col-md-2 col-xs-12 card-hl\">\n      <md-card *ngIf=\"posts\" class=\"example-card animated fadeInRight\">\n        <md-card-header>\n          <div md-card-avatar class=\"example-header-image\"></div>\n          <md-card-title>{{posts[6].Title}}</md-card-title>\n          <md-card-subtitle>{{posts[6].Author}} || {{posts[6].Category}}</md-card-subtitle>\n        </md-card-header>\n        <img md-card-image src=\"http://ec2-54-153-114-109.us-west-1.compute.amazonaws.com/Public/pics/{{posts[6].Image}}\">\n        <md-card-content>\n          <p>\n            {{posts[6].Content}}\n          </p>\n        </md-card-content>\n        <md-card-actions>\n          <a href=\"/blog\" md-button>VIEW BLOG</a>\n          <a target=\"_blank\" href=\"http://ec2-54-153-114-109.us-west-1.compute.amazonaws.com/Public/pics/{{posts[6].Image}}\" md-button>VIEW PHOTO ON GO SERVER</a>\n        </md-card-actions>\n      </md-card>\n    </div>\n\n    <div class=\"col-lg-8 col-md-10 hidden-md hidden-sm hidden-xs animated fadeIn\">\n      <h1 class=\"title-txt\">TREVOR KNOTT</h1>\n      <hr>\n      <h4>Ambitious crafter, pragmatic thinker, detail oriented professional ... the image of the artist has changed radically over the centuries. Art now expressed through logic spinning off a new era as we know it.\n      </h4>\n   <md-card class=\"lang-card hidden-md animated fadeInRight\">\n        <h5>golang typscript elixir C# \n        golang typscript elixir C# g\n        olang typscript elixir C# \n        golang typscript elixir C#\n        golang typscript elixir C#\n        golang typscript elixir C#\n        golang typscript elixir C#\n        golang typscript elixir C#\n        golang typscript elixir C#\n        golang typscript elixir C#\n        golang typscript elixir C#\n\n      </h5>\n   </md-card>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/intro-section/intro-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".intro-sec {\n  height: 800px;\n  /* Create the parallax scrolling effect */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  overflow: hidden; }\n  .intro-sec .title-txt {\n    text-shadow: black 8px 8px; }\n  .intro-sec .card-hl {\n    margin-top: -25px; }\n    .intro-sec .card-hl md-card-title {\n      text-shadow: black 4px 4px; }\n    .intro-sec .card-hl :hover {\n      opacity: .8; }\n  .intro-sec .example-card {\n    width: 400px; }\n  .intro-sec .example-header-image {\n    background-image: url(\"\");\n    background-size: cover; }\n  .intro-sec md-card.lang-card {\n    margin: 0; }\n  .intro-sec md-card {\n    margin: 85px 0;\n    background-color: rgba(0, 0, 0, 0.1);\n    color: lightcyan;\n    overflow: hidden; }\n    .intro-sec md-card md-card-title {\n      font-family: 'Bevan', cursive;\n      font-size: 30px; }\n  .intro-sec .intro-content {\n    margin-top: 50px;\n    padding: 250px auto; }\n    .intro-sec .intro-content h1,\n    .intro-sec .intro-content h2,\n    .intro-sec .intro-content h3,\n    .intro-sec .intro-content h4,\n    .intro-sec .intro-content h5,\n    .intro-sec .intro-content h6,\n    .intro-sec .intro-content p {\n      color: rgba(224, 255, 255, 0.5); }\n    .intro-sec .intro-content h1 {\n      font-size: 150px;\n      color: lightgray;\n      text-align: center; }\n    .intro-sec .intro-content h3 {\n      font-size: 80px;\n      color: lightcyan;\n      text-align: center; }\n    .intro-sec .intro-content h4 {\n      font-size: 50px;\n      font-weight: 300;\n      font-family: 'Times New Roman', Times, serif; }\n\n.mat-sidenav-container,\n.mat-sidenav-content {\n  -webkit-transform: none !important;\n          transform: none !important;\n  transition: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/intro-section/intro-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroSectionComponent = (function () {
    function IntroSectionComponent(_blogService) {
        this._blogService = _blogService;
        this.posts = [];
    }
    IntroSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._blogService.getBlogPosts()
            .subscribe(function (res) { return _this.posts = res; });
    };
    return IntroSectionComponent;
}());
IntroSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-intro-section',
        template: __webpack_require__("../../../../../src/app/components/intro-section/intro-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/intro-section/intro-section.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object])
], IntroSectionComponent);

var _a;
//# sourceMappingURL=intro-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/lang-cara/lang-cara.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lang-img-wrapper\">\n  <div class=\"col-md-10 col-md-offset-1\">\n\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-3\"><i align=\"center\" class=\"{{logo1}}\"></i></div>\n      <div class=\"col-xs-4 col-sm-3\"><i align=\"center\" class=\"{{logo2}}\"></i></div>\n      <div class=\"col-xs-4 col-sm-3\"><i align=\"center\" class=\"{{logo4}}\"></i></div>\n      <div class=\"hidden-xs col-sm-3\"><i align=\"center\" class=\"{{logo3}}\"></i></div>\n    </div>\n    <span class=\"col-xs-9\"></span>\n    <p class=\"col-xs-3\">... and many more!</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/lang-cara/lang-cara.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lang-img-wrapper {\n  background-color: rgba(169, 169, 169, 0.1);\n  height: 225px; }\n  .lang-img-wrapper .row {\n    padding-top: 20px; }\n  .lang-img-wrapper p {\n    padding-top: 7px;\n    color: white;\n    opacity: 0.2;\n    font-size: 12px; }\n  .lang-img-wrapper .devicons {\n    font-size: 180px;\n    color: lightcyan;\n    opacity: 0.5;\n    margin-top: 40px;\n    display: block;\n    margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lang-cara/lang-cara.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangCaraComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LangCaraComponent = (function () {
    function LangCaraComponent(elementRef) {
        this.elementRef = elementRef;
        this.unity3DLogo = 'devicons devicons-unity_small animated fadeInRight';
        this.angularLogo = 'devicons devicons-angular';
        this.npmLogo = 'devicons devicons-npm animated fadeInRight';
        this.sassLogo = 'devicons devicons-sass';
        this.linuxPengLogo = 'devicons devicons-linux';
        this.nodeJsLogo = 'devicons devicons-nodejs animated fadeInLeft';
        this.golangLogo = 'devicons devicons-go';
        this.gulpLogo = 'devicons devicons-gulp animated fadeInLeft';
        this.logo1 = this.angularLogo;
        this.logo2 = this.nodeJsLogo;
        this.logo3 = this.gulpLogo;
        this.logo4 = this.sassLogo;
    }
    LangCaraComponent.prototype.ngOnInit = function () {
        this.logoChangeInterval();
    };
    LangCaraComponent.prototype.logoChangeInterval = function () {
        var _this = this;
        setInterval(function () {
            _this.nextLogo();
        }, 5000);
    };
    LangCaraComponent.prototype.nextLogo = function () {
        if (this.logo1 == this.angularLogo) {
            this.logo1 = this.unity3DLogo;
        }
        else {
            this.logo1 = this.angularLogo;
        }
        if (this.logo2 == this.nodeJsLogo) {
            this.logo2 = this.linuxPengLogo;
        }
        else {
            this.logo2 = this.nodeJsLogo;
        }
        if (this.logo3 == this.gulpLogo) {
            this.logo3 = this.golangLogo;
        }
        else {
            this.logo3 = this.gulpLogo;
        }
        if (this.logo4 == this.sassLogo) {
            this.logo4 = this.npmLogo;
        }
        else {
            this.logo4 = this.sassLogo;
        }
        return this.logo1 && this.logo2 && this.logo3 && this.logo4;
    };
    return LangCaraComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rightArrowBtn'),
    __metadata("design:type", Object)
], LangCaraComponent.prototype, "arrowBtn", void 0);
LangCaraComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-lang-cara',
        template: __webpack_require__("../../../../../src/app/components/lang-cara/lang-cara.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/lang-cara/lang-cara.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], LangCaraComponent);

var _a;
//# sourceMappingURL=lang-cara.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid my-nav-wrapper\">\n  <div class=\"col-md-8 col-md-offset-2\">\n     <div layout=\"column\" layout-fill>\n  <md-toolbar class=\"md-toolbar-tools\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/TK_home_icon.svg/2000px-TK_home_icon.svg.png\"/>\n    <div class=\"my-text\">\n      <span>TREVOR</span><span>KNOTT</span>\n    </div>\n    <span class=\"my-fill-remaining-space\"></span>\n    <span><i class=\"material-icons\" (mouseover)=\"sidenav.toggle()\"  (mouseover)=\"sidenav2.toggle()\">&#xE5C3;</i></span>\n    <!--<span>Surrealism is destructive, but it destroys only what it considers to be shackles limiting our vision.</span>-->\n  </md-toolbar>\n </div>\n  </div>\n</div>\n\n<md-sidenav-container style=\"background: url('https://balancethroughthelens.files.wordpress.com/2012/07/dsc_0608ca1csg.jpg')\">\n\n<div class=\"main-content\">\n  <ng-content></ng-content>\n</div>\n\n  <md-sidenav #sidenav class=\"my-sidenav\" align=\"end\">\n    \n    <!--<md-list class=\"nav-list\"> <!-- RIGHT SIDE --><!--\n      <md-list-item>Home</md-list-item>\n    <md-list-item>About</md-list-item>\n\n  <md-list-item>Item 3</md-list-item>\n</md-list>-->\n\n<div class=\"nav-list\">\n  <md-grid-list cols=\"1\" rowHeight=\"1:1\">\n  <a href=\"/\"><md-grid-tile><h1>HOME</h1></md-grid-tile></a>\n  <a href=\"/about\"><md-grid-tile><h1>ABOUT</h1></md-grid-tile></a>\n  <a href=\"/contact\"><md-grid-tile><h1>CONTACT</h1></md-grid-tile></a>\n  <a href=\"/blog\"><md-grid-tile><h1>BLOG</h1></md-grid-tile></a>\n    <!-- Row 2 -->\n  <!--<md-grid-tile>HOME</md-grid-tile>\n  <md-grid-tile>ABOUT</md-grid-tile>\n  <md-grid-tile>CONTACT</md-grid-tile>\n  <md-grid-tile>BLOG</md-grid-tile>-->\n\n    <!-- Row 2 -->\n  <!--<md-grid-tile><i class=\"devicons devicons-linux\"></i></md-grid-tile>\n  <md-grid-tile><i class=\"devicons devicons-debian\"></i></md-grid-tile>\n  <md-grid-tile><i class=\"devicons devicons-nginx\"></i></md-grid-tile>\n  <md-grid-tile><i class=\"devicons devicons-github_full\"></i></md-grid-tile>-->\n</md-grid-list>\n</div>\n\n  </md-sidenav>\n\n  <md-sidenav #sidenav2 class=\"my-sidenav-left\">\n    \n    <span class=\"nav-quote\">\n      <h2>The future belongs to those who believe in the beauty of their dreams.</h2>\n      <h3>- Anna Eleanor Roosevelt</h3>\n    </span>\n\n  </md-sidenav>\n\n \n\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-nav-wrapper img {\n  height: 80px;\n  padding-left: 0px; }\n\n.my-nav-wrapper .my-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.my-nav-wrapper md-toolbar {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 5%;\n  position: absolute;\n  z-index: 10;\n  margin-top: 20px; }\n\n.my-nav-wrapper .material-icons {\n  color: white;\n  font-size: 40px; }\n  .my-nav-wrapper .material-icons:hover {\n    cursor: pointer;\n    size: 5px;\n    opacity: 0.9; }\n\n.my-text {\n  color: white;\n  font-size: 40px; }\n  .my-text .span {\n    font-weight: normal; }\n\nmd-sidenav-container .devicons {\n  font-size: 80px; }\n\nmd-sidenav-container .my-sidenav {\n  padding: 20px;\n  width: 15%;\n  background-color: rgba(224, 255, 255, 0.1);\n  color: lightcyan; }\n\nmd-sidenav-container .nav-list md-grid-tile {\n  background: rgba(224, 255, 255, 0.5);\n  /* or absolute */\n  padding: auto 20px; }\n  md-sidenav-container .nav-list md-grid-tile:hover {\n    opacity: .5; }\n\nmd-sidenav-container .my-sidenav-left {\n  padding: 20px;\n  width: 40%;\n  background-color: rgba(224, 255, 255, 0.5);\n  color: white; }\n\nmd-sidenav-container .nav-quote {\n  position: fixed;\n  /* or absolute */\n  top: 40%;\n  margin: auto 40px;\n  text-align: center; }\n\n.my-outter-sidenav {\n  padding: 20px;\n  width: 100px;\n  height: 100%;\n  margin-top: 60px;\n  background-color: #272b30;\n  color: white; }\n\n.nav-text {\n  font-family: 'Lobster', cursive;\n  font-size: 55px; }\n\n.md-list {\n  padding-top: 200px; }\n\n.md-list-item,\nh1 {\n  padding: 40px; }\n\n.main-content {\n  padding-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-nav',
        template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-intro\">\n  <div class=\"text-center\">\n    <h1>ABOUT ME</h1>\n  </div>\n</div>\n\n\n<div class=\"col-md-8 col-md-offset-2\">\n  <div class=\"row\">\n  <div class=\"about-wrapper\">\n <div class=\"col-sm-6 hidden-xs\">\n   <md-card class=\"example-card\">\n     <md-card-header>\n       <div md-card-avatar class=\"example-header-image\"></div>\n       <md-card-title>Stats</md-card-title>\n     </md-card-header>\n     <md-card-content>\n       <h3>Age: </h3> <p>21</p>\n       <hr>\n       <h3>Height: </h3> <p>6'2</p>\n       <hr>\n       <h3>Weight: </h3> <p>200</p>\n       <hr>\n       <h3>Fav Coding Music Genre</h3> <p>EDM (Sometimes Classical)</p>\n       <hr>\n       <h3>Fav Musician: </h3> <p>Machine Gun Kelly</p>\n       <hr>\n       <h3>Fav Qoute: </h3> <p>“Whatever the mind can conceive and believe, it can achieve.” ― Napoleon Hill</p>\n       <hr>\n       <h3>Hobbies: </h3> <p>Fitness, Code, Fishing, Random Adventures</p>\n       <hr>\n       <h3>Fav Two Programming Lang: </h3> <p>TypeScript/Elixir meh >___<</p>\n       <hr>\n       <h3>Fav Framework: </h3> <p>Angular2 by far! (Even though it is frontend and hard to compare)</p>\n       <hr>\n       <h3>Fav PC Languages: </h3> <p>TypeScript, Elixir, Shell</p>\n       <br>\n       <br>\n   </md-card-content>\n   </md-card>\n </div>\n  <div class=\"col-sm-6 col-xs-12\">\n    <md-card class=\"example-card\">\n      <md-card-header>\n        <div md-card-avatar class=\"example-header-image\"></div>\n        <md-card-title>About Me</md-card-title>\n      </md-card-header>\n      <img md-card-image src=\"{{mainCardImg}}\">\n      <md-card-content>\n        <p>\n          Ever since I have been a little kid I have had the motivation to create. Starting with a love for puzzles building forts everywhere, I had a passion for creating and imagining something that wasn't even there. As I aged I was always playing sports, training for sports, or watching sports. This caused me to always spend my time I got away to play and mod video games. After going out to California for baseball, I had to leave after a semester due to re-tearing my UCL. (where I previously received Tommy John surgery) This was when I was able to chase my passion in technology. Currently I have received my Micro-Degree from the DaVinci Institute, as well as multiple certificates. (Ruby on Rails and C# Game Development). Once I completed everything I felt needed at DaVinci, I took to my own time learning other languages and skills. I am now a full stack developer and am now just improving upon my skills. A few things I love to do other then computers are lifting (I am a fitness nut), robotics, and fishing. At the age of 20 I know I have my life ahead of me, but I also know it will be full of technology. I have an obsession with self improvement and furthering myself...\n        </p>\n      </md-card-content>\n\n       <md-card-actions>\n        <button md-button target=\"_blank\" src=\"https://github.com/Tknott95\">GITHUB</button>\n        <button md-button target=\"_blank\" src=\"https://github.com/Tknott95\">FACEBOOK</button>\n        <button md-button target=\"_blank\" src=\"https://github.com/Tknott95\">LINKED IN</button>\n      </md-card-actions>\n    </md-card>\n </div>\n</div>\n</div>\n\n</div>\n\n\n<tk-footer></tk-footer>"

/***/ }),

/***/ "../../../../../src/app/components/pages/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-wrapper {\n  background-color: rgba(8, 11, 20, 0.8); }\n  .about-wrapper md-card {\n    margin: 50px 10px;\n    background-color: rgba(173, 216, 230, 0.1);\n    color: lightcyan;\n    box-shadow: 20px white;\n    border: 4px solid black; }\n    .about-wrapper md-card img {\n      height: 20%;\n      max-height: 700px; }\n\n.about-intro {\n  height: 50%;\n  background-image: url(\"http://img0.liveinternet.ru/images/attach/c/1//50/820/50820173_1257502935_10.jpg\"); }\n  .about-intro .text-center {\n    padding-top: 100px; }\n  .about-intro h1 {\n    color: white;\n    font-size: 100px;\n    text-shadow: black 5px 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.imgTexWBaby = 'https://pbs.twimg.com/profile_images/797636250869997570/7_MI-vSf.jpg';
        this.imgDugouting = 'https://v.cdn.vine.co/r/avatars/B68F437E-F58B-4598-88A6-E9A9BDBF4F50-748-000000A25992102776f5aea9d3.jpg?versionId=mIetbj5d9Pb.MagwzYn7WzAXBwqCftVi';
        this.mainCardImg = this.imgDugouting;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-about',
        template: __webpack_require__("../../../../../src/app/components/pages/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-intro\">\n  <div class=\"text-center\">\n    <h1>BLOG</h1>\n  </div>\n</div>\n\n<div class=\"col-md-8 col-md-offset-2\">\n  <!--<md-card>\n  <div class=\"tk-blog-widget-wrapper\" *ngIf=\"posts.length > 0\">\n  <md-tab-group>\n    <div *ngFor=\"let post of posts\">\n    <md-tab label=\"{{post.Title}}\">\n            <h5>{{post.ID | json}}</h5>\n      <img  src=\"http://localhost:8080/Public/pics/{{post.Image}}\"/>\n\n      <h2>{{post.Content | json}}</h2>\n      <hr>\n      <h6>{{post.Date | json }}</h6>\n    </md-tab>\n    </div>\n</md-tab-group>\n</div>\n\n</md-card>-->\n\n\n<div class=\"col-md-8 col-md-offset-2\">\n\n  <!--<md-card>\n    <h1>BLOG - Microservice Based</h1>\n  </md-card>-->\n\n\n<div class=\"post-wrpr\" *ngFor=\"let p of posts\">\n\n    <md-card class=\"example-card animated fadeInDown\">\n  <md-card-header>\n    <div md-card-avatar  class=\"example-header-image\"></div>\n    <md-card-title>{{p.Title}}</md-card-title>\n    <md-card-subtitle>{{p.Catgory}}</md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src=\"http://ec2-54-153-114-109.us-west-1.compute.amazonaws.com/Public/pics/{{p.Image}}\">\n  <md-card-content>\n    <p center text-center>\n      {{p.Category}} - {{p.Date}} - {{p.Author}}\n    </p>\n\n    <p center text-center>\n      {{p.Content}}\n    </p>\n    \n  </md-card-content>\n\n</md-card>\n</div>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/blog/blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  margin-top: 100px;\n  width: 70%;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  color: black;\n  margin-left: auto;\n  margin-right: auto;\n  float: none; }\n  md-card:hover {\n    opacity: .8;\n    cursor: pointer;\n    box-shadow: 5px; }\n  md-card p {\n    overflow: hidden; }\n\n.example-card {\n  width: 80%; }\n\n.example-header-image {\n  background-size: cover; }\n\n.post-wrpr {\n  margin-left: auto;\n  margin-right: auto;\n  float: none; }\n\n.blog-intro {\n  height: 50%;\n  background-image: url(\"http://img0.liveinternet.ru/images/attach/c/1//50/820/50820173_1257502935_10.jpg\"); }\n  .blog-intro .text-center {\n    padding-top: 100px; }\n  .blog-intro h1 {\n    color: white;\n    font-size: 100px;\n    text-shadow: black 5px 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ReversePipe } from '../../../pipes/reverse.pipe';
var BlogComponent = (function () {
    function BlogComponent(_blogService, sanitizer) {
        this._blogService = _blogService;
        this.sanitizer = sanitizer;
        this.postTitle = null;
        this.posts = [];
        // for (let post of this.posts) {
        //   if (post.title.length > 10) {
        //     this.postTitle = post.splice(1, 10).concat(' ...');
        //   }
        // }
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(console.log(JSON.stringify(this.posts)), 5000);
        this._blogService.getBlogPosts()
            .subscribe(function (res) { return _this.posts = res; });
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-blog',
        template: __webpack_require__("../../../../../src/app/components/pages/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/blog/blog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _b || Object])
], BlogComponent);

var _a, _b;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<tk-contact-form></tk-contact-form>"

/***/ }),

/***/ "../../../../../src/app/components/pages/contact-page/contact-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactPageComponent = (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    return ContactPageComponent;
}());
ContactPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-contact-page',
        template: __webpack_require__("../../../../../src/app/components/pages/contact-page/contact-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/contact-page/contact-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactPageComponent);

//# sourceMappingURL=contact-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<tk-intro-section></tk-intro-section>\n\n\n<tk-contact-sec></tk-contact-sec>\n<tk-lang-cara></tk-lang-cara>\n\n<tk-footer></tk-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-landing',
        template: __webpack_require__("../../../../../src/app/components/pages/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/landing/landing.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/quote-widget/quote-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <link href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\" rel=\"stylesheet\">\n</head>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class='col-md-offset-2 col-md-8 text-center'>\n    <h2>Responsive Quote Carousel BS3</h2>\n    </div>\n  </div>\n  <div class='row'>\n    <div class='col-md-offset-2 col-md-8'>\n      <div class=\"carousel slide\" data-ride=\"carousel\" id=\"quote-carousel\">\n        <!-- Bottom Carousel Indicators -->\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#quote-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#quote-carousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#quote-carousel\" data-slide-to=\"2\"></li>\n        </ol>\n        \n        <!-- Carousel Slides / Quotes -->\n        <div class=\"carousel-inner\">\n        \n          <!-- Quote 1 -->\n          <div class=\"item active\">\n            <blockquote>\n              <div class=\"row\">\n                <div class=\"col-sm-3 text-center\">\n                  <img class=\"img-circle\" src=\"http://www.reactiongifs.com/r/overbite.gif\" style=\"width: 100px;height:100px;\">\n                  <!--<img class=\"img-circle\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg\" style=\"width: 100px;height:100px;\">-->\n                </div>\n                <div class=\"col-sm-9\">\n                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!</p>\n                  <small>Someone famous</small>\n                </div>\n              </div>\n            </blockquote>\n          </div>\n          <!-- Quote 2 -->\n          <div class=\"item\">\n            <blockquote>\n              <div class=\"row\">\n                <div class=\"col-sm-3 text-center\">\n                  <img class=\"img-circle\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/mijustin/128.jpg\" style=\"width: 100px;height:100px;\">\n                </div>\n                <div class=\"col-sm-9\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.</p>\n                  <small>Someone famous</small>\n                </div>\n              </div>\n            </blockquote>\n          </div>\n          <!-- Quote 3 -->\n          <div class=\"item\">\n            <blockquote>\n              <div class=\"row\">\n                <div class=\"col-sm-3 text-center\">\n                  <img class=\"img-circle\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg\" style=\"width: 100px;height:100px;\">\n                </div>\n                <div class=\"col-sm-9\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>\n                  <small>Someone famous</small>\n                </div>\n              </div>\n            </blockquote>\n          </div>\n        </div>\n        \n        <!-- Carousel Buttons Next/Prev -->\n        <a data-slide=\"prev\" href=\"#quote-carousel\" class=\"left carousel-control\"><i class=\"fa fa-chevron-left\"></i></a>\n        <a data-slide=\"next\" href=\"#quote-carousel\" class=\"right carousel-control\"><i class=\"fa fa-chevron-right\"></i></a>\n      </div>                          \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/quote-widget/quote-widget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* carousel */\n#quote-carousel {\n  padding: 0 10px 30px 10px;\n  margin-top: 30px; }\n\n/* Control buttons  */\n#quote-carousel .carousel-control {\n  background: none;\n  color: #222;\n  font-size: 2.3em;\n  text-shadow: none;\n  margin-top: 30px; }\n\n/* Previous button  */\n#quote-carousel .carousel-control.left {\n  left: -12px; }\n\n/* Next button  */\n#quote-carousel .carousel-control.right {\n  right: -12px !important; }\n\n/* Changes the position of the indicators */\n#quote-carousel .carousel-indicators {\n  right: 50%;\n  top: auto;\n  bottom: 0px;\n  margin-right: -19px; }\n\n/* Changes the color of the indicators */\n#quote-carousel .carousel-indicators li {\n  background: #c0c0c0; }\n\n#quote-carousel .carousel-indicators .active {\n  background: #333333; }\n\n#quote-carousel img {\n  width: 250px;\n  height: 100px; }\n\n/* End carousel */\n.item blockquote {\n  border-left: none;\n  margin: 0; }\n\n.item blockquote img {\n  margin-bottom: 10px; }\n\n.item blockquote p:before {\n  content: \"\\F10D\";\n  font-family: 'Fontawesome';\n  float: left;\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quote-widget/quote-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteWidgetComponent = (function () {
    function QuoteWidgetComponent() {
    }
    QuoteWidgetComponent.prototype.ngOnInit = function () {
    };
    return QuoteWidgetComponent;
}());
QuoteWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tk-quote-widget',
        template: __webpack_require__("../../../../../src/app/components/quote-widget/quote-widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/quote-widget/quote-widget.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], QuoteWidgetComponent);

//# sourceMappingURL=quote-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModel; });
var ContactModel = (function () {
    function ContactModel() {
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.subject = null;
        this.content = null;
    }
    return ContactModel;
}());

//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'reverse'
    })
], ReversePipe);

//# sourceMappingURL=reverse.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
    }
    BlogService.prototype.getBlogPosts = function () {
        return this.http.get('http://ec2-54-153-114-109.us-west-1.compute.amazonaws.com/api/blog_posts')
            .map(function (res) { return res.json(); });
    };
    return BlogService;
}());
BlogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BlogService);

var _a;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/lang.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LangService = (function () {
    function LangService(http) {
        this.http = http;
    }
    LangService.prototype.getLangs = function () {
        return this.http.get('http://ec2-54-153-114-109.us-west-1.compute.amazonaws.com/api/pc_langs')
            .map(function (res) { return res.json(); });
    };
    return LangService;
}());
LangService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LangService);

var _a;
//# sourceMappingURL=lang.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map