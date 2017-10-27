"use strict";
var router_1 = require("@angular/router");
var main_component_1 = require('./components/main.component');
var grid_component_1 = require("./components/grid.component");
var menu_component_1 = require("./menu/menu.component");
var signup_component_1 = require("./auth/signup.component");
var balletDetails_component_1 = require("./components/ballet/balletDetails.component");
var group_component_1 = require("./components/ballet/group.component");
var student_component_1 = require("./components/ballet/student.component");
var APP_ROUTES = [
    { path: '', component: menu_component_1.MenuComponent },
    { path: 'home/:app', component: menu_component_1.MenuComponent },
    { path: 'step/:id', component: main_component_1.MainComponent },
    { path: 'step', component: main_component_1.MainComponent },
    { path: 'grid', component: grid_component_1.GridPanelComponent },
    { path: 'grid/:grid_name', component: grid_component_1.GridPanelComponent },
    { path: 'grid/:grid_name/:master_val/:app_name', component: grid_component_1.GridPanelComponent },
    { path: 'details/:record/:grid_name', component: balletDetails_component_1.BalletDetailsComponent },
    { path: 'auth/signup', component: signup_component_1.SignupComponent },
    { path: ':firstLoad', component: menu_component_1.MenuComponent },
    { path: 'groupManagement/:record/:course_type/:stage', component: group_component_1.GroupComponent },
    { path: 'editStudent/:record/:course_type/:stage', component: student_component_1.StudentComponent }
];
exports.ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQUVyRCwrQkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUkxRCwrQkFBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMvRCwrQkFBNEIsdUJBQXVCLENBQUMsQ0FBQTtBQUNwRCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUV4RCx3Q0FBcUMsNkNBQTZDLENBQUMsQ0FBQTtBQUNuRixnQ0FBNkIscUNBQXFDLENBQUMsQ0FBQTtBQUNuRSxrQ0FBK0IsdUNBQXVDLENBQUMsQ0FBQTtBQUV2RSxJQUFNLFVBQVUsR0FBVztJQUN2QixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLDhCQUFhLEVBQUc7SUFDckMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBQyw4QkFBYSxFQUFHO0lBQzlDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztJQUM1QyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7SUFDeEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxtQ0FBa0IsRUFBQztJQUM3QyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsbUNBQWtCLEVBQUM7SUFDeEQsRUFBQyxJQUFJLEVBQUUsdUNBQXVDLEVBQUUsU0FBUyxFQUFFLG1DQUFrQixFQUFDO0lBQzlFLEVBQUMsSUFBSSxFQUFFLDRCQUE0QixFQUFFLFNBQVMsRUFBRSxnREFBc0IsRUFBQztJQUN2RSxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7SUFDakQsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBQyw4QkFBYSxFQUFDO0lBQzdDLEVBQUMsSUFBSSxFQUFFLDZDQUE2QyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0lBQ2hGLEVBQUMsSUFBSSxFQUFFLHlDQUF5QyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQztDQUNqRixDQUFDO0FBRVcsZUFBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXMsIFJvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UGhvdG9zQ29tcG9uZW50fSBmcm9tIFwiLi9waG90b3MvcGhvdG9zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbnVwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0JhbGxldERldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L2JhbGxldERldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7R3JvdXBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L2dyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N0dWRlbnRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L3N0dWRlbnQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBBUFBfUk9VVEVTOiBSb3V0ZXMgPSBbXHJcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDpNZW51Q29tcG9uZW50ICB9LFxyXG4gICAge3BhdGg6ICdob21lLzphcHAnLCBjb21wb25lbnQ6TWVudUNvbXBvbmVudCAgfSxcclxuICAgIHtwYXRoOiAnc3RlcC86aWQnLCBjb21wb25lbnQ6IE1haW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICdzdGVwJywgY29tcG9uZW50OiBNYWluQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnZ3JpZCcsIGNvbXBvbmVudDogR3JpZFBhbmVsQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnZ3JpZC86Z3JpZF9uYW1lJywgY29tcG9uZW50OiBHcmlkUGFuZWxDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICdncmlkLzpncmlkX25hbWUvOm1hc3Rlcl92YWwvOmFwcF9uYW1lJywgY29tcG9uZW50OiBHcmlkUGFuZWxDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICdkZXRhaWxzLzpyZWNvcmQvOmdyaWRfbmFtZScsIGNvbXBvbmVudDogQmFsbGV0RGV0YWlsc0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJ2F1dGgvc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICc6Zmlyc3RMb2FkJywgY29tcG9uZW50Ok1lbnVDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICdncm91cE1hbmFnZW1lbnQvOnJlY29yZC86Y291cnNlX3R5cGUvOnN0YWdlJywgY29tcG9uZW50OiBHcm91cENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJ2VkaXRTdHVkZW50LzpyZWNvcmQvOmNvdXJzZV90eXBlLzpzdGFnZScsIGNvbXBvbmVudDogU3R1ZGVudENvbXBvbmVudH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBST1VUSU5HID0gUm91dGVyTW9kdWxlLmZvclJvb3QoQVBQX1JPVVRFUyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
