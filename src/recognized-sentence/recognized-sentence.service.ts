import {Injectable} from '@angular/core';
import {RecognizedSentence} from "./recognized-sentence";


@Injectable()
export class  RecognizedSentenceService implements  RecognizedSentence {
  
  // private recognizedSentenceSubject: Subject<RecognizedSentence> = new Subject<RecognizedSentence>();
  
  constructor() {
    
  }
  
  // subscribeTextChangeEventHandler(handler: (recognizedSentence: RecognizedSentence) => void): void{
  //   this.recognizedSentenceSubject.subscribe(handler);
  // }
  //
  // nextValue(recognizedSentence: RecognizedSentence): void{
  //   this.recognizedSentenceSubject.next(recognizedSentence);
  // }
  

  
}
