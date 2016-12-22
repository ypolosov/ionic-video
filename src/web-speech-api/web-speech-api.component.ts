import {Component, OnInit} from '@angular/core';
import {WebSpeechApiService} from "./web-speech-api.service";

@Component({
             selector: 'web-speech-api',
             templateUrl: 'web-speech-api.component.html'
           })
export class WebSpeechApiComponent implements OnInit {
  
  private isRecognizing: boolean = false;
  
  constructor(
    private webSpeechApiService: WebSpeechApiService) {
    
    this.webSpeechApiService.subscribeStartEventHandler(this, this.onStartEventHander);
    this.webSpeechApiService.subscribeEndEventHandler(this, this.onEndEventHander);
    this.webSpeechApiService.subscribeErrorEventHandler(this, this.onErrorEventHander);
    this.webSpeechApiService.subscribeResultEventHandler(this, this.onResultEventHander);
    
  }
  
  ngOnInit() {
    
  }
  
  start() {
    this.webSpeechApiService.start();
    this.isRecognizing = true;
  }
  
  stop() {
    this.webSpeechApiService.stop();
    this.isRecognizing = false;
  }
  
  onClickButton(event: Event): void {
    event.preventDefault();
    if(!this.isRecognizing) {
      this.start();
    } else {
      this.stop();
    }
  }
  
  onStartEventHander(event: Event): void {
    console.log("start");
  }
  
  onEndEventHander(event: Event): void {
    console.log("end");
  }
  
  onErrorEventHander(event: SpeechRecognitionError): void {
    console.log("error");
  }
  
  onResultEventHander(event: SpeechRecognitionEvent): void {
    console.log("result");
  }
}
