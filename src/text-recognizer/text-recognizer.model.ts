import {RecognizedSentenceModel} from "../recognized-sentence";

export class TextRecognizerModel {
  constructor(
    public sample: string = "",
    public candidate: string = "",
    public sentence: RecognizedSentenceModel = new RecognizedSentenceModel(),
    public isLast: boolean = false) {
    
  }
  
  static create(
    sample: string,
    candidate: string,
    isLast: boolean): TextRecognizerModel {
    
    return new TextRecognizerModel(
      sample,
      candidate,
      RecognizedSentenceModel.create([], isLast),
      isLast
    );
  }
  
  toString(): string {
    return JSON.stringify(this, null, "-----");
  }
}
