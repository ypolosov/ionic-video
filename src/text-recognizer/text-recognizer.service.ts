import {Injectable} from '@angular/core';
import {TextRecognizer} from "./text-recognizer";

@Injectable()
export class TextRecognizerService implements TextRecognizer {
  
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
