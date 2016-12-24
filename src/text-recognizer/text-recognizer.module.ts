import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextRecognizerComponent} from './text-recognizer.component';
import {TextRecognizerService} from "./text-recognizer.service";

@NgModule({
            imports: [
              CommonModule
            ],
            exports: [TextRecognizerComponent],
            declarations: [TextRecognizerComponent],
            providers: [TextRecognizerService]
          })
export class TextRecognizerModule {
}
