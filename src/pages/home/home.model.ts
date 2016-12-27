import {TextRecognizerModel} from "../../text-recognizer";
import {WebSpeechApiModel} from "../../web-speech-api";

export class HomeModel {
  constructor(
    public webSpeechApi: WebSpeechApiModel = new WebSpeechApiModel(),
    public textRecognizer: TextRecognizerModel = new TextRecognizerModel(),
    public sample: string = "") {
    
  }
  
  static create(sample: string): HomeModel {
    return new HomeModel(new WebSpeechApiModel(),
      new TextRecognizerModel(),
      sample
    );
  }
  
  toString(): string {
    return JSON.stringify(this, null, "-----");
  }
}
