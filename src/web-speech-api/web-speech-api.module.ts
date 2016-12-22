import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebSpeechApiComponent} from './web-speech-api.component';
import {WebSpeechApiService} from "./web-speech-api.service";

@NgModule({
            imports: [
              CommonModule
            ],
            exports: [WebSpeechApiComponent],
            declarations: [WebSpeechApiComponent],
            providers: [WebSpeechApiService]
          })
export class WebSpeechApiModule {
}
