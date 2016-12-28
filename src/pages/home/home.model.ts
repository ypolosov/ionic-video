import {TextRecognizerModel} from "../../text-recognizer";
import {WebSpeechApiModel} from "../../web-speech-api";

export class HomeModel {
  constructor(
    public webSpeechApi: WebSpeechApiModel = new WebSpeechApiModel(),
    public textRecognizer: TextRecognizerModel = new TextRecognizerModel(),
    public sample: string = "") {
    
  }
  
  static create(sample: string): HomeModel {
    return new HomeModel(
      WebSpeechApiModel.create(sample),
      TextRecognizerModel.create(sample, "", false),
      sample
    );
  }
  
  toString(): string {
    return JSON.stringify(this, null, "-----");
  }
}
