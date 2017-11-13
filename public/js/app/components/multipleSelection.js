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
var step_service_1 = require("../Engine/step.service");
var MultiSelectionComponent = (function () {
    function MultiSelectionComponent(_stepService) {
        this._stepService = _stepService;
        this.change = new core_1.EventEmitter();
    }
    MultiSelectionComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.listOfElements; _i < _a.length; _i++) {
            var datas = _a[_i];
            if (datas.name == this.objStep.name) {
                this.currentList = datas.list;
            }
        }
    };
    MultiSelectionComponent.prototype.onChooseVal = function ($event) {
        var addOption = true;
        for (var i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == event.target.value) {
                this.valuesSelected.splice(i, 1);
                addOption = false;
                break;
            }
        }
        if (addOption) {
            this.valuesSelected.push(event.target.value);
        }
    };
    ;
    MultiSelectionComponent.prototype.submit = function () {
        this.change.emit({
            valueName: this.objStep.configuration.form_value.name,
            valueSelected: this.valuesSelected,
            stepIdx: this.stepIdx
        });
    };
    MultiSelectionComponent.prototype.isSelected = function (option) {
        for (var i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == option) {
                return true;
            }
        }
        return false;
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "objStep", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "valueSelected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "stepIdx", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "listOfElements", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "valuesSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "change", void 0);
    MultiSelectionComponent = __decorate([
        core_1.Component({
            selector: 'multi-selection',
            template: "\n        <div>\n            <div class=\"panel-heading panel-heading-custom\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel}}</p> </div>\n            <div class=\"panel-body\" >\n                    <ul class=\"items\">\n                        <li *ngFor=\"let valeurList of currentList\">\n                            <button *ngIf=\"isSelected(valeurList) == false\" type=\"button\" \n                                    (click)=\"onChooseVal($event)\"  \n                                    value=\"{{valeurList}}\" \n                                    class=\"{{ _stepService.template.list_btn}}\">\n                            {{valeurList}}\n                            </button>\n                            <button *ngIf=\"isSelected(valeurList) == true\" type=\"button\" \n                                    (click)=\"onChooseVal($event)\"  \n                                    value=\"{{valeurList}}\" \n                                    class=\"btn btn-info-custom\">\n                            {{valeurList}}\n                            </button>\n                        </li>\n                    </ul>\n            </div>\n            <div align=\"center\">\n                <button *ngIf=\"_stepService.language == 'en'\" btn-default btn-lg (click)=\"submit()\">NEXT</button>\n                <button *ngIf=\"_stepService.language == 'es'\" btn-default btn-lg (click)=\"submit()\">PROXIMO</button>\n                <button *ngIf=\"_stepService.language == 'fr'\" btn-default btn-lg (click)=\"submit()\">SUIVANT</button>\n            </div>\n            <div *ngIf=\"_stepService.language == 'en' && objStep.configuration.foot_note && objStep.configuration.foot_note != ''\" [innerHTML] = \"objStep.configuration.foot_note\"></div> \n            <div *ngIf=\"_stepService.language == 'es' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_es != ''\" [innerHTML] = \"objStep.configuration.foot_note_es\"></div>\n            <div *ngIf=\"_stepService.language == 'fr' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_fr != ''\" [innerHTML] = \"objStep.configuration.foot_note_fr\"></div>\n        <div></div>\n        </div>\n"
        }), 
        __metadata('design:paramtypes', [step_service_1.StepService])
    ], MultiSelectionComponent);
    return MultiSelectionComponent;
}());
exports.MultiSelectionComponent = MultiSelectionComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBc0NuRDtJQVVJLGlDQUFxQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUhwQyxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFHWSxDQUFDO0lBQ25ELDBDQUFRLEdBQVI7UUFFSSxHQUFHLENBQUMsQ0FBYyxVQUFtQixFQUFuQixLQUFBLElBQUksQ0FBQyxjQUFjLEVBQW5CLGNBQW1CLEVBQW5CLElBQW1CLENBQUM7WUFBakMsSUFBSSxLQUFLLFNBQUE7WUFDVixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2xDLENBQUM7U0FDSjtJQUNMLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztRQUVyQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBQ0wsQ0FBQzs7SUFFRCx3Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixTQUFTLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDdEQsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ2xDLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsNENBQVUsR0FBVixVQUFXLE1BQU07UUFDYixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDOztJQWhERDtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7a0VBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7bUVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7bUVBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7MkRBQUE7SUEzQ2I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsdXFFQStCYjtTQUNBLENBQUM7OytCQUFBO0lBdURGLDhCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQXJEWSwrQkFBdUIsMEJBcURuQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG4vLyBDQU4gU0VMRUNUIE1PUkUgVEhBTiBPTkUgVkFMVUVcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ211bHRpLXNlbGVjdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fTwvcD4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzU2VsZWN0ZWQodmFsZXVyTGlzdCkgPT0gZmFsc2VcIiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgX3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc1NlbGVjdGVkKHZhbGV1ckxpc3QpID09IHRydWVcIiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIiBidG4tZGVmYXVsdCBidG4tbGcgKGNsaWNrKT1cInN1Ym1pdCgpXCI+TkVYVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCIgYnRuLWRlZmF1bHQgYnRuLWxnIChjbGljayk9XCJzdWJtaXQoKVwiPlBST1hJTU88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiIGJ0bi1kZWZhdWx0IGJ0bi1sZyAoY2xpY2spPVwic3VibWl0KClcIj5TVUlWQU5UPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbicgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZSAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlICE9ICcnXCIgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVcIj48L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2VzICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZXMgIT0gJydcIiBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcicgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9lcyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2ZyICE9ICcnXCIgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZnJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3Rpb25Db21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7XHJcbiAgICBASW5wdXQoKSBsaXN0T2ZFbGVtZW50cztcclxuICAgIEBJbnB1dCgpIHZhbHVlc1NlbGVjdGVkO1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcblxyXG4gICAgY3VycmVudExpc3Q7XHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlICkge31cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpO1xyXG4gICAgICAgIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpe1xyXG4gICAgICAgICAgICBpZiAoZGF0YXMubmFtZSA9PSB0aGlzLm9ialN0ZXAubmFtZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gZGF0YXMubGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNob29zZVZhbCgkZXZlbnQpIHtcclxuICAgICAgICB2YXIgYWRkT3B0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlc1NlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlc1NlbGVjdGVkW2ldID09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNTZWxlY3RlZC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBhZGRPcHRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGRPcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNTZWxlY3RlZC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZDogdGhpcy52YWx1ZXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaXNTZWxlY3RlZChvcHRpb24pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzU2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzU2VsZWN0ZWRbaV0gPT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
