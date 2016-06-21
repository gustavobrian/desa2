"use strict";
var router_1 = require('@angular/router');
var crisis_center_routes_1 = require('./crisis-center/crisis-center.routes');
var heroes_routes_1 = require('./heroes/heroes.routes');
var login_routes_1 = require('./login.routes');
var interfaces_1 = require('./interfaces');
exports.routes = heroes_routes_1.HeroesRoutes.concat(login_routes_1.LoginRoutes, crisis_center_routes_1.CrisisCenterRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    login_routes_1.AUTH_PROVIDERS,
    interfaces_1.CanDeactivateGuard
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routes.js.map