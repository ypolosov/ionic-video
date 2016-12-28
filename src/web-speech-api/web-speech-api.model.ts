import {WebSpeechApiResultModel} from "./web-speech-api-result.model";

export class WebSpeechApiModel {
  constructor(
    public sample: string = "",
    public result: WebSpeechApiResultModel = new WebSpeechApiResultModel(),
    public isRecognitionProcessing: boolean = false,
    public isSynthesisProcessing: boolean = false) {
    
  }
  
  static create(sample: string): WebSpeechApiModel {
    return new WebSpeechApiModel(
      sample,
      new WebSpeechApiResultModel(),
      false,
      false
    );
  }
  
  toString(): string{
    return JSON.stringify( this, null, "-----" );
  }
}
