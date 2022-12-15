(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/izdelki/izdelki.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/izdelki/izdelki.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-4\">\n    <div *ngFor=\"let izdelek of izdelki\">\n        <div class=\"row  mb-3 shadow-sm\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class =\"col-12 col-lg-5 fs-5 fw-bold mt-2\">\n                    {{izdelek.naziv}}\n                    </div>\n                    <div class =\"col-12 col-lg-4  mt-2\">\n                    {{izdelek.kategorija}}\n                    </div>\n                    <div class =\"col-12 col-lg-3 mt-2 mt-lg-1 text-end\">\n                        <button (click)=\"naPodrobnosti(izdelek)\" class=\"btn btn-outline-secondary btn-sm has-icon btn-block\">PODROBNOSTI</button>\n                        \n                        <i class=\"bi bi-heart-fill mx-4 heart\" (click)=\"dodajMedPriljubljene(izdelek)\"></i>\n                        <i class=\"bi bi-basket-fill mx-3 basket\" (click)=\"dodajVKosarico(izdelek)\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/kosarica/kosarica.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/kosarica/kosarica.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>kosarica works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/navbar/navbar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/navbar/navbar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class =\"container\">\n        <div class=\"container-fluid\">\n          <button\n            class=\"navbar-toggler\"\n            type=\"button\"\n            data-mdb-toggle=\"collapse\"\n            data-mdb-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\"\n          >\n            <i class=\"fas fa-bars\"></i>\n          </button>\n      \n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/izdelki\">IZDELKI</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/priljubljeni\">PRILJUBLJENI IZDELKI</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/kosarica\">KOŠARICA</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/ogrodje/ogrodje.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/ogrodje/ogrodje.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<main>\n  <router-outlet></router-outlet>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-3\" *ngIf=\"izdelek\">\n    <div class=\"row m-0\">\n      <div class=\"row m-0 p-0\">\n        <div class=\"border mb-2\">\n          <h4 class=\"mb-4 mb-lg-3 mt-2 fs-4\"><b>{{izdelek.naziv}}</b></h4>\n          <p>\n              <b>KATEGORIJA</b>: {{izdelek.kategorija}}\n          </p>\n            <div *ngFor=\"let cena of cene\">\n                <div class=\"row  mb-3 shadow-sm\">\n                    <div class=\"card\">\n                        <div class=\"row\">\n                            <div class =\"col-12 col-lg-5 fs-5 fw-bold mt-2\">\n                            {{cena.trgovina.ime}}\n                            </div>\n                            <div class =\"col-12 col-lg-4  mt-2\">\n                            {{cena.cena}} €\n                            </div>\n                        </div>\n                    </div>\n                </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"izdelek\">\n        <p class=\"fs-5 fw-bold mt-4\">\n            Najbližja trgovina:\n        </p>\n        <div class=\"row mb-3 shadow-sm\" *ngIf=\"najblizjaTrgovina\">\n            <div class =\"col-12 col-lg-5 fs-5 fw-bold mt-2\">\n                {{najblizjaTrgovina.trgovina.ime}}\n            </div>\n            <div class =\"col-12 col-lg-4  mt-2\">\n                {{najblizjaTrgovina.trgovina.lokacija}}\n            </div>\n            <div class =\"col-12 col-lg-3  mt-2\">\n                Razdalja: {{najblizjaTrgovina.distance}} km\n            </div>\n        </div>\n  </div>\n  <div class=\"container mt-3\" *ngIf=\"!izdelek\">\n    Izberite izdelek!\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-4\">\n    <div *ngFor=\"let izdelek of izdelki\">\n        <div class=\"row  mb-3 shadow-sm\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class =\"col-12 col-lg-5 fs-5 fw-bold mt-2\">\n                    {{izdelek[1]}}\n                    </div>\n                    <div class =\"col-12 col-lg-4  mt-2\">\n                    {{izdelek[2]}}\n                    </div>\n                    <div class =\"col-12 col-lg-3 mt-2 mt-lg-1 text-end\">\n                        <i class=\"bi bi-heart-fill heart\" style=\"color:red\"></i> {{izdelek[3]}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

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
/* harmony import */ var _uporabnik_izdelki_izdelki_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uporabnik/izdelki/izdelki.component */ "./src/app/uporabnik/izdelki/izdelki.component.ts");
/* harmony import */ var _uporabnik_priljubljeni_izdelki_priljubljeni_izdelki_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component */ "./src/app/uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component.ts");
/* harmony import */ var _uporabnik_kosarica_kosarica_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uporabnik/kosarica/kosarica.component */ "./src/app/uporabnik/kosarica/kosarica.component.ts");
/* harmony import */ var _uporabnik_podrobnosti_izdelka_podrobnosti_izdelka_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component */ "./src/app/uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var routes = [
    { path: '', redirectTo: '/izdelki', pathMatch: 'full' },
    { path: 'izdelki', component: _uporabnik_izdelki_izdelki_component__WEBPACK_IMPORTED_MODULE_2__["IzdelkiComponent"] },
    { path: 'izdelki/:id', component: _uporabnik_podrobnosti_izdelka_podrobnosti_izdelka_component__WEBPACK_IMPORTED_MODULE_5__["PodrobnostiIzdelkaComponent"] },
    { path: 'priljubljeni', component: _uporabnik_priljubljeni_izdelki_priljubljeni_izdelki_component__WEBPACK_IMPORTED_MODULE_3__["PriljubljeniIzdelkiComponent"] },
    { path: 'kosarica', component: _uporabnik_kosarica_kosarica_component__WEBPACK_IMPORTED_MODULE_4__["KosaricaComponent"] },
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.naslov = 'PRIMERJALNIK CEN IZDELKOV';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prpo-app',
            template: "\n        <router-outlet></router-outlet>\n    "
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _uporabnik_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uporabnik/services/service */ "./src/app/uporabnik/services/service.ts");
/* harmony import */ var _uporabnik_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uporabnik/navbar/navbar.component */ "./src/app/uporabnik/navbar/navbar.component.ts");
/* harmony import */ var _uporabnik_izdelki_izdelki_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uporabnik/izdelki/izdelki.component */ "./src/app/uporabnik/izdelki/izdelki.component.ts");
/* harmony import */ var _uporabnik_priljubljeni_izdelki_priljubljeni_izdelki_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component */ "./src/app/uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component.ts");
/* harmony import */ var _uporabnik_kosarica_kosarica_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uporabnik/kosarica/kosarica.component */ "./src/app/uporabnik/kosarica/kosarica.component.ts");
/* harmony import */ var _uporabnik_ogrodje_ogrodje_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./uporabnik/ogrodje/ogrodje.component */ "./src/app/uporabnik/ogrodje/ogrodje.component.ts");
/* harmony import */ var _uporabnik_podrobnosti_izdelka_podrobnosti_izdelka_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component */ "./src/app/uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _uporabnik_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _uporabnik_izdelki_izdelki_component__WEBPACK_IMPORTED_MODULE_8__["IzdelkiComponent"],
                _uporabnik_priljubljeni_izdelki_priljubljeni_izdelki_component__WEBPACK_IMPORTED_MODULE_9__["PriljubljeniIzdelkiComponent"],
                _uporabnik_kosarica_kosarica_component__WEBPACK_IMPORTED_MODULE_10__["KosaricaComponent"],
                _uporabnik_ogrodje_ogrodje_component__WEBPACK_IMPORTED_MODULE_11__["OgrodjeComponent"],
                _uporabnik_podrobnosti_izdelka_podrobnosti_izdelka_component__WEBPACK_IMPORTED_MODULE_12__["PodrobnostiIzdelkaComponent"]
            ],
            providers: [_uporabnik_services_service__WEBPACK_IMPORTED_MODULE_6__["Service"]],
            bootstrap: [_uporabnik_ogrodje_ogrodje_component__WEBPACK_IMPORTED_MODULE_11__["OgrodjeComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/uporabnik/izdelki/izdelki.component.css":
/*!*********************************************************!*\
  !*** ./src/app/uporabnik/izdelki/izdelki.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heart:hover {\r\n    color: rgb(188, 0, 0);\r\n}\r\n.basket:hover {\r\n    color: rgb(15, 30, 197);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBvcmFibmlrL2l6ZGVsa2kvaXpkZWxraS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC91cG9yYWJuaWsvaXpkZWxraS9pemRlbGtpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhcnQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigxODgsIDAsIDApO1xyXG59XHJcbi5iYXNrZXQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigxNSwgMzAsIDE5Nyk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/uporabnik/izdelki/izdelki.component.ts":
/*!********************************************************!*\
  !*** ./src/app/uporabnik/izdelki/izdelki.component.ts ***!
  \********************************************************/
/*! exports provided: IzdelkiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzdelkiComponent", function() { return IzdelkiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service */ "./src/app/uporabnik/services/service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var IzdelkiComponent = /** @class */ (function () {
    function IzdelkiComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    IzdelkiComponent.prototype.ngOnInit = function () {
        this.getIzdelki();
    };
    IzdelkiComponent.prototype.getIzdelki = function () {
        var _this = this;
        this.service
            .getIzdelki()
            .subscribe(function (izdelki) { return _this.izdelki = izdelki; });
    };
    IzdelkiComponent.prototype.naPodrobnosti = function (izdelek) {
        this.izdelek = izdelek;
        this.router.navigate(['/izdelki', this.izdelek.id]);
    };
    IzdelkiComponent.prototype.dodajMedPriljubljene = function (izdelek) {
        this.service
            .dodajMedPriljubljene(izdelek)
            .subscribe();
    };
    IzdelkiComponent.prototype.dodajVKosarico = function (izdelek) {
        //TODO
    };
    IzdelkiComponent.ctorParameters = function () { return [
        { type: _services_service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    IzdelkiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-izdelki',
            template: __importDefault(__webpack_require__(/*! raw-loader!./izdelki.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/izdelki/izdelki.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./izdelki.component.css */ "./src/app/uporabnik/izdelki/izdelki.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IzdelkiComponent);
    return IzdelkiComponent;
}());



/***/ }),

/***/ "./src/app/uporabnik/kosarica/kosarica.component.css":
/*!***********************************************************!*\
  !*** ./src/app/uporabnik/kosarica/kosarica.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Vwb3JhYm5pay9rb3NhcmljYS9rb3NhcmljYS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/uporabnik/kosarica/kosarica.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/uporabnik/kosarica/kosarica.component.ts ***!
  \**********************************************************/
/*! exports provided: KosaricaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KosaricaComponent", function() { return KosaricaComponent; });
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var KosaricaComponent = /** @class */ (function () {
    function KosaricaComponent() {
    }
    KosaricaComponent.prototype.ngOnInit = function () {
    };
    KosaricaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kosarica',
            template: __importDefault(__webpack_require__(/*! raw-loader!./kosarica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/kosarica/kosarica.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./kosarica.component.css */ "./src/app/uporabnik/kosarica/kosarica.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], KosaricaComponent);
    return KosaricaComponent;
}());



/***/ }),

/***/ "./src/app/uporabnik/models/uporabnik.ts":
/*!***********************************************!*\
  !*** ./src/app/uporabnik/models/uporabnik.ts ***!
  \***********************************************/
/*! exports provided: Uporabnik */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uporabnik", function() { return Uporabnik; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Uporabnik = /** @class */ (function () {
    function Uporabnik() {
    }
    return Uporabnik;
}());



/***/ }),

