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

/***/ "./src/app/_models/waitlist.ts":
/*!*************************************!*\
  !*** ./src/app/_models/waitlist.ts ***!
  \*************************************/
/*! exports provided: Waitlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Waitlist", function() { return Waitlist; });
var Waitlist = /** @class */ (function () {
    function Waitlist() {
    }
    return Waitlist;
}());



/***/ }),

/***/ "./src/app/_services/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.makeOrders = function (orders) {
        var _this = this;
        var list = [];
        orders.forEach(function (o) {
            console.log('posting order!');
            console.log(o);
            var response = _this.http.post(API_URL + '/orders', {
                "orderId": o.orderId,
                "menuitemId": o.menuItemId,
                "quantity": o.quantity,
                "orderTime": o.orderTime,
                "customerId": o.customerId,
                "restaurantID": o.restaurantID
            });
            list.push(response);
        });
        return list;
    };
    ApiService.prototype.getAllOrders = function (restaurantID, customerID) {
        return this.http.get(API_URL + '/orders/' + restaurantID + '/' + customerID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var items = response.json();
            console.log(items);
            return items;
        }));
    };
    ApiService.prototype.getOrder = function (orderId) {
        return this.http.get(API_URL + '/order/' + orderId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var items = response.json();
            console.log(items);
            return items;
        }));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/_services/menu-api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/menu-api.service.ts ***!
  \***********************************************/
/*! exports provided: MenuApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuApiService", function() { return MenuApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
var MenuApiService = /** @class */ (function () {
    function MenuApiService(http) {
        this.http = http;
    }
    MenuApiService.prototype.getAllMenuItems = function (restaurantID) {
        return this.http.get(API_URL + '/menuitems/' + restaurantID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var items = response.json();
            console.log(items);
            return items;
        }));
    };
    MenuApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MenuApiService);
    return MenuApiService;
}());



/***/ }),

/***/ "./src/app/_services/register-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/register-api.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterApiService", function() { return RegisterApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var API_URL = environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
var RegisterApiService = /** @class */ (function () {
    function RegisterApiService(http) {
        this.http = http;
    }
    RegisterApiService.prototype.registerCustomer = function (customer) {
        var _this = this;
        customer.forEach(function (c) {
            console.log('posting order!');
            console.log(c);
            var response = _this.http.post(API_URL + '/customers', {
                "customerId": c.customerID,
                "firstName": c.firstName,
                "lastName": c.lastName,
                "address": {
                    "street": c.address.street, "number": c.address.number,
                    "zip": c.address.zip,
                    "city": c.address.city
                },
                "phone": c.phone,
                "email": c.email,
                "username": c.username,
                "password": c.password
            });
            response.subscribe(function (r) { return console.log(r); });
        });
    };
    RegisterApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], RegisterApiService);
    return RegisterApiService;
}());



/***/ }),

/***/ "./src/app/_services/restaurant-api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/restaurant-api.service.ts ***!
  \*****************************************************/
/*! exports provided: RestaurantAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantAPIService", function() { return RestaurantAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
var RestaurantAPIService = /** @class */ (function () {
    function RestaurantAPIService(http) {
        this.http = http;
    }
    RestaurantAPIService.prototype.getAllRestaurants = function () {
        return this.http.get(API_URL + '/restaurantlist')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var restaurants = response.json();
            console.log(restaurants);
            return restaurants;
        }));
    };
    RestaurantAPIService.prototype.getNearByRestaurants = function (city) {
        console.log("restaurant API city " + city);
        return this.http.get(API_URL + '/restaurantlist/' + city)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var restaurants = response.json();
            console.log("restaurants" + restaurants);
            return restaurants;
        }));
    };
    RestaurantAPIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], RestaurantAPIService);
    return RestaurantAPIService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getCurrentUsersEmail = function () {
        return this.http.get(API_URL + '/user/details').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response.json();
            console.log("Name from userService" + user.emails);
            console.log(user.emails[0].value);
            return user.emails[0].value;
        }));
    };
    UserService.prototype.logoutUser = function () {
        this.http.get(API_URL + "/logout").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log("Logging off...");
            console.log(response.status);
        }));
    };
    UserService.prototype.getUserdetails = function () {
        return this.http.get(API_URL + '/user/details').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response.json();
            //console.log("name " + user.displayName);
            //console.log("email " + user.emails[0].value);
            //console.log("photo " + user.photos[0].value);
            var result = [user.displayName, user.emails[0].value, user.photos[0].value];
            return result;
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/_services/waitlist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/waitlist.service.ts ***!
  \***********************************************/
/*! exports provided: WaitlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitlistService", function() { return WaitlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _models_waitlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/waitlist */ "./src/app/_models/waitlist.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var API_URL = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
var WaitlistService = /** @class */ (function () {
    function WaitlistService(http) {
        this.http = http;
    }
    WaitlistService.prototype.storeWaitlistEntry = function (waitlistEntry) {
        console.log("Adding to waitlist..");
        return this.http.post(API_URL + '/waitlist', waitlistEntry).subscribe(function (response) {
            console.log(response.status);
        });
    };
    WaitlistService.prototype.getWaitlist = function (restaurantID) {
        return this.http.get(API_URL + '/waitlist/' + restaurantID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var items = response.json();
            console.log(_models_waitlist__WEBPACK_IMPORTED_MODULE_2__["Waitlist"]);
            return items;
        }));
    };
    WaitlistService.prototype.notifyCustomer = function (restaurantID, queueID) {
        console.log("notifying customer..." + queueID);
        return this.http.get(API_URL + '/waitlist/' + restaurantID + '/notify/' + queueID, {}).subscribe(function (response) {
            console.log(response.status);
        });
    };
    WaitlistService.prototype.confirmCustomer = function (restaurantID, queueID) {
        console.log("confirming customer..." + queueID);
        return this.http.get(API_URL + '/waitlist/' + restaurantID + '/confirm/' + queueID, {}).subscribe(function (response) {
            console.log(response.status);
        });
    };
    WaitlistService.prototype.removeReservation = function (restaurantID, queueID) {
        console.log("removing reservation..." + queueID);
        return this.http.delete(API_URL + '/waitlist/' + restaurantID + '/' + queueID, {}).subscribe(function (response) {
            console.log(response.status);
        });
    };
    WaitlistService.prototype.completeReservation = function (restaurantID, queueID) {
        console.log("Complete reservation..." + queueID + " in " + restaurantID);
        return this.http.post(API_URL + '/waitlist/' + restaurantID + '/complete/' + queueID, {}).subscribe(function (response) {
            console.log(response.status);
        });
    };
    WaitlistService.prototype.updateGroupSize = function (restaurantID, queueID, groupSize) {
        console.log("Updating group gize for ..." + queueID + " in " + restaurantID);
        return this.http.patch(API_URL + '/waitlist/' + restaurantID + '/' + queueID, { "groupSize": groupSize }).subscribe(function (response) {
            console.log(response.status);
        });
    };
    WaitlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], WaitlistService);
    return WaitlistService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".appTitle{\r\n\ttop : 5px;\r\n\tleft : 47%;\r\n\tposition: absolute;\r\n}\r\n\r\nbody {\r\n\tbackground-image: url(\"/src/assets/images/fadedTable.jpg\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-attachment: fixed;\r\n\tbackground-position: center; \r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLDBEQUEwRDtDQUMxRCw0QkFBNEI7Q0FDNUIsNEJBQTRCO0NBQzVCLDJCQUEyQjtHQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcFRpdGxle1xyXG5cdHRvcCA6IDVweDtcclxuXHRsZWZ0IDogNDclO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuYm9keSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3NyYy9hc3NldHMvaW1hZ2VzL2ZhZGVkVGFibGUuanBnXCIpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG4gICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>     \r\n  <router-outlet></router-outlet>\r\n</div>"

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
        this.title = 'WaytLess';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_waitlist_entry_waitlist_entry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/waitlist-entry/waitlist-entry.component */ "./src/app/components/waitlist-entry/waitlist-entry.component.ts");
/* harmony import */ var _components_order_cart_order_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/order-cart/order-cart.component */ "./src/app/components/order-cart/order-cart.component.ts");
/* harmony import */ var _components_manageWaitlist_manageWaitlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/manageWaitlist/manageWaitlist.component */ "./src/app/components/manageWaitlist/manageWaitlist.component.ts");
/* harmony import */ var _components_confirm_reservation_confirm_reservation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/confirm-reservation/confirm-reservation.component */ "./src/app/components/confirm-reservation/confirm-reservation.component.ts");
/* harmony import */ var _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/loginpage/loginpage.component */ "./src/app/components/loginpage/loginpage.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _components_waitlist_entry_waitlist_entry_component__WEBPACK_IMPORTED_MODULE_12__["WaitlistEntryComponent"],
                _components_order_cart_order_cart_component__WEBPACK_IMPORTED_MODULE_13__["OrderCartComponent"],
                _components_manageWaitlist_manageWaitlist_component__WEBPACK_IMPORTED_MODULE_14__["manageWaitlistComponent"],
                _components_confirm_reservation_confirm_reservation_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmReservationComponent"],
                _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_16__["LoginpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_4__["CustomMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_waitlist_entry_waitlist_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/waitlist-entry/waitlist-entry.component */ "./src/app/components/waitlist-entry/waitlist-entry.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_order_cart_order_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/order-cart/order-cart.component */ "./src/app/components/order-cart/order-cart.component.ts");
/* harmony import */ var _components_manageWaitlist_manageWaitlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/manageWaitlist/manageWaitlist.component */ "./src/app/components/manageWaitlist/manageWaitlist.component.ts");
/* harmony import */ var _components_confirm_reservation_confirm_reservation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/confirm-reservation/confirm-reservation.component */ "./src/app/components/confirm-reservation/confirm-reservation.component.ts");
/* harmony import */ var _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loginpage/loginpage.component */ "./src/app/components/loginpage/loginpage.component.ts");









