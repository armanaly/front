"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
require('rxjs/Rx');
const Observable_1 = require("rxjs/Observable");
const global_1 = require("../global");
let PhotosService = class PhotosService {
    constructor(_http) {
        this._http = _http;
    }
    upload(photo) {
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'load_image';
        console.log(photo);
        console.log("apres body");
        return this._http.post(completeUrl, photo)
            .map(response => response.json())
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
PhotosService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
], PhotosService);
exports.PhotosService = PhotosService;
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3Rvcy9waG90b3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELHVCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLHlCQUE2QixXQUFXLENBQUMsQ0FBQTtBQUl6QztJQUdJLFlBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUcsQ0FBQztJQUVwQyxNQUFNLENBQUMsS0FBSztRQUNSLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFDLFlBQVksQ0FBQztRQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBS2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFHMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUM7YUFDcEMsR0FBRyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDaEMsS0FBSyxDQUFDLEtBQUssSUFBSSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBS3pELENBQUM7QUFFTCxDQUFDO0FBMUJEO0lBQUMsaUJBQVUsRUFBRTs7aUJBQUE7QUFDQSxxQkFBYSxnQkF5QnpCLENBQUEiLCJmaWxlIjoicGhvdG9zL3Bob3Rvcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGhvdG9zU2VydmljZSB7XG5cblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXG4gICAgdXBsb2FkKHBob3RvKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ2xvYWRfaW1hZ2UnO1xuICAgICAgIC8vIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICBjb25zb2xlLmxvZyhwaG90byk7XG4gICAgICAgLy8gdmFyIHRtcEltZyA9IHtcInBhdGhcIjogcGhvdG99O1xuICAgICAgICAvL2xldCBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodG1wSW1nKTtcbiAgICAgLy8gICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnN9KTtcbiAgICAgIC8vICBjb25zb2xlLmxvZyhib2R5U3RyaW5nKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhcHJlcyBib2R5XCIpO1xuXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgcGhvdG8pXG4gICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG5cblxuICAgICAgICAvLyAvL3JldHVybiB0aGlzLl9odHRwLmdldCgnc2VsbG15Y2FyZmFzdC5oZXJva3VhcHAuY29tL21hcnF1ZScpXG4gICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
