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

module.exports = ".appTitle{\n\ttop : 5px;\n\tleft : 47%;\n\tposition: absolute;\n}\n\nbody {\n\tbackground-image: url(\"/src/assets/images/fadedTable.jpg\");\n\tbackground-repeat: no-repeat;\n\tbackground-attachment: fixed;\n\tbackground-position: center; \n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQywwREFBMEQ7Q0FDMUQsNEJBQTRCO0NBQzVCLDRCQUE0QjtDQUM1QiwyQkFBMkI7R0FDekIiLCJmaWxlIjoiLi4vYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwVGl0bGV7XG5cdHRvcCA6IDVweDtcblx0bGVmdCA6IDQ3JTtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3NyYy9hc3NldHMvaW1hZ2VzL2ZhZGVkVGFibGUuanBnXCIpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  \n  <br><br><br>\n  <div>\n     \n    <router-outlet></router-outlet>\n  </div>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLXJlc2VydmF0aW9uL2NvbmZpcm0tcmVzZXJ2YXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/confirm-reservation/confirm-reservation.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/confirm-reservation/confirm-reservation.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-n5 mb-1\"><a href=\"/home\"><img src=\"../assets/images/LOGO.png\" style=\"width: 110px;height: 110px;\"\n      class=\"mx-auto d-block\" id=\"siteIcon\" alt=\"Back to Homepage\"></a></div>\n\n<div class=\"container\">\n\n  <div class=\"col-lg-6 bg-light text-dark mx-auto mt-1 p-5 shadow py-3 rounded\">\n\n    <ng-template [ngIf]=\"!waitlist[index]\">\n      <div class=\"text-center\">\n        <br><br>\n        <h1>You do not have a valid reservation.</h1>\n      </div>\n\n    </ng-template>\n\n    <ng-template [ngIf]=\"waitlist[index]\">\n      <p> Hello <b>{{customerName}},</b></p>\n      <p> Welcome back to {{restaurantName}}'s waitlist, your queue ID is <b>{{queueID}}.</b></p>\n      <p><img src=\"{{restIMG}}\" class=\"mx-auto rounded\" alt=\"{{restaurantName}}\"></p>\n      <ng-template [ngIf]=\"notified\">\n\n        <div *ngIf=\"confirmed\">\n          <p>You have confirmed your reservation. Please head back to the restaurant.</p>\n        </div>\n        <div *ngIf=\"!confirmed\">\n          <p>Confirm your reservation by clicking here: <button class=\"btn btn-labeled btn-primary\"\n              (click)=\"confirm(queueID)\" type=\"button\">Confirm your Reservation</button></p>\n\n        </div>\n      </ng-template>\n\n      <ng-template [ngIf]=\"!notified\">\n        <p>You have not been notified. Check back later!</p>\n\n      </ng-template>\n      <p>You can start ordering by browsing the\n        <a routerLink=\"/menu/{{restaurantId}}\" role=\"button\" class=\"btn btn-labeled btn-success\"><i class=\"fa fa-bars\"\n            aria-hidden=\"true\"></i> Restaurant Menu</a>\n      </p>\n    </ng-template>\n  </div>\n\n</div>"

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

