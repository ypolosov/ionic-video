import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TextRecognizerService} from "./text-recognizer.service";
import {TextRecognizerModel} from "./text-recognizer.model";
import {RecognizedSentenceModel} from "../recognized-sentence/recognized-sentence.model";

@Component({
             selector: 'text-recognizer',
             templateUrl: 'text-recognizer.component.html'
           })
export class TextRecognizerComponent implements OnInit, OnChanges {
  
  @Input()
  model: TextRecognizerModel = new TextRecognizerModel();
  
  constructor(
    private textRecognizerService: TextRecognizerService) {
    
    // this.textRecognizerService.subscribeTextChangeEventHandler((recognizedSentence) => {
    //   this.onTextChangeEventHandler(recognizedSentence)
    // });
    
  }
  
  ngOnInit() {
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    let sentence: RecognizedSentenceModel = this.textRecognizerService.recognizeSentence(this.model);
    this.model.sentence = sentence;
  }
  
  // onTextChangeEventHandler(recognizedSentence: RecognizedSentence): void {
  //   this.recognizedSentence = recognizedSentence;
  //   console.log(`change: ${this.recognizedSentence}`);
  //   if(this.recognizedSentence.isFinal){
  //     this.textRecognizerService.nextValue()
  //   }
  // }
  
}
