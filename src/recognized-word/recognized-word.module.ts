import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecognizedWordComponent} from "./recognized-word.component";
import {RecognizedWordService} from "./recognized-word.service";

@NgModule({
            imports: [
              CommonModule
            ],
            exports: [RecognizedWordComponent],
            declarations: [RecognizedWordComponent],
            providers: [RecognizedWordService]
          })
export class RecognizedWordModule {
}
