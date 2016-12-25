import {RecognizedSentenceModel} from "../recognized-sentence";

export class TextRecognizerModel {
  constructor(public sentence: RecognizedSentenceModel = new RecognizedSentenceModel()) {
    
  }
  
  toString(): string{
    return this.sentence.toString();
  }
}
