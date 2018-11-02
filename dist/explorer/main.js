(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_wiki_loader_wiki_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/wiki-loader/wiki-loader.component */ "./src/app/pages/wiki-loader/wiki-loader.component.ts");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "login",
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
    },
    {
        path: "",
        component: _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: "",
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: "wiki/:title",
                component: _pages_wiki_loader_wiki_loader_component__WEBPACK_IMPORTED_MODULE_3__["WikiLoaderComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'explorer';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_current_game_current_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/current-game/current-game.component */ "./src/app/components/current-game/current-game.component.ts");
/* harmony import */ var _pages_wiki_loader_wiki_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/wiki-loader/wiki-loader.component */ "./src/app/pages/wiki-loader/wiki-loader.component.ts");
/* harmony import */ var _pipes_raw_html_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/raw-html.pipe */ "./src/app/pipes/raw-html.pipe.ts");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var ng_dynamic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-dynamic */ "./node_modules/ng-dynamic/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_current_game_current_game_component__WEBPACK_IMPORTED_MODULE_9__["CurrentGameComponent"],
                _pages_wiki_loader_wiki_loader_component__WEBPACK_IMPORTED_MODULE_10__["WikiLoaderComponent"],
                _pipes_raw_html_pipe__WEBPACK_IMPORTED_MODULE_11__["RawHtmlPipe"],
                _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _store_store_module__WEBPACK_IMPORTED_MODULE_13__["StoreModule"],
                ng_dynamic__WEBPACK_IMPORTED_MODULE_14__["DynamicComponentModule"].forRoot({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]]
                }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"].enablePersistence(),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/current-game/current-game.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/current-game/current-game.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"(game$ | async) as game\">\n    <article class=\"message is-primary\">\n      <div class=\"message-header\">\n        <p>{{game.started?'Current Game':'Next Game'}}</p>\n      </div>\n      <div class=\"message-body is has-text-centered\">\n        <div class=\"is-size-3\">{{game.start.title}}</div>\n        <div>to</div>\n        <div class=\"is-size-3\">{{game.end.title}}</div>\n      </div>\n\n    </article>\n\n    <button (click)=\"startGame()\" class=\"button is-primary is-large is-fullwidth\" *ngIf=\"!game.started\">\n      <span>START GAME</span>\n    </button>\n</section>\n\n<section *ngIf=\"!(game$ | async) as game\" class=\"section has-text-centered\">\n  No Games now!!\n</section>\n"

/***/ }),

/***/ "./src/app/components/current-game/current-game.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/current-game/current-game.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/current-game/current-game.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/current-game/current-game.component.ts ***!
  \*******************************************************************/
