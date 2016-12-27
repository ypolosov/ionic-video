import {Component, OnInit, Input} from '@angular/core';
import {RecognizedSentenceService} from "./recognized-sentence.service";
import {RecognizedSentenceModel} from "./recognized-sentence.model";

@Component({
             selector: 'recognized-sentence',
             templateUrl: 'recognized-sentence.component.html'
           })
export class  RecognizedSentenceComponent implements OnInit {
  
  @Input()
  model: RecognizedSentenceModel = new RecognizedSentenceModel();
  
  constructor(
    private  recognizedSentenceService:  RecognizedSentenceService) {
    
    // this. recognizedSentenceService.subscribeTextChangeEventHandler((recognizedSentence) => {
    //   this.onTextChangeEventHandler(recognizedSentence)
    // });
    
  }
  

  
  ngOnInit() {
    
  }
  
  // onTextChangeEventHandler(recognizedSentence: RecognizedSentence): void {
  //   this.recognizedSentence = recognizedSentence;
  //   console.log(`change: ${this.recognizedSentence}`);
  //   if(this.recognizedSentence.isFinal){
  //     this. recognizedSentenceService.nextValue()
  //   }
  // }
  
}
