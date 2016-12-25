import {TextRecognizerModel} from "../../text-recognizer";
import {WebSpeechApiModel} from "../../web-speech-api";

export class HomeModel {
  constructor(public webSpeechApi: WebSpeechApiModel = new WebSpeechApiModel(),
              public textRecognizer: TextRecognizerModel = new TextRecognizerModel()
  ) {
    
  }
  
  toString(): string{
    return this.textRecognizer.toString();
  }
}
