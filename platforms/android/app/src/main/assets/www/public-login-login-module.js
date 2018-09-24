(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"],{

/***/ "./src/app/public/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/public/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/public/login/login.page.html":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <div class=\"cabecalho\">\r\n    <ion-img src=\"assets/img/logo_login.png\"></ion-img>\r\n  </div>\r\n  <ion-title text-center margin>Bem-Vinda!</ion-title>\r\n\r\n  <div class=\"\">\r\n    <form (ngSubmit)=\"login()\" [formGroup]=\"loginForm\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item margin-top>\r\n              <ion-input type=\"text\" placeholder=\"Email\" id=\"email\" formControlName=\"email\" [class.invalid]=\"!loginForm.controls.email.valid && (loginForm.controls.email.dirty && loginForm.controls.email.touched || submitAttempt)\"></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"ion-invalid\" *ngIf=\"!loginForm.controls.email.valid  && (loginForm.controls.email.dirty && loginForm.controls.email.touched || submitAttempt)\">\r\n              <p class=\"msgInvalid\">Por favor! Informe um e-mail válido.</p>\r\n            </ion-item>\r\n            <ion-item margin-top>\r\n              <ion-input type=\"password\" placeholder=\"Password\" id=\"password\" formControlName=\"password\"\r\n                [class.invalid]=\"!loginForm.controls.password.valid && (loginForm.controls.password.dirty && loginForm.controls.password.touched || submitAttempt)\"></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"ion-invalid\" *ngIf=\"!loginForm.controls.password.valid  && (loginForm.controls.password.dirty && loginForm.controls.password.touched || submitAttempt)\">\r\n              <p class=\"msgInvalid\">Por favor! Campo obrigatorio.</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button button expand=\"block\" shape=\"round\" type=\"submit\">Entrar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button button expand=\"block\" shape=\"round\" color=\"primary\" fill=\"outline\" href=\"/register\"\r\n              routerDirection=\"forward\">Novo Usuário</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row justify-content-center>\r\n      <ion-col size=\"8\">\r\n        <ion-list>\r\n          <!-- <ion-item (click)=\"loginGoogle()\" class=\"cursor-pointer\">\r\n            <ion-icon name=\"logo-facebook\"></ion-icon>\r\n            Cadastrar com Facebook\r\n          </ion-item> -->\r\n          <ion-item (click)=\"loginGoogle()\" class=\"cursor-pointer\">\r\n            <ion-icon name=\"logo-google\"></ion-icon>\r\n            Cadastrar com google\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/public/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid {\n  color: red; }\n\n.msgInvalid {\n  color: red;\n  font-size: 12px; }\n\n.sc-ion-button-md-h, .sc-ion-button-ios-h {\n  font-weight: bold !important; }\n\n.item-interactive.sc-ion-item-md-h, .item-interactive.sc-ion-item-ios-h {\n  border-width: 2px !important;\n  border: 2px solid #22a4ad;\n  border-radius: 21px;\n  --border-width: 0 0 0 0; }\n\n.cursor-pointer {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/public/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/public/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(authService, fb) {
        this.authService = authService;
        this.fb = fb;
        this.submitAttempt = false;
        this.loginForm = fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.login = function () {
        this.submitAttempt = true;
        this.credentias = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };
        this.authService.signWithEmail(this.credentias).then(function () {
            console.log('Logado');
        }, function (error) { return console.log('Erros encontrados: ', error); });
    };
    LoginPage.prototype.loginGoogle = function () {
        console.log('Cliquei no login com google');
        this.authService.signInWithGoogle().then(function () {
            console.log('Logado com google');
        }, function (error) { return console.log('Erros agora google', error); });
    };
    LoginPage.prototype.loginFacebook = function () {
        console.log('Cliquei no login com Facebook');
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/public/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/public/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-login-login-module.js.map