import {Injectable} from '@angular/core';
import {TextRecognizer} from "./text-recognizer";
import * as JsDiff from 'diff';
import {TextRecognizerModel} from "./text-recognizer.model";
import IDiffResult = JsDiff.IDiffResult;
import diffWords = JsDiff.diffWords;
import {RecognizedSentenceModel} from "../recognized-sentence/recognized-sentence.model";
import {RecognizedWordModel} from "../recognized-word/recognized-word.model";

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
  
  recognizeSentence(model: TextRecognizerModel): RecognizedSentenceModel {
    console.log(`SAMPLE    : ${model.sample}`);
    console.log(`CANDIDATE : ${model.candidate}`);
    let diffResults: Array<IDiffResult> = diffWords(model.sample, model.candidate);
    
    let sentence: RecognizedSentenceModel = new RecognizedSentenceModel([], model.isLast);
    
    diffResults.map((
                      diffResult: IDiffResult,
                      index: number) => {
      let words: Array<RecognizedWordModel> = diffResult.added
        ? []
        : diffResult.removed
                                        ? this.getRemovedWords(diffResult.value, model.isLast)
                                        : this.getWords(diffResult.value, model.isLast);
      console.log(`DIFFRESULT ${index}: ${diffResult.value}`);
      sentence.words.push(...words);
    });
    
    return sentence;
  }
  
  getAddedWords(prase: string, isLast: boolean): Array<RecognizedWordModel> {
    return prase.trim()
         .split(" ")
         .filter((word: string) => {
           return !!word
         })
         .map((word: string) => {
           return new RecognizedWordModel("", word, isLast);
         });
  }
  
  getRemovedWords(prase: string, isLast: boolean): Array<RecognizedWordModel> {
    return prase.trim()
                .split(" ")
                .filter((word: string) => {
                  return !!word
                })
                .map((word: string) => {
                  return new RecognizedWordModel(word, "", isLast);
                });
  }
  
  getWords(prase: string, isLast: boolean): Array<RecognizedWordModel> {
    return prase.trim()
                .split(" ")
                .filter((word: string) => {
                  return !!word
                })
                .map((word: string) => {
                  return new RecognizedWordModel(word, word, isLast);
                });
  }
}