module.exports = ".brand_logo_container {\n  position: absolute;\n  height: 150px;\n  width: 150px;\n  top:10px;\n  left : 630px;\n  border-radius: 50%;\n \n \n  text-align: center;\n}\n.brand_logo {\n  height: 110px;\n  width: 110px;\n  \n}\n.login-card {\n    max-width: 250px;\n    margin-left: 1100px;\n    margin-top: 20px;\n    align-content: center;\n    margin-right: 10px;\n  }\n.logoutBtn{\n    height:40px; \n    width:100px; \n    margin: -20px -50px; \n    margin-left: 40%;\n    position:relative;\n    color : white;\n    background-color: black;\n    text-align: center;\n    top:50%; \n    left:50%;\n  }\n.example-card {\n    max-width: 300px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n.example-full-width{\n    padding-left: 10px;\n  }\n.right{\n    float: right;\n  }\n.left{\n    float: left;\n  }\n.mat-raised-button{\n      align-self: center;\n      width: 250px;\n      margin-left: 20px;\n      background-color: #FF6E40;    \n  }\n.button-container{\n    display: flex;\n  }\n.card:hover {\n    background-color:#c0392b;\n}\n.card-container {\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: none;\n    align-self: center;\n    scroll-behavior: smooth;\n    display: flex;  \n    margin-top: 0px;\n    margin-right: 10px;\n    overflow-x: auto;\n    justify-content: space-between;\n    width: 97%;\n  }\n.card-container::-webkit-scrollbar { width: 0px;  /* Remove scrollbar space */\n    background: transparent;  /* Optional: just make scrollbar invisible */ }\n.appTitle{\n  left : 47%;\n  margin-top: 0px;\n  position: absolute;\n}\n.mat-title\n{\n  margin-bottom: 0rem;\n  padding-bottom: -2rem;\n  padding-top: 0rem;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n}\n.mat-caption{\n  \n  font-size: 12px;\n}\n.mat-icon-button {\n  margin: 0 0.1rem;\n  height: 1rem;\n  min-width: 0;\n  line-height: 2rem;\n  padding-left: 0;\n  padding-right: 0;\n  width: 1rem;\n}\n.login-text{\n  margin-left : 10px;\n  font-size: 15px;\n  color: #FF6E40;\n  font-family: 'Roboto', sans-serif;\n}\n.flex {\n  flex: 1 1 auto;\n}\n.title{\n  font-size: 22px;\n  font-family: sans-serif;\n  margin-left: 15px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n.text\n{\n  font-size: 13px;\n  font-family: sans-serif;\n  margin-top: 0px;\n}\n.rating_text\n{\n  font-size: 13px;\n  margin-left: 10px;\n  font-family: sans-serif;\n  margin-top: -3px;\n}\n.div_body{\n  background-position-x: fixed;\n  font-family: 'Roboto', sans-serif;\n  margin:0px !important;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  }\n.mat-body-2 {\n   font-family: 'Roboto', 'sans-serif';\n   color: #FF6E40;\n }\n.user_card {\n  height: 150px;\n  width: 350px;\n  top: 70px;\n  \n  background: #f39c12;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 5px;\n}\n.form_container {\n  margin-top: 100px;\n}\n.login_btn {\n  width: 100%;\n  background: #c0392b !important;\n  color: white !important;\n}\n.login_btn:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n.login_container {\n  padding: 0 2rem;\n}\n.input-group-text {\n  background: #c0392b !important;\n  color: white !important;\n  border: 0 !important;\n  border-radius: 0.25rem 0 0 0.25rem !important;\n}\n.input_user,\n.input_pass:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n.custom-checkbox .custom-control-input:checked~.custom-control-label::before {\n  background-color: #c0392b !important;\n}\n.active-pink-4 input[type=text]:focus:not([readonly]) {\n  border: 1px solid #FF6E40;\n  padding: 0px;\n  box-shadow: 0 0 0 1px #FF6E40;\n}\n.active-pink-3 input[type=text] {\n  border: 1px solid #FF6E40;\n  box-shadow: 0 0 0 1px #FF6E40;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osUUFBUTtFQUNSLFlBQVk7RUFDWixrQkFBa0I7OztFQUdsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZOztBQUVkO0FBR0M7SUFDRyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0VBQ1Y7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0E7TUFDSSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQix5QkFBeUI7RUFDN0I7QUFDQTtJQUNFLGFBQWE7RUFDZjtBQUVGO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0U7SUFDRSxpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7QUFDRixxQ0FBcUMsVUFBVSxHQUFHLDJCQUEyQjtJQUN6RSx1QkFBdUIsR0FBRyw0Q0FBNEMsRUFBRTtBQUM1RTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCO0FBRUQ7R0FDRSxtQ0FBbUM7R0FDbkMsY0FBYztDQUNoQjtBQUNBO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTOztFQUVULG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDRFQUE0RTtFQUM1RSxvRkFBb0Y7RUFDcEYsaUZBQWlGO0VBQ2pGLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsNkNBQTZDO0FBQy9DO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZF9sb2dvX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICB0b3A6MTBweDtcbiAgbGVmdCA6IDYzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gXG4gXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5icmFuZF9sb2dvIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDExMHB4O1xuICBcbn1cbiBcblxuIC5sb2dpbi1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5sb2dvdXRCdG57XG4gICAgaGVpZ2h0OjQwcHg7IFxuICAgIHdpZHRoOjEwMHB4OyBcbiAgICBtYXJnaW46IC0yMHB4IC01MHB4OyBcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDo1MCU7IFxuICAgIGxlZnQ6NTAlO1xuICB9XG4gIC5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5leGFtcGxlLWZ1bGwtd2lkdGh7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5yaWdodHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLmxlZnR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RTQwOyAgICBcbiAgfVxuICAuYnV0dG9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuLmNhcmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2MwMzkyYjtcbn1cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICBkaXNwbGF5OiBmbGV4OyAgXG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogOTclO1xuICB9XG4uY2FyZC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDBweDsgIC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIC8qIE9wdGlvbmFsOiBqdXN0IG1ha2Ugc2Nyb2xsYmFyIGludmlzaWJsZSAqLyB9XG4uYXBwVGl0bGV7XG4gIGxlZnQgOiA0NyU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubWF0LXRpdGxlXG57XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG4gIHBhZGRpbmctYm90dG9tOiAtMnJlbTtcbiAgcGFkZGluZy10b3A6IDByZW07XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LWNhcHRpb257XG4gIFxuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYXQtaWNvbi1idXR0b24ge1xuICBtYXJnaW46IDAgMC4xcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIG1pbi13aWR0aDogMDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgd2lkdGg6IDFyZW07XG59XG5cbi5sb2dpbi10ZXh0e1xuICBtYXJnaW4tbGVmdCA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNGRjZFNDA7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbi5mbGV4IHtcbiAgZmxleDogMSAxIGF1dG87XG59ICAgIFxuXG4udGl0bGV7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi50ZXh0XG57XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5yYXRpbmdfdGV4dFxue1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cbi5kaXZfYm9keXtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBmaXhlZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46MHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIH1cbiAgIFxuIC5tYXQtYm9keS0yIHtcbiAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnO1xuICAgY29sb3I6ICNGRjZFNDA7XG4gfVxuIC51c2VyX2NhcmQge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIHRvcDogNzBweDtcbiAgXG4gIGJhY2tncm91bmQ6ICNmMzljMTI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3JtX2NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLmxvZ2luX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmxvZ2luX2J0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW5fY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuLmlucHV0X3VzZXIsXG4uaW5wdXRfcGFzczpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xufVxuXG5cbi5hY3RpdmUtcGluay00IGlucHV0W3R5cGU9dGV4dF06Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGNkU0MDtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0ZGNkU0MDtcbn1cbi5hY3RpdmUtcGluay0zIGlucHV0W3R5cGU9dGV4dF0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkY2RTQwO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0ZGNkU0MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <b>Logged in as : <span>{{displayEmail}}</span></b>\n\n<div class=\"brand_logo_container\" >\n    <img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\">\n  </div>\n   \n        <button type=\"button\" class=\"logoutBtn\"><a href = \"https://waytlessv1.azurewebsites.net/logout\">Log out</a></button>\n     \n\n   \n<div class=\"active-pink-3 active-pink-4 mb-4\" style=\"width:50%;margin :0 auto ;margin-top: 90px\">\n  <input [(ngModel)]='search' (keydown)=\"keyDownFunction($event)\" class=\"form-control\" type=\"text\"\n    placeholder=\"Search Restaurant by Name or City\" aria-label=\"Search\">\n</div>\n<div class=\"div_body\">\n\n\n\n  <br>\n  <span class=\"title\">Popular Restaurants</span>\n  <div class=\"row\" style=\"margin-left: 5px\">\n    <div class=\"card\" style=\"width: 18rem;\" (click)=\"onRestaurantClickEvent(restaurant_id)\"\n      *ngFor=\"let r of restuarant\">\n      <img src={{r.url}} style=\"width: 290px;height: 200px\">\n      <div class=\"card-body\">\n        <span class=\"mat-title\">{{r.name}}</span>\n        <div layout=\"row\" layout-align=\"start center\">\n          <img class=\"mat-icon-button\" src=\"../assets/images/review_full.png\"\n            *ngFor=\"let e of createStarArray(r.rating)\">\n          <img class=\"mat-icon-button\" src=\"../assets/images/review_empty.png\"\n            *ngFor=\"let e of createEmptyStarArray(r.rating)\">\n          <span class=\"rating_text\">{{r.reviews}} Reviews</span>\n          <span #restaurant_id style=\"display:none\">{{r.restaurantID}}</span>\n        </div>\n        <p class=\"text\">{{r.cuisine}} . $$$ . {{r.address.city}}</p>\n        <p class=\"mat-body-2\">Booked {{r.booked}} times</p>\n        <a routerLink=\"menu/1\" class=\"mat-body-2\">See menu</a>\n      </div>\n    </div>\n  </div>"

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
        this.show = true;
        this.router.navigate(['./login']);
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

