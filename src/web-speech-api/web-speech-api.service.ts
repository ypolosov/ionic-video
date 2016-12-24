import {Injectable} from '@angular/core';
import {WebSpeechApi} from "./web-speech-api";
import {Observable} from "rxjs";

@Injectable()
export class WebSpeechApiService implements WebSpeechApi {
  
  private recognition: SpeechRecognition = new webkitSpeechRecognition();
  private startSource: Observable<Event> = Observable.fromEvent(this.recognition, 'start');
  private endSource: Observable<Event> = Observable.fromEvent(this.recognition, 'end');
  private resultSource: Observable<SpeechRecognitionEvent> = Observable.fromEvent(this.recognition, 'result');
  private errorSource: Observable<SpeechRecognitionError> = Observable.fromEvent(this.recognition, 'error');
  private noMatchSource: Observable<SpeechRecognitionEvent> = Observable.fromEvent(this.recognition, 'nomatch');
  private audioStartSource: Observable<Event> = Observable.fromEvent(this.recognition, 'audiostart');
  private soundStartSource: Observable<Event> = Observable.fromEvent(this.recognition, 'soundstart');
  private speechStartSource: Observable<Event> = Observable.fromEvent(this.recognition, 'speechstart');
  private speechEndSource: Observable<Event> = Observable.fromEvent(this.recognition, 'speechend');
  private soundEndSource: Observable<Event> = Observable.fromEvent(this.recognition, 'soundend');

  
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
    handler: (event: Event) => void): void {
    this.startSource.subscribe(handler);
  }
  
  subscribeEndEventHandler(
    handler: (event: Event) => void): void {
    this.endSource.subscribe(handler);
  }
  
  subscribeResultEventHandler(
    handler: (event: SpeechRecognitionEvent) => void): void {
    this.resultSource.subscribe(handler);
  }
  
  subscribeErrorEventHandler(
    handler: (event: SpeechRecognitionError) => void): void {
    this.errorSource.subscribe(handler);
  }
  
  subscribeNoMatchEventHandler(
    handler: (event: SpeechRecognitionEvent) => void): void {
    this.noMatchSource.subscribe(handler);
  }
  
  subscribeAudioStartEventHandler(
    handler: (event: Event) => void): void {
    this.audioStartSource.subscribe(handler);
  }
  
  subscribeSoundStartEventHandler(
    handler: (event: Event) => void): void {
    this.soundStartSource.subscribe(handler);
  }
  
  subscribeSpeechStartEventHandler(
    handler: (event: Event) => void): void {
    this.speechStartSource.subscribe(handler);
  }
  
  subscribeSpeechEndEventHandler(
    handler: (event: Event) => void): void {
    this.speechEndSource.subscribe(handler);
  }
  
  subscribeSoundEndEventHandler(
    handler: (event: Event) => void): void {
    this.soundEndSource.subscribe(handler);
  }
}