/*! exports provided: CurrentGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentGameComponent", function() { return CurrentGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_wiki_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wiki-game.service */ "./src/app/services/wiki-game.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentGameComponent = /** @class */ (function () {
    function CurrentGameComponent(wikiGame, store) {
        this.wikiGame = wikiGame;
        this.store = store;
    }
    CurrentGameComponent.prototype.ngOnInit = function () {
        this.game$ = this.store.select(function (state) { return state.game.game; });
    };
    CurrentGameComponent.prototype.startGame = function () {
        this.wikiGame.startGame();
    };
    CurrentGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-game',
            template: __webpack_require__(/*! ./current-game.component.html */ "./src/app/components/current-game/current-game.component.html"),
            styles: [__webpack_require__(/*! ./current-game.component.scss */ "./src/app/components/current-game/current-game.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_wiki_game_service__WEBPACK_IMPORTED_MODULE_1__["WikiGameService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CurrentGameComponent);
    return CurrentGameComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <div class=\"loader\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  display: flex;\n  width: 100%;\n  height: 300px; }\n  .loading .loader {\n    margin: auto;\n    width: 30px;\n    height: 30px;\n    border-radius: 50rem;\n    border-bottom: 3px solid #00d1b2;\n    border-top: 3px solid #00d1b2;\n    border-right: 3px solid #00d1b2;\n    border-left: 3px solid transparent;\n    -webkit-animation: spin 0.6s ease-in-out;\n            animation: spin 0.6s ease-in-out;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite; }\n  @-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.currentUser) {
            return true;
        }
        else {
            this.router.navigate(['login']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section has-text-centered\">\n\n  <h2 class=\"title\">Qualifier Round</h2>\n\n  <app-current-game></app-current-game>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-primary\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        Explorer\n      </h1>\n      <h2 class=\"subtitle\">\n        Dyuksha '18\n      </h2>\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container\">\n    <form class=\"panel\" (submit)=\"login()\">\n\n      <div class=\"panel-heading\">\n        <strong>Login</strong>\n      </div>\n\n      <div class=\"panel-block\">\n          <div class=\"control has-icons-left has-icons-right\">\n            <input [(ngModel)]=\"email\" name=\"email\" class=\"input\" type=\"email\" placeholder=\"Email\">\n            <span class=\"icon is-small is-left\">\n              <i class=\"fas fa-envelope\"></i>\n            </span>\n          </div>\n      </div>\n\n      <div class=\"panel-block\">\n          <div class=\"control has-icons-left\">\n            <input [(ngModel)]=\"password\" name=\"password\" class=\"input\" type=\"password\" placeholder=\"Password\">\n            <span class=\"icon is-small is-left\">\n              <i class=\"fas fa-lock\"></i>\n            </span>\n          </div>\n      </div>\n\n      <div class=\"panel-block\">\n        <button class=\"button is-success\" [class.is-loading]=\"isloading\" style=\"margin: 0 auto;\">\n          Login\n        </button>\n      </div>\n\n    </form>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        this.isloading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isloading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.auth.login(this.email, this.password)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        this.isloading = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container is-fullhd\">\n\n  <div class=\"columns\">\n\n    <div class=\"column is-one-quarter fixed\">\n\n      <section class=\"hero is-primary\">\n        <div class=\"hero-body\">\n          <div class=\"container\">\n            <h1 class=\"title\">\n              Explorer\n            </h1>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"section has-background-white-ter\">\n          <app-current-game></app-current-game>\n      </section>\n\n      <section class=\"section has-background-primary has-text-white has-text-centered\" style=\"margin-top: auto;\">\n        <span class=\"title has-text-light is-size-5\">TIME LEFT</span>\n        <div class=\"is-size-1 has-text-weight-light\" *ngIf=\"(timeLeft$ | async) as time\">\n          {{ time.min | number:'2.0-0' }} : {{ time.sec | number:'2.0-0' }}\n        </div>\n      </section>\n    </div>\n    <div class=\"column is-three-quarters is-offset-one-quarter\">\n\n      <div class=\"section has-background-light\" *ngIf=\"(playerStats$ | async) as stats\">\n        <nav class=\"level\">\n          <div class=\"level-item has-text-centered\">\n            <div>\n              <p class=\"heading\">Games</p>\n              <p class=\"title\">{{stats.games}}</p>\n            </div>\n          </div>\n          <div class=\"level-item has-text-centered\">\n            <div>\n              <p class=\"heading\">Paths</p>\n              <p class=\"title\">{{stats.paths}}</p>\n            </div>\n          </div>\n          <div class=\"level-item has-text-centered\">\n            <div>\n              <p class=\"heading\">Points</p>\n              <p class=\"title\">{{stats.points}}</p>\n            </div>\n          </div>\n          <div class=\"level-item has-text-centered\">\n            <div>\n              <p class=\"heading\">Rank</p>\n              <p class=\"title\">{{stats.rank}}</p>\n            </div>\n          </div>\n        </nav>\n\n      </div>\n\n      <div class=\"section\" *ngIf=\"(stat$ | async) as stat\">\n        <nav class=\"breadcrumb has-arrow-separator is-centered is-small\" aria-label=\"breadcrumbs\">\n          <ul>\n            <li *ngFor=\"let path of stat.paths\" class=\"has-text-primary\"> {{path.title}} </li>\n          </ul>\n        </nav>\n      </div>\n\n      <div class=\"section\">\n        <router-outlet></router-outlet>\n      </div>\n\n\n      <footer class=\"footer\">\n        <div class=\"content has-text-centered\">\n          <p>\n            <strong>Explorer Game</strong> developed as part of <a href=\"https://www.dyuksha.org\">Dyuksha18</a>\n          </p>\n          <p>\n            Copyright &copy; 2018 NSS College of Engineering, Palakkad\n          </p>\n        </div>\n      </footer>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed {\n  position: fixed;\n  display: flex;\n  height: 100vh;\n  justify-content: space-between;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_app_store_states_game_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/states/game.state */ "./src/app/store/states/game.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(store) {
        this.store = store;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.timeLeft$ = this.store.select(function (state) {
            var time = state.game.timeLeft;
            return {
                min: Math.floor(time / 60),
                sec: time % 60
            };
        });
        this.stat$ = this.store.select(function (state) { return state.game.stat; });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(src_app_store_states_game_state__WEBPACK_IMPORTED_MODULE_3__["GameState"].stats),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], WelcomeComponent.prototype, "playerStats$", void 0);
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/pages/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/pages/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/wiki-loader/wiki-loader.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/wiki-loader/wiki-loader.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wiki-content\" *ngIf=\"content\">\n  <h1 class=\"title is-size-1\" style=\"border-bottom: 1px solid #2e2e2e;\" *ngIf=\"title\">{{title}}</h1>\n  <div *dynamicComponent = \"content\"></div>\n</div>\n\n<section *ngIf=\"!content\" class=\"section\">\n  <app-loader></app-loader>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/wiki-loader/wiki-loader.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/wiki-loader/wiki-loader.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/wiki-loader/wiki-loader.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/wiki-loader/wiki-loader.component.ts ***!
  \************************************************************/
/*! exports provided: WikiLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiLoaderComponent", function() { return WikiLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_wiki_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wiki-api.service */ "./src/app/services/wiki-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_app_store_actions_game_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/actions/game.action */ "./src/app/store/actions/game.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var WikiLoaderComponent = /** @class */ (function () {
    function WikiLoaderComponent(route, wiki, store) {
        this.route = route;
        this.wiki = wiki;
        this.store = store;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    WikiLoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var query;
        //get title param
        this.sub.add(this.route.params.subscribe(function (params) {
            query = params['title'];
            _this.content = null;
            //extract contents from the result
            _this.getPageContent(query);
        }));
    };
    /**
     * Get content of a wikipedia page
     * @param title title of the page to get content
     */
    WikiLoaderComponent.prototype.getPageContent = function (title) {
        return __awaiter(this, void 0, void 0, function () {
            var data, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wiki.getParsedData(title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(function (val) { return val !== null; })).toPromise()];
                    case 1:
                        data = _a.sent();
                        this.content = data.content.innerHTML.replace("{", "&#123;").replace("}", "&#125;");
                        page = data.page;
                        this.title = page.title;
                        this.store.dispatch(new src_app_store_actions_game_action__WEBPACK_IMPORTED_MODULE_6__["PushPage"](page));
                        return [2 /*return*/];
                }
            });
        });
    };
    WikiLoaderComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WikiLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wiki-loader',
            template: __webpack_require__(/*! ./wiki-loader.component.html */ "./src/app/pages/wiki-loader/wiki-loader.component.html"),
            styles: [__webpack_require__(/*! ./wiki-loader.component.scss */ "./src/app/pages/wiki-loader/wiki-loader.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_wiki_api_service__WEBPACK_IMPORTED_MODULE_3__["WikiApiService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], WikiLoaderComponent);
    return WikiLoaderComponent;
}());