var routes = [
    //{ path: 'create', component: CreateComponent },
    //{ path: 'edit/:id', component: EditComponent },
    { path: 'register', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
    { path: 'menu/:id', component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"] },
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_8__["LoginpageComponent"] },
    { path: 'waitlist-entry/:id', component: _components_waitlist_entry_waitlist_entry_component__WEBPACK_IMPORTED_MODULE_3__["WaitlistEntryComponent"] },
    { path: 'order-cart/:id', component: _components_order_cart_order_cart_component__WEBPACK_IMPORTED_MODULE_5__["OrderCartComponent"] },
    //{ path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: 'managewaitlist/:id', component: manageWaitlistComponent },
    { path: 'managewaitlist', component: _components_manageWaitlist_manageWaitlist_component__WEBPACK_IMPORTED_MODULE_6__["manageWaitlistComponent"] },
    { path: 'confirmRes/:restId/:queueId', component: _components_confirm_reservation_confirm_reservation_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmReservationComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/components/confirm-reservation/confirm-reservation.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/confirm-reservation/confirm-reservation.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtLXJlc2VydmF0aW9uL2NvbmZpcm0tcmVzZXJ2YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybS1yZXNlcnZhdGlvbi9jb25maXJtLXJlc2VydmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/confirm-reservation/confirm-reservation.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/confirm-reservation/confirm-reservation.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\" rel=\"stylesheet\">\r\n\r\n<a routerLink=\"/home\"><img src=\"../assets/images/LOGO.png\" style=\"width: 110px;height: 110px; z-index:9999999;position:  relative;\"\r\n  class=\"mx-auto d-block img-responsive mt-n5\" id=\"siteIcon\" alt=\"Back to Homepage\"></a>\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"col-lg-6 bg-light text-dark mx-auto mt-n5 p-5 shadow py-3 rounded\">\r\n\r\n    <ng-template [ngIf]=\"!waitlist[index]\">\r\n      <div class=\"text-center\">\r\n        <br><br>\r\n        <h1>You do not have a valid reservation.</h1>\r\n      </div>\r\n\r\n    </ng-template>\r\n\r\n    <ng-template [ngIf]=\"waitlist[index]\">\r\n      <p> Hello <b>{{customerName}},</b></p>\r\n      <p> Welcome back to <b>{{restaurantName}}</b>'s waitlist, your queue ID is <b>{{queueID}}.</b></p>\r\n      <p><img src=\"{{restIMG}}\" class=\"mx-auto rounded\" alt=\"{{restaurantName}}\"></p>\r\n      <ng-template [ngIf]=\"notified\">\r\n\r\n        <div *ngIf=\"confirmed\">\r\n          <p>You have confirmed your reservation. Please head back to the restaurant.</p>\r\n        </div>\r\n        <div *ngIf=\"!confirmed\">\r\n          <p>Confirm your reservation by clicking here: <button class=\"btn btn-labeled btn-primary\"\r\n              (click)=\"confirm(queueID)\" type=\"button\">Confirm your Reservation</button></p>\r\n\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template [ngIf]=\"!notified\">\r\n\r\n        \r\n        <div class=\"text-center\">\r\n        <p>You have not been notified. Check back later!</p>\r\n        </div>\r\n      </ng-template>\r\n      <p>You can start browsing the\r\n        <a routerLink=\"/menu/{{restaurantId}}\" role=\"button\" class=\"btn btn-labeled btn-success\"><i class=\"fa fa-bars\"\r\n            aria-hidden=\"true\"></i> Restaurant Menu</a>\r\n      </p>\r\n    </ng-template>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/confirm-reservation/confirm-reservation.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/confirm-reservation/confirm-reservation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConfirmReservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmReservationComponent", function() { return ConfirmReservationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_restaurant_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/_services/restaurant-api.service */ "./src/app/_services/restaurant-api.service.ts");
/* harmony import */ var app_services_waitlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services/waitlist.service */ "./src/app/_services/waitlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmReservationComponent = /** @class */ (function () {
    function ConfirmReservationComponent(waitlistService, route, restaurantAPIService) {
        var _this = this;
        this.waitlistService = waitlistService;
        this.route = route;
        this.restaurantAPIService = restaurantAPIService;
        this.route.params.subscribe(function (params) {
            _this.restaurantId = params['restId'];
            _this.queueID = params['queueId'];
            _this.restaurantAPIService.getAllRestaurants().subscribe(function (restItems) {
                _this.restaurantName = restItems[_this.restaurantId - 1].name;
                _this.restIMG = restItems[_this.restaurantId - 1].url;
            });
        });
    }
    ConfirmReservationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.restaurantId) {
            this.waitlistService.getWaitlist(this.restaurantId).subscribe(function (waitlistItems) {
                _this.waitlist = waitlistItems;
                console.log(_this.waitlist);
                _this.index = _this.waitlist.findIndex(function (obj) { return obj.queueID == _this.queueID; });
                console.log(_this.index, _this.queueID);
                _this.notified = _this.waitlist[_this.index].notified;
                _this.confirmed = _this.waitlist[_this.index].confirmed;
                _this.customerName = _this.waitlist[_this.index].customerName;
            });
        }
    };
    ConfirmReservationComponent.prototype.confirm = function (queueID) {
        console.log("confirm" + queueID);
        this.waitlistService.confirmCustomer(this.restaurantId, queueID);
        window.location.reload();
    };
    ConfirmReservationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-reservation',
            template: __webpack_require__(/*! ./confirm-reservation.component.html */ "./src/app/components/confirm-reservation/confirm-reservation.component.html"),
            styles: [__webpack_require__(/*! ./confirm-reservation.component.css */ "./src/app/components/confirm-reservation/confirm-reservation.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_waitlist_service__WEBPACK_IMPORTED_MODULE_3__["WaitlistService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], app_services_restaurant_api_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantAPIService"]])
    ], ConfirmReservationComponent);
    return ConfirmReservationComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand_logo_container {\r\n  border-radius: 50%;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.brand_logo {\r\n  height: 110px;\r\n  width: 110px;\r\n}\r\n.login-card {\r\n    max-width: 250px;\r\n    margin-left: 1100px;\r\n    margin-top: 20px;\r\n    align-content: center;\r\n    margin-right: 10px;\r\n  }\r\n.logoutBtn{\r\n    height:40px; \r\n    width:100px; \r\n    position: absolute;\r\n    top: 8px;\r\n    right: 16px;\r\n    background-color: #ef6f31;\r\n    text-align: center;\r\n    border-radius: 3mm;\r\n  }\r\n.example-card {\r\n    max-width: 300px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n  }\r\n.example-full-width{\r\n    padding-left: 10px;\r\n  }\r\n.right{\r\n    float: right;\r\n  }\r\n.left{\r\n    float: left;\r\n  }\r\n.mat-raised-button{\r\n      align-self: center;\r\n      width: 250px;\r\n      margin-left: 20px;\r\n      background-color: #FF6E40;    \r\n  }\r\n.button-container{\r\n    display: flex;\r\n  }\r\n.card:hover {\r\n    background-color:#c0392b;\r\n}\r\n.card-container {\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: none;\r\n    align-self: center;\r\n    scroll-behavior: smooth;\r\n    display: flex;  \r\n    margin-top: 0px;\r\n    margin-right: 10px;\r\n    overflow-x: auto;\r\n    justify-content: space-between;\r\n    width: 97%;\r\n  }\r\n.card-container::-webkit-scrollbar { width: 0px;  /* Remove scrollbar space */\r\n    background: transparent;  /* Optional: just make scrollbar invisible */ }\r\n.appTitle{\r\n  left : 47%;\r\n  margin-top: 0px;\r\n  position: absolute;\r\n}\r\n.mat-title\r\n{\r\n  margin-bottom: 0rem;\r\n  padding-bottom: -2rem;\r\n  padding-top: 0rem;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 20px;\r\n}\r\n.mat-caption{\r\n  \r\n  font-size: 12px;\r\n}\r\n.mat-icon-button {\r\n  margin: 0 0.1rem;\r\n  height: 1rem;\r\n  min-width: 0;\r\n  line-height: 2rem;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  width: 1rem;\r\n}\r\n.login-text{\r\n  margin-left : 10px;\r\n  font-size: 15px;\r\n  color: #FF6E40;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n.flex {\r\n  flex: 1 1 auto;\r\n}\r\n.title{\r\n  font-size: 22px;\r\n  font-family: sans-serif;\r\n  margin-left: 15px;\r\n  margin-bottom: 0px;\r\n  margin-top: 0px;\r\n}\r\n.text\r\n{\r\n  font-size: 13px;\r\n  font-family: sans-serif;\r\n  margin-top: 0px;\r\n}\r\n.rating_text\r\n{\r\n  font-size: 13px;\r\n  margin-left: 10px;\r\n  font-family: sans-serif;\r\n  margin-top: -3px;\r\n}\r\n.div_body{\r\n  background-position-x: fixed;\r\n  font-family: 'Roboto', sans-serif;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 90%;\r\n  overflow-y: hidden;\r\n  -webkit-overflow-scrolling: touch;\r\n  -ms-overflow-style: none;\r\n  }\r\n.mat-body-2 {\r\n   font-family: 'Roboto', 'sans-serif';\r\n   color: #FF6E40;\r\n }\r\n.user_card {\r\n  height: 150px;\r\n  width: 350px;\r\n  top: 70px;\r\n  \r\n  background: #f39c12;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 5px;\r\n}\r\n.form_container {\r\n  margin-top: 100px;\r\n}\r\n.login_btn {\r\n  width: 100%;\r\n  background: #c0392b !important;\r\n  color: white !important;\r\n}\r\n.login_btn:focus {\r\n  box-shadow: none !important;\r\n  outline: 0px !important;\r\n}\r\n.login_container {\r\n  padding: 0 2rem;\r\n}\r\n.input-group-text {\r\n  background: #c0392b !important;\r\n  color: white !important;\r\n  border: 0 !important;\r\n  border-radius: 0.25rem 0 0 0.25rem !important;\r\n}\r\n.input_user,\r\n.input_pass:focus {\r\n  box-shadow: none !important;\r\n  outline: 0px !important;\r\n}\r\n.custom-checkbox .custom-control-input:checked~.custom-control-label::before {\r\n  background-color: #c0392b !important;\r\n}\r\n.active-pink-4 input[type=text]:focus:not([readonly]) {\r\n  border: 1px solid #FF6E40;\r\n  padding: 0px;\r\n  box-shadow: 0 0 0 1px #FF6E40;\r\n}\r\n.active-pink-3 input[type=text] {\r\n  border: 1px solid #FF6E40;\r\n  box-shadow: 0 0 0 1px #FF6E40;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBR0M7SUFDRyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0FBR0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNBO01BQ0ksa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIseUJBQXlCO0VBQzdCO0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFFRjtJQUNJLHdCQUF3QjtBQUM1QjtBQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaO0FBQ0YscUNBQXFDLFVBQVUsR0FBRywyQkFBMkI7SUFDekUsdUJBQXVCLEdBQUcsNENBQTRDLEVBQUU7QUFDNUU7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCO0FBRUE7O0VBRUUsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCO0FBRUQ7R0FDRSxtQ0FBbUM7R0FDbkMsY0FBYztDQUNoQjtBQUNBO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTOztFQUVULG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDRFQUE0RTtFQUM1RSxvRkFBb0Y7RUFDcEYsaUZBQWlGO0VBQ2pGLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsNkNBQTZDO0FBQy9DO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJhbmRfbG9nb19jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnJhbmRfbG9nbyB7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICB3aWR0aDogMTEwcHg7XHJcbn1cclxuIFxyXG5cclxuIC5sb2dpbi1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5sb2dvdXRCdG57XHJcbiAgICBoZWlnaHQ6NDBweDsgXHJcbiAgICB3aWR0aDoxMDBweDsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNmYzMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNtbTtcclxuICB9XHJcbiAgLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLmxlZnR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZFNDA7ICAgIFxyXG4gIH1cclxuICAuYnV0dG9uLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjMDM5MmI7XHJcbn1cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICB9XHJcbi5jYXJkLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogMHB4OyAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi8gfVxyXG4uYXBwVGl0bGV7XHJcbiAgbGVmdCA6IDQ3JTtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubWF0LXRpdGxlXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAtMnJlbTtcclxuICBwYWRkaW5nLXRvcDogMHJlbTtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcHRpb257XHJcbiAgXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubWF0LWljb24tYnV0dG9uIHtcclxuICBtYXJnaW46IDAgMC4xcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDFyZW07XHJcbn1cclxuXHJcbi5sb2dpbi10ZXh0e1xyXG4gIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICNGRjZFNDA7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mbGV4IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufSAgICBcclxuXHJcbi50aXRsZXtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4udGV4dFxyXG57XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4ucmF0aW5nX3RleHRcclxue1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcbi5kaXZfYm9keXtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGZpeGVkO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgIFxyXG4gLm1hdC1ib2R5LTIge1xyXG4gICBmb250LWZhbWlseTogJ1JvYm90bycsICdzYW5zLXNlcmlmJztcclxuICAgY29sb3I6ICNGRjZFNDA7XHJcbiB9XHJcbiAudXNlcl9jYXJkIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICB0b3A6IDcwcHg7XHJcbiAgXHJcbiAgYmFja2dyb3VuZDogI2YzOWMxMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZvcm1fY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4ubG9naW5fYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ2luX2J0bjpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dpbl9jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxufVxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYmFja2dyb3VuZDogI2MwMzkyYiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfdXNlcixcclxuLmlucHV0X3Bhc3M6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYWN0aXZlLXBpbmstNCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGNkU0MDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNGRjZFNDA7XHJcbn1cclxuLmFjdGl2ZS1waW5rLTMgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGNkU0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0ZGNkU0MDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand_logo_container\" >\r\n  <a href=\"/#/home\"><img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\"></a>\r\n</div>\r\n   \r\n<button type=\"button\" class=\"logoutBtn\"><a href = \"https://waytlessv1.azurewebsites.net/logout\" style=\"color:white\">Log out</a></button>\r\n\r\n<div class=\"active-pink-3 active-pink-4 mb-4\" style=\"width:50%;margin :0 auto ;margin-top: 40px\">\r\n  <b>Welcome, <span>{{displayEmail}}</span>!</b>\r\n  <input [(ngModel)]='search' (keydown)=\"keyDownFunction($event)\" class=\"form-control\" type=\"text\"\r\n    placeholder=\"Search Restaurant by Name or City\" aria-label=\"Search\">\r\n</div>\r\n<div class=\"div_body\">\r\n\r\n\r\n\r\n  <br>\r\n  <span class=\"title\">Popular Restaurants</span>\r\n  <div class=\"row\" style=\"margin-left: 5px\">\r\n    <div class=\"card\" style=\"width: 18rem;\" (click)=\"onRestaurantClickEvent(restaurant_id)\"\r\n      *ngFor=\"let r of restuarant\">\r\n      <img src={{r.url}} style=\"width: 290px;height: 200px\">\r\n      <div class=\"card-body\">\r\n        <span class=\"mat-title\">{{r.name}}</span>\r\n        <div layout=\"row\" layout-align=\"start center\">\r\n          <img class=\"mat-icon-button\" src=\"../assets/images/review_full.png\"\r\n            *ngFor=\"let e of createStarArray(r.rating)\">\r\n          <img class=\"mat-icon-button\" src=\"../assets/images/review_empty.png\"\r\n            *ngFor=\"let e of createEmptyStarArray(r.rating)\">\r\n          <span class=\"rating_text\">{{r.reviews}} Reviews</span>\r\n          <span #restaurant_id style=\"display:none\">{{r.restaurantID}}</span>\r\n        </div>\r\n        <p class=\"text\">{{r.cuisine}} . $$$ . {{r.address.city}}</p>\r\n        <p class=\"mat-body-2\">Booked {{r.booked}} times</p>\r\n        <a routerLink=\"menu/1\" class=\"mat-body-2\">See menu</a>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_restaurant_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/_services/restaurant-api.service */ "./src/app/_services/restaurant-api.service.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services/user.service */ "./src/app/_services/user.service.ts");
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
    function HomeComponent(router, restaurantAPIService, route, userService) {
        var _this = this;
        this.router = router;
        this.restaurantAPIService = restaurantAPIService;
        this.route = route;
        this.userService = userService;
        this.reviews = new Array();
        this.show = true;
        this.route.params.subscribe(function (params) {
            /* this.restaurantAPIService.getNearByRestaurants(this.city).subscribe(restItems => {
               //this.restaurantName = restItems[this.restaurantId].name;
               this.restuarant = restItems;
               console.log(restItems);
             })*/
            _this.restaurantAPIService.getAllRestaurants().subscribe(function (restItems) {
                //this.restaurantName = restItems[this.restaurantId].name;
                _this.restuarant = restItems;
                console.log("restItems" + _this.restuarant);
                for (var i = 0; i < restItems[i].rating; i++) {
                    _this.reviews[restItems[i].rating] = i;
                    console.log(restItems[i].rating);
                }
            });
            _this.userService.getCurrentUsersEmail().subscribe(function (currentUserDisplayName) {
                _this.displayEmail = currentUserDisplayName;
                console.log(_this.displayEmail);
                _this.show = false;
            });
        });
    }
    HomeComponent.prototype.createStarArray = function (n) {
        return new Array(n);
    };
    HomeComponent.prototype.createEmptyStarArray = function (n) {
        return new Array((5 - n));
    };
    HomeComponent.prototype.keyDownFunction = function (event) {
        var _this = this;
        if (event.keyCode == 13) {
            this.route.params.subscribe(function (params) {
                console.log("params" + _this.search);
                _this.restaurantAPIService.getNearByRestaurants(_this.search).subscribe(function (restItems) {
                    _this.restuarant = restItems;
                    console.log("restItems :: " + restItems);
                });
            });
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onRestaurantClickEvent = function (resturantId) {
        console.log("resturantId---" + resturantId.textContent);
        this.router.navigate(['./waitlist-entry/' + resturantId.textContent]);
    };
    HomeComponent.prototype.logout = function () {
        this.userService.logoutUser();
        this.router.navigate(['']);
    };
    HomeComponent.prototype.onLoginClickEvent = function (resturantId) {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_services_restaurant_api_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantAPIService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/loginpage/loginpage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\r\n  margin: 0 6rem;\r\n  font-weight: 700;\r\n  color: #5d4267;\r\n}\r\n.subheading {\r\n  margin: 2.5rem 6rem;\r\n  color: #5d4267;\r\n}\r\n.title {\r\n  margin-top: 6rem;\r\n  margin-bottom: 2rem;\r\n  color: #5d4267;\r\n}\r\n.subtitle {\r\n  color: #5d4267;\r\n  margin-left: 20%;\r\n  margin-right: 20%;\r\n  margin-bottom: 6rem;\r\n}\r\n.view {\r\n  background: #fff;\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  height:100%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbnBhZ2UvbG9naW5wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbnBhZ2UvbG9naW5wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZyB7XHJcbiAgbWFyZ2luOiAwIDZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzVkNDI2NztcclxufVxyXG4uc3ViaGVhZGluZyB7XHJcbiAgbWFyZ2luOiAyLjVyZW0gNnJlbTtcclxuICBjb2xvcjogIzVkNDI2NztcclxufVxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBjb2xvcjogIzVkNDI2NztcclxufVxyXG4uc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjNWQ0MjY3O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcclxufVxyXG4udmlldyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OjEwMCVcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/loginpage/loginpage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Poppins|Source+Sans+Pro&display=swap\" rel=\"stylesheet\">\r\n\r\n<!-- Main navigation -->\r\n<div style=\"top:0; left:0; position: absolute\">\r\n  \r\n    <!-- Intro -->\r\n    <section class=\"view\">\r\n  \r\n      <div class=\"row\">\r\n  \r\n        <div class=\"col-md-6\">\r\n  \r\n          <div class=\"d-flex flex-column justify-content-center align-items-center h-100\">\r\n            <h1 class=\"heading display-3\">\r\n              <a class=\"navbar-brand\"  routerLink=\"/login\">\r\n                <img src=\"../assets/images/LOGO.png\" alt=\"WaytLess\" class=\"img-fluid\" height=\"200px\" width=\"200px\">\r\n              </a></h1>\r\n            <h4 class=\"subheading font-weight-bold\">A complete waitlist management system enables your customers to browse a menu and place orders directly.</h4>\r\n\r\n              <button type=\"button\" class=\"btn btn-lg btn-danger btn-margin btn-rounded\"><a href=\"/auth/google\" style=\"color:white\">Login with Google</a></button>\r\n      \r\n          </div>\r\n  \r\n        </div>\r\n  \r\n        <div class=\"col-md-6\">\r\n  \r\n          <div class=\"view\">\r\n            <img src=\"https://images.pexels.com/photos/1528013/pexels-photo-1528013.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260\" class=\"img-fluid\" alt=\"smaple image\">\r\n            <div class=\"mask flex-center hm-gradient\">\r\n            </div>\r\n          </div>\r\n  \r\n        </div>\r\n  \r\n      </div>\r\n  \r\n    </section>\r\n    <!-- Intro -->\r\n      \r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/loginpage/loginpage.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
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

var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent() {
    }
    LoginpageComponent.prototype.ngOnInit = function () {
    };
    LoginpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__(/*! ./loginpage.component.html */ "./src/app/components/loginpage/loginpage.component.html"),
            styles: [__webpack_require__(/*! ./loginpage.component.css */ "./src/app/components/loginpage/loginpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginpageComponent);
    return LoginpageComponent;
}());



/***/ }),

/***/ "./src/app/components/manageWaitlist/manageWaitlist.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/manageWaitlist/manageWaitlist.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  #initials {\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    border: gray solid 2px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 20px;\r\n    margin: 0px 10px 0px 0px;\r\n    display: inline-flex;\r\n  }\r\n\r\n  p {\r\n    font-family: 'Open Sans', sans-serif;\r\n  }\r\n\r\n  h2 {\r\n    font-family: 'Poppins', sans-serif;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VXYWl0bGlzdC9tYW5hZ2VXYWl0bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGtDQUFrQztFQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlV2FpdGxpc3QvbWFuYWdlV2FpdGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgI2luaXRpYWxzIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiBncmF5IHNvbGlkIDJweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/manageWaitlist/manageWaitlist.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/manageWaitlist/manageWaitlist.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Poppins|Open+Sans&display=swap\" rel=\"stylesheet\">\r\n\r\n<a routerLink=\"/home\"><img src=\"../assets/images/LOGO.png\" style=\"width: 110px;height: 110px; z-index:9999999;position:  relative;\"\r\n    class=\"mx-auto d-block img-responsive mt-n5\" id=\"siteIcon\" alt=\"Back to Homepage\"></a>\r\n\r\n\r\n  <ng-template [ngIf]=\"!restaurantName || !username\">\r\n      <div class=\"container bg-light mt-n5 p-5 shadow py-3 rounded\">\r\n        <div class=\"text-secondary text-center\">\r\n          <br><br>\r\n          <h3>You are not authorized to access the waitlist portal.</h3><br>\r\n          <h3>Or, you are not logged in. <a routerLink=\"/login\">Back to homepage.</a></h3>\r\n          <br>\r\n\r\n        </div>\r\n      </div>\r\n  </ng-template>\r\n\r\n  <ng-template [ngIf]=\"restaurantName && username\">\r\n    <div class=\"container mt-n5\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7 bg-light text-dark ml-5 p-5 m-2 shadow\">\r\n          <h2><b>{{currentRestaurant.name}}</b> Waitlist Portal</h2>\r\n          <img src=\"{{currentRestaurant.url}}\">\r\n          \r\n          <p>{{currentRestaurant.address.number}} {{currentRestaurant.address.street}}<br>\r\n            {{currentRestaurant.address.city}}, WA {{currentRestaurant.address.zip}}<br>\r\n          {{currentRestaurant.email}}<br>\r\n          {{currentRestaurant.phoneNumber}}</p>\r\n\r\n          <div class=\"btn-group\" role=\"group\">\r\n          <a routerLink=\"/waitlist-entry/{{restaurantId}}\" role=\"button\" class=\"btn btn-labeled btn-success\">\r\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add to\r\n            Waitlist</a>\r\n          <a routerLink=\"/menu/{{restaurantId}}\" role=\"button\" class=\"btn btn-labeled btn-primary\">\r\n            <i class=\"fa fa-bars\" aria-hidden=\"true\"></i> Restaurant Menu</a>\r\n            <a href = \"https://waytlessv1.azurewebsites.net/logout\" role=\"button\" class=\"btn btn-labeled btn-danger\">\r\n              <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log out</a>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 bg-light text-dark p-0 m-2 shadow\">\r\n        <div class=\"btn-group-vertical text-center\">\r\n\r\n            <div class=\"card mx-auto\" style=\"width: 100%;\">\r\n                <img class=\"card-img-top\" src=\"{{profilePic}}\" alt=\"{{displayName}}\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"card-text\">\r\n                    <b>Welcome back </b><br>\r\n                    <h3><span class=\"badge badge-success badge-pill\">{{displayName}}</span></h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n          \r\n \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template [ngIf]=\"waitlist?.length > 0 && username\">\r\n      <div class=\"row mx-2 bg-info text-white p-1 shadow py-3\">\r\n        <div class=\"col-lg-6\">\r\n          Number of groups: <span class=\"badge badge-secondary badge-pill\">{{ waitlist?.length }}</span>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          Average Wait Time (in minutes): <span class=\"badge badge-secondary badge-pill\">{{avgWaitMin}}</span>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <div class=\"row bg-light text-dark pt-0 m-2 shadow\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table text-center text-dark\">\r\n\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th scole=\"col\">Index</th>\r\n              <th scope=\"col\">Reservation ID</th>\r\n              <th scope=\"col\">Guest & Group Size</th>\r\n              <th scope=\"col\">Time joined</th>\r\n              <th scope=\"col\">Quoted Time</th>\r\n              <th scope=\"col\">Notified</th>\r\n              <th scope=\"col\">Confirmed</th>\r\n              <th scope=\"col\">Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let reservation of waitlist; index as id\">\r\n              <th scope=\"row\">{{id + 1}}</th>\r\n              <td scope=\"row\">{{reservation.queueID}}</td>\r\n              <td>\r\n\r\n                <div class=\"media\">\r\n                  <div class=\"media-left media-middle\">\r\n                    <span id=\"initials\">\r\n                      <span class=\"editable media-object\" contenteditable=\"true\"\r\n                        (keyup)=\"updateGroupSize(reservation.queueID, 'groupSize', $event)\"\r\n                        (blur)=\"refreshTable(id, 'groupSize', $event)\">\r\n                        {{reservation.groupSize}}\r\n                      </span></span>\r\n                  </div>\r\n                  <div class=\"media-body text-left align-middle\">\r\n                    <strong>{{reservation.customerName}}</strong><br>\r\n                    {{reservation.phone}}<br><small>{{reservation.email}}</small>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td class=\"text-center\">{{ reservation.joinTime | date:'shortTime' }}</td>\r\n              <td class=\"text-center\">{{ reservation.quotedtime | date:'shortTime' }}</td>\r\n              <td class=\"text-center\">\r\n                <div *ngIf=\"reservation.notified == true; else elseBlock\"><i class=\"fa fa-check\"></i></div>\r\n                <ng-template #elseBlock>\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i> &nbsp;\r\n                  <button class=\"btn btn-labeled btn-primary\" (click)=\"notify(reservation.queueID)\" type=\"button\"\r\n                    placement=\"top\" ngbTooltip=\"Send customer a notification to inform their table is almost ready..\"><i\r\n                      class=\"fa fa-bell\"></i></button>\r\n                </ng-template>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <div *ngIf=\"reservation.confirmed == true; else elseBlock1\"><i class=\"fa fa-check\"></i></div>\r\n                <ng-template #elseBlock1>\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i> &nbsp;\r\n                  <button class=\"btn btn-labeled btn-warning\" (click)=\"confirm(reservation.queueID)\" type=\"button\"\r\n                    placement=\"top\"\r\n                    ngbTooltip=\"Manually mark customer has confirmed their reservation\"><i class=\"fa fa-check-circle\"></i></button>\r\n                </ng-template>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <button class=\"btn btn-labeled btn-success\" (click)=\"complete(reservation.queueID)\" type=\"button\"\r\n                  placement=\"top\" ngbTooltip=\"Complete a reservation when customer arrives.\"><i class=\"fa fa-check\"\r\n                    aria-hidden=\"true\"></i></button>\r\n                <button class=\"btn btn-labeled btn-danger\" (click)=\"remove(reservation.queueID)\" type=\"button\"\r\n                  placement=\"top\" ngbTooltip=\"Remove from your waitlist when customer is a no show or requested a cancellation\"><i class=\"fa fa-trash\"\r\n                    aria-hidden=\"true\"></i></button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n</div>\r\n  </ng-template>\r\n\r\n\r\n\r\n<script>\r\n  $(function () {\r\n    $('[data-toggle=\"popover\"]').popover()\r\n  })\r\n</script>"

/***/ }),

/***/ "./src/app/components/manageWaitlist/manageWaitlist.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/manageWaitlist/manageWaitlist.component.ts ***!
  \***********************************************************************/
/*! exports provided: manageWaitlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageWaitlistComponent", function() { return manageWaitlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_restaurant_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/_services/restaurant-api.service */ "./src/app/_services/restaurant-api.service.ts");
/* harmony import */ var app_services_waitlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services/waitlist.service */ "./src/app/_services/waitlist.service.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var manageWaitlistComponent = /** @class */ (function () {
    function manageWaitlistComponent(waitlistService, restaurantAPIService, userService, route) {
        var _this = this;
        this.waitlistService = waitlistService;
        this.restaurantAPIService = restaurantAPIService;
        this.userService = userService;
        this.route = route;
        this.restaurantAPIService.getAllRestaurants().subscribe(function (restItems) {
            console.log("username" + _this.username);
            _this.restItems = restItems;
            _this.restItems.forEach(function (item, index) {
                if (item.owner == _this.username) {
                    _this.currentRestaurant = _this.restItems[index];
                    _this.restaurantName = _this.currentRestaurant.name;
                    _this.restaurantId = _this.currentRestaurant.restaurantID;
                    _this.getWaitlist();
                }
            });
        }),
            this.userService.getUserdetails().subscribe(function (userItems) {
                _this.userItems = userItems;
                _this.displayName = _this.userItems[0];
                _this.username = _this.userItems[1];
                _this.profilePic = _this.userItems[2];
            });
    }
    manageWaitlistComponent.prototype.ngOnInit = function () {
        this.getWaitlist();
        console.log("username" + this.username);
        //this.getRestaurantInfo();
        //this.avgWaitMin = this.avgWaittime(this.waitlist);
    };
    //getRestaurantInfo() {
    //  console.log("rest " + this.restItems.length );
    //  this.restItems.forEach((item, index) => {
    //    if(item.owner == this.username) {
    //this.avaliableRestaurants.push(this.restItems[index]);
    //this.restaurantName = this.restItems[index].name;
    //this.restaurantId = this.restItems[index].restaurantID;
    //  }
    //});
    //console.log(this.avaliableRestaurants.length);
    //}
    manageWaitlistComponent.prototype.avgWaittime = function (wl) {
        var sum = 0;
        wl.forEach(function (element) {
            var eventStartTime = new Date(element.quotedtime);
            var eventEndTime = new Date(element.joinTime);
            var diff = eventEndTime.valueOf() - eventStartTime.valueOf();
            var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000);
            sum += diffMins;
        });
        //console.log("sum" + sum);
        //console.log("avg "+ sum / wl.length);
        return Math.abs(Math.round((sum / wl.length)));
    };
    manageWaitlistComponent.prototype.notify = function (queueID) {
        console.log("notify" + queueID);
        this.waitlistService.notifyCustomer(this.restaurantId, queueID);
        this.getWaitlist();
    };
    manageWaitlistComponent.prototype.confirm = function (queueID) {
        console.log("confirm" + queueID);
        this.waitlistService.confirmCustomer(this.restaurantId, queueID);
        this.getWaitlist();
    };
    manageWaitlistComponent.prototype.complete = function (queueID) {
        console.log("complete" + queueID);
        this.waitlistService.completeReservation(this.restaurantId, queueID);
        this.getWaitlist();
    };
    manageWaitlistComponent.prototype.remove = function (queueID) {
        console.log("remove" + queueID);
        this.waitlistService.removeReservation(this.restaurantId, queueID);
        this.getWaitlist();
    };
    manageWaitlistComponent.prototype.refreshTable = function (queueID, property, event) {
        this.editField = event.target.textContent;
    };
    manageWaitlistComponent.prototype.updateGroupSize = function (queueID, property, event) {
        console.log("updating group size" + queueID);
        var editField = event.target.textContent;
        this.waitlistService.updateGroupSize(this.restaurantId, queueID, editField);
    };
    manageWaitlistComponent.prototype.getWaitlist = function () {
        var _this = this;
        console.log(" getWaitlist() ");
        if (this.restaurantId) {
            this.waitlistService.getWaitlist(this.restaurantId).subscribe(function (waitlistItems) {
                _this.waitlist = waitlistItems;
                _this.avgWaitMin = _this.avgWaittime(_this.waitlist);
            });
        }
    };
    manageWaitlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manageWaitlist',
            template: __webpack_require__(/*! ./manageWaitlist.component.html */ "./src/app/components/manageWaitlist/manageWaitlist.component.html"),
            styles: [__webpack_require__(/*! ./manageWaitlist.component.css */ "./src/app/components/manageWaitlist/manageWaitlist.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_waitlist_service__WEBPACK_IMPORTED_MODULE_3__["WaitlistService"],
            app_services_restaurant_api_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantAPIService"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], manageWaitlistComponent);
    return manageWaitlistComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.brand_logo_container {\r\n    border-radius: 50%;\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n\r\n  .logoutBtn{\r\n    height:40px; \r\n    width:100px; \r\n    position: absolute;\r\n    top: 8px;\r\n    right: 16px;\r\n    background-color: #ef6f31;\r\n    text-align: center;\r\n    border-radius: 3mm;\r\n  }\r\n\r\n  .brand_logo {\r\n    height: 110px;\r\n    width: 110px;\r\n    \r\n  }\r\n\r\n  .menu-card {\r\n    max-width: 750px;\r\n    margin-left: auto;\r\n    margin-top: 55px;\r\n    align-content: center;\r\n    margin-right: auto;\r\n}\r\n\r\n  ::ng-deep .mat-tab-label-content {\r\n    color: #FF6E40;\r\n}\r\n\r\n  .nav-bar-item {\r\n    margin-right: 10px;\r\n    background-color: #FF6E40;\r\n    color: white;\r\n}\r\n\r\n  ::ng-deep .mat-toolbar {\r\n    background-color:  rgb(255, 213, 200);\r\n    border-radius: 10px 10px 0 0;\r\n}\r\n\r\n  .center {\r\n    width: 700px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n  ::ng-deep .mat-card-image:first-child {\r\n    margin-top: 0 !important;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n  .mat-card-image {\r\n    width: 95%;\r\n    margin: 5px;\r\n}\r\n\r\n  .menu-item {\r\n    background: #ffffff;\r\n    min-height: 64px;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n  ::ng-deep .mat-grid-tile .mat-figure {\r\n    display: block !important;\r\n    margin: 5px !important;\r\n}\r\n\r\n  .menu-item-body.active, .menu-item-body:hover {\r\n    border-color: #ef6e30;\r\n    background-color: #f3f2f2;\r\n}\r\n\r\n  .menu-item-body {\r\n    padding: 5px;\r\n    border: 1px solid #F0F0F0;\r\n    border-radius: 5px;\r\n}\r\n\r\n  .menu-top {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n  .menu-item-name {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: 700;\r\n    color: #333333;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n  .menu-item-price {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #808080;\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n}\r\n\r\n  .menu-bottom {\r\n    margin-top: 8px;\r\n    color: #808080;\r\n    text-align: left;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    height: 2.8em;\r\n    -webkit-line-clamp: 2;\r\n}\r\n\r\n  .order-cart-card {\r\n    margin-top: 30px;\r\n    max-width: 750px;\r\n    justify-content: center;\r\n    align-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n  table, td, th {  \r\n    border: 1px solid #ddd;\r\n    text-align: left;\r\n  }\r\n\r\n  table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n  th, td {\r\n    padding: 15px;\r\n  }\r\n\r\n  .confirmBtn{\r\n    align-self: center;\r\n    width: 180px;\r\n    background-color: #FF6E40; \r\n  }\r\n\r\n  .confirmBtn:hover{\r\n    background-color: black;\r\n  }\r\n\r\n  .total{\r\n      font-size: x-large;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTs7RUFFZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0VBRUE7SUFDSSxjQUFjO0FBQ2xCOztFQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztFQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDRCQUE0QjtBQUNoQzs7RUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztFQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7RUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0VBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztFQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7RUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBRWIsOEJBQThCO0FBQ2xDOztFQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0VBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztFQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHFCQUFxQjtBQUV6Qjs7RUFHQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJyYW5kX2xvZ29fY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubG9nb3V0QnRue1xyXG4gICAgaGVpZ2h0OjQwcHg7IFxyXG4gICAgd2lkdGg6MTAwcHg7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjZmMzE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzbW07XHJcbiAgfVxyXG4gIC5icmFuZF9sb2dvIHtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbiAgICBjb2xvcjogI0ZGNkU0MDtcclxufVxyXG5cclxuLm5hdi1iYXItaXRlbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RTQwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMjU1LCAyMTMsIDIwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkLWltYWdlOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWdyaWQtdGlsZSAubWF0LWZpZ3VyZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxufSBcclxuXHJcbi5tZW51LWl0ZW0tYm9keS5hY3RpdmUsIC5tZW51LWl0ZW0tYm9keTpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlZjZlMzA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYyO1xyXG59XHJcblxyXG4ubWVudS1pdGVtLWJvZHkge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjBGMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm1lbnUtdG9wIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1lbnUtaXRlbS1uYW1lIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0tcHJpY2Uge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1lbnUtYm90dG9tIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgaGVpZ2h0OiAyLjhlbTtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcblxyXG4ub3JkZXItY2FydC1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxudGFibGUsIHRkLCB0aCB7ICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbmZpcm1CdG57XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RTQwOyBcclxuICB9XHJcblxyXG4gIC5jb25maXJtQnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAudG90YWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css\"\r\n  integrity=\"sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B\" crossorigin=\"anonymous\">\r\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\r\n  integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"\r\n  integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js\"\r\n  integrity=\"sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em\" crossorigin=\"anonymous\"></script>\r\n  <button type=\"button\" class=\"logoutBtn\"><a href = \"https://waytlessv1.azurewebsites.net/logout\" style=\"color:white\">Log out</a></button>\r\n     \r\n<div class=\"brand_logo_container\">\r\n    <a href=\"/#/home\"><img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\"></a>\r\n</div>\r\n\r\n<div class=\"card menu-card\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Menu for {{restaurantName}}</h5>\r\n\r\n    <mat-tab-group>\r\n      <mat-tab label=\"Appetizers\">\r\n        <mat-grid-list cols=\"3\" rowHeight=\"350px\">\r\n          <mat-grid-tile class=\"menu-item\" *ngFor=\"let a of appetizers\">\r\n            <mat-card class=\"menu-item-body\">\r\n              <img mat-card-image\r\n                src='{{a.url !== undefined ? a.url : \"https://dintaifungusa.com/wp-content/uploads/2015/01/shrimp-fried-rice.jpg\"}}'\r\n                alt=\"Photo of food\">\r\n              <mat-card-content>\r\n                <div class=\"menu-top\">\r\n                  <span class=\"menu-item-name\">{{a.itemName}}</span>\r\n                  <span class=\"menu-item-price\">${{a.price}} x\r\n                    {{orders.get(a.itemID) === undefined ? 0 : orders.get(a.itemID)}}</span>\r\n                </div>\r\n                <div class=\"menu-bottom\">\r\n                  <span>{{a.description}}</span><br />\r\n                </div>\r\n              </mat-card-content>\r\n              <mat-card-actions>\r\n                <button (click)=\"addToCart(a)\" mat-button>ADD</button>\r\n                <button (click)=\"deleteFromCart(a)\" mat-button>REMOVE</button>\r\n              </mat-card-actions>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-tab>\r\n      <mat-tab label=\"Entrees\">\r\n        <mat-grid-list cols=\"3\" rowHeight=\"350px\">\r\n          <mat-grid-tile class=\"menu-item\" *ngFor=\"let e of entrees\">\r\n            <mat-card class=\"menu-item-body\">\r\n              <img mat-card-image\r\n                src='{{e.url !== undefined ? e.url : \"https://dintaifungusa.com/wp-content/uploads/2015/01/shrimp-fried-rice.jpg\"}}'\r\n                alt=\"Photo of food\">\r\n              <mat-card-content>\r\n                <div class=\"menu-top\">\r\n                  <span class=\"menu-item-name\">{{e.itemName}}</span>\r\n                  <span class=\"menu-item-price\">${{e.price}} x\r\n                    {{orders.get(e.itemID) === undefined ? 0 : orders.get(e.itemID)}}</span>\r\n                </div>\r\n                <div class=\"menu-bottom\">\r\n                  <span>{{e.description}}</span><br />\r\n                </div>\r\n              </mat-card-content>\r\n              <mat-card-actions>\r\n                <button (click)=\"addToCart(e)\" mat-button>ADD</button>\r\n                <button (click)=\"deleteFromCart(e)\" mat-button>REMOVE</button>\r\n              </mat-card-actions>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-tab>\r\n      <mat-tab label=\"Desserts\">\r\n        <mat-grid-list cols=\"3\" rowHeight=\"350px\">\r\n          <mat-grid-tile class=\"menu-item\" *ngFor=\"let d of desserts\">\r\n            <mat-card class=\"menu-item-body\">\r\n              <img mat-card-image\r\n                src='{{d.url !== undefined ? d.url : \"https://dintaifungusa.com/wp-content/uploads/2015/01/shrimp-fried-rice.jpg\"}}'\r\n                alt=\"Photo of food\">\r\n              <mat-card-content>\r\n                <div class=\"menu-top\">\r\n                  <span class=\"menu-item-name\">{{d.itemName}}</span>\r\n                  <span class=\"menu-item-price\">${{d.price}} x\r\n                    {{orders.get(d.itemID) === undefined ? 0 : orders.get(d.itemID)}}</span>\r\n                </div>\r\n                <div class=\"menu-bottom\">\r\n                  <span>{{d.description}}</span><br />\r\n                </div>\r\n              </mat-card-content>\r\n              <mat-card-actions>\r\n                <button (click)=\"addToCart(d)\" mat-button>ADD</button>\r\n                <button (click)=\"deleteFromCart(d)\" mat-button>REMOVE</button>\r\n              </mat-card-actions>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n\r\n    <div class=\"total\">\r\n      Total : $<span class=\"totalprice\">{{totalPrice}}</span>\r\n    </div>\r\n\r\n    <button mat-raised-button class=\"btn btn-primary confirmBtn\" (click)=\"makeOrder()\" color=\"primary\">Confirm\r\n      order</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var app_services_menu_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services/menu-api.service */ "./src/app/_services/menu-api.service.ts");
/* harmony import */ var _services_restaurant_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/restaurant-api.service */ "./src/app/_services/restaurant-api.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, userService, apiService, menuApiService, restaurantService, route) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.apiService = apiService;
        this.menuApiService = menuApiService;
        this.restaurantService = restaurantService;
        this.route = route;
        this.restaurantID = 0;
        this.totalPrice = 0;
        this.customerNumber = 2;
        this.sub = this.route.params.subscribe(function (params) {
            _this.restaurantID += params['id'];
            _this.restaurantService.getAllRestaurants().subscribe(function (restItems) {
                _this.restaurantName = restItems[_this.restaurantID - 1].name;
            });
            _this.menuApiService.getAllMenuItems(_this.restaurantID).subscribe(function (menuItems) {
                _this.appetizers = menuItems.filter(function (i) { return i.itemCategory.categoryId == 1; });
                _this.entrees = menuItems.filter(function (i) { return i.itemCategory.categoryId == 2; });
                _this.desserts = menuItems.filter(function (i) { return i.itemCategory.categoryId == 3; });
            });
            _this.orders = new Map();
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    MenuComponent.prototype.addToCart = function (item) {
        console.log('adding for: ' + item.itemID);
        if (this.orders.get(item.itemID) === undefined) {
            this.orders.set(item.itemID, 1);
        }
        else {
            this.orders.set(item.itemID, this.orders.get(item.itemID) + 1);
        }
        this.totalPrice = Number.parseFloat((this.totalPrice + item.price).toFixed(2));
    };
    MenuComponent.prototype.deleteFromCart = function (item) {
        console.log('removing for: ' + item.itemID);
        var count = this.orders.get(item.itemID);
        if (count !== undefined) {
            var newCount = count - 1;
            if (newCount == 0) {
                this.orders.delete(item.itemID);
            }
            else {
                this.orders.set(item.itemID, newCount);
                this.totalPrice = Number.parseFloat((this.totalPrice - item.price).toFixed(2));
            }
        }
    };
    MenuComponent.prototype.logout = function () {
        this.userService.logoutUser();
        this.router.navigate(['']);
    };
    MenuComponent.prototype.makeOrder = function () {
        var _this = this;
        var confirmedOrders = [];
        var m = this.orders;
        var orderId = uuid__WEBPACK_IMPORTED_MODULE_5__["v4"]();
        console.log('make orders! ' + orderId);
        m.forEach(function (k, v, m) {
            console.log("key:" + k + " value:" + v + " map:" + m);
            confirmedOrders.push({
                orderId: orderId,
                menuItemId: v,
                quantity: k,
                orderTime: new Date(),
                customerId: _this.customerNumber,
                restaurantID: _this.restaurantID
            });
        });
        var responses = this.apiService.makeOrders(confirmedOrders);
        console.log('done posting orders!');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(responses).subscribe(function (r) {
            _this.router.navigate(["/order-cart/" + orderId]);
        });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            app_services_menu_api_service__WEBPACK_IMPORTED_MODULE_3__["MenuApiService"],
            _services_restaurant_api_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantAPIService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/order-cart/order-cart.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/order-cart/order-cart.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand_logo_container {\r\n  border-radius: 50%;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.brand_logo {\r\n  height: 110px;\r\n  width: 110px;\r\n}\r\n.logoutBtn{\r\n  height:40px; \r\n  width:100px; \r\n  position: absolute;\r\n  top: 8px;\r\n  right: 16px;\r\n  background-color: #ef6f31;\r\n  text-align: center;\r\n  border-radius: 3mm;\r\n}\r\n.order-cart-card{\r\n    max-width: 500px;\r\n    margin-top: 20px;\r\n    justify-content: center;\r\n    margin-top: 30px;\r\n    align-content: center;\r\n    margin-top: 100px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border: 2px solid #808080;\r\n}\r\ntable, td, th {  \r\n    border: 1px solid #ddd;\r\n    text-align: left;\r\n  }\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\nth, td {\r\n    padding: 15px;\r\n  }\r\n.confirmBtn{\r\n    align-self: center;\r\n    width: 200px;\r\n    margin-left: 30px;\r\n    background-color: #FF6E40; \r\n  }\r\n.confirmBtn:hover{\r\n    background-color: black;\r\n  }\r\n.total{\r\n      font-size: x-large;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1jYXJ0L29yZGVyLWNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUVBO01BQ0ksa0JBQWtCO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1jYXJ0L29yZGVyLWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZF9sb2dvX2NvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5icmFuZF9sb2dvIHtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIHdpZHRoOiAxMTBweDtcclxufVxyXG4ubG9nb3V0QnRue1xyXG4gIGhlaWdodDo0MHB4OyBcclxuICB3aWR0aDoxMDBweDsgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjZmMzE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNtbTtcclxufVxyXG4ub3JkZXItY2FydC1jYXJke1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzgwODA4MDtcclxufVxyXG5cclxudGFibGUsIHRkLCB0aCB7ICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbmZpcm1CdG57XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZFNDA7IFxyXG4gIH1cclxuXHJcbiAgLmNvbmZpcm1CdG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC50b3RhbHtcclxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/order-cart/order-cart.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/order-cart/order-cart.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand_logo_container\">\r\n    <a href=\"/#/home\"><img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\"></a>\r\n</div>\r\n<button type=\"button\" class=\"logoutBtn\"><a href = \"https://waytlessv1.azurewebsites.net/logout\" style=\"color:white\">Log out</a></button>\r\n<mat-card class=\"order-cart-card\">\r\n  <mat-card-header>\r\n    <mat-card-title>Your order has been confirmed!</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <br>\r\n    <table class=\"orders\">\r\n      <tr>\r\n        <th>Order name</th>\r\n        <th>Price</th>\r\n        <th>Quantity</th>\r\n      </tr>\r\n      <tr *ngFor=\"let order of orderDetails\">\r\n        <td>{{order.name}}</td>\r\n        <td>${{order.price}}</td>\r\n        <td>{{order.quantity}}</td>\r\n      </tr>\r\n    </table>\r\n  </mat-card-content>\r\n  <div class=\"total\">\r\n    Total : $<span class=\"totalprice\">{{ totalPrice }}</span>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/order-cart/order-cart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/order-cart/order-cart.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCartComponent", function() { return OrderCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_menu_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services/menu-api.service */ "./src/app/_services/menu-api.service.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderCartComponent = /** @class */ (function () {
    function OrderCartComponent(apiService, menuApiService, router, userService, route) {
        var _this = this;
        this.apiService = apiService;
        this.menuApiService = menuApiService;
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.orderId = "";
        this.menuItemsMap = new Map;
        this.orderDetails = [];
        this.totalPrice = 0;
        this.route.params.subscribe(function (params) {
            _this.orderId += params['id'];
            _this.apiService.getOrder(_this.orderId).subscribe(function (allOrders) {
                _this.orders = allOrders;
                console.log("loading: ");
                console.log(allOrders);
                console.log(allOrders[0]);
                console.log("done loading: ");
                _this.menuApiService.getAllMenuItems(allOrders[0].restaurantID).subscribe(function (menuItems) {
                    menuItems.forEach(function (m) { return _this.menuItemsMap.set(m.itemID, m); });
                    _this.orders.forEach(function (o) {
                        _this.orderDetails.push({
                            name: _this.menuItemsMap.get(o.menuItemId).itemName,
                            price: _this.menuItemsMap.get(o.menuItemId).price,
                            quantity: o.quantity
                        });
                        _this.totalPrice += o.quantity * _this.menuItemsMap.get(o.menuItemId).price;
                    });
                });
            });
        });
    }
    OrderCartComponent.prototype.logout = function () {
        this.userService.logoutUser();
        this.router.navigate(['']);
    };
    OrderCartComponent.prototype.ngOnInit = function () { };
    OrderCartComponent.prototype.orderConfirm = function () {
    };
    OrderCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-cart',
            template: __webpack_require__(/*! ./order-cart.component.html */ "./src/app/components/order-cart/order-cart.component.html"),
            styles: [__webpack_require__(/*! ./order-cart.component.css */ "./src/app/components/order-cart/order-cart.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            app_services_menu_api_service__WEBPACK_IMPORTED_MODULE_3__["MenuApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrderCartComponent);
    return OrderCartComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration-card {\r\n    max-width: 350px;\r\n    margin-top: 20px;\r\n    justify-content: center;\r\n    margin-top: 30px;\r\n    align-content: center;\r\n    margin-top: 100px;\r\n    margin-left: 560px;\r\n    margin-right: 10px;\r\n  }\r\n  .example-full-width{\r\n    padding-left: 40px;\r\n  }\r\n  .mat-raised-button{\r\n    align-self: center;\r\n    width: 330px;\r\n    margin-left: 30px;\r\n    background-color: #c0392b ;    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJhdGlvbi1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiA7ICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\r\n  <div class=\"brand_logo_container\">\r\n    <img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\" style=\"width: 100px\">\r\n  </div>\r\n</div>\r\n<mat-card class=\"registration-card\" style=\"background-color:#f39c12;\">\r\n  <mat-card-header>\r\n    <mat-card-title>Register Here!</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <form class=\"example-form\">\r\n      <table class=\"example-full-width\" cellspacing=\"0\">\r\n        <tr>\r\n          <td>\r\n            <i class=\"material-icons\">person</i>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-label>Choose User</mat-label>\r\n              <mat-select [(value)]=\"selected\">\r\n                <mat-option value=\"Owner\">Owner</mat-option>\r\n                <mat-option value=\"Customer\">Customer</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"selected === 'Customer'\">\r\n          <td>\r\n            <i class=\"material-icons\">person</i>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"FirstName\" [(ngModel)]=\"firstname\" name=\"firstname\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"selected === 'Customer'\">\r\n          <td>\r\n            <i class=\"material-icons\">person</i>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"LastName\" [(ngModel)]=\"lastname\" name=\"lastname\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <i class=\"material-icons\">email</i>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <i class=\"material-icons\">phone</i>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"phone\" name=\"email\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>\r\n            <i class=\"material-icons\">person</i>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <i class=\"material-icons\">person</i>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"selected === 'Owner'\">\r\n          <td>\r\n            <i class=\"material-icons\">restaurant</i>\r\n            <mat-form-field class=\"example-full-width\">\r\n\r\n              <input matInput placeholder=\"Restaurant Name\" [(ngModel)]=\"restaurant\" name=\"restaurant\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"selected === 'Owner'\">\r\n          <td>\r\n            <i class=\"material-icons\">location_city</i>\r\n            <mat-form-field class=\"example-full-width\">\r\n\r\n              <input matInput placeholder=\"Location\" [(ngModel)]=\"location\" name=\"location\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n    <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\r\n  </mat-card-content>\r\n\r\n  <mat-card-actions>\r\n    <button mat-raised-button (click)=\"register()\" color=\"primary\">Submit</button>\r\n  </mat-card-actions>\r\n\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_register_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services/register-api.service */ "./src/app/_services/register-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, registratAPIService, route) {
        this.router = router;
        this.registratAPIService = registratAPIService;
        this.route = route;
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.customer = new Map();
    }
    RegistrationComponent.prototype.onUpload = function () {
        // upload code goes here
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var customer = [];
            var m = _this.customer;
            customer.push({
                customerID: 1,
                firstName: _this.firstname,
                lastName: _this.lastname,
                phone: _this.phone,
                address: { street: "", number: "", zip: "", city: "" },
                email: _this.email,
                password: _this.password,
                username: _this.username
            });
            _this.registratAPIService.registerCustomer(customer);
            alert('Registered succefully');
            _this.router.navigate(['./']);
        });
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/components/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_services_register_api_service__WEBPACK_IMPORTED_MODULE_3__["RegisterApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/waitlist-entry/waitlist-entry.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/waitlist-entry/waitlist-entry.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n  text-align : center;\r\n}\r\n\r\nbody {\r\n  background-image: url('fadedTable.jpg');\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center; \r\n}\r\n\r\n.brand_logo_container {\r\n  border-radius: 50%;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.brand_logo {\r\n  height: 110px;\r\n  width: 110px;\r\n}\r\n\r\n.waitlist-entry-card {\r\n  justify-content: center;\r\n  align-content: center;\r\n  margin-left: 56px;\r\n  margin-right: 10px;\r\n  position: absolute;\r\n  border: 1px solid #808080;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 5px;\r\n}\r\n\r\n.customer-waitlist-information-card {\r\n  padding: 20px;\r\n  margin: 25px;\r\n  justify-content: center;\r\n  align-content: center;\r\n  border: 1px solid #808080; \r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 5px;\r\n}\r\n\r\n#addBtn{\r\n  background-color: #000000;\r\n  color: white;\r\n  border: none;\r\n  cursor: pointer;\r\n  opacity: 0.9;\r\n  border-radius: 8px;\r\n  align-self: center;\r\n}\r\n\r\n#addBtn:hover {\r\n  background-color: #808080; \r\n  color: black;\r\n}\r\n\r\n.selectMenuBtn{\r\n  background-color: #ff8000;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  border: none;\r\n  cursor: pointer;\r\n  max-width: 92%;\r\n  min-width: 92%;\r\n  opacity: 0.9;\r\n}\r\n\r\n.selectMenuBtn:hover {\r\n  background-color: #000000; \r\n  color: white;\r\n}\r\n\r\n.manageWait{\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 16px;\r\n}\r\n\r\n.logoutBtn{\r\n  height:40px; \r\n  width:100px; \r\n  position: absolute;\r\n  top: 8px;\r\n  right: 16px;\r\n  background-color: #ef6f31;\r\n  text-align: center;\r\n  border-radius: 3mm;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YWl0bGlzdC1lbnRyeS93YWl0bGlzdC1lbnRyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUNBQThEO0VBQzlELDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNEVBQTRFO0VBQzVFLG9GQUFvRjtFQUNwRixpRkFBaUY7RUFDakYsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qiw0RUFBNEU7RUFDNUUsb0ZBQW9GO0VBQ3BGLGlGQUFpRjtFQUNqRixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dhaXRsaXN0LWVudHJ5L3dhaXRsaXN0LWVudHJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZhZGVkVGFibGUuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG59XHJcblxyXG4uYnJhbmRfbG9nb19jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJyYW5kX2xvZ28ge1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG59XHJcblxyXG4ud2FpdGxpc3QtZW50cnktY2FyZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA1NnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY3VzdG9tZXItd2FpdGxpc3QtaW5mb3JtYXRpb24tY2FyZCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDI1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7IFxyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNhZGRCdG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuI2FkZEJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDsgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc2VsZWN0TWVudUJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXgtd2lkdGg6IDkyJTtcclxuICBtaW4td2lkdGg6IDkyJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5zZWxlY3RNZW51QnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyBcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYW5hZ2VXYWl0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDhweDtcclxuICByaWdodDogMTZweDtcclxufVxyXG5cclxuLmxvZ291dEJ0bntcclxuICBoZWlnaHQ6NDBweDsgXHJcbiAgd2lkdGg6MTAwcHg7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDhweDtcclxuICByaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY2ZjMxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzbW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/waitlist-entry/waitlist-entry.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/waitlist-entry/waitlist-entry.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand_logo_container\">\r\n    <a href=\"/#/home\"><img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\"></a>\r\n</div>\r\n\r\n<h2>{{restaurantName}}</h2>\r\n<button type=\"button\" class=\"logoutBtn\"><a href = \"https://waytlessv1.azurewebsites.net/logout\" style=\"color:white\">Log out</a></button>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"customer-waitlist-information-card\">\r\n      <h4 class=\"card-title\"><b>Add to waitlist</b> </h4>\r\n      <form>\r\n        <div class=\"input-group input-group-lg\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"><i class=\"fas fa-user\"></i></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Full name\">\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group input-group-lg\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"><i class=\"fas fa-mobile-alt\"></i></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone number\">\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group input-group-lg\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"><i class=\"fas fa-envelope\"></i></span>\r\n          </div>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" value=\"{{ loginEmail }}\">\r\n        </div><br>\r\n        <div class=\"input-group input-group-lg\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"><i class=\"fa fa-user-friends\"></i></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"group\" placeholder=\"Group size\">\r\n        </div>\r\n        <br>\r\n      </form>\r\n\r\n      <button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addBtn\" (click)=\"addToWaitlist(restaurantId)\">\r\n        Submit\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"customer-waitlist-information-card\">\r\n      <h4 class=\"card-title\"><b>Your waitlist information </b> <span class=\"glyphicon glyphicon-info-sign\"></span></h4>\r\n      <div [hidden]=\"!show\">\r\n        <b>Name : </b> <span id=\"bookedName\">{{name}}</span> <br><br>\r\n        <b>Group size : </b> <span id=\"groupSize\">{{groupSize}}</span>\r\n        <br><br>\r\n        <b>Booking time: </b><span id=\"addedTime\">{{ addedTime }}</span> <br><br>\r\n        <b>Approximate wait time : </b><span id=\"waitTime\">{{ waitTime }}</span><br><br>\r\n        <button type=\"button\" class=\"btn btn-dark mr-2\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n          Edit<i class=\"fas fa-edit\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-dark mr-2\" (click)=\"deleteFromWaitList(restaurantId,queueID)\">\r\n          Delete <i class=\"fas fa-trash-alt\"></i>\r\n        </button>\r\n      </div>\r\n      <div [hidden]=\"show\">\r\n        <p style=\"color:grey;padding:10px;\">\r\n          \"Add yourself to waitlist to monitor your status.\"\r\n        </p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<div class=\"text-center\">\r\n    <button class=\"selectMenuBtn\" mat-raised-button color=\"warn\" routerLink=\"/menu/{{restaurantId}}\">MENU</button>\r\n</div>\r\n\r\n<div style=\"text-align: center\" class=\"manageWait\"><br><br>\r\n  <a routerLink=\"/managewaitlist\"><img style=\"width: 50px;height: 50px;\"\r\n      src=\"../assets/images/admin2.png\"></a>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit group size</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <input type=\"text\" id=\"newGroup\" placeholder=\"New group size\">\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editWaitList(restaurantId,queueID)\"\r\n          data-dismiss=\"modal\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/waitlist-entry/waitlist-entry.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/waitlist-entry/waitlist-entry.component.ts ***!
  \***********************************************************************/
/*! exports provided: WaitlistEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitlistEntryComponent", function() { return WaitlistEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_waitlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/waitlist.service */ "./src/app/_services/waitlist.service.ts");
/* harmony import */ var _services_restaurant_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/restaurant-api.service */ "./src/app/_services/restaurant-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var WaitlistEntryComponent = /** @class */ (function () {
    function WaitlistEntryComponent(document, userService, router, waitlistservice, restaurantSerice, route) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.waitlistservice = waitlistservice;
        this.restaurantSerice = restaurantSerice;
        this.route = route;
        this.show = false;
        this.document = document;
        this.route.params.subscribe(function (params) {
            _this.restaurantId = params['id'];
            _this.restaurantSerice.getAllRestaurants().subscribe(function (restItems) {
                _this.restaurantName = restItems[_this.restaurantId - 1].name;
            });
            _this.userService.getCurrentUsersEmail().subscribe(function (userEmail) {
                _this.loginEmail = userEmail;
                _this.waitlistservice.getWaitlist(_this.restaurantId).subscribe(function (waitlistItems) {
                    for (var i = 0; i < waitlistItems.length; i++) {
                        if (waitlistItems[i].email === userEmail) {
                            _this.show = true;
                            _this.name = waitlistItems[i].customerName;
                            _this.phone = waitlistItems[i].phone;
                            _this.email = waitlistItems[i].email;
                            _this.groupSize = waitlistItems[i].groupSize;
                            _this.bookingTime = new Date(waitlistItems[i].joinTime);
                            _this.queueID = _this.hashCode(_this.email);
                            _this.displayTime();
                            break;
                        }
                    }
                });
            });
        });
    }
    WaitlistEntryComponent.prototype.ngOnInit = function () { };
    WaitlistEntryComponent.prototype.addToWaitlist = function (restID) {
        this.show = true;
        this.name = document.getElementById('name').value;
        this.phone = document.getElementById('phone').value;
        this.email = document.getElementById('email').value;
        this.groupSize = Number(document.getElementById('group').value);
        this.bookingTime = new Date(); // for current datetime
        this.queueID = this.hashCode(this.email);
        console.log("Queue in add:" + this.hashCode(this.email));
        var waitlistEntry = {
            "queueID": this.queueID,
            "customerName": this.name,
            "restaurantID": restID,
            "groupSize": this.groupSize,
            "joinTime": this.bookingTime,
            "quotedtime": new Date(this.bookingTime.getTime() + 10 * 60000),
            "email": this.email,
            "phone": this.phone,
            "notified": false,
            "confirmed": false,
            "completed": false
        };
        // storing into db 
        this.waitlistservice.storeWaitlistEntry(waitlistEntry);
        this.displayTime();
        $(':input').val('');
    };
    WaitlistEntryComponent.prototype.displayTime = function () {
        // extract the date and time seperately from the booking time.
        var date = this.bookingTime.getFullYear() + '-' + (this.bookingTime.getMonth() + 1) + '-' + this.bookingTime.getDate();
        var time = this.bookingTime.getHours() + ":" + this.bookingTime.getMinutes() + ":" + this.bookingTime.getSeconds();
        this.addedTime = date + ' ' + time;
        this.waitTime = String((this.queueID - 1) % 60) + ' mins';
    };
    WaitlistEntryComponent.prototype.editWaitList = function (resId, queueID) {
        console.log("Queue in edit:" + queueID);
        var newgroup = $('#newGroup').val();
        var tobeChanged = Number(newgroup);
        this.groupSize = tobeChanged;
        this.waitlistservice.updateGroupSize(resId, queueID, tobeChanged);
    };
    WaitlistEntryComponent.prototype.deleteFromWaitList = function (resId, queueID) {
        console.log("Queue in delete:" + queueID);
        this.waitlistservice.removeReservation(resId, queueID);
        this.show = false;
    };
    WaitlistEntryComponent.prototype.hashCode = function (str) {
        var hash = 0;
        var i;
        var chr;
        if (str.length === 0)
            return hash;
        for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        if (hash < 0)
            hash = hash * -1;
        return hash;
    };
    WaitlistEntryComponent.prototype.logout = function () {
        this.userService.logoutUser();
        this.router.navigate(['']);
    };
    WaitlistEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-waitlist-entry',
            template: __webpack_require__(/*! ./waitlist-entry.component.html */ "./src/app/components/waitlist-entry/waitlist-entry.component.html"),
            styles: [__webpack_require__(/*! ./waitlist-entry.component.css */ "./src/app/components/waitlist-entry/waitlist-entry.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_waitlist_service__WEBPACK_IMPORTED_MODULE_2__["WaitlistService"],
            _services_restaurant_api_service__WEBPACK_IMPORTED_MODULE_3__["RestaurantAPIService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WaitlistEntryComponent);
    return WaitlistEntryComponent;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            ],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    /**for running localy on our machine */
    // apiUrl:'https://localhost:8080/'
    /**for running services from azure */
    //apiUrl: 'https://waytlessserver.azurewebsites.net/'
    // If you need to test with OAuth use the url below.
    //apiUrl : 'https://waytlessv1.azurewebsites.net/' 
    /**for deploying on azure  */
    apiUrl: ''
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\spoor\Desktop\WaytLess\Wayless_new\Waytless\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map