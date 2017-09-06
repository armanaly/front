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
var core_1 = require('@angular/core');
var grid_service_1 = require("../grid.service");
var router_1 = require('@angular/router');
var step_service_1 = require("../../Engine/step.service");
var http_1 = require("@angular/http");
var balletDetails_service_1 = require("./balletDetails.service");
var BalletDetailsComponent = (function () {
    function BalletDetailsComponent(_stepService, _gridService, router, _balletDetailsService, route, _http) {
        this._stepService = _stepService;
        this._gridService = _gridService;
        this.router = router;
        this._balletDetailsService = _balletDetailsService;
        this.route = route;
        this._http = _http;
        this.list_options = [];
        this.display = false;
        this.details = false;
        this.images_to_show = false;
    }
    BalletDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.obj_id = params['record'];
        });
        console.log(this.obj_id);
        this._balletDetailsService.getDatas(this.obj_id)
            .subscribe(function (data) {
            console.log(data);
            _this.record_details = data;
            _this.display = true;
        }, function (error) { return console.log(error); });
    };
    BalletDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BalletDetailsComponent.prototype.goToCurrentStep = function (item) {
        console.log(item);
        var navigationExtras = {
            queryParams: { 'current_id': item.step_id, '_id': item._id }
        };
        this.router.navigate(['/step'], navigationExtras);
    };
    BalletDetailsComponent.prototype.isObject = function (item) {
        return (typeof item === "object" && !Array.isArray(item) && item !== null);
    };
    BalletDetailsComponent = __decorate([
        core_1.Component({
            selector: 'grid-details',
            template: "\n              <style type=\"text/css\">\n.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}\n.tg td{font-family:Arial, sans-serif;font-size:16px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;border-top-width:1px;border-bottom-width:1px;}\n.tg th{font-family:Arial, sans-serif;font-size:16px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;border-top-width:1px;border-bottom-width:1px;}\n.tg .tg-bn4o{font-weight:bold;font-size:18px;text-align:center;vertical-align:top}\n.tg .tg-txgi{font-weight:bold;font-family:\"Trebuchet MS\", Helvetica, sans-serif !important;;background-color:#efefef;vertical-align:top}\n.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}\n.tg .tg-qjv7{background-color:#D2E4FC;font-size:18px;vertical-align:top}\n.tg .tg-yw4l{vertical-align:top}\n.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}\n@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}</style>\n              \n        <div class=\"panel-heading panel-heading-custom\" *ngIf=\"display\">\n            <div  class=\"row\" align=\"left\">\n                <div class=\"col-md-2\">\n                   <nav class=\"form-navArrow\" *ngIf=\"display\">\n                        <a [routerLink]=\"['/grid']\" [queryParams]=\"{'grid_name': record_details.course_type, 'master': record_details.stage}\">\n                        <button class=\"btn btn-warning\"><i class=\"glyphicon glyphicon-triangle-left\" ></i>BACK</button></a>\n                   </nav>\n                </div>\n            <div class=\"col-md-10\" align=\"center\">\n                <h2><b class=\"text-uppercase\">{{record_details.profile[0].nom}}</b> {{record_details.profile[1].firstname}} </h2>\n            </div>\n        </div>\n       </div>\n  \n  <div class=\"panel-body\" *ngIf=\"display\">\n\n       \n  <!-- Nav tabs -->\n  <!--<ul class=\"nav nav-tabs\" role=\"tablist\">-->\n    <!--<li role=\"presentation\" class=\"active\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Details</a></li>-->\n    <!--<li role=\"presentation\"><a href=\"#registration\" aria-controls=\"registration\" role=\"tab\" data-toggle=\"tab\">Registration</a></li>-->\n    <!--<li role=\"presentation\"><a href=\"#notes\" aria-controls=\"notes\" role=\"tab\" data-toggle=\"tab\">Notes</a></li>-->\n    <!---->\n    <!--&lt;!&ndash;<li role=\"presentation\"><a href=\"#photos\" aria-controls=\"photos\" role=\"tab\" data-toggle=\"tab\"  *ngIf=\"images_to_show\">Photos</a></li>&ndash;&gt;-->\n    <!--&lt;!&ndash;<li role=\"presentation\"><a href=\"#admin\" aria-controls=\"admin\" role=\"tab\" data-toggle=\"tab\">D\u00E9tails administratifs</a></li>&ndash;&gt;-->\n    <!--&lt;!&ndash;<li role=\"presentation\"><a href=\"#tech\" aria-controls=\"tech\" role=\"tab\" data-toggle=\"tab\">Caract\u00E9ristiques techniques</a></li>&ndash;&gt;-->\n  <!--</ul>-->\n                  <!---->\n        <!--<div class=\"tab-content\" >  -->\n            \n            <!-- TAB ALL INFOS -->\n            <!--<div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">-->\n                 \n                <div >\n                    <table class=\"tg\">\n                      <tr>\n                        <td class=\"tg-txgi\">Birthday</td>\n                        <td class=\"tg-6k2t\">{{record_details.dob}}</td>\n                        <td class=\"tg-txgi\">Age</td>\n                        <td class=\"tg-6k2t\">{{record_details.age}}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"tg-txgi\">Country</td>\n                        <td class=\"tg-6k2t\">{{record_details.profile[4].country}}</td>\n                        <td class=\"tg-txgi\">City</td>\n                        <td class=\"tg-6k2t\">{{record_details.profile[5].city}}</td>\n                      </tr>\n                      <!--<tr>-->\n                        <!--<td class=\"tg-txgi\">BECA</td>-->\n                        <!--<td class=\"tg-6k2t\">{{record_details.BECA}}</td>-->\n                        <!--<td class=\"tg-txgi\">DNI</td>-->\n                        <!--<td class=\"tg-6k2t\">{{record_details.DNI}}</td>-->\n                      <!--</tr>-->\n                      <tr>\n                        <td class=\"tg-txgi\">Phone 1</td>\n                        <td class=\"tg-6k2t\">{{record_details.profile[2].phone}}</td>\n                        <td class=\"tg-txgi\">Phone 2</td>\n                        <td class=\"tg-6k2t\">{{record_details.phone2}}</td>\n                        <!--<th class=\"tg-yw4l\" colspan=\"2\"><span class=\"glyphicon glyphicon-earphone\"> {{record_details.profile[2].phone}}</span></th>-->\n                        <!--<th class=\"tg-yw4l\"  colspan=\"2\"><span class=\"glyphicon glyphicon-envelope\"> {{record_details.profile[3].email}}</span></th>-->\n                      </tr>\n                      <tr>\n                        <td class=\"tg-txgi\">Email 1</td>\n                        <td class=\"tg-6k2t\">{{record_details.profile[3].email}}</td>\n                        <td class=\"tg-txgi\">Email 2</td>\n                        <td class=\"tg-6k2t\">{{record_details.email2}}</td>\n                        <!--<th class=\"tg-yw4l\" colspan=\"2\">(2) <span class=\"glyphicon glyphicon-earphone\"></span> <span>{{record_details.phone2}}</span></th>-->\n                        <!--<th class=\"tg-yw4l\" colspan=\"2\">(2) <span class=\"glyphicon glyphicon-envelope\"></span><span>{{record_details.email2}}</span></th>-->\n                      </tr>\n                     \n                  \n                    <!--</table>-->\n                <!--</div>-->\n                <!--</div>-->\n            <!---->\n             <!--&lt;!&ndash; REGISTRATION &ndash;&gt;-->\n            <!--<div role=\"tabpanel\" class=\"tab-pane\" id=\"registration\" >-->\n                 <!--<div class=\"tg-wrap\">-->\n                    <!--<table class=\"tg\">-->\n                      <tr>\n                        <td class=\"tg-txgi\">Course</td>\n                        <td class=\"tg-6k2t\">{{record_details.course_type}}</td>\n                        <td class=\"tg-txgi\">Group</td>\n                        <td class=\"tg-6k2t\">{{record_details.group}}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"tg-txgi\">Duration</td>\n                        <td class=\"tg-6k2t\">{{record_details.duration}}</td>\n                        <td class=\"tg-txgi\">Residence</td>\n                        <td class=\"tg-6k2t\">{{record_details.residence}}</td>\n                      \n                      </tr>\n                      <tr>\n                        <td class=\"tg-txgi\">BECA</td>\n                        <td class=\"tg-6k2t\">{{record_details.BECA}}</td>\n                        <td class=\"tg-txgi\">DNI</td>\n                        <td class=\"tg-6k2t\">{{record_details.DNI}}</td>\n                      </tr>\n                      <tr *ngIf=\"record_details.course_type == 'Professional'\">\n                        <td class=\"tg-txgi\" >Audition place</td>\n                        <td class=\"tg-6k2t\" >{{record_details.audition}}</td>\n                      </tr>\n                      <tr> \n                        <td colspan=\"1\" class=\"tg-txgi\">Notes</td>\n                        <td colspan=\"3\">\n                            <textarea disabled rows=\"15\" cols=\"100\">\n                                {{record_details.notes }}\n                            </textarea>        \n                        \n                        </td>\n                      </tr>\n                       \n                        \n                      </table>\n                      </div>\n            <!--</div>   -->\n                <!---->\n                </div>\n            <!-- NOTES -->\n            <!--<div role=\"tabpanel\" class=\"tab-pane\" id=\"notes\" >-->\n                <!--<textarea rows=\"100\" cols=\"500\">-->\n                    <!--{{record_details.age }}-->\n                <!--</textarea>-->\n            <!--</div>-->\n            <!---->\n\n        <!--</div>-->\n            <!---->\n\n    <!--</div>-->\n"
        }), 
        __metadata('design:paramtypes', [step_service_1.StepService, grid_service_1.GridPanelService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, balletDetails_service_1.BalletDetailsService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
    ], BalletDetailsComponent);
    return BalletDetailsComponent;
    var _a, _b, _c;
}());
exports.BalletDetailsComponent = BalletDetailsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L2JhbGxldERldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUNwRSw2QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSw2QkFBMEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN0RCxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFFbkMsc0NBQW1DLHlCQUF5QixDQUFDLENBQUE7QUFxSjdEO0lBR0ksZ0NBQW9CLFlBQXlCLEVBQVUsWUFBOEIsRUFBVSxNQUFjLEVBQ3pGLHFCQUEyQyxFQUFTLEtBQXFCLEVBQVUsS0FBVztRQUQ5RixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDekYsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUtsSCxpQkFBWSxHQUFFLEVBQUUsQ0FBQztRQUVqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFWNkYsQ0FBQztJQVlySCx5Q0FBUSxHQUFSO1FBQUEsaUJBc0JDO1FBckJHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN6QyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUduQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRXZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUMzQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUUzQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUd4QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFBO0lBSVQsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxnREFBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtTQUUvRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx5Q0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNULE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUEzTUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLGsxUUErSWI7U0FDQSxDQUFDOzs4QkFBQTtJQWlFRiw2QkFBQzs7QUFBRCxDQS9EQSxBQStEQyxJQUFBO0FBL0RZLDhCQUFzQix5QkErRGxDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9iYWxsZXQvYmFsbGV0RGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtHcmlkRGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuLi9ncmlkRGV0YWlscy5zZXJ2aWNlXCI7XG5pbXBvcnQge0JhbGxldERldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi9iYWxsZXREZXRhaWxzLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ3JpZC1kZXRhaWxzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XG4udGcgIHtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sb3I6Izk5OTt9XG4udGcgdGR7Zm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7cGFkZGluZzoxMHB4IDVweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjBweDtvdmVyZmxvdzpoaWRkZW47d29yZC1icmVhazpub3JtYWw7Ym9yZGVyLWNvbG9yOiM5OTk7Y29sb3I6IzQ0NDtiYWNrZ3JvdW5kLWNvbG9yOiNGN0ZERkE7Ym9yZGVyLXRvcC13aWR0aDoxcHg7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHg7fVxuLnRnIHRoe2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0Om5vcm1hbDtwYWRkaW5nOjEwcHggNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MHB4O292ZXJmbG93OmhpZGRlbjt3b3JkLWJyZWFrOm5vcm1hbDtib3JkZXItY29sb3I6Izk5OTtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzI2QURFNDtib3JkZXItdG9wLXdpZHRoOjFweDtib3JkZXItYm90dG9tLXdpZHRoOjFweDt9XG4udGcgLnRnLWJuNG97Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MThweDt0ZXh0LWFsaWduOmNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjp0b3B9XG4udGcgLnRnLXR4Z2l7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpcIlRyZWJ1Y2hldCBNU1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgIWltcG9ydGFudDs7YmFja2dyb3VuZC1jb2xvcjojZWZlZmVmO3ZlcnRpY2FsLWFsaWduOnRvcH1cbi50ZyAudGctNmsydHtiYWNrZ3JvdW5kLWNvbG9yOiNEMkU0RkM7dmVydGljYWwtYWxpZ246dG9wfVxuLnRnIC50Zy1xanY3e2JhY2tncm91bmQtY29sb3I6I0QyRTRGQztmb250LXNpemU6MThweDt2ZXJ0aWNhbC1hbGlnbjp0b3B9XG4udGcgLnRnLXl3NGx7dmVydGljYWwtYWxpZ246dG9wfVxuLnRnICB7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7Ym9yZGVyLWNvbG9yOiM5OTk7fVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsudGcge3dpZHRoOiBhdXRvICFpbXBvcnRhbnQ7fS50ZyBjb2wge3dpZHRoOiBhdXRvICFpbXBvcnRhbnQ7fS50Zy13cmFwIHtvdmVyZmxvdy14OiBhdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDt9fTwvc3R5bGU+XG4gICAgICAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiICpuZ0lmPVwiZGlzcGxheVwiPlxuICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiICpuZ0lmPVwiZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogcmVjb3JkX2RldGFpbHMuY291cnNlX3R5cGUsICdtYXN0ZXInOiByZWNvcmRfZGV0YWlscy5zdGFnZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPjwvYT5cbiAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMj48YiBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzBdLm5vbX19PC9iPiB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMV0uZmlyc3RuYW1lfX0gPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgXG4gIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgKm5nSWY9XCJkaXNwbGF5XCI+XG5cbiAgICAgICBcbiAgPCEtLSBOYXYgdGFicyAtLT5cbiAgPCEtLTx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+LS0+XG4gICAgPCEtLTxsaSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3M9XCJhY3RpdmVcIj48YSBocmVmPVwiI2hvbWVcIiBhcmlhLWNvbnRyb2xzPVwiaG9tZVwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkRldGFpbHM8L2E+PC9saT4tLT5cbiAgICA8IS0tPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3JlZ2lzdHJhdGlvblwiIGFyaWEtY29udHJvbHM9XCJyZWdpc3RyYXRpb25cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5SZWdpc3RyYXRpb248L2E+PC9saT4tLT5cbiAgICA8IS0tPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI25vdGVzXCIgYXJpYS1jb250cm9scz1cIm5vdGVzXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+Tm90ZXM8L2E+PC9saT4tLT5cbiAgICA8IS0tLS0+XG4gICAgPCEtLSZsdDshJm5kYXNoOzxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNwaG90b3NcIiBhcmlhLWNvbnRyb2xzPVwicGhvdG9zXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgICpuZ0lmPVwiaW1hZ2VzX3RvX3Nob3dcIj5QaG90b3M8L2E+PC9saT4mbmRhc2g7Jmd0Oy0tPlxuICAgIDwhLS0mbHQ7ISZuZGFzaDs8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjYWRtaW5cIiBhcmlhLWNvbnRyb2xzPVwiYWRtaW5cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Ew6l0YWlscyBhZG1pbmlzdHJhdGlmczwvYT48L2xpPiZuZGFzaDsmZ3Q7LS0+XG4gICAgPCEtLSZsdDshJm5kYXNoOzxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiN0ZWNoXCIgYXJpYS1jb250cm9scz1cInRlY2hcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5DYXJhY3TDqXJpc3RpcXVlcyB0ZWNobmlxdWVzPC9hPjwvbGk+Jm5kYXNoOyZndDstLT5cbiAgPCEtLTwvdWw+LS0+XG4gICAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIiA+ICAtLT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBUQUIgQUxMIElORk9TIC0tPlxuICAgICAgICAgICAgPCEtLTxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cImhvbWVcIj4tLT5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkJpcnRoZGF5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLmRvYn19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5BZ2U8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuYWdlfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkNvdW50cnk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVs0XS5jb3VudHJ5fX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkNpdHk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVs1XS5jaXR5fX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCI+QkVDQTwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuQkVDQX19PC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCI+RE5JPC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5ETkl9fTwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPlBob25lIDE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVsyXS5waG9uZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5QaG9uZSAyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnBob25lMn19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGggY2xhc3M9XCJ0Zy15dzRsXCIgY29sc3Bhbj1cIjJcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmVcIj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzJdLnBob25lfX08L3NwYW4+PC90aD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGggY2xhc3M9XCJ0Zy15dzRsXCIgIGNvbHNwYW49XCIyXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXCI+IHt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVszXS5lbWFpbH19PC9zcGFuPjwvdGg+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+RW1haWwgMTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzNdLmVtYWlsfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkVtYWlsIDI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuZW1haWwyfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLXl3NGxcIiBjb2xzcGFuPVwiMlwiPigyKSA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmVcIj48L3NwYW4+IDxzcGFuPnt7cmVjb3JkX2RldGFpbHMucGhvbmUyfX08L3NwYW4+PC90aD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGggY2xhc3M9XCJ0Zy15dzRsXCIgY29sc3Bhbj1cIjJcIj4oMikgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXCI+PC9zcGFuPjxzcGFuPnt7cmVjb3JkX2RldGFpbHMuZW1haWwyfX08L3NwYW4+PC90aD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvdGFibGU+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7IFJFR0lTVFJBVElPTiAmbmRhc2g7Jmd0Oy0tPlxuICAgICAgICAgICAgPCEtLTxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZVwiIGlkPVwicmVnaXN0cmF0aW9uXCIgPi0tPlxuICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInRnLXdyYXBcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0YWJsZSBjbGFzcz1cInRnXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkNvdXJzZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5jb3Vyc2VfdHlwZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Hcm91cDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5ncm91cH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5EdXJhdGlvbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5kdXJhdGlvbn19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5SZXNpZGVuY2U8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMucmVzaWRlbmNlfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkJFQ0E8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuQkVDQX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5ETkk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuRE5JfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuY291cnNlX3R5cGUgPT0gJ1Byb2Zlc3Npb25hbCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIiA+QXVkaXRpb24gcGxhY2U8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiID57e3JlY29yZF9kZXRhaWxzLmF1ZGl0aW9ufX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMVwiIGNsYXNzPVwidGctdHhnaVwiPk5vdGVzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBkaXNhYmxlZCByb3dzPVwiMTVcIiBjb2xzPVwiMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVjb3JkX2RldGFpbHMubm90ZXMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLTwvZGl2PiAgIC0tPlxuICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gTk9URVMgLS0+XG4gICAgICAgICAgICA8IS0tPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJub3Rlc1wiID4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPHRleHRhcmVhIHJvd3M9XCIxMDBcIiBjb2xzPVwiNTAwXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS17e3JlY29yZF9kZXRhaWxzLmFnZSB9fS0tPlxuICAgICAgICAgICAgICAgIDwhLS08L3RleHRhcmVhPi0tPlxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgPCEtLS0tPlxuXG4gICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgIDwhLS0tLT5cblxuICAgIDwhLS08L2Rpdj4tLT5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCYWxsZXREZXRhaWxzQ29tcG9uZW50IHtcblxuICAgIC8vIHJvdXRlciA9IG5ldyBSb3V0ZXI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9iYWxsZXREZXRhaWxzU2VydmljZTogQmFsbGV0RGV0YWlsc1NlcnZpY2UscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cbiAgICByZWNvcmRfZGV0YWlscztcbiAgICB0ZWNoX2RldGFpbHM7XG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBvYmpfaWQ7XG4gICAgbGlzdF9vcHRpb25zPSBbXTtcblxuICAgIGRpc3BsYXkgPSBmYWxzZTtcbiAgICBkZXRhaWxzID0gZmFsc2U7XG5cbiAgICBpbWFnZXNfdG9fc2hvdyA9IGZhbHNlO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLm9ial9pZCA9IHBhcmFtc1sncmVjb3JkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxuXG4gICAgICAgICAgICAvLyBJbiBhIHJlYWwgYXBwOiBkaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCB0aGUgZGV0YWlscyBoZXJlLlxuICAgICAgICB9KTtcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ial9pZClcblxuICAgICAgICB0aGlzLl9iYWxsZXREZXRhaWxzU2VydmljZS5nZXREYXRhcyh0aGlzLm9ial9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkX2RldGFpbHMgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XG5cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICApXG5cblxuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGdvVG9DdXJyZW50U3RlcChpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2N1cnJlbnRfaWQnOiBpdGVtLnN0ZXBfaWQsICdfaWQnOiBpdGVtLl9pZCB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgIH1cblxuICAgIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG5cblxuXG5cblxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