/***/ }),

/***/ "./src/app/pipes/raw-html.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/raw-html.pipe.ts ***!
  \****************************************/
/*! exports provided: RawHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawHtmlPipe", function() { return RawHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RawHtmlPipe = /** @class */ (function () {
    function RawHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    RawHtmlPipe.prototype.transform = function (value, args) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    RawHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'rawHtml'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], RawHtmlPipe);
    return RawHtmlPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth, fs, router) {
        this.afAuth = afAuth;
        this.fs = fs;
        this.router = router;
    }
    /**
     * Login using email id and password
     * @param email Email of the user
     * @param password Password of the user
     */
    AuthService.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var fUser, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, password)];
                    case 1:
                        fUser = _a.sent();
                        this.loginSub = this.fs.collection('users')
                            .doc(fUser.user.uid)
                            .valueChanges().subscribe(function (user) {
                            _this.currentUser = user;
                            _this.router.navigate([""]);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Logout the user
     */
    AuthService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        _a.sent();
                        this.router.navigate(['login']);
                        this.loginSub.unsubscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/wiki-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/wiki-api.service.ts ***!
  \**********************************************/
/*! exports provided: WikiApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiApiService", function() { return WikiApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WikiApiService = /** @class */ (function () {
    function WikiApiService(http) {
        this.http = http;
        this.apiUrl = "https://en.wikipedia.org/w/api.php";
        this.options = {
            action: 'parse',
            prop: 'text',
            format: 'json',
            disableeditsection: 'true',
            disablelimitreport: 'true',
            origin: '*',
            redirects: 'true'
        };
    }
    /**
     * Returns the parsed json response
     * @param title Title of the page
     */
    WikiApiService.prototype.getPageText = function (title) {
        return this.http.get(this.apiUrl, {
            params: __assign({ page: title }, this.options)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPageText', {})));
    };
    /**
     * Returns parsed html data of a wikipedia page
     * @param title title of the page to parse
     */
    WikiApiService.prototype.getParsedData = function (title) {
        var _this = this;
        return this.getPageText(title)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var content = _this.filterContent(data.parse.text['*']);
            var page = {
                page_id: data.parse.pageid,
                title: data.parse.title
            };
            var redirects = data.parse.redirects;
            return { page: page, content: content, redirects: redirects };
        }));
    };
    /**
     * Handle http errors
     * @param {string} operation
     * @param {T} result
     */
    WikiApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /**
     * Returns preprocessed text for wiki search
     * @param text Text to be parsed
     */
    WikiApiService.prototype.filterContent = function (text) {
        var div = document.createElement('div');
        div.innerHTML = text;
        //remove unwanted reference and navigations
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('#References, .reflist, [role="navigation"], sup, .reference').remove();
        var removeStart = jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find("#See_also").parent().next();
        removeStart.nextAll().remove();
        //change all href to routerLinks
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('a').each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).get(0).setAttributeNS("http://www.mozilla.org/ns/specialspace", "routerLink", jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('href'));
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).removeAttr('href');
        });
        //change center to div
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('center').each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).replaceWith("<div style=\"text-align:center\">" + jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).html() + "</div>");
        });
        //disable external links
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('.external').attr('href', '');
        //apply wikipedia styling
        this.applyStyling(div);
        return div;
    };
    /**
     * Apply inline styling to items
     * @param div Element container of the text
     */
    WikiApiService.prototype.applyStyling = function (div) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('h2').attr('style', "font-size:1.5em; font-weight: 600;margin: 1em 0 0.5em 0;border-bottom:1px solid #2e2e2e");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('h3').attr('style', "font-size:1.3em; font-weight: 600; margin: 0.6em 0 0.3em 0;");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('h4').attr('style', "font-size:1.1em; font-weight: 600; margin: 0.6em 0 0.3em 0;");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('#toc').attr('style', "border: 1pt solid #aaa; background-color: #f9f9f9; padding: 16px; display: table;");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('p').attr('style', 'text-align: justify; margin: 0.4em 0 0.5em 0;');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('#toc h2').attr('style', 'text-align: center; font-weight: bold');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('.tright').attr('style', 'float:right;clear:right;margin:0.5em 0 1.3em 1.4em;');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('.tleft').attr('style', 'float:left;clear:left;margin:0.5em 1.4em 1.3em 0;');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('.thumbinner').attr('style', 'border: 1px solid #c8ccd1; padding: 3px; background-color: #f8f9fa; font-size: 94%; text-align: center; overflow: hidden; width: 222px;');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('.thumbcaption').attr('style', 'font-size: 88%');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('.infobox').attr('style', 'border: 1px solid #a2a9b1; border-spacing: 3px; background-color: #f8f9fa; color: black; margin: 0.5em 0 0.5em 1em; padding: 16px; width:20%; font-size: 88%; float: right; clear: right; line-height: 1.5em');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('.infobox td, .infobox th').attr('style', 'padding: 8px');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(div).find('.infobox th .fn').parent().css('text-align', 'center');
    };
    WikiApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WikiApiService);
    return WikiApiService;
}());