/***/ "./src/app/uporabnik/navbar/navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/uporabnik/navbar/navbar.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Vwb3JhYm5pay9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/uporabnik/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/uporabnik/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/uporabnik/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/uporabnik/ogrodje/ogrodje.component.css":
/*!*********************************************************!*\
  !*** ./src/app/uporabnik/ogrodje/ogrodje.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Vwb3JhYm5pay9vZ3JvZGplL29ncm9kamUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/uporabnik/ogrodje/ogrodje.component.ts":
/*!********************************************************!*\
  !*** ./src/app/uporabnik/ogrodje/ogrodje.component.ts ***!
  \********************************************************/
/*! exports provided: OgrodjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OgrodjeComponent", function() { return OgrodjeComponent; });
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var OgrodjeComponent = /** @class */ (function () {
    function OgrodjeComponent() {
    }
    OgrodjeComponent.prototype.ngOnInit = function () {
    };
    OgrodjeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ogrodje',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ogrodje.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/ogrodje/ogrodje.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./ogrodje.component.css */ "./src/app/uporabnik/ogrodje/ogrodje.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], OgrodjeComponent);
    return OgrodjeComponent;
}());



/***/ }),

/***/ "./src/app/uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Vwb3JhYm5pay9wb2Ryb2Jub3N0aS1pemRlbGthL3BvZHJvYm5vc3RpLWl6ZGVsa2EuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component.ts ***!
  \********************************************************************************/
