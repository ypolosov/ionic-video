import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecognizedWordModule} from "../recognized-word";
import {RecognizedSentenceComponent} from "./recognized-sentence.component";
import {RecognizedSentenceService} from "./recognized-sentence.service";

@NgModule({
            imports: [
              CommonModule,
              RecognizedWordModule
            ],
            exports: [ RecognizedSentenceComponent],
            declarations: [ RecognizedSentenceComponent],
            providers: [ RecognizedSentenceService]
          })
export class  RecognizedSentenceModule {
}
