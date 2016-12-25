import {Injectable} from '@angular/core';
import {RecognizedWord} from "./recognized-word";

@Injectable()
export class RecognizedWordService implements RecognizedWord {
  
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
