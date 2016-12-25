import {WebSpeechApiResultModel} from "./web-speech-api-result.model";

export class WebSpeechApiModel {
  constructor(
    public result: WebSpeechApiResultModel = new WebSpeechApiResultModel(),
    public isProcessing: boolean = false) {
    
  }
  
  toString(): string{
    return JSON.stringify(this);
  }
}
