import {Injectable} from '@angular/core';
import {WebSpeechApi} from "./web-speech-api";


@Injectable()
export class WebSpeechApiService implements WebSpeechApi {
  
  private recognition: SpeechRecognition = new webkitSpeechRecognition();
  
  constructor() {
    
    // this.recognition.grammars = new SpeechGrammarList();
    this.recognition.lang = 'en-US';
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;
    // this.recognition.serviceURI = '';
    
  }
  
  start(): void {
    this.recognition.start();
  }
  
  stop(): void {
    this.recognition.stop();
  }
  
  abort(): void {
    this.recognition.abort();
  }
  
  subscribeStartEventHandler(
    context: any,
    handler: (event: Event) => void): void {
    this.recognition.onstart = (event: Event) => {
      handler.call(context, event);
    };
  }
  
  subscribeEndEventHandler(
    context: any,
    handler: (event: Event) => void): void {
    this.recognition.onend = (event: Event) => {
      handler.call(context, event);
    };
  }
  
  subscribeResultEventHandler(
    context: any,
    handler: (event: SpeechRecognitionEvent) => void): void {
    this.recognition.onresult = (event: Event) => {
      handler.call(context, event);
    };
  }
  
  subscribeErrorEventHandler(
    context: any,
    handler: (event: SpeechRecognitionError) => void): void {
    this.recognition.onerror = (event: Event) => {
      handler.call(context, event);
    };
  }
  
  subscribeNoMatchEventHandler(
    context: any,
    handler: (event: SpeechRecognitionEvent) => void): void {
    this.recognition.onnomatch = (event: Event) => {
      handler.call(context, event);
    };
  }
  
  subscribeAudioStartEventHandler(
    context: any,
    handler: (event: Event) => void): void {
    this.recognition.onaudiostart = (event: Event) => {
      handler.call(context, event);
    };
  }
  
  subscribeSoundStartEventHandler(
    context: any,
    handler: (event: Event) => void): void {
    this.recognition.onsoundstart = (event: Event) => {
      handler.call(context, event);
    };
  }
  
  subscribeSpeechStartEventHandler(
    context: any,
    handler: (event: Event) => void): void {
    this.recognition.onspeechstart = (event: Event) => {
      handler.call(context, event);
    };
  }
  
  subscribeSpeechEndEventHandler(
    context: any,
    handler: (event: Event) => void): void {
    this.recognition.onspeechend = (event: Event) => {
      handler.call(context, event);
    };
  }
  
  subscribeSoundEndEventHandler(
    context: any,
    handler: (event: Event) => void): void {
    this.recognition.onsoundend = (event: Event) => {
      handler.call(context, event);
    };
  }
}
