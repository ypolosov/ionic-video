import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {TextRecognizerService} from "./text-recognizer.service";
import {TextRecognizerModel} from "./text-recognizer.model";

@Component({
             selector: 'text-recognizer',
             templateUrl: 'text-recognizer.component.html'
           })
export class TextRecognizerComponent implements OnInit {
  
  @Input()
  model: TextRecognizerModel = new TextRecognizerModel();
  
  @Output()
  modelChange: EventEmitter<TextRecognizerModel> = new EventEmitter();
  
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
