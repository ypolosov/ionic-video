import {RecognizedWordModel} from "../recognized-word";

export class RecognizedSentenceModel {
  
  constructor(
    public words: Array<RecognizedWordModel>,
    public isFinal: boolean) {
    
  }
  
  toString(): string{
    return `${this.words.join(" ")}`;
  }
  
}
