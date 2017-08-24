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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var fileUpload_service_1 = require("./fileUpload.service");
var form_service_1 = require("./form.service");
var FileUploadComponent = (function () {
    function FileUploadComponent(_fileUploadService, _http, _formService) {
        this._fileUploadService = _fileUploadService;
        this._http = _http;
        this._formService = _formService;
        this.isUploaded = false;
        this.uploadedFileUrls = [];
        this.display = false;
        this.sent = new core_1.EventEmitter();
    }
    FileUploadComponent.prototype.upload = function () {
    };
    FileUploadComponent.prototype.ngOnInit = function () {
        console.log(this.objStep);
        console.log(this.objStep.configuration.path_model);
    };
    FileUploadComponent.prototype.fileChange = function (event) {
        console.log(event.target);
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            this.fileUploaded = file;
            this._formService.arrayFiles.append('uploadFile', file, this.objStep.name);
            console.log(this._formService.arrayFiles.get('uploadFile'));
            this.url_uploaded_file = 'blabla';
            var fileToUpload = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!fileToUpload.type.match(pattern)) {
                alert('invalid format');
                return;
            }
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsDataURL(fileToUpload);
            this.isUploaded = true;
        }
    };
    FileUploadComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
    };
    FileUploadComponent.prototype.onChange = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
        console.log(this.file);
        this._fileUploadService.storeFile(files[0])
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    FileUploadComponent.prototype.goToStep = function () {
        this.sent.emit({
            stepIdx: this.stepIdx
        });
    };
    FileUploadComponent.prototype.goToNextStep = function () {
        this.sent.emit({
            valueName: this.objStep.name,
            url_uploaded: this.url_uploaded_file,
            id_img: this.id_img,
            fileUploaded: this.fileUploaded,
            stepIdx: this.stepIdx
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FileUploadComponent.prototype, "objStep", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FileUploadComponent.prototype, "stepIdx", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FileUploadComponent.prototype, "sent", void 0);
    FileUploadComponent = __decorate([
        core_1.Component({
            selector: 'file-upload',
            template: "\n    <div>\n       <div class=\"panel-heading panel-heading-custom\">{{objStep.configuration.labelPanel}} </div>\n       <div class=\"panel-body\">\n        <!--<input type=\"filepicker\" name=\"myName\" onchange=\"alert(event.fpfile.url)\"/>-->\n        <!--<input type=\"file\" ng2FileSelect [uploader]=\"uploader\"/>-->\n        <table>\n            <tr>\n                <td>\n                    <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".jpeg,.jpg,.png,.pdf,.doc,.docx\">\n                </td>\n            <tr>\n            <tr>\n                <td> \n                    <img src=\"{{objStep.configuration.path_model}}\" width=\"480\" height=\"320\"> \n                </td>\n            </tr>\n            <tr>\n                <td *ngIf=\"this.isUploaded\">\n                    <img src=\"{{imageSrc}}\" width=\"480\" height=\"320\">\n                    <!--<img src=\"{{this.url_uploaded_file}}\" width=\"480\" height=\"320\">    -->\n                </td>\n            </tr>\n            \n        \n        </table>\n               <div *ngIf=\"this.isUploaded == false\"><button type=\"button\" btn-default btn-lg (click)=\"goToStep()\">JE NE SOUHAITE PAS AJOUTER DES PHOTOS</button></div>\n               <div *ngIf=\"this.isUploaded\"><button type=\"button\" btn-default btn-lg (click)=\"goToNextStep()\">SUIVANT</button></div>\n        <!--<input name=\"file\" type=\"file\" (change)=\"onChange($event)\"/>-->\n        <!--<input type=\"filepicker\" data-fp-apikey=\"AgaXy7tWgRMuzr11Hh6OJz\"-->\n               <!--onchange=\"console.log(event.fpfile)\">-->\n\n      <!--<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/*;capture=camera\">-->\n\n    <!--<button (click)=\"upload()\">Upload</button>-->\n\n<!--<cl-image [public-id]=\"imageId\" [cloud-name]=\"uploader.cloudName\"></cl-image>-->\n<!--<input type=\"button\" value=\"Upload\" onclick=\"showPicker()\" />-->\n<!--<input type=\"filepicker-dragdrop\" data-fp-apikey=\"AgaXy7tWgRMuzr11Hh6OJz\" data-fp-mimetypes=\"*/*\" data-fp-container=\"modal\" data-fp-maxsize=\"10000000\" data-fp-store-location=\"S3\" onchange=\"alert(event.fpfile.url)\">-->\n       </div>\n    \n    </div>\n" }), 
        __metadata('design:paramtypes', [fileUpload_service_1.FileUploadService, (typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, form_service_1.FormService])
    ], FileUploadComponent);
    return FileUploadComponent;
    var _a;
}());
exports.FileUploadComponent = FileUploadComponent;

//# sourceMappingURL=data:application/json;base64,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QyxhQUFNLEVBQUU7O3FEQUFBO0lBL0RiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSw4ckVBMENiLEVBQUMsQ0FBQzs7MkJBQUE7SUF5SkgsMEJBQUM7O0FBQUQsQ0F2SkEsQUF1SkMsSUFBQTtBQXZKWSwyQkFBbUIsc0JBdUovQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZmlsZVVwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQge0ZpbGVVcGxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9maWxlVXBsb2FkLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQ2xvdWRpbmFyeU9wdGlvbnMsIENsb3VkaW5hcnlVcGxvYWRlciB9IGZyb20gJ25nMi1jbG91ZGluYXJ5JztcbmltcG9ydCB7RmlsZVVwbG9hZFNlcnZpY2V9IGZyb20gXCIuL2ZpbGVVcGxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XG5kZWNsYXJlIGNvbnN0IGZpbGVzdGFjazoge1xuICAgIGluaXQoYXBpS2V5OiBzdHJpbmcpOiB7XG4gICAgICAgIHBpY2soeyBtYXhGaWxlcyB9OiB7IG1heEZpbGVzOiBudW1iZXIgfSk6XG4gICAgICAgICAgICBQcm9taXNlPHsgZmlsZXNVcGxvYWRlZDogeyB1cmw6IHN0cmluZyB9W10gfT5cbiAgICB9XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZpbGUtdXBsb2FkJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsfX0gPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVwiZmlsZXBpY2tlclwiIG5hbWU9XCJteU5hbWVcIiBvbmNoYW5nZT1cImFsZXJ0KGV2ZW50LmZwZmlsZS51cmwpXCIvPi0tPlxuICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJmaWxlXCIgbmcyRmlsZVNlbGVjdCBbdXBsb2FkZXJdPVwidXBsb2FkZXJcIi8+LS0+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZSgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZVwiIGFjY2VwdD1cIi5qcGVnLC5qcGcsLnBuZywucGRmLC5kb2MsLmRvY3hcIj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD4gXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ucGF0aF9tb2RlbH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj4gXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwidGhpcy5pc1VwbG9hZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3tpbWFnZVNyY319XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxpbWcgc3JjPVwie3t0aGlzLnVybF91cGxvYWRlZF9maWxlfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPiAgICAtLT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0aGlzLmlzVXBsb2FkZWQgPT0gZmFsc2VcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBidG4tZGVmYXVsdCBidG4tbGcgKGNsaWNrKT1cImdvVG9TdGVwKClcIj5KRSBORSBTT1VIQUlURSBQQVMgQUpPVVRFUiBERVMgUEhPVE9TPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy5pc1VwbG9hZGVkXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYnRuLWRlZmF1bHQgYnRuLWxnIChjbGljayk9XCJnb1RvTmV4dFN0ZXAoKVwiPlNVSVZBTlQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgPCEtLTxpbnB1dCBuYW1lPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIvPi0tPlxuICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJmaWxlcGlja2VyXCIgZGF0YS1mcC1hcGlrZXk9XCJBZ2FYeTd0V2dSTXV6cjExSGg2T0p6XCItLT5cbiAgICAgICAgICAgICAgIDwhLS1vbmNoYW5nZT1cImNvbnNvbGUubG9nKGV2ZW50LmZwZmlsZSlcIj4tLT5cblxuICAgICAgPCEtLTxpbnB1dCB0eXBlPVwiZmlsZVwiIG5nMkZpbGVTZWxlY3QgW3VwbG9hZGVyXT1cInVwbG9hZGVyXCIgYWNjZXB0PVwiaW1hZ2UvKjtjYXB0dXJlPWNhbWVyYVwiPi0tPlxuXG4gICAgPCEtLTxidXR0b24gKGNsaWNrKT1cInVwbG9hZCgpXCI+VXBsb2FkPC9idXR0b24+LS0+XG5cbjwhLS08Y2wtaW1hZ2UgW3B1YmxpYy1pZF09XCJpbWFnZUlkXCIgW2Nsb3VkLW5hbWVdPVwidXBsb2FkZXIuY2xvdWROYW1lXCI+PC9jbC1pbWFnZT4tLT5cbjwhLS08aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiVXBsb2FkXCIgb25jbGljaz1cInNob3dQaWNrZXIoKVwiIC8+LS0+XG48IS0tPGlucHV0IHR5cGU9XCJmaWxlcGlja2VyLWRyYWdkcm9wXCIgZGF0YS1mcC1hcGlrZXk9XCJBZ2FYeTd0V2dSTXV6cjExSGg2T0p6XCIgZGF0YS1mcC1taW1ldHlwZXM9XCIqLypcIiBkYXRhLWZwLWNvbnRhaW5lcj1cIm1vZGFsXCIgZGF0YS1mcC1tYXhzaXplPVwiMTAwMDAwMDBcIiBkYXRhLWZwLXN0b3JlLWxvY2F0aW9uPVwiUzNcIiBvbmNoYW5nZT1cImFsZXJ0KGV2ZW50LmZwZmlsZS51cmwpXCI+LS0+XG4gICAgICAgPC9kaXY+XG4gICAgXG4gICAgPC9kaXY+XG5gfSlcblxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRDb21wb25lbnQge1xuXG4gICAgaXNVcGxvYWRlZCA9IGZhbHNlO1xuICAgIGlkX2ltZzogc3RyaW5nO1xuICAgIHVybF91cGxvYWRlZF9maWxlO1xuXG4gICAgdXBsb2FkZWRGaWxlVXJsczogc3RyaW5nW10gPSBbXTtcbiAgICBpbWFnZVNyYzogc3RyaW5nO1xuICAgIGNsb3VkaW5hcnlJbWFnZTogYW55O1xuICAgIGRpc3BsYXkgPSBmYWxzZTtcbiAgICAgLy8gdXBsb2FkZXI6IENsb3VkaW5hcnlVcGxvYWRlciA9IG5ldyBDbG91ZGluYXJ5VXBsb2FkZXIoXG4gICAgIC8vICAgICBuZXcgQ2xvdWRpbmFyeU9wdGlvbnMoeyBjbG91ZE5hbWU6ICdoYXZqY3FwcHYnLCB1cGxvYWRQcmVzZXQ6ICdvaTJ4NjFkYicgfSlcbiAgICAgLy8gKTtcbiAgICBmaWxlIDogRmlsZTtcbiAgICBmaWxlVXBsb2FkZWQgOiBGaWxlO1xuICAgIEBJbnB1dCgpIG9ialN0ZXA7ICAgICAvL1ZhbHVlIHJlY2VpdmVkIGZyb20gTWFpbkNvbXBvbmVudFxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7ICAgICAvL1ZhbHVlIHJlY2VpdmVkIGZyb20gTWFpbkNvbXBvbmVudFxuICAgIEBPdXRwdXQoKSBzZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9maWxlVXBsb2FkU2VydmljZSA6IEZpbGVVcGxvYWRTZXJ2aWNlLCBwcml2YXRlIF9odHRwOiBIdHRwLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSkge1xuICAgICAgICAvLyAgLCB0aGlzLnVwbG9hZGVyLm9uU3VjY2Vzc0l0ZW0gPSAoaXRlbTogYW55LCByZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICAvL3Jlc3BvbnNlIGlzIHRoZSBjbG91ZGluYXJ5IHJlc3BvbnNlXG4gICAgICAgIC8vICAgICAvL3NlZSBodHRwOi8vY2xvdWRpbmFyeS5jb20vZG9jdW1lbnRhdGlvbi91cGxvYWRfaW1hZ2VzI3VwbG9hZF9yZXNwb25zZVxuICAgICAgICAvLyAgICAgbGV0IHJlczogYW55ID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgIC8vICAgICB0aGlzLmltYWdlSWQgPSByZXMucHVibGljX2lkO1xuICAgICAgICAvLyAgICAgcmV0dXJuIHsgaXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyB9O1xuICAgICAgICAvLyB9O1xuXG4gICAgfVxuXG5cbiAgICB1cGxvYWQoKSB7XG4gICAgICAgIC8vIHRoaXMudXBsb2FkZXIudXBsb2FkQWxsKCk7XG4gICAgfVxuICAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24ucGF0aF9tb2RlbClcbiAgICAgfVxuICAgICAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvLyAgICAgLy8gdmFyIGNsaWVudCA9IGZpbGVzdGFjay5pbml0KCdBZ2FYeTd0V2dSTXV6cjExSGg2T0p6Jyk7XG4gICAgLy8gICAgIC8vIGZ1bmN0aW9uIHNob3dQaWNrZXIoKSB7XG4gICAgLy8gICAgIC8vICAgICBjbGllbnQucGljayh7XG4gICAgLy8gICAgIC8vICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIC8vICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5maWxlc1VwbG9hZGVkKSlcbiAgICAvLyAgICAgLy8gICAgIH0pO1xuICAgIC8vICAgICAvLyB9XG4gICAgLy8gfVxuICAgIC8vXG5cbiAgICBmaWxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcbiAgLy8gR0FSREVSIEZJQ0hJRVIgREFOUyBMRSBDQUNIRVxuXG4gICAgICAgICBsZXQgZmlsZUxpc3Q6IEZpbGVMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgICBpZihmaWxlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICBsZXQgZmlsZTogRmlsZSA9IGZpbGVMaXN0WzBdO1xuICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgIHRoaXMuZmlsZVVwbG9hZGVkID0gZmlsZTtcbiAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5RmlsZXMuYXBwZW5kKCd1cGxvYWRGaWxlJywgZmlsZSwgdGhpcy5vYmpTdGVwLm5hbWUpO1xuICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlGaWxlcy5nZXQoJ3VwbG9hZEZpbGUnKSk7XG5cbiAgICAgICAgIHRoaXMudXJsX3VwbG9hZGVkX2ZpbGUgPSAnYmxhYmxhJztcbiAgICAgICAgIC8vXG4gICAgICAgICB2YXIgZmlsZVRvVXBsb2FkID0gZXZlbnQuZGF0YVRyYW5zZmVyID8gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzWzBdIDogZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgICAgICB2YXIgcGF0dGVybiA9IC9pbWFnZS0qLztcbiAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICBpZiAoIWZpbGVUb1VwbG9hZC50eXBlLm1hdGNoKHBhdHRlcm4pKSB7XG4gICAgICAgICAgICAgYWxlcnQoJ2ludmFsaWQgZm9ybWF0Jyk7XG4gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfVxuXG4gICAgICAgICAvLyB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgICByZWFkZXIub25sb2FkID0gdGhpcy5faGFuZGxlUmVhZGVyTG9hZGVkLmJpbmQodGhpcyk7XG4gICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlVG9VcGxvYWQpO1xuLy8gRklOIEdBUkRFUiBGSUNISUVSIERBTlMgTEUgQ0FDSEVcblxuICAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5wdXNoKHtcIm5vbVwiOiB0aGlzLm9ialN0ZXAubmFtZSwgXCJmaWxlXCI6IEZpbGV9KTtcbiAgICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlGaWxlcy5wdXNoKGZvcm1EYXRhKTtcblxuXG4gICAgICAgICB0aGlzLmlzVXBsb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgICAvLyBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZCgnRW5jVHlwZScsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XG4gICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgIC8vIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBoZWFkZXJzfSk7XG4gICAgICAgICAvLyB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdzdG9yZV9maWxlJztcbiAgICAgICAgIC8vIHRoaXMuX2h0dHAucG9zdChgJHtjb21wbGV0ZVVybH1gLCBmb3JtRGF0YSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgLy8gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxuICAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAvLyAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxuICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy51cmxfdXBsb2FkZWRfZmlsZSA9IGRhdGEudXJsO1xuICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5pZF9pbWcgPSBkYXRhLmlkX2ltZztcbiAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgIC8vICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAvLyAgICAgKVxuICAgICB9ICAgICAgICB9XG5cbl9oYW5kbGVSZWFkZXJMb2FkZWQoZSkge1xuICAgIHZhciByZWFkZXIgPSBlLnRhcmdldDtcbiAgICB0aGlzLmltYWdlU3JjID0gcmVhZGVyLnJlc3VsdDtcbiAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VTcmMpXG4gICAgLy90aGlzLmxvYWRlZCA9IHRydWU7XG59XG5cbiAgICBvbkNoYW5nZShldmVudDogRXZlbnRUYXJnZXQpIHtcbiAgICAgICAgbGV0IGV2ZW50T2JqOiBNU0lucHV0TWV0aG9kQ29udGV4dCA9IDxNU0lucHV0TWV0aG9kQ29udGV4dD4gZXZlbnQ7XG4gICAgICAgIGxldCB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4gZXZlbnRPYmoudGFyZ2V0O1xuICAgICAgICBsZXQgZmlsZXM6IEZpbGVMaXN0ID0gdGFyZ2V0LmZpbGVzO1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlc1swXTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlKTtcblxuICAgICAgICB0aGlzLl9maWxlVXBsb2FkU2VydmljZS5zdG9yZUZpbGUoZmlsZXNbMF0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgZ29Ub1N0ZXAoKXtcbiAgICAgICAgdGhpcy5zZW50LmVtaXQoe1xuICAgICAgICAgICAgc3RlcElkeDogdGhpcy5zdGVwSWR4XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ29Ub05leHRTdGVwKCkge1xuICAgICAgICB0aGlzLnNlbnQuZW1pdCh7XG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAubmFtZSxcbiAgICAgICAgICAgIHVybF91cGxvYWRlZDogdGhpcy51cmxfdXBsb2FkZWRfZmlsZSxcbiAgICAgICAgICAgIGlkX2ltZzogdGhpcy5pZF9pbWcsXG4gICAgICAgICAgICBmaWxlVXBsb2FkZWQ6IHRoaXMuZmlsZVVwbG9hZGVkLFxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gYXN5bmMgc2hvd1BpY2tlcigpIHtcbiAgICAvLyAgICAgY29uc3QgY2xpZW50ID0gZmlsZXN0YWNrLmluaXQoJ0FnYVh5N3RXZ1JNdXpyMTFIaDZPSnonKTtcbiAgICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LnBpY2soeyBtYXhGaWxlczogMSB9KTtcbiAgICAvLyAgICAgY29uc3QgdXJsID0gcmVzdWx0LmZpbGVzVXBsb2FkZWRbMF0udXJsO1xuICAgIC8vICAgICB0aGlzLnVwbG9hZGVkRmlsZVVybHMucHVzaCh1cmwpO1xuICAgIC8vIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
