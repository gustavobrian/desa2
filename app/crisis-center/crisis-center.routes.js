"use strict";
var crisis_detail_component_1 = require('./crisis-detail.component');
var crisis_list_component_1 = require('./crisis-list.component');
var crisis_center_component_1 = require('./crisis-center.component');
var crisis_admin_component_1 = require('./crisis-admin.component');
var interfaces_1 = require('../interfaces');
var auth_guard_1 = require('../auth.guard');
exports.CrisisCenterRoutes = [
    {
        path: '/crisis-center',
        component: crisis_center_component_1.CrisisCenterComponent,
        index: true,
        children: [
            {
                path: '/admin',
                component: crisis_admin_component_1.CrisisAdminComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: '/:id',
                component: crisis_detail_component_1.CrisisDetailComponent,
                canDeactivate: [interfaces_1.CanDeactivateGuard]
            },
            { path: '/',
                component: crisis_list_component_1.CrisisListComponent,
                index: true
            }
        ]
    }
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis-center.routes.js.map