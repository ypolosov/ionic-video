import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TextRecognizerService} from "./text-recognizer.service";
import {RecognizedSentence} from "./model/recognized-sentence";

@Component({
             selector: 'text-recognizer',
             templateUrl: 'text-recognizer.component.html'
           })
export class TextRecognizerComponent implements OnInit {
  
  @Input()
  isRecognizing: boolean;
  
  @Input()
  recognizedSentence: RecognizedSentence;
  
  constructor(
    private textRecognizerService: TextRecognizerService) {
    
    // this.textRecognizerService.subscribeTextChangeEventHandler((recognizedSentence) => {
    //   this.onTextChangeEventHandler(recognizedSentence)
    // });
    
  }
  
  ngOnInit() {
    
  }
  
  // onTextChangeEventHandler(recognizedSentence: RecognizedSentence): void {
  //   this.recognizedSentence = recognizedSentence;
  //   console.log(`change: ${this.recognizedSentence}`);
  //   if(this.recognizedSentence.isFinal){
  //     this.textRecognizerService.nextValue()
  //   }
  // }
  
}