/*! exports provided: PodrobnostiIzdelkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodrobnostiIzdelkaComponent", function() { return PodrobnostiIzdelkaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service */ "./src/app/uporabnik/services/service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PodrobnostiIzdelkaComponent = /** @class */ (function () {
    function PodrobnostiIzdelkaComponent(service, route) {
        this.service = service;
        this.route = route;
        this.lat = 46.0501557;
        this.lng = 14.4689205;
    }
    PodrobnostiIzdelkaComponent.prototype.getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if (position) {
                    console.log("Latitude: " + position.coords.latitude +
                        "Longitude: " + position.coords.longitude);
                    _this.lat = position.coords.latitude;
                    _this.lng = position.coords.longitude;
                }
            });
        }
    };
    PodrobnostiIzdelkaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLocation();
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.service.getIzdelek(+params['id']); }))
            .subscribe(function (izdelek) { return _this.izdelek = izdelek; });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.service.getCeneIzdelka(+params['id']); }))
            .subscribe(function (cene) { return _this.cene = cene.sort(function (c1, c2) {
            if (c1.cena > c2.cena) {
                return 1;
            }
            if (c1.cena < c2.cena) {
                return -1;
            }
            return 0;
        }); });
        this.service
            .getNajblizjeTrgovine(this.lat, this.lng)
            .subscribe(function (najblizjaTrgovina) { return _this.najblizjaTrgovina = najblizjaTrgovina; });
    };
    PodrobnostiIzdelkaComponent.ctorParameters = function () { return [
        { type: _services_service__WEBPACK_IMPORTED_MODULE_3__["Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    PodrobnostiIzdelkaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-podrobnosti-izdelka',
            template: __importDefault(__webpack_require__(/*! raw-loader!./podrobnosti-izdelka.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./podrobnosti-izdelka.component.css */ "./src/app/uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_3__["Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PodrobnostiIzdelkaComponent);
    return PodrobnostiIzdelkaComponent;
}());



/***/ }),

/***/ "./src/app/uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Vwb3JhYm5pay9wcmlsanVibGplbmktaXpkZWxraS9wcmlsanVibGplbmktaXpkZWxraS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PriljubljeniIzdelkiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriljubljeniIzdelkiComponent", function() { return PriljubljeniIzdelkiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service */ "./src/app/uporabnik/services/service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PriljubljeniIzdelkiComponent = /** @class */ (function () {
    function PriljubljeniIzdelkiComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    PriljubljeniIzdelkiComponent.prototype.ngOnInit = function () {
        this.getIzdelki();
    };
    PriljubljeniIzdelkiComponent.prototype.getIzdelki = function () {
        var _this = this;
        this.service
            .getNajboljPriljubljene()
            .subscribe(function (izdelki) { return _this.izdelki = izdelki; });
    };
    PriljubljeniIzdelkiComponent.ctorParameters = function () { return [
        { type: _services_service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    PriljubljeniIzdelkiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-priljubljeni-izdelki',
            template: __importDefault(__webpack_require__(/*! raw-loader!./priljubljeni-izdelki.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./priljubljeni-izdelki.component.css */ "./src/app/uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PriljubljeniIzdelkiComponent);
    return PriljubljeniIzdelkiComponent;
}());



/***/ }),

/***/ "./src/app/uporabnik/services/service.ts":
/*!***********************************************!*\
  !*** ./src/app/uporabnik/services/service.ts ***!
  \***********************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_uporabnik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/uporabnik */ "./src/app/uporabnik/models/uporabnik.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
        this.uporabnik = new _models_uporabnik__WEBPACK_IMPORTED_MODULE_2__["Uporabnik"]();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.izdelkiApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].izdelkiApiUrl;
        this.priljubljeniIzdelkiApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].priljubljeniIzdelkiApiUrl;
    }
    Service.prototype.getIzdelki = function () {
        return this.http.get(this.izdelkiApiUrl + 'izdelki')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    Service.prototype.getIzdelek = function (id) {
        var url = this.izdelkiApiUrl + "izdelki/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    Service.prototype.getCeneIzdelka = function (id) {
        var url = this.izdelkiApiUrl + "cene/izdelek/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    Service.prototype.getNajblizjeTrgovine = function (lat, lng) {
        var url = this.izdelkiApiUrl + "trgovine/najblizja/" + lat + "/" + lng;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    Service.prototype.dodajMedPriljubljene = function (izdelek) {
        this.getUporabnik();
        var object = {
            "uporabnik": this.uporabnik,
            "izdelek": izdelek
        };
        var url = this.priljubljeniIzdelkiApiUrl + "priljubljeni";
        return this.http.post(url, JSON.stringify(object), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    Service.prototype.getUporabnik = function () {
        this.uporabnik.id = 1;
        this.uporabnik.firstname = "David";
        this.uporabnik.lastname = "Trafela";
    };
    Service.prototype.getNajboljPriljubljene = function () {
        return this.http.get(this.priljubljeniIzdelkiApiUrl + 'priljubljeni/najbolj')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete(id: number): Observable<number> {
    //     const url = `${this.url}/${id}`;
    //     return this.http.delete<number>(url, {headers: this.headers})
    //                     .pipe(catchError(this.handleError));
    // }
    // create(uporabnik: Uporabnik): Observable<Uporabnik> {
    //     return this.http.post<Uporabnik>(this.url, JSON.stringify(uporabnik), {headers: this.headers})
    //                     .pipe(catchError(this.handleError));
    // }
    Service.prototype.handleError = function (error) {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    };
    Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Service);
    return Service;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    izdelkiApiUrl: 'https://localhost:8080/v1',
    priljubljeniIzdelkiApiUrl: 'https://localhost:8082/v1'
};


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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zigad\FRI\magisterij\1 letnik\RSO\rso-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map