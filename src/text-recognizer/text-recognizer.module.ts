import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextRecognizerComponent} from './text-recognizer.component';
import {TextRecognizerService} from "./text-recognizer.service";
import {RecognizedSentenceModule} from "../recognized-sentence";

@NgModule({
            imports: [
              CommonModule,
              RecognizedSentenceModule
            ],
            exports: [TextRecognizerComponent],
            declarations: [TextRecognizerComponent],
            providers: [TextRecognizerService]
          })
export class TextRecognizerModule {
}