module.exports = ".brand_logo {\n    height: 110px;\n    width: 110px;\n    \n  }\n.login_container {\n  padding: 0 2rem;\n}\n.login_btn {\n    width: 100%;\n    background: #c0392b !important;\n    color: white !important;\n  }\n.login_btn:focus {\n    box-shadow: none !important;\n    outline: 0px !important;\n  }\n.brand_logo_container {\n    position: absolute;\n    height: 150px;\n    width: 150px;\n    top:10px;\n    left : 630px;\n    border-radius: 50%;\n    text-align: center;\n  }\n.login_btn {\n    width: 100%;\n    background: #c0392b !important;\n    color: white !important;\n  }\n.login-card {\n    max-width: 250px;\n    margin-left: 1100px;\n    margin-top: 20px;\n    align-content: center;\n    margin-right: 10px;\n  }\n.logoutBtn{\n    height:40px; \n    width:100px; \n    margin: -20px -50px; \n    position:relative;\n    color : white;\n    background-color: black;\n    text-align: center;\n    top:50%; \n    left:50%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2lucGFnZS9sb2dpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZOztFQUVkO0FBQ0Y7RUFDRSxlQUFlO0FBQ2pCO0FBQ0U7SUFDRSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHVCQUF1QjtFQUN6QjtBQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLHVCQUF1QjtFQUN6QjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osUUFBUTtJQUNSLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0VBQ1YiLCJmaWxlIjoibG9naW5wYWdlL2xvZ2lucGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyYW5kX2xvZ28ge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIFxuICB9XG4ubG9naW5fY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuICAubG9naW5fYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxvZ2luX2J0bjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5icmFuZF9sb2dvX2NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRvcDoxMHB4O1xuICAgIGxlZnQgOiA2MzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5sb2dpbl9idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sb2dpbi1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5sb2dvdXRCdG57XG4gICAgaGVpZ2h0OjQwcHg7IFxuICAgIHdpZHRoOjEwMHB4OyBcbiAgICBtYXJnaW46IC0yMHB4IC01MHB4OyBcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBjb2xvciA6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6NTAlOyBcbiAgICBsZWZ0OjUwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/loginpage/loginpage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand_logo_container\" >\n  <img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\">\n</div>\n<div class=\"container h-100\">\n<div class=\"d-flex justify-content-center h-100\">\n  <div class=\"user_card\">\n    \n    <div  style=\"margin :0 auto ;margin-top: 90px\">\n     \n      <button type=\"button\" name=\"button\" class=\"btn login_btn\" ><a \n          href=\"https://waytlessv1.azurewebsites.net/auth/google\">Login</a></button>\n    </div>\n  </div>\n</div>\n</div> \n\n"

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

