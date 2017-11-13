import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormService} from "./form.service";
import {StepService} from "../Engine/step.service";

@Component({
    selector: 'list-buttons',
    template: `
     <div *ngIf="display">
         <div *ngIf="_stepService.language == 'en'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel}}</p> </div>
         <div *ngIf="_stepService.language == 'es'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_es}}</p> </div>
         <div *ngIf="_stepService.language == 'fr'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_fr}}</p> </div>
         <div class="panel-body" >
            <div class="jumbotron" *ngIf="objStep.configuration.header_note && objStep.configuration.header_note != ''">
                <p [innerHTML] = "objStep.configuration.header_note"></p>
            </div>
            <ul class="items"  >
                <li *ngFor="let valeurList of currentList">
                     <!--data-toggle="tooltip" title=" "-->
                    <button *ngIf="valueSelected != valeurList" 
                        class="{{ _stepService.template.list_btn}}"
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                    <button *ngIf="valueSelected == valeurList" 
                        data-toggle="tooltip" title=" text"
                        class="{{_stepService.template.list_btn}}" 
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                </li>
            </ul>
         </div>
         <div *ngIf="_stepService.language == 'en' && objStep.configuration.foot_note && objStep.configuration.foot_note != ''" [innerHTML] = "objStep.configuration.foot_note"></div> 
         <div *ngIf="_stepService.language == 'es' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_es != ''" [innerHTML] = "objStep.configuration.foot_note_es"></div>
         <div *ngIf="_stepService.language == 'fr' && objStep.configuration.foot_note_fr && objStep.configuration.foot_note_fr != ''" [innerHTML] = "objStep.configuration.foot_note_fr"></div>
     </div>
`
})

export class ListButtonsComponent {
    @Input() objStep;
    @Input() listOfElements;
    @Input() stepIdx;
    @Input() valueSelected; // Value to pass to the formService containing the selection

    @Output() change = new EventEmitter(); // Emitter to send back data to parent component
    currentList;
    display = false;

    constructor(
        private _formService: FormService, private _stepService: StepService
    )
    {}

    ngOnInit() {
        if (this.objStep.conditions.length > 0){
            let valueCondition = this.objStep.conditions[0].value;
            let keyCondition = this.objStep.conditions[0].key;

            let tmpStepIdx = this.stepIdx - 1; // stepIdx temporaire
            /* LOOK FOR VALUE SELECTED INTO FORM SERVICE (**arraySteps**)
                LA CONDITION A TESTER ET JE LA COMPARE AVEC LA VALEUR DE LA STEP COURANTE
             */
            //console.log(this._formService.arraySteps.find(x => x[keyCondition] === valueCondition));

            if (typeof this._formService.arraySteps.find(x => x[keyCondition] === valueCondition) != 'undefined'){
                // SI IL Y A UNE 2eme CONDITION
                if (typeof this.objStep.conditions[1] != 'undefined'){
                    let valueCondition2 = this.objStep.conditions[1].value;
                    let keyCondition2 = this.objStep.conditions[1].key;

                    if (typeof this._formService.arraySteps.find(x => x[keyCondition2] === valueCondition2) != 'undefined'){
                        this.display = true;
                    }
                }
                else{
                    this.display = true;
                }

            }

        }
        else{
            this.display = true;
        }
        for (let datas of this.listOfElements){
            if (datas.name == this.objStep.name){
                this.currentList = datas.list;
            }
        }
    }
    onChooseVal($event){
        this.change.emit({
            valueName : this.objStep.configuration.form_value.name,
            valueSelected : $event.target.value,
            stepIdx : this.stepIdx
        })
    };
}
