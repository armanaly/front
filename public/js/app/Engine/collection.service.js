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
const step_service_1 = require("./step.service");
const form_service_1 = require("../components/form.service");
let CollectionService = class CollectionService {
    constructor(_http, _formService, _stepService) {
        this._http = _http;
        this._formService = _formService;
        this._stepService = _stepService;
    }
    getFormData(_id, collName, filters, select) {
        let filtersNameToString = [];
        let filtersValueToString = [];
        for (let i = 0; i < filters.length; i++) {
            filtersNameToString.push(filters[i].field);
            filtersValueToString.push(this.getValueSelected(filters[i].step_id));
        }
        var query = '_id=' + _id + '&collName=' + collName + '&filters_name=' + filtersNameToString + '&filters_value=' + filtersValueToString;
        let completeUrl = global_1.GlobalVariable.BASE_URL + 'getFormData?' + query;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(completeUrl)
            .map((response) => response.json())
            .catch((error) => Observable_1.Observable.throw(error.json()));
    }
    getDatas(collName, filters, select, type) {
        var filtersNameToString = [];
        var filtersValueToString = [];
        console.log(filters);
        console.log("FIELD FILTER SIZE");
        console.log(filters);
        console.log(select);
        let query = 'col_name=' + collName + '&return_type=' + type;
        if (filters.length > 0) {
            for (var i = 0; i < filters.length; i++) {
                filtersNameToString.push(filters[i].field);
                filtersValueToString.push(encodeURIComponent(this.getValueSelected(filters[i].step_id)));
                console.log(filtersValueToString);
            }
            query = query + '&filters_name=' + filtersNameToString + '&filters_value=' + filtersValueToString;
        }
        else {
            query = query + '&filters_name=&filters_value=';
        }
        if (select != '') {
            query = query + '&select=' + select;
        }
        let completeUrl = global_1.GlobalVariable.BASE_URL + 'custom_collection?' + query;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        console.log('before GET');
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => response.json())
            .catch(error => Observable_1.Observable.throw(error));
    }
    getValueSelected(stepId) {
        console.log(this._formService);
        console.log(this._stepService);
        for (var item of this._stepService.steps) {
            if (item.step_id == stepId) {
                var valueForFormService = item.configuration.form_value.name;
            }
        }
        console.log(valueForFormService);
        for (var item of this._formService.arraySteps) {
            if (typeof eval('item.' + valueForFormService) != 'undefined') {
                return eval('item.' + valueForFormService);
            }
        }
    }
    extractData(res) {
        let body = res.json();
        return body.data || {};
    }
};
CollectionService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, form_service_1.FormService, step_service_1.StepService])
], CollectionService);
exports.CollectionService = CollectionService;
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSx1QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiw2QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUk3Qyx5QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MsK0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsK0JBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFHdkQ7SUFFSyxZQUFxQixLQUFXLEVBQVUsWUFBeUIsRUFBVSxZQUF5QjtRQUFqRixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFHLENBQUM7SUFNM0csV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU07UUFDdEMsSUFBSSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFFRCxJQUFJLEtBQUssR0FBRyxNQUFNLEdBQUUsR0FBRyxHQUFHLFlBQVksR0FBRyxRQUFRLEdBQUcsZ0JBQWdCLEdBQUcsbUJBQW1CLEdBQUcsaUJBQWlCLEdB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bGUiOiJFbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycywgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5cbi8vIGltcG9ydCB7IE1hcnF1ZSB9IGZyb20gXCIuL21hcnF1ZVwiO1xuaW1wb3J0IHsgR2xvYmFsVmFyaWFibGUgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tIFwidXJsXCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvblNlcnZpY2UgeyBcblxuICAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLCBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UpIHt9XG4gICAgLypcbiAgICAgICAgUEFSQU1TOiBjb2xsTmFtZSAtLT4gTmFtZSBvZiB0aGUgY29sbGVjdGlvbiB3aGVyZSBhcmUgc3RvcmVkIHRoZSBkYXRhXG4gICAgICAgICAgICAgICAgZmlsdGVycyAgLS0+IE9iamVjdCB3aXRoIHRoZSBmaWx0ZXIgbmFtZSBhbmQgdGhlIHN0ZXBfaWQgd2hlcmUgaXMgc3RvcmVkIHRoZSB2YWx1ZSBvZiB0aGUgZmlsdGVyXG4gICAgICAgICAgICAgICAgc2VsZWN0ICAgLS0+IFRoZSB2YWx1ZSB0aGF0IHdpbGwgYmUgcmV0cmlldmVkIGluIHRoZSBjb2xsZWN0aW9uIGFuZCBkaXNwbGF5ZWQgb24gdGhlIHNjcmVlblxuICAgICAqL1xuICAgIGdldEZvcm1EYXRhKF9pZCwgY29sbE5hbWUsIGZpbHRlcnMsIHNlbGVjdCl7XG4gICAgICAgIGxldCBmaWx0ZXJzTmFtZVRvU3RyaW5nID0gW107XG4gICAgICAgIGxldCBmaWx0ZXJzVmFsdWVUb1N0cmluZyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IGZpbHRlcnMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgZmlsdGVyc05hbWVUb1N0cmluZy5wdXNoKGZpbHRlcnNbaV0uZmllbGQpO1xuICAgICAgICAgICAgZmlsdGVyc1ZhbHVlVG9TdHJpbmcucHVzaCh0aGlzLmdldFZhbHVlU2VsZWN0ZWQoZmlsdGVyc1tpXS5zdGVwX2lkKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcXVlcnkgPSAnX2lkPScgK19pZCArICcmY29sbE5hbWU9JyArIGNvbGxOYW1lICsgJyZmaWx0ZXJzX25hbWU9JyArIGZpbHRlcnNOYW1lVG9TdHJpbmcgKyAnJmZpbHRlcnNfdmFsdWU9JyArIGZpbHRlcnNWYWx1ZVRvU3RyaW5nO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZVVybCA9ICBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsnZ2V0Rm9ybURhdGE/JytxdWVyeTtcbiAgICAgICAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlICh0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcbiAgICAgICAgLy8gIGxldCBib2R5ID0geyBcImZpbHRlcnNcIjogZmlsdGVycywgXCJjb2xsTmFtZVwiIDogY29sbE5hbWV9O1xuICAgICAgICBsZXQgaGVhZGVycz0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSA6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBSZXNwb25zZSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKVxuXG5cblxuXG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcbiAgICAgICAgLy8gICAgIC50b1Byb21pc2UoKVxuICAgICAgICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT5yZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXG5cbiAgICB9XG5cbiAgICBnZXREYXRhcyhjb2xsTmFtZSwgZmlsdGVycywgc2VsZWN0LCB0eXBlKSB7XG4gICAgICAgIHZhciBmaWx0ZXJzTmFtZVRvU3RyaW5nID0gW11cbiAgICAgICAgdmFyIGZpbHRlcnNWYWx1ZVRvU3RyaW5nID0gW11cbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVycyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklFTEQgRklMVEVSIFNJWkVcIilcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVycyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdCk7XG4gICAgICAgIGxldCBxdWVyeSA9ICdjb2xfbmFtZT0nICsgY29sbE5hbWUgKyAnJnJldHVybl90eXBlPScgKyB0eXBlXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDAgKSB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZpbHRlcnNOYW1lVG9TdHJpbmcucHVzaChmaWx0ZXJzW2ldLmZpZWxkKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXJzVmFsdWVUb1N0cmluZy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFZhbHVlU2VsZWN0ZWQoZmlsdGVyc1tpXS5zdGVwX2lkKSkpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyc1ZhbHVlVG9TdHJpbmcpO1xuICAgICAgICAgICAgICAgIC8vIGZpbHRlcnNWYWx1ZVRvU3RyaW5nLnB1c2goJ0FVREknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZm9yICh2YXIgaT0wOyBpPCBmaWx0ZXJzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIC8vICAgICBmb3IgKHZhciBqPTA7IGk8IGZpbHRlcnNbal0uZmllbGQubGVuZ3RoO2orKykge1xuICAgICAgICAgICAgLy8gICAgICAgICBmaWx0ZXJzTmFtZVRvU3RyaW5nLnB1c2goZmlsdGVyc1tpXS5maWVsZFtqXSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZpbHRlcnNWYWx1ZVRvU3RyaW5nLnB1c2godGhpcy5nZXRWYWx1ZVNlbGVjdGVkKGZpbHRlcnNbaV0uc3RlcF9pZFtqXSkpO1xuICAgICAgICAgICAgLy8gICAgIH1cblxuXG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5ICsgJyZmaWx0ZXJzX25hbWU9JyArIGZpbHRlcnNOYW1lVG9TdHJpbmcgKyAnJmZpbHRlcnNfdmFsdWU9JyArIGZpbHRlcnNWYWx1ZVRvU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5ICsgJyZmaWx0ZXJzX25hbWU9JmZpbHRlcnNfdmFsdWU9JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3QgIT0gJycpe1xuICAgICAgICAgICAgcXVlcnkgPSBxdWVyeSArICcmc2VsZWN0PScgKyBzZWxlY3Q7XG4gICAgICAgIH1cbiAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJzVG9TdHJpbmcpO1xuICAgICAgICBsZXQgY29tcGxldGVVcmwgPSAgR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ2N1c3RvbV9jb2xsZWN0aW9uPycrcXVlcnk7XG4gICAgICAgIC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcbiAgICAgIC8vICBsZXQgYm9keSA9IHsgXCJmaWx0ZXJzXCI6IGZpbHRlcnMsIFwiY29sbE5hbWVcIiA6IGNvbGxOYW1lfTtcbiAgICAgICAgbGV0IGhlYWRlcnM9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2JlZm9yZSBHRVQnKVxuICAgICAgICAvLyBsZXQgbXlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvL1xuICAgICAgICAvLyB9KVxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+cmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRWYWx1ZVNlbGVjdGVkKHN0ZXBJZCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlKTtcbiAgICAgICAgLy9SRVRSSUVWRSBJTiBTVEVQIENPTkZJRyBGSUxFIFRIRSBOQU1FIE9GIFNBVkVEIFZBTFVFIEZPUiBUSEUgU1BFQ0lGSUVEIFNURVBcbiAgICAgICAgZm9yICh2YXIgaXRlbSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwcykge1xuICAgICAgICAgICAgaWYgKGl0ZW0uc3RlcF9pZCA9PSBzdGVwSWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVGb3JGb3JtU2VydmljZSA9IGl0ZW0uY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codmFsdWVGb3JGb3JtU2VydmljZSk7XG4gICAgICAgIC8vIFJFVFVSTiBUSEUgQ09OVEVOVCBPRiBWQVJJQUJMRSBQSUNLRUQgVVAgSU4gU1RFUCBTRVJWSUNFXG4gICAgICAgIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBldmFsKCdpdGVtLicgKyB2YWx1ZUZvckZvcm1TZXJ2aWNlKSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmFsKCdpdGVtLicgKyB2YWx1ZUZvckZvcm1TZXJ2aWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZXR1cm4gdmFsdWVTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xuICAgICAgICByZXR1cm4gYm9keS5kYXRhIHx8IHsgfTtcbiAgICB9XG4gICAgfVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
