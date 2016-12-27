import {RecognizedWordModel} from "../recognized-word";

export class RecognizedSentenceModel {
  
  constructor(
    public words: Array<RecognizedWordModel> = [],
    public isLast: boolean = false) {
    
  }
  
  static create(words: Array<RecognizedWordModel>, isLast: boolean): RecognizedSentenceModel {
    return new RecognizedSentenceModel(words, isLast);
  }
  
  toString(): string {
    return JSON.stringify(this, null, "-----");
  }
  
}
