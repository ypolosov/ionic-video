import {Component, OnInit, Input} from '@angular/core';
import {RecognizedWordModel} from "./recognized-word.model";
import {RecognizedWordService} from "./recognized-word.service";

@Component({
             selector: 'recognized-word',
             templateUrl: 'recognized-word.component.html'
           })
export class  RecognizedWordComponent implements OnInit {
  
  
  @Input()
  model: RecognizedWordModel = new RecognizedWordModel();
  
  constructor(
    private  recognizedWordService:  RecognizedWordService) {
    
    // this. recognizedWordService.subscribeTextChangeEventHandler((recognizedSentence) => {
    //   this.onTextChangeEventHandler(recognizedSentence)
    // });
    
  }
  
  ngOnInit() {
    
  }
  
  // onTextChangeEventHandler(recognizedSentence: RecognizedSentence): void {
  //   this.recognizedSentence = recognizedSentence;
  //   console.log(`change: ${this.recognizedSentence}`);
  //   if(this.recognizedSentence.isFinal){
  //     this. recognizedWordService.nextValue()
  //   }
  // }
  
}