/***/ }),

/***/ "./src/app/services/wiki-game.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/wiki-game.service.ts ***!
  \***********************************************/
/*! exports provided: WikiGameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiGameService", function() { return WikiGameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_actions_game_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/game.action */ "./src/app/store/actions/game.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var WikiGameService = /** @class */ (function () {
    function WikiGameService(store, router, fs, auth) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.fs = fs;
        this.auth = auth;
        //create a new player
        this.createPlayer();
        this.fs.collection('games').valueChanges()
            .subscribe(function (games) {
            _this.games = lodash__WEBPACK_IMPORTED_MODULE_5__["shuffle"](games);
            //create a new game
            var game = _this.games.pop();
            _this.store.dispatch(new _store_actions_game_action__WEBPACK_IMPORTED_MODULE_2__["CreateGame"](game));
        });
        this.watchTime();
        this.watchStat();
    }
    /**
     * Watch Stat
     */
    WikiGameService.prototype.watchStat = function () {
        var _this = this;
        //update stats in store
        this.store.select(function (state) { return ({ game: state.game.game, stat: state.game.stat }); })
            .subscribe(function (_a) {
            var game = _a.game, stat = _a.stat;
            if (game && stat && stat.paths.length > 0) {
                console.log(game.end.title, lodash__WEBPACK_IMPORTED_MODULE_5__["last"](stat.paths));
                if (game.end.title === lodash__WEBPACK_IMPORTED_MODULE_5__["last"](stat.paths).title) {
                    _this.store.dispatch(new _store_actions_game_action__WEBPACK_IMPORTED_MODULE_2__["EndGame"](true));
                    if (_this.games.length > 0) {
                        _this.games = lodash__WEBPACK_IMPORTED_MODULE_5__["shuffle"](_this.games);
                        _this.store.dispatch(new _store_actions_game_action__WEBPACK_IMPORTED_MODULE_2__["CreateGame"](_this.games.pop()));
                    }
                    _this.router.navigate(['']);
                }
            }
        });
        //update points in firestore
        this.store.select(function (state) { return state.game.player; }).subscribe(function (player) {
            _this.fs.collection('players').doc(player.player_id).update(player);
        });
    };
    /**
     * Create a new player
     */
    WikiGameService.prototype.createPlayer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.auth.currentUser;
                        player = {
                            player_id: this.fs.createId(),
                            user: user,
                            stats: [],
                            points: 0
                        };
                        return [4 /*yield*/, this.fs.collection('players').doc(player.player_id).set(player)];
                    case 1:
                        _a.sent();
                        this.store.dispatch(new _store_actions_game_action__WEBPACK_IMPORTED_MODULE_2__["CreatePlayer"](player));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Watch the timer. End game when time runs out
     */
    WikiGameService.prototype.watchTime = function () {
        var _this = this;
        this.store.select(function (state) { return state.game.timeLeft; }).subscribe(function (time) {
            if (_this.timer && time <= 0) {
                clearInterval(_this.timer);
                _this.store.dispatch(new _store_actions_game_action__WEBPACK_IMPORTED_MODULE_2__["EndGame"](false));
                //navigate to home
                _this.router.navigate(['']);
            }
        });
    };
    /**
     * Start Game
     */
    WikiGameService.prototype.startGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var game;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.store.dispatch(new _store_actions_game_action__WEBPACK_IMPORTED_MODULE_2__["StartGame"](5 * 60));
                        if (!this.timer) {
                            this.timer = setInterval(function () {
                                _this.store.dispatch(new _store_actions_game_action__WEBPACK_IMPORTED_MODULE_2__["UpdateTimer"](1));
                            }, 1000);
                        }
                        return [4 /*yield*/, this.store.select(function (state) { return state.game.game; }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(function (val) { return val != null; })).toPromise()];
                    case 1:
                        game = _a.sent();
                        this.router.navigate(["wiki/" + game.start.title]);
                        return [2 /*return*/];
                }
            });
        });
    };
    WikiGameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], WikiGameService);
    return WikiGameService;
}());



