(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WIT\Wit\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shopping_bag_shopping_bag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping-bag/shopping-bag.component */ "e2+d");



class HomeComponent {
    constructor() {
        this.title = 'cosmo';
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [[1, "row"], [1, "col-md-9", "padding-0"], ["src", "../../assets/images/home.jpeg", "alt", "Home Page", 1, "home-img"], [1, "col-md-3", "padding-0"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-shopping-bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shopping_bag_shopping_bag_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingBagComponent"]], styles: [".home-img[_ngcontent-%COMP%]{\r\n    height: 670px;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n.padding-0[_ngcontent-%COMP%]{\r\n    padding:0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWltZ3tcclxuICAgIGhlaWdodDogNjcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucGFkZGluZy0we1xyXG4gICAgcGFkZGluZzowIDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EBTS":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function WalletComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goToHistory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WalletComponent {
    constructor() {
        this.showWallet = true;
    }
    ngOnInit() {
    }
    goToHistory() {
        this.showWallet = false;
    }
}
WalletComponent.ɵfac = function WalletComponent_Factory(t) { return new (t || WalletComponent)(); };
WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletComponent, selectors: [["app-wallet"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "click"], ["src", "../../assets/images/wallet.jpg", "alt", "Wallet", 1, "img"], ["src", "../../assets/images/history.jpeg", "alt", "Wallet", 1, "img"]], template: function WalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WalletComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WalletComponent_div_1_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showWallet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L3dhbGxldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wallet',
                templateUrl: './wallet.component.html',
                styleUrls: ['./wallet.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "active-tab": a0 }; };
function CheckoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1-Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "pooja.ganar@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2-Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "House 2040 High Stree Banglore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3-Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r0.showPayment));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.showPayment));
} }
function CheckoutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Saved Addresses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "New Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sustainable Packaging ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "By choosing this option you will receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 500 Reward Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pooja Ganar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "House 2040, High Street, Cape Town, Banglore, Karnataka - 123456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "+91-9876987698");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_2_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.ship(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "SHIP TO THIS ADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 2 Items in your Bag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sub Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Shipping Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Remove Reward Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "REMOVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Grand Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r1.bagTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Discount(", ctx_r1.rewardPoints, " points used)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-\u20B9", ctx_r1.rewardPoints / 100, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r1.grandTotal, "");
} }
function CheckoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CHOOSE PAYMENT METHOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Credit/Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UPI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Google Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Net Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mobile Wallets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cash on Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Gift Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Credit/Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1234 5678 1234 5678");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "cvv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "01 /22 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "123");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Save this card for future");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_3_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.pay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Sustainable Packaging ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "By choosing this option you will receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " 500 Reward Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " 2 Items in your Bag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sub Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Shipping Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Grand Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Remove Reward Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "REMOVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Grand Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "SHIPPING ADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Pooja Ganar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "House 2040, High Street, Cape Town, Banglore, Karnataka - 123456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "+91-9876987698");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pay \u20B9", ctx_r2.grandTotal, " Now >");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r2.bagTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Discount(", ctx_r2.rewardPoints, " points used)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-\u20B9", ctx_r2.rewardPoints / 100, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r2.grandTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r2.grandTotal, "");
} }
function CheckoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.orderPlaced(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CheckoutComponent {
    constructor(router) {
        this.router = router;
        this.rewardPoints = 2000;
        this.reward = false;
        this.bagTotal = 6150;
        this.grandTotal = this.bagTotal - Math.floor(this.rewardPoints / 100);
        this.showPayment = false;
        this.orderSuccess = false;
    }
    ngOnInit() {
    }
    pay() {
        this.orderSuccess = true;
    }
    ship() {
        this.showPayment = true;
    }
    orderPlaced() {
        this.router.navigate(['wallet']);
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 5, vars: 4, consts: [["class", "row bar", 4, "ngIf"], ["class", "bg", "id", "address", 4, "ngIf"], ["class", "bg", "id", "payment", 4, "ngIf"], [4, "ngIf"], [1, "row", "bar"], [1, "col-4"], ["src", "../../assets/images/cosmo.jpg", "alt", "Cosmo", 1, "cosmo"], [1, "col-1", "border-right"], [1, "col-1", "border-right", "left-align"], [1, "address"], [1, "col-1", "border-right", "left-align", "active-tab", 3, "ngClass"], [1, "col-1", "border-right", "left-align", 3, "ngClass"], ["id", "address", 1, "bg"], [1, "row", "payment-section"], [1, "col-3"], [1, "col-6"], [1, "payment-label"], [1, "row"], [1, "col-2", "payment-mode"], [1, "card"], [1, "card-body"], [1, "active-address"], [1, "col-2", "address-option"], [1, "card-text", "card-text-sustainable"], ["type", "checkbox", "name", "reward", "id", "reward-radio", "checked", ""], [1, "card", "address-card"], [1, "card-body", "edit-address"], [1, "card-text"], [1, "addr"], [1, "btn-edit"], ["xmlns", "http://www.w3.org/2000/svg", "width", "10", "height", "10", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pen"], ["d", "m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"], [1, "btn-ship", 3, "click"], [1, "col-2", "address-summary"], [1, "card-body", "bag-edit"], [1, "summary-order"], [1, "float-right", "arrow-up"], [1, "float-right"], ["src", "../../assets/images/products.JPG", "alt", "", 1, "p-img"], [1, "card", "margin-top"], [1, "card-body", "addr-total"], [1, "right-align"], [1, "right-align", "discount"], [1, "discount"], [1, "btn-rm"], [1, "grand-total"], [1, "right-align", "arrow-up"], ["id", "payment", 1, "bg"], [1, "active-payment"], [1, "col-2", "credit-card"], [1, "expiry"], [1, "expiry", "cvv"], ["src", "../../assets/images/cvv.png", "alt", "cvv", 1, "cvv", "cvv-img"], [1, "cvv"], ["type", "checkbox", "name", "save"], [1, "save-checkbox-label"], [1, "pay-btn", 3, "click"], [1, "col-2", "summary"], [1, "float-right", "arrow"], [1, "card", "sum-address", "margin-top"], [1, "shipping-addr"], [1, "change-addr"], [3, "click"], ["src", "../../assets/images/success.jpeg", "alt", "Order Success", 1, "order-success"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_1_Template, 17, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_2_Template, 102, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_div_3_Template, 135, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_div_4_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.orderSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPayment && !ctx.orderSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderSuccess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n}\r\n\r\n.cosmo[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 100px;\r\n    height: 30px;\r\n}\r\n\r\n.bar[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 0.5rem;\r\n    line-height: 1;\r\n}\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n    background-color: lightgrey;\r\n    width: 100%;\r\n    height: 90vh;\r\n}\r\n\r\n.border-right[_ngcontent-%COMP%]{\r\n    border-right: 1px solid lightgrey  ;\r\n    font-weight:600;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.active-tab[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid #ec2e7a;\r\n    color: #ec2e7a;\r\n}\r\n\r\n.left-align[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding-left: 0.25rem;\r\n    padding-right: 0.25rem;\r\n    overflow:hidden\r\n}\r\n\r\n.address[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    font-size: xx-small;\r\n    overflow:hidden;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    width: 100px;\r\n    color: black;\r\n}\r\n\r\n.payment-section[_ngcontent-%COMP%]{\r\n    padding-top: 1rem;\r\n}\r\n\r\n.payment-label[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n    font-weight: 700;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.payment-mode[_ngcontent-%COMP%] {\r\n    width: 15%;\r\n    padding-right: 0;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n    border-bottom: 1px solid whitesmoke;\r\n    padding: 0.25rem 0 0.25rem 0;\r\n}\r\n\r\n.active-payment[_ngcontent-%COMP%], .active-address[_ngcontent-%COMP%] {\r\n    border-right: 2px solid #ec2e7a;\r\n}\r\n\r\n.active-address[_ngcontent-%COMP%] {\r\n    color: #ec2e7a;\r\n    font-weight: 700;\r\n}\r\n\r\n.expiry[_ngcontent-%COMP%]{\r\n    color: grey;\r\n}\r\n\r\n.credit-card[_ngcontent-%COMP%]{\r\n    width: 22%;\r\n    \r\n}\r\n\r\n.save-checkbox-label[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n    padding-left: 0.5rem;\r\n}\r\n\r\n.pay-btn[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-color: #ec2e7a;\r\n    color: white;\r\n    padding: 0.25rem 0 0.25em 0;\r\n    border-style: none;\r\n}\r\n\r\n.cvv[_ngcontent-%COMP%]{\r\n    float:right;\r\n}\r\n\r\n.cvv-img[_ngcontent-%COMP%]{\r\n    float: right;\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\n.card-text-sustainable[_ngcontent-%COMP%] {\r\n font-size: xx-small;\r\n}\r\n\r\n.summary[_ngcontent-%COMP%]{\r\n    width: 22%;\r\n}\r\n\r\n.right-align[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    float:right;\r\n}\r\n\r\ntable[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    font-size: xx-small;\r\n}\r\n\r\n.btn-rm[_ngcontent-%COMP%]{\r\n    border-style: none;\r\n    color: #ec2e7a;\r\n    background-color: white;\r\n    font-weight: 600;\r\n}\r\n\r\n.summary-order[_ngcontent-%COMP%] {\r\n    color: orangered;\r\n    font-size: x-small;\r\n    padding-top: -1rem;\r\n    margin-top: -1.5rem;\r\n}\r\n\r\n.discount[_ngcontent-%COMP%] {\r\n    color: rgb(9, 224, 224);\r\n}\r\n\r\n.float-right[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    height: 0.35rem;\r\n    width: 0.35rem;\r\n    border-style: solid;\r\n    border-color: orangered;\r\n    border-width: 0px 1px 1px 0px;\r\n    transform: rotate(45deg);\r\n    transition: border-width 150ms ease-in-out;\r\n    margin-top: 0.3rem;\r\n    margin-left: 0.3rem;\r\n  }\r\n\r\n.arrow-up[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    height: 0.35rem;\r\n    width: 0.35rem;\r\n    border-style: solid;\r\n    border-color: orangered;\r\n    border-width: 0px 1px 1px 0px;\r\n    transform: rotate(225deg);\r\n    transition: border-width 150ms ease-in-out;\r\n    margin-top: 0.3rem;\r\n    margin-left: 0.3rem;\r\n  }\r\n\r\n.summary-order[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\r\n      color: #ec2e7a;\r\n      font-weight: 600;\r\n  }\r\n\r\n.shipping-addr[_ngcontent-%COMP%]{\r\n    float: left;\r\n    font-weight: 700;\r\n    font-size: x-small;\r\n  }\r\n\r\n.change-addr[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #ec2e7a;\r\n    font-weight: 700;\r\n    font-size: x-small;\r\n  }\r\n\r\n.addr[_ngcontent-%COMP%] {\r\n      font-size: xx-small;\r\n  }\r\n\r\n.sum-address[_ngcontent-%COMP%] {\r\n      background-color: whitesmoke;\r\n  }\r\n\r\n.grand-total[_ngcontent-%COMP%] {\r\n      font-weight: 700;\r\n  }\r\n\r\n.grand-total[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n      width: 50%;\r\n  }\r\n\r\n.address-option[_ngcontent-%COMP%]{\r\n      width: 23%;\r\n  }\r\n\r\n.btn-edit[_ngcontent-%COMP%] {\r\n      font-size: xx-small;\r\n      width: 30px;\r\n      border: 1px solid lightgray;\r\n  }\r\n\r\n.btn-ship[_ngcontent-%COMP%]{\r\n    font-size: xx-small;\r\n    border: 1px solid lightgray;\r\n    width: 87%;\r\n    color: white;\r\n    background-color: #ec2e7a;\r\n    height: 30px;\r\n    float: right;\r\n  }\r\n\r\n.edit-address[_ngcontent-%COMP%]{\r\n      padding-top:0;\r\n      padding-bottom: 0.25rem;\r\n  }\r\n\r\n.address-card[_ngcontent-%COMP%] {\r\n      margin-top: 0.5rem;\r\n  }\r\n\r\n.bag-edit[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n      border-bottom: none;\r\n      padding-bottom: 0;\r\n  }\r\n\r\n.p-img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 200px;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.address-summary[_ngcontent-%COMP%]{\r\n    width: 24%;\r\n}\r\n\r\n.addr-total[_ngcontent-%COMP%] {\r\n    padding-top:0;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.margin-top[_ngcontent-%COMP%]{\r\n    margin-top:0.5rem;\r\n}\r\n\r\n.order-success[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztBQUVBO01BQ0ksY0FBYztNQUNkLGdCQUFnQjtFQUNwQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVBO01BQ0ksbUJBQW1CO0VBQ3ZCOztBQUVBO01BQ0ksNEJBQTRCO0VBQ2hDOztBQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztBQUVBO01BQ0ksVUFBVTtFQUNkOztBQUVBO01BQ0ksVUFBVTtFQUNkOztBQUVBO01BQ0ksbUJBQW1CO01BQ25CLFdBQVc7TUFDWCwyQkFBMkI7RUFDL0I7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0FBRUE7TUFDSSxhQUFhO01BQ2IsdUJBQXVCO0VBQzNCOztBQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztBQUVBO01BQ0ksbUJBQW1CO01BQ25CLGlCQUFpQjtFQUNyQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNvc21vIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmJhciB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG4uYm9yZGVyLXJpZ2h0e1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmV5ICA7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hY3RpdmUtdGFie1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYzJlN2E7XHJcbiAgICBjb2xvcjogI2VjMmU3YTtcclxufVxyXG5cclxuLmxlZnQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XHJcbiAgICBvdmVyZmxvdzpoaWRkZW5cclxufVxyXG5cclxuLmFkZHJlc3Mge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wYXltZW50LXNlY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnBheW1lbnQtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ucGF5bWVudC1tb2RlIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5ID4gZGl2e1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAgMC4yNXJlbSAwO1xyXG59XHJcblxyXG4uYWN0aXZlLXBheW1lbnQsIC5hY3RpdmUtYWRkcmVzcyB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZWMyZTdhO1xyXG59XHJcblxyXG4uYWN0aXZlLWFkZHJlc3Mge1xyXG4gICAgY29sb3I6ICNlYzJlN2E7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZXhwaXJ5e1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5jcmVkaXQtY2FyZHtcclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgICAvKiBwYWRkaW5nOiAwIDA7ICovXHJcbn1cclxuXHJcbi5zYXZlLWNoZWNrYm94LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5wYXktYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMyZTdhO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwIDAuMjVlbSAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uY3Z2e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbi5jdnYtaW1ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQtc3VzdGFpbmFibGUge1xyXG4gZm9udC1zaXplOiB4eC1zbWFsbDtcclxufVxyXG5cclxuLnN1bW1hcnl7XHJcbiAgICB3aWR0aDogMjIlO1xyXG59XHJcblxyXG4ucmlnaHQtYWxpZ257XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG50YWJsZSx0cix0ZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbn1cclxuXHJcbi5idG4tcm17XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogI2VjMmU3YTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnN1bW1hcnktb3JkZXIge1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIHBhZGRpbmctdG9wOiAtMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XHJcbn1cclxuXHJcbi5kaXNjb3VudCB7XHJcbiAgICBjb2xvcjogcmdiKDksIDIyNCwgMjI0KTtcclxufVxyXG5cclxuLmZsb2F0LXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmFycm93IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDAuMzVyZW07XHJcbiAgICB3aWR0aDogMC4zNXJlbTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZXJlZDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDFweCAxcHggMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLXdpZHRoIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuICB9XHJcblxyXG4gIC5hcnJvdy11cCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAwLjM1cmVtO1xyXG4gICAgd2lkdGg6IDAuMzVyZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMXB4IDBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItd2lkdGggMTUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLnN1bW1hcnktb3JkZXIgPiBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjZWMyZTdhO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnNoaXBwaW5nLWFkZHJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgfVxyXG5cclxuICAuY2hhbmdlLWFkZHIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICNlYzJlN2E7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gIH1cclxuXHJcbiAgLmFkZHIge1xyXG4gICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xyXG4gIH1cclxuXHJcbiAgLnN1bS1hZGRyZXNzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcblxyXG4gIC5ncmFuZC10b3RhbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuZ3JhbmQtdG90YWwgPiB0ZCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuYWRkcmVzcy1vcHRpb257XHJcbiAgICAgIHdpZHRoOiAyMyU7XHJcbiAgfVxyXG5cclxuICAuYnRuLWVkaXQge1xyXG4gICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1zaGlwe1xyXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHdpZHRoOiA4NyU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMyZTdhO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmVkaXQtYWRkcmVzc3tcclxuICAgICAgcGFkZGluZy10b3A6MDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuYWRkcmVzcy1jYXJkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJhZy1lZGl0ID4gZGl2IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAucC1pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi5hZGRyZXNzLXN1bW1hcnl7XHJcbiAgICB3aWR0aDogMjQlO1xyXG59XHJcblxyXG4uYWRkci10b3RhbCB7XHJcbiAgICBwYWRkaW5nLXRvcDowO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5tYXJnaW4tdG9we1xyXG4gICAgbWFyZ2luLXRvcDowLjVyZW07XHJcbn1cclxuXHJcbi5vcmRlci1zdWNjZXNzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'cosmo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UMu5":
/*!************************************************!*\
  !*** ./src/assets/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet/wallet.component */ "EBTS");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _shopping_bag_shopping_bag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping-bag/shopping-bag.component */ "e2+d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutComponent"],
        _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_5__["WalletComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _shopping_bag_shopping_bag_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingBagComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutComponent"],
                    _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_5__["WalletComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _shopping_bag_shopping_bag_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingBagComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet/wallet.component */ "EBTS");




const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutComponent"] },
    { path: 'wallet', component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__["WalletComponent"] }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "e2+d":
/*!********************************************************!*\
  !*** ./src/app/shopping-bag/shopping-bag.component.ts ***!
  \********************************************************/
/*! exports provided: ShoppingBagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBagComponent", function() { return ShoppingBagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ShoppingBagComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Discount(", ctx_r0.rewardPoints, " points used)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-\u20B9", ctx_r0.rewardPoints / 100, "");
} }
class ShoppingBagComponent {
    constructor(router) {
        this.router = router;
        this.rewardPoints = 2000;
        this.reward = false;
        this.bagTotal = 6150;
        this.grandTotal = this.bagTotal;
        this.sustainable = true;
    }
    ngOnInit() {
    }
    onChange(event) {
        this.reward = event.target.checked;
        this.grandTotal = (this.reward) ? this.bagTotal - Math.floor(this.rewardPoints / 100) : this.bagTotal;
    }
    proceed() {
        this.router.navigate(['checkout']);
    }
    onChangeSustainable(event) {
        this.sustainable = event.target.checked;
    }
}
ShoppingBagComponent.ɵfac = function ShoppingBagComponent_Factory(t) { return new (t || ShoppingBagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ShoppingBagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingBagComponent, selectors: [["app-shopping-bag"]], decls: 78, vars: 7, consts: [[1, "bg"], [1, "navbar", "nav-bg"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], [1, "row"], [1, "col-6", "padding-0"], ["src", "../../assets/images/left-arrow.JPG", "alt", "", "width", "30", "height", "24", 1, "d-inline-block", "align-text-top", "left-arrow"], [1, "shopping-bag"], [1, "padding-x"], [1, "card"], [1, "card-body"], [1, "card-text"], ["type", "checkbox", "name", "reward", "id", "reward-radio", 3, "change"], ["src", "../../assets/images/products.JPG", "alt", "", 1, "p-img"], [1, "card-header", "text-center"], [1, "right-align"], ["class", "discount", 4, "ngIf"], ["type", "text", "name", "coupon", "id", "coupon", "placeholder", "Have a coupon?", 1, "small"], [1, "bg-white"], [1, "btn-td"], [1, "margin-left"], [1, "total", "margin-left"], [1, "btn", 3, "click"], [1, "discount"]], template: function ShoppingBagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Shopping Bag(2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShoppingBagComponent_Template_input_change_14_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShoppingBagComponent_Template_input_change_19_listener($event) { return ctx.onChangeSustainable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sustainable Packaging ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "By choosing this option you will receive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 500 Reward Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Payment Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Bag Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sub Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ShoppingBagComponent_tr_48_Template, 7, 2, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Shipping Charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Grand Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Grand Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingBagComponent_Template_button_click_76_listener() { return ctx.proceed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Proceed > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.rewardPoints, " Reward Points \u20B9(", ctx.rewardPoints / 100, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.bagTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.bagTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reward);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.grandTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.grandTotal, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".shopping-bag[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n    font-weight: bold;\r\n    margin-left: 45px;\r\n}\r\n\r\n.left-arrow[_ngcontent-%COMP%]{\r\n    height: 16px;\r\n    width: 20px;\r\n}\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n    background-color: whitesmoke;\r\n    height: 670px;\r\n}\r\n\r\n.nav-bg[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\r\n\r\n.padding-0[_ngcontent-%COMP%] {\r\n    padding: 0 0;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    margin: 0.5rem 0 0.5rem 0;\r\n}\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%] {\r\n  margin-top: -1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.padding-x[_ngcontent-%COMP%] {\r\n    padding: 0 1rem;\r\n}\r\n\r\n.p-img[_ngcontent-%COMP%]{\r\n    width: 290px;\r\n    height: 200px;\r\n}\r\n\r\nsmall[_ngcontent-%COMP%] {\r\n    font-size: xx-small;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n    padding: 0 0;\r\n    color: black;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    padding: 10px 0 0 0;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n}\r\n\r\n.right-align[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    float: right;\r\n}\r\n\r\ntable[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    font-size: xx-small;\r\n}\r\n\r\n.small[_ngcontent-%COMP%] {\r\n    font-size:  x-small;\r\n}\r\n\r\n.discount[_ngcontent-%COMP%] {\r\n    color: rgb(9, 224, 224);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #ec2e7a;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n.btn-td[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\r\n\r\n.total[_ngcontent-%COMP%]{\r\n    color: #ec2e7a\r\n}\r\n\r\n.margin-left[_ngcontent-%COMP%] {\r\n    margin-left: 1rem;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctYmFnL3Nob3BwaW5nLWJhZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWJhZy9zaG9wcGluZy1iYWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9wcGluZy1iYWd7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG59XHJcblxyXG4ubGVmdC1hcnJvd3tcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgaGVpZ2h0OiA2NzBweDtcclxufVxyXG5cclxuLm5hdi1iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFkZGluZy0wIHtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXgge1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcblxyXG4ucC1pbWd7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG59XHJcbi5jYXJkLXRleHQge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLnJpZ2h0LWFsaWdue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbnRhYmxlLHRyLHRkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogIHgtc21hbGw7XHJcbn1cclxuXHJcbi5kaXNjb3VudCB7XHJcbiAgICBjb2xvcjogcmdiKDksIDIyNCwgMjI0KTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzJlN2E7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi10ZCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uYmctd2hpdGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvdGFse1xyXG4gICAgY29sb3I6ICNlYzJlN2FcclxufVxyXG5cclxuLm1hcmdpbi1sZWZ0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingBagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-bag',
                templateUrl: './shopping-bag.component.html',
                styleUrls: ['./shopping-bag.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/environments/environment */ "UMu5");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_assets_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map