module.exports = "  #initials {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    border: gray solid 2px;\n    font-size: 30px;\n    text-align: center;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 20px;\n    margin: 0px 10px 0px 0px;\n    display: inline-flex;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZVdhaXRsaXN0L21hbmFnZVdhaXRsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6Im1hbmFnZVdhaXRsaXN0L21hbmFnZVdhaXRsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICNpbml0aWFscyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IGdyYXkgc29saWQgMnB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/manageWaitlist/manageWaitlist.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/manageWaitlist/manageWaitlist.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/home\"><img src=\"../assets/images/LOGO.png\" style=\"width: 110px;height: 110px\"\n    class=\"mx-auto d-block img-responsive\" id=\"siteIcon\" alt=\"Back to Homepage\"></a>\n\n\n\n<div class=\"container bg-light mt-n5 p-5 shadow py-3 rounded\">\n  <ng-template [ngIf]=\"!restaurantName\">\n    <div class=\"text-secondary text-center\">\n      <br><br>\n      <h3>This restaurant does not have an active waitlist.</h3><br><br>\n\n    </div>\n  </ng-template>\n\n  <ng-template [ngIf]=\"restaurantName\">\n\n    <div class=\"row\">\n      <div class=\"col-lg-10\">\n          <h2 class=\"text-dark\"><b>{{restaurantName}}</b> Waitlist</h2>\n      </div>\n      <div class=\"col-lg-2\">\n        <div class=\"btn-group-vertical\">\n          <a routerLink=\"/waitlist-entry/{{restaurantId}}\" role=\"button\" class=\"btn btn-labeled btn-light\"><i\n              class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add to\n            Waitlist</a>\n          <a routerLink=\"/menu/{{restaurantId}}\" role=\"button\" class=\"btn btn-labeled btn-light\"><i class=\"fa fa-bars\"\n              aria-hidden=\"true\"></i> Restaurant Menu</a>\n        </div>\n      </div>\n    </div>\n    <ng-template [ngIf]=\"waitlist?.length > 0\">\n      <div class=\"row my-1\">\n        <div class=\"col-lg-4\">\n            Welcome back <span class=\"badge badge-secondary badge-pill\">{{displayName}}</span>\n        </div>\n        <div class=\"col-lg-4\">\n          Number of groups: <span class=\"badge badge-secondary badge-pill\">{{ waitlist?.length }}</span>\n        </div>\n        <div class=\"col-lg-4\">\n          Average Wait Time (in minutes): <span class=\"badge badge-secondary badge-pill\">{{avgWaitMin}}</span>\n        </div>\n      </div>\n    </ng-template>\n\n    <div class=\"row\">\n      <div class=\"table-responsive\">\n        <table class=\"table text-center text-dark table-stripedcd  mt-2\">\n\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Reservation ID</th>\n              <th scope=\"col\">Guest & Group Size</th>\n              <th scope=\"col\">Time joined</th>\n              <th scope=\"col\">Quoted Time</th>\n              <th scope=\"col\">Notified</th>\n              <th scope=\"col\">Confirmed</th>\n              <th scope=\"col\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let reservation of waitlist; index as id\">\n              <th scope=\"row\">{{reservation.queueID}}</th>\n              <td>\n\n                <div class=\"media\">\n                  <div class=\"media-left media-middle\">\n                    <span id=\"initials\">\n                      <span class=\"editable media-object\" contenteditable=\"true\"\n                        (keyup)=\"updateGroupSize(reservation.queueID, 'groupSize', $event)\"\n                        (blur)=\"refreshTable(id, 'groupSize', $event)\">\n                        {{reservation.groupSize}}\n                      </span></span>\n                  </div>\n                  <div class=\"media-body text-left align-middle\">\n                    <strong>{{reservation.customerName}}</strong><br>\n                    {{reservation.phone}}<br><small>{{reservation.email}}</small>\n                  </div>\n                </div>\n              </td>\n              <td class=\"text-center\">{{ reservation.joinTime | date:'shortTime' }}</td>\n              <td class=\"text-center\">{{ reservation.quotedtime | date:'shortTime' }}</td>\n              <td class=\"text-center\">\n                <div *ngIf=\"reservation.notified == true; else elseBlock\"><i class=\"fa fa-check\"></i></div>\n                <ng-template #elseBlock>\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i> &nbsp;\n                  <button class=\"btn btn-labeled btn-primary\" (click)=\"notify(reservation.queueID)\" type=\"button\"\n                    placement=\"top\" ngbTooltip=\"Send customer a notification to inform their table is almost ready..\"><i\n                      class=\"fa fa-bell\"></i></button>\n                </ng-template>\n              </td>\n              <td class=\"text-center\">\n                <div *ngIf=\"reservation.confirmed == true; else elseBlock1\"><i class=\"fa fa-check\"></i></div>\n                <ng-template #elseBlock1>\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i> &nbsp;\n                  <button class=\"btn btn-labeled btn-warning\" (click)=\"confirm(reservation.queueID)\" type=\"button\"\n                    placement=\"top\"\n                    ngbTooltip=\"Confirm the customer has recevied the notifcation and confirmed their reservation.\"><i\n                      class=\"fa fa-check-circle\"></i></button>\n                </ng-template>\n              </td>\n              <td class=\"text-center\">\n                <button class=\"btn btn-labeled btn-success\" (click)=\"complete(reservation.queueID)\" type=\"button\"\n                  placement=\"top\" ngbTooltip=\"Complete a reservation.\"><i class=\"fa fa-check\"\n                    aria-hidden=\"true\"></i></button>\n                <button class=\"btn btn-labeled btn-danger\" (click)=\"remove(reservation.queueID)\" type=\"button\"\n                  placement=\"top\" ngbTooltip=\"Remove entry from your waitlist.\"><i class=\"fa fa-trash\"\n                    aria-hidden=\"true\"></i></button></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n  </ng-template>\n\n</div>\n\n\n<script>\n  $(function () {\n    $('[data-toggle=\"popover\"]').popover()\n  })\n</script>"

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
        //this.route.params.subscribe(params => {
        //  this.restaurantId = params['id'];
        //}),
        this.restaurantAPIService.getAllRestaurants().subscribe(function (restItems) {
            _this.restItems = restItems;
            _this.restItems.forEach(function (item, index) {
                if (item.owner == _this.username) {
                    //this.avaliableRestaurants.push(this.restItems[index]);
                    _this.restaurantName = _this.restItems[index].name;
                    _this.restaurantId = _this.restItems[index].restaurantID;
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
        //this.getRestaurantInfo();
        //this.avgWaitMin = this.avgWaittime(this.waitlist);
    };
    manageWaitlistComponent.prototype.getRestaurantInfo = function () {
        var _this = this;
        console.log("rest " + this.restItems.length);
        this.restItems.forEach(function (item, index) {
            if (item.owner == _this.username) {
                //this.avaliableRestaurants.push(this.restItems[index]);
                _this.restaurantName = _this.restItems[index].name;
                _this.restaurantId = _this.restItems[index].restaurantID;
            }
        });
        //console.log(this.avaliableRestaurants.length);
    };
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

module.exports = "\n.brand_logo_container {\n    position: absolute;\n    height: 150px;\n    width: 150px;\n    top: 10px;\n    left : 620px;\n    border-radius: 50%;\n   \n    padding: 10px;\n    text-align: center;\n  }\n  .brand_logo {\n    height: 110px;\n    width: 110px;\n    \n  }\n  .menu-card {\n    max-width: 750px;\n    margin-left: auto;\n    margin-top: 55px;\n    align-content: center;\n    margin-right: auto;\n}\n  ::ng-deep .mat-tab-label-content {\n    color: #FF6E40;\n}\n  .nav-bar-item {\n    margin-right: 10px;\n    background-color: #FF6E40;\n    color: white;\n}\n  ::ng-deep .mat-toolbar {\n    background-color:  rgb(255, 213, 200);\n    border-radius: 10px 10px 0 0;\n}\n  .center {\n    width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n}\n  ::ng-deep .mat-card-image:first-child {\n    margin-top: 0 !important;\n}\n  .mat-card-image {\n    width: 95%;\n    margin: 5px;\n}\n  .menu-item {\n    background: #ffffff;\n    min-height: 64px;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n  ::ng-deep .mat-grid-tile .mat-figure {\n    display: block !important;\n    margin: 5px !important;\n}\n  .menu-item-body.active, .menu-item-body:hover {\n    border-color: #ef6e30;\n    background-color: #f3f2f2;\n}\n  .menu-item-body {\n    padding: 5px;\n    border: 1px solid #F0F0F0;\n    border-radius: 5px;\n}\n  .menu-top {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: space-between;\n}\n  .menu-item-name {\n    margin: 0;\n    padding: 0;\n    font-weight: 700;\n    color: #333333;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding-bottom: 2px;\n}\n  .menu-item-price {\n    margin: 0;\n    padding: 0;\n    color: #808080;\n    font-size: 1rem;\n    font-weight: 500;\n}\n  .menu-bottom {\n    margin-top: 8px;\n    color: #808080;\n    text-align: left;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    height: 2.8em;\n    -webkit-line-clamp: 2;\n}\n  .order-cart-card {\n    margin-top: 30px;\n    max-width: 750px;\n    justify-content: center;\n    align-content: center;\n    margin-left: auto;\n    margin-right: auto;\n}\n  table, td, th {  \n    border: 1px solid #ddd;\n    text-align: left;\n  }\n  table {\n    border-collapse: collapse;\n    width: 100%;\n  }\n  th, td {\n    padding: 15px;\n  }\n  .confirmBtn{\n    align-self: center;\n    width: 180px;\n    background-color: #FF6E40; \n  }\n  .confirmBtn:hover{\n    background-color: black;\n  }\n  .total{\n      font-size: x-large;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTs7RUFFZDtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtFQUVBO0lBQ0ksY0FBYztBQUNsQjtFQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0VBRUE7SUFDSSxxQ0FBcUM7SUFDckMsNEJBQTRCO0FBQ2hDO0VBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtFQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0VBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0VBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0VBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0VBRUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0VBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtFQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBRWIsOEJBQThCO0FBQ2xDO0VBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtFQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtFQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHFCQUFxQjtBQUV6QjtFQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7RUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCIiwiZmlsZSI6Im1lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYnJhbmRfbG9nb19jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdCA6IDYyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIFxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5icmFuZF9sb2dvIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBcbiAgfVxuICBcbiAgLm1lbnUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcbiAgICBjb2xvcjogI0ZGNkU0MDtcbn1cblxuLm5hdi1iYXItaXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZFNDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDI1NSwgMjEzLCAyMDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG59XG5cbi5jZW50ZXIge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbjo6bmctZGVlcCAubWF0LWNhcmQtaW1hZ2U6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jYXJkLWltYWdlIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4ubWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjo6bmctZGVlcCAubWF0LWdyaWQtdGlsZSAubWF0LWZpZ3VyZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xufSBcblxuLm1lbnUtaXRlbS1ib2R5LmFjdGl2ZSwgLm1lbnUtaXRlbS1ib2R5OmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICNlZjZlMzA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMjtcbn1cblxuLm1lbnUtaXRlbS1ib2R5IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjBGMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tZW51LXRvcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1lbnUtaXRlbS1uYW1lIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi5tZW51LWl0ZW0tcHJpY2Uge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWVudS1ib3R0b20ge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgaGVpZ2h0OiAyLjhlbTtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuXG4ub3JkZXItY2FydC1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxudGFibGUsIHRkLCB0aCB7ICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0aCwgdGQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAuY29uZmlybUJ0bntcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZFNDA7IFxuICB9XG5cbiAgLmNvbmZpcm1CdG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cblxuICAudG90YWx7XG4gICAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css\"\n  integrity=\"sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B\" crossorigin=\"anonymous\">\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n  integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"\n  integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js\"\n  integrity=\"sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em\" crossorigin=\"anonymous\"></script>\n\n<div class=\"brand_logo_container\">\n  <img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\">\n</div>\n\n<div class=\"card menu-card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Menu for {{restaurantName}}</h5>\n\n    <mat-tab-group>\n      <mat-tab label=\"Appetizers\">\n        <mat-grid-list cols=\"3\" rowHeight=\"350px\">\n          <mat-grid-tile class=\"menu-item\" *ngFor=\"let a of appetizers\">\n            <mat-card class=\"menu-item-body\">\n              <img mat-card-image\n                src='{{a.url !== undefined ? a.url : \"https://dintaifungusa.com/wp-content/uploads/2015/01/shrimp-fried-rice.jpg\"}}'\n                alt=\"Photo of food\">\n              <mat-card-content>\n                <div class=\"menu-top\">\n                  <span class=\"menu-item-name\">{{a.itemName}}</span>\n                  <span class=\"menu-item-price\">${{a.price}} x\n                    {{orders.get(a.itemID) === undefined ? 0 : orders.get(a.itemID)}}</span>\n                </div>\n                <div class=\"menu-bottom\">\n                  <span>{{a.description}}</span><br />\n                </div>\n              </mat-card-content>\n              <mat-card-actions>\n                <button (click)=\"addToCart(a)\" mat-button>ADD</button>\n                <button (click)=\"deleteFromCart(a)\" mat-button>REMOVE</button>\n              </mat-card-actions>\n            </mat-card>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-tab>\n      <mat-tab label=\"Entrees\">\n        <mat-grid-list cols=\"3\" rowHeight=\"350px\">\n          <mat-grid-tile class=\"menu-item\" *ngFor=\"let e of entrees\">\n            <mat-card class=\"menu-item-body\">\n              <img mat-card-image\n                src='{{e.url !== undefined ? e.url : \"https://dintaifungusa.com/wp-content/uploads/2015/01/shrimp-fried-rice.jpg\"}}'\n                alt=\"Photo of food\">\n              <mat-card-content>\n                <div class=\"menu-top\">\n                  <span class=\"menu-item-name\">{{e.itemName}}</span>\n                  <span class=\"menu-item-price\">${{e.price}} x\n                    {{orders.get(e.itemID) === undefined ? 0 : orders.get(e.itemID)}}</span>\n                </div>\n                <div class=\"menu-bottom\">\n                  <span>{{e.description}}</span><br />\n                </div>\n              </mat-card-content>\n              <mat-card-actions>\n                <button (click)=\"addToCart(e)\" mat-button>ADD</button>\n                <button (click)=\"deleteFromCart(e)\" mat-button>REMOVE</button>\n              </mat-card-actions>\n            </mat-card>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-tab>\n      <mat-tab label=\"Desserts\">\n        <mat-grid-list cols=\"3\" rowHeight=\"350px\">\n          <mat-grid-tile class=\"menu-item\" *ngFor=\"let d of desserts\">\n            <mat-card class=\"menu-item-body\">\n              <img mat-card-image\n                src='{{d.url !== undefined ? d.url : \"https://dintaifungusa.com/wp-content/uploads/2015/01/shrimp-fried-rice.jpg\"}}'\n                alt=\"Photo of food\">\n              <mat-card-content>\n                <div class=\"menu-top\">\n                  <span class=\"menu-item-name\">{{d.itemName}}</span>\n                  <span class=\"menu-item-price\">${{d.price}} x\n                    {{orders.get(d.itemID) === undefined ? 0 : orders.get(d.itemID)}}</span>\n                </div>\n                <div class=\"menu-bottom\">\n                  <span>{{d.description}}</span><br />\n                </div>\n              </mat-card-content>\n              <mat-card-actions>\n                <button (click)=\"addToCart(d)\" mat-button>ADD</button>\n                <button (click)=\"deleteFromCart(d)\" mat-button>REMOVE</button>\n              </mat-card-actions>\n            </mat-card>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-tab>\n    </mat-tab-group>\n\n    <div class=\"total\">\n      Total : $<span class=\"totalprice\">{{totalPrice}}</span>\n    </div>\n\n    <button mat-raised-button class=\"btn btn-primary confirmBtn\" (click)=\"makeOrder()\" color=\"primary\">Confirm\n      order</button>\n  </div>\n</div>"

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
    function MenuComponent(router, apiService, menuApiService, restaurantService, route) {
        var _this = this;
        this.router = router;
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

module.exports = ".brand_logo_container {\n  position: absolute;\n  height: 150px;\n  width: 150px;\n  top: 10px;\n  left : 620px;\n  border-radius: 50%;\n \n  padding: 10px;\n  text-align: center;\n}\n.brand_logo {\n  height: 110px;\n  width: 110px;\n  \n}\n.order-cart-card{\n    max-width: 500px;\n    margin-top: 20px;\n    justify-content: center;\n    margin-top: 30px;\n    align-content: center;\n    margin-top: 100px;\n    margin-left: 450px;\n    margin-right: 10px;\n    border: 2px solid #808080;\n}\ntable, td, th {  \n    border: 1px solid #ddd;\n    text-align: left;\n  }\ntable {\n    border-collapse: collapse;\n    width: 100%;\n  }\nth, td {\n    padding: 15px;\n  }\n.confirmBtn{\n    align-self: center;\n    width: 200px;\n    margin-left: 30px;\n    background-color: #FF6E40; \n  }\n.confirmBtn:hover{\n    background-color: black;\n  }\n.total{\n      font-size: x-large;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWNhcnQvb3JkZXItY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZOztBQUVkO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUVBO01BQ0ksa0JBQWtCO0VBQ3RCIiwiZmlsZSI6Im9yZGVyLWNhcnQvb3JkZXItY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyYW5kX2xvZ29fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHRvcDogMTBweDtcbiAgbGVmdCA6IDYyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gXG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5icmFuZF9sb2dvIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDExMHB4O1xuICBcbn1cblxuLm9yZGVyLWNhcnQtY2FyZHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODA4MDgwO1xufVxuXG50YWJsZSwgdGQsIHRoIHsgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRoLCB0ZCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5jb25maXJtQnRue1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkU0MDsgXG4gIH1cblxuICAuY29uZmlybUJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC50b3RhbHtcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/order-cart/order-cart.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/order-cart/order-cart.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand_logo_container\">\n  <img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\">\n</div>\n<mat-card class=\"order-cart-card\">\n  <mat-card-header>\n    <mat-card-title>Your order has been confirmed!</mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <br>\n    <table class=\"orders\">\n      <tr>\n        <th>Order name</th>\n        <th>Price</th>\n        <th>Quantity</th>\n      </tr>\n      <tr *ngFor=\"let order of orderDetails\">\n        <td>{{order.name}}</td>\n        <td>${{order.price}}</td>\n        <td>{{order.quantity}}</td>\n      </tr>\n    </table>\n  </mat-card-content>\n  <div class=\"total\">\n    Total : $<span class=\"totalprice\">{{ totalPrice }}</span>\n  </div>\n</mat-card>"

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
    function OrderCartComponent(apiService, menuApiService, route) {
        var _this = this;
        this.apiService = apiService;
        this.menuApiService = menuApiService;
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

module.exports = ".registration-card {\n    max-width: 350px;\n    margin-top: 20px;\n    justify-content: center;\n    margin-top: 30px;\n    align-content: center;\n    margin-top: 100px;\n    margin-left: 560px;\n    margin-right: 10px;\n  }\n  .example-full-width{\n    padding-left: 40px;\n  }\n  .mat-raised-button{\n    align-self: center;\n    width: 330px;\n    margin-left: 30px;\n    background-color: #c0392b ;    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RyYXRpb24tY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1NjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmV4YW1wbGUtZnVsbC13aWR0aHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiA7ICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n  <div class=\"brand_logo_container\">\n    <img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\" style=\"width: 100px\">\n  </div>\n</div>\n<mat-card class=\"registration-card\" style=\"background-color:#f39c12;\">\n  <mat-card-header>\n    <mat-card-title>Register Here!</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table class=\"example-full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <i class=\"material-icons\">person</i>\n            <mat-form-field class=\"example-full-width\">\n              <mat-label>Choose User</mat-label>\n              <mat-select [(value)]=\"selected\">\n                <mat-option value=\"Owner\">Owner</mat-option>\n                <mat-option value=\"Customer\">Customer</mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          </td>\n        </tr>\n        <tr *ngIf=\"selected === 'Customer'\">\n          <td>\n            <i class=\"material-icons\">person</i>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"FirstName\" [(ngModel)]=\"firstname\" name=\"firstname\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr *ngIf=\"selected === 'Customer'\">\n          <td>\n            <i class=\"material-icons\">person</i>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"LastName\" [(ngModel)]=\"lastname\" name=\"lastname\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <i class=\"material-icons\">email</i>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <i class=\"material-icons\">phone</i>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"phone\" name=\"email\">\n            </mat-form-field>\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <i class=\"material-icons\">person</i>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <i class=\"material-icons\">person</i>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr *ngIf=\"selected === 'Owner'\">\n          <td>\n            <i class=\"material-icons\">restaurant</i>\n            <mat-form-field class=\"example-full-width\">\n\n              <input matInput placeholder=\"Restaurant Name\" [(ngModel)]=\"restaurant\" name=\"restaurant\">\n            </mat-form-field>\n          </td>\n        </tr>\n\n        <tr *ngIf=\"selected === 'Owner'\">\n          <td>\n            <i class=\"material-icons\">location_city</i>\n            <mat-form-field class=\"example-full-width\">\n\n              <input matInput placeholder=\"Location\" [(ngModel)]=\"location\" name=\"location\">\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n    <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n  </mat-card-content>\n\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"register()\" color=\"primary\">Submit</button>\n  </mat-card-actions>\n\n\n</mat-card>"

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

module.exports = "h2{\n  text-align : center;\n}\n\nbody {\n  background-image: url('fadedTable.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center; \n  \n }\n\n.brand_logo_container {\n  position: absolute;\n  height: 150px;\n  width: 150px;\n  top: 10px;\n  left : 620px;\n  border-radius: 50%;\n \n  padding: 10px;\n  text-align: center;\n}\n\n.brand_logo {\n  height: 110px;\n  width: 110px;\n  \n}\n\n.waitlist-entry-card {\n  max-width: 600px;\n    justify-content: center;\n    align-content: center;\n    margin-left: 56px;\n    margin-right: 10px;\n    position: absolute;\n    top: 190px;\n    border: 1px solid #808080;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 5px;\n}\n\n.customer-waitlist-information-card {\n\n   justify-content: center;\n    align-content: center;\n    border: 1px solid #808080; \n    width : 40%;\n    position: absolute;\n    top: 190px;\n    right: 60px; \n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 5px;\n}\n\n.full-width {\n    width: 100%;\n    \n  }\n\n#addBtn{\n    background-color: #000000;\n  color: white;\n  border: none;\n  cursor: pointer;\n  width: 60%;\n  opacity: 0.9;\n  border-radius: 8px;\n\n  align-self: center;\n  width: 570px;\n    \n}\n\n#addBtn:hover {\n  background-color: #808080; \n  color: black;\n}\n\n.selectMenuBtn{\n\t\n  background-color: #ff8000;\n  color: white;\n  padding: 10px 10px;\n  border: none;\n  cursor: pointer;\n  max-width: 92%;\n  min-width: 92%;\n  opacity: 0.9;\n  top: 450px;\n  margin-right: 8px;\n  left: 56px;\n}\n\n.selectMenuBtn:hover {\n  background-color: #000000; \n  color: white;\n}\n\n.manageWait{\n  position: absolute;\n  top:10%;\n  left : 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRsaXN0LWVudHJ5L3dhaXRsaXN0LWVudHJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1Q0FBOEQ7RUFDOUQsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7O0NBRTVCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTs7QUFFZDs7QUFDQTtFQUNFLGdCQUFnQjtJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHlCQUF5QjtJQUN6Qiw0RUFBNEU7RUFDOUUsb0ZBQW9GO0VBQ3BGLGlGQUFpRjtFQUNqRixrQkFBa0I7QUFDcEI7O0FBRUE7O0dBRUcsdUJBQXVCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLDRFQUE0RTtFQUM5RSxvRkFBb0Y7RUFDcEYsaUZBQWlGO0VBQ2pGLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7O0VBRWI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0IsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7O0VBRWxCLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsVUFBVTtBQUNaIiwiZmlsZSI6IndhaXRsaXN0LWVudHJ5L3dhaXRsaXN0LWVudHJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmFkZWRUYWJsZS5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gIFxuIH1cblxuLmJyYW5kX2xvZ29fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHRvcDogMTBweDtcbiAgbGVmdCA6IDYyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gXG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5icmFuZF9sb2dvIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDExMHB4O1xuICBcbn1cbi53YWl0bGlzdC1lbnRyeS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDU2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE5MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmN1c3RvbWVyLXdhaXRsaXN0LWluZm9ybWF0aW9uLWNhcmQge1xuXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDsgXG4gICAgd2lkdGggOiA0MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTkwcHg7XG4gICAgcmlnaHQ6IDYwcHg7IFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgfVxuXG4gICNhZGRCdG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDYwJTtcbiAgb3BhY2l0eTogMC45O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogNTcwcHg7XG4gICAgXG59XG5cblxuI2FkZEJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7IFxuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zZWxlY3RNZW51QnRue1xuXHRcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDkyJTtcbiAgbWluLXdpZHRoOiA5MiU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdG9wOiA0NTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG5cbi5zZWxlY3RNZW51QnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hbmFnZVdhaXR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjEwJTtcbiAgbGVmdCA6IDkwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/waitlist-entry/waitlist-entry.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/waitlist-entry/waitlist-entry.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand_logo_container\">\n  <img src=\"../assets/images/LOGO.png\" class=\"brand_logo\" alt=\"Logo\">\n</div>\n<br><br>\n<h2>{{restaurantName}}</h2>\n\n<div class=\"waitlist-entry-card\" style=\"width: 80rem;\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\"><b>Add to waitlist</b> </h4>\n    <form>\n      <div class=\"input-group input-group-lg\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"><i class=\"fas fa-user\"></i></span>\n        </div>\n        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Full name\">\n      </div>\n      <br>\n      <div class=\"input-group input-group-lg\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"><i class=\"fas fa-mobile-alt\"></i></span>\n        </div>\n        <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone number\">\n      </div>\n      <br>\n      <div class=\"input-group input-group-lg\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"><i class=\"fas fa-envelope\"></i></span>\n        </div>\n        <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n      </div><br>\n      <div class=\"input-group input-group-lg\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"><i class=\"fa fa-user-friends\"></i></span>\n        </div>\n        <input type=\"text\" class=\"form-control\" id=\"group\" placeholder=\"Group size\">\n      </div>\n      <br>\n\n    </form>\n\n    <button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addBtn\"\n      (click)=\"addToWaitlist(restaurantId)\">Submit</button>\n\n  </div>\n</div>\n\n<div class=\"customer-waitlist-information-card\" style=\"width: 40rem;\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\"><b>Your waitlist information </b> <span class=\"glyphicon glyphicon-info-sign\"></span></h4>\n    <div [hidden]=\"!show\">\n      <b>Name : </b> <span id=\"bookedName\">{{name}}</span> <br><br>\n      <b>Group size : </b> <span id=\"groupSize\">{{groupSize}}</span>\n      <br><br>\n      <b>Booking time: </b><span id=\"addedTime\"></span> <br><br>\n      <b>Approximate wait time : </b><span id=\"waitTime\"></span><br><br>\n      <button type=\"button\" class=\"btn btn-dark mr-2\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n        Edit<i class=\"fas fa-edit\"></i>\n      </button>\n      <button type=\"button\" class=\"btn btn-dark mr-2\" (click)=\"deleteFromWaitList(restaurantId,queueID)\">\n        Delete <i class=\"fas fa-trash-alt\"></i>\n      </button>\n    </div>\n    <div [hidden]=\"show\">\n      <p style=\"color:grey;padding:10px;\">\n        \"Add yourself to waitlist to monitor your status.\"\n      </p>\n    </div>\n\n  </div>\n</div>\n\n<br>\n<button class=\"selectMenuBtn\" mat-raised-button color=\"warn\" routerLink=\"/menu/{{restaurantId}}\">MENU</button>\n\n<div style=\"text-align: center\" class=\"manageWait\"><br><br>\n  <a routerLink=\"/managewaitlist\"><img style=\"width: 50px;height: 50px;\"\n      src=\"../assets/images/admin2.png\"></a>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit group size</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <input type=\"text\" id=\"newGroup\" placeholder=\"New group size\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editWaitList(restaurantId,queueID)\"\n          data-dismiss=\"modal\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
    function WaitlistEntryComponent(document, waitlistservice, restaurantSerice, route) {
        var _this = this;
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
            //this.waitlistservice.getWaitlist(this.restaurantId).subscribe(waitlistItems => {
            //var count = Object.keys(waitlistItems).length;
            //console.log(count.valueOf());
            //this.queueID = count.valueOf() + 1;
            //console.log(this.queueID);
            //return count;
            //});
        });
    }
    WaitlistEntryComponent.prototype.ngOnInit = function () {
    };
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
        // extract the date and time seperately from the booking time.
        var date = this.bookingTime.getFullYear() + '-' + (this.bookingTime.getMonth() + 1) + '-' + this.bookingTime.getDate();
        var time = this.bookingTime.getHours() + ":" + this.bookingTime.getMinutes() + ":" + this.bookingTime.getSeconds();
        document.getElementById('addedTime').innerHTML = date + ' ' + time;
        document.getElementById('waitTime').innerHTML = String((this.queueID - 1) * 5) + 'mins';
        $(':input').val('');
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
        return hash;
    };
    WaitlistEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-waitlist-entry',
            template: __webpack_require__(/*! ./waitlist-entry.component.html */ "./src/app/components/waitlist-entry/waitlist-entry.component.html"),
            styles: [__webpack_require__(/*! ./waitlist-entry.component.css */ "./src/app/components/waitlist-entry/waitlist-entry.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _services_waitlist_service__WEBPACK_IMPORTED_MODULE_2__["WaitlistService"],
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
    apiUrl: 'https://waytlessv1.azurewebsites.net/'
    /**for deploying on azure  */
    //apiUrl:''
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

module.exports = __webpack_require__(/*! /Users/sowmya/Desktop/spring@2019/SAAS/Waytless/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map