/***/ }),

/***/ "./src/app/store/actions/game.action.ts":
/*!**********************************************!*\
  !*** ./src/app/store/actions/game.action.ts ***!
  \**********************************************/
/*! exports provided: CreateGame, StartGame, EndGame, CreatePlayer, DestroyPlayer, UpdateTimer, PushPage, PopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGame", function() { return CreateGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGame", function() { return StartGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndGame", function() { return EndGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlayer", function() { return CreatePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestroyPlayer", function() { return DestroyPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTimer", function() { return UpdateTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushPage", function() { return PushPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopPage", function() { return PopPage; });
var CreateGame = /** @class */ (function () {
    function CreateGame(payload) {
        this.payload = payload;
    }
    CreateGame.type = '[GAME] Create Game';
    return CreateGame;
}());

var StartGame = /** @class */ (function () {
    function StartGame(payload) {
        this.payload = payload;
    }
    StartGame.type = '[GAME] Start Game';
    return StartGame;
}());

var EndGame = /** @class */ (function () {
    function EndGame(success) {
        this.success = success;
    }
    EndGame.type = '[GAME] End Game';
    return EndGame;
}());

var CreatePlayer = /** @class */ (function () {
    function CreatePlayer(payload) {
        this.payload = payload;
    }
    CreatePlayer.type = '[GAME] Create Player';
    return CreatePlayer;
}());

var DestroyPlayer = /** @class */ (function () {
    function DestroyPlayer() {
    }
    DestroyPlayer.type = '[GAME] Destroy Player';
    return DestroyPlayer;
}());

var UpdateTimer = /** @class */ (function () {
    function UpdateTimer(payload) {
        this.payload = payload;
    }
    UpdateTimer.type = '[GAME] Update Timer';
    return UpdateTimer;
}());

var PushPage = /** @class */ (function () {
    function PushPage(payload) {
        this.payload = payload;
    }
    PushPage.type = '[GAME] Push Page';
    return PushPage;
}());

var PopPage = /** @class */ (function () {
    function PopPage(payload) {
        this.payload = payload;
    }
    PopPage.type = '[GAME] Pop Page';
    return PopPage;
}());



/***/ }),

/***/ "./src/app/store/states/game.state.ts":
/*!********************************************!*\
  !*** ./src/app/store/states/game.state.ts ***!
  \********************************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _actions_game_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/game.action */ "./src/app/store/actions/game.action.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameState = /** @class */ (function () {
    function GameState() {
    }
    GameState.game = function (state) {
        return state.game;
    };
    GameState.player = function (state) {
        return state.player;
    };
    GameState.timeLeft = function (state) {
        return state.timeLeft;
    };
    GameState.stats = function (_a) {
        var player = _a.player, game = _a.game, stat = _a.stat;
        if (!player)
            return null;
        return {
            games: player.stats.length + (game && game.started ? 1 : 0),
            paths: lodash__WEBPACK_IMPORTED_MODULE_2__["sumBy"](player.stats, function (stat) { return stat.paths.length; }) + (stat ? stat.paths.length : 0),
            points: player.points,
            rank: 0
        };
    };
    GameState.prototype.createGame = function (ctx, _a) {
        var payload = _a.payload;
        var player = ctx.getState().player;
        ctx.patchState({
            game: __assign({}, payload, { started: false })
        });
    };
    GameState.prototype.startGame = function (ctx, _a) {
        var payload = _a.payload;
        var _b = ctx.getState(), game = _b.game, player = _b.player;
        ctx.patchState({
            game: __assign({}, game, { started: true }),
            stat: {
                game: game,
                player: player,
                paths: []
            },
            timeLeft: payload
        });
    };
    GameState.prototype.endGame = function (ctx, _a) {
        var success = _a.success;
        var _b = ctx.getState(), player = _b.player, stat = _b.stat, game = _b.game;
        var new_points = success ? player.points + Math.ceil(game.total_points / stat.paths.length) : player.points;
        ctx.patchState({
            player: __assign({}, player, { points: new_points, stats: player.stats.concat([stat]) }),
            stat: null,
            game: null,
        });
    };
    GameState.prototype.createPlayer = function (ctx, _a) {
        var payload = _a.payload;
        ctx.patchState({
            player: payload
        });
    };
    GameState.prototype.destroyPlayer = function (ctx, action) {
        ctx.patchState({
            player: null
        });
    };
    GameState.prototype.pushPage = function (ctx, _a) {
        var payload = _a.payload;
        var stat = ctx.getState().stat;
        ctx.patchState({
            stat: __assign({}, stat, { paths: stat.paths.concat([payload]) })
        });
    };
    GameState.prototype.popPage = function (ctx, action) {
        var stat = ctx.getState().stat;
        ctx.patchState({
            stat: __assign({}, stat, { paths: stat.paths.slice(0, -1) })
        });
    };
    GameState.prototype.updateTimer = function (ctx, _a) {
        var payload = _a.payload;
        var state = ctx.getState();
        ctx.patchState({
            timeLeft: Math.max(state.timeLeft - payload, 0)
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_game_action__WEBPACK_IMPORTED_MODULE_1__["CreateGame"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions_game_action__WEBPACK_IMPORTED_MODULE_1__["CreateGame"]]),
        __metadata("design:returntype", void 0)
    ], GameState.prototype, "createGame", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_game_action__WEBPACK_IMPORTED_MODULE_1__["StartGame"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions_game_action__WEBPACK_IMPORTED_MODULE_1__["StartGame"]]),
        __metadata("design:returntype", void 0)
    ], GameState.prototype, "startGame", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_game_action__WEBPACK_IMPORTED_MODULE_1__["EndGame"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions_game_action__WEBPACK_IMPORTED_MODULE_1__["EndGame"]]),
        __metadata("design:returntype", void 0)
    ], GameState.prototype, "endGame", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_game_action__WEBPACK_IMPORTED_MODULE_1__["CreatePlayer"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions_game_action__WEBPACK_IMPORTED_MODULE_1__["CreatePlayer"]]),
        __metadata("design:returntype", void 0)
    ], GameState.prototype, "createPlayer", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_game_action__WEBPACK_IMPORTED_MODULE_1__["DestroyPlayer"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions_game_action__WEBPACK_IMPORTED_MODULE_1__["DestroyPlayer"]]),
        __metadata("design:returntype", void 0)
    ], GameState.prototype, "destroyPlayer", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_game_action__WEBPACK_IMPORTED_MODULE_1__["PushPage"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions_game_action__WEBPACK_IMPORTED_MODULE_1__["PushPage"]]),
        __metadata("design:returntype", void 0)
    ], GameState.prototype, "pushPage", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_game_action__WEBPACK_IMPORTED_MODULE_1__["PopPage"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions_game_action__WEBPACK_IMPORTED_MODULE_1__["PopPage"]]),
        __metadata("design:returntype", void 0)
    ], GameState.prototype, "popPage", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_game_action__WEBPACK_IMPORTED_MODULE_1__["UpdateTimer"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions_game_action__WEBPACK_IMPORTED_MODULE_1__["UpdateTimer"]]),
        __metadata("design:returntype", void 0)
    ], GameState.prototype, "updateTimer", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GameState, "game", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GameState, "player", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GameState, "timeLeft", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GameState, "stats", null);
    GameState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'game',
            defaults: {
                game: null,
                player: null,
                timeLeft: 0,
                stat: null
            }
        })
    ], GameState);
    return GameState;
}());



/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _states_game_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/game.state */ "./src/app/store/states/game.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["NgxsModule"].forRoot([
                    _states_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"]
                ]),
            ],
            exports: [
                _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["NgxsModule"],
            ]
        })
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCwOoCe9GgLEVlB6jCxbB-irf1ZPf-Hdwk",
        authDomain: "explorer-85176.firebaseapp.com",
        databaseURL: "https://explorer-85176.firebaseio.com",
        projectId: "explorer-85176",
        storageBucket: "explorer-85176.appspot.com",
        messagingSenderId: "56388163670"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Arjun\Tracing Paper Designs\works\explorer\explorer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map