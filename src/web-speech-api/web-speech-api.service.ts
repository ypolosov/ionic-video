import {Injectable} from '@angular/core';
import {WebSpeechApi} from "./web-speech-api";
import {Observable} from "rxjs";

@Injectable()
export class WebSpeechApiService implements WebSpeechApi {
  
  private recognition: SpeechRecognition = new webkitSpeechRecognition();
  
  private startRecognitionSource: Observable<Event> = Observable.fromEvent(this.recognition, 'start');
  private endRecognitionSource: Observable<Event> = Observable.fromEvent(this.recognition, 'end');
  private resultRecognitionSource: Observable<SpeechRecognitionEvent> = Observable.fromEvent(this.recognition, 'result');
  private errorRecognitionSource: Observable<SpeechRecognitionError> = Observable.fromEvent(this.recognition, 'error');
  private noMatchRecognitionSource: Observable<SpeechRecognitionEvent> = Observable.fromEvent(this.recognition, 'nomatch');
  private audioStartRecognitionSource: Observable<Event> = Observable.fromEvent(this.recognition, 'audiostart');
  private soundStartRecognitionSource: Observable<Event> = Observable.fromEvent(this.recognition, 'soundstart');
  private speechStartRecognitionSource: Observable<Event> = Observable.fromEvent(this.recognition, 'speechstart');
  private speechEndRecognitionSource: Observable<Event> = Observable.fromEvent(this.recognition, 'speechend');
  private soundEndRecognitionSource: Observable<Event> = Observable.fromEvent(this.recognition, 'soundend');
  
  
  private synthesis: SpeechSynthesis = speechSynthesis;
  
  private utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();
  
  private startSynthesisSource: Observable<SpeechSynthesisEvent> = Observable.fromEvent(this.utterance, 'start');
  private endSynthesisSource: Observable<SpeechSynthesisEvent> = Observable.fromEvent(this.utterance, 'end');
  private errorSynthesisSource: Observable<SpeechSynthesisErrorEvent> = Observable.fromEvent(this.utterance, 'error');
  private boundarySynthesisSource: Observable<SpeechSynthesisEvent> = Observable.fromEvent(this.utterance, 'boundary');
  private markSynthesisSource: Observable<SpeechSynthesisEvent> = Observable.fromEvent(this.utterance, 'mark');
  private resumeSynthesisSource: Observable<SpeechSynthesisEvent> = Observable.fromEvent(this.utterance, 'resume');
  private pauseSynthesisSource: Observable<SpeechSynthesisEvent> = Observable.fromEvent(this.utterance, 'pause');
  
  
  
  constructor() {
    // let grammar = '#JSGF V1.0; grammar phrase; public <phrase> = is there anybody in this room;';
    // let speechRecognitionList: SpeechGrammarList = new webkitSpeechGrammarList();
    // speechRecognitionList.addFromString(grammar, 1);
    // this.recognition.grammars = speechRecognitionList;
    this.recognition.lang = 'en-GB';
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;
    // this.recognition.serviceURI = '';
  
  
    this.utterance.lang = 'en-GB';
    this.utterance.volume = 1;
    let voices: Array<SpeechSynthesisVoice> = this.getVoicesSynthesis();
    this.utterance.voice = voices.filter((voice: SpeechSynthesisVoice) =>{return voice.lang == 'en-GB'})[0];
    this.utterance.pitch = 1;
    this.utterance.rate = 1;
    this.utterance.text = "";
    
  }
  
  startRecognition(): void {
    this.recognition.start();
  }
  
  stopRecognition(): void {
    this.recognition.stop();
  }
  
  abortRecognition(): void {
    this.recognition.abort();
  }
  
  subscribeRecognitionStartEventHandler(
    handler: (event: Event) => void): void {
    this.startRecognitionSource.subscribe(handler);
  }
  
  subscribeRecognitionEndEventHandler(
    handler: (event: Event) => void): void {
    this.endRecognitionSource.subscribe(handler);
  }
  
  subscribeRecognitionResultEventHandler(
    handler: (event: SpeechRecognitionEvent) => void): void {
    this.resultRecognitionSource.subscribe(handler);
  }
  
  subscribeRecognitionErrorEventHandler(
    handler: (event: SpeechRecognitionError) => void): void {
    this.errorRecognitionSource.subscribe(handler);
  }
  
  subscribeRecognitionNoMatchEventHandler(
    handler: (event: SpeechRecognitionEvent) => void): void {
    this.noMatchRecognitionSource.subscribe(handler);
  }
  
  subscribeRecognitionAudioStartEventHandler(
    handler: (event: Event) => void): void {
    this.audioStartRecognitionSource.subscribe(handler);
  }
  
  subscribeRecognitionSoundStartEventHandler(
    handler: (event: Event) => void): void {
    this.soundStartRecognitionSource.subscribe(handler);
  }
  
  subscribeRecognitionSpeechStartEventHandler(
    handler: (event: Event) => void): void {
    this.speechStartRecognitionSource.subscribe(handler);
  }
  
  subscribeRecognitionSpeechEndEventHandler(
    handler: (event: Event) => void): void {
    this.speechEndRecognitionSource.subscribe(handler);
  }
  
  subscribeRecognitionSoundEndEventHandler(
    handler: (event: Event) => void): void {
    this.soundEndRecognitionSource.subscribe(handler);
  }
  
  
  
  speakSynthesis(text: string): void {
    this.utterance.text = text;
    this.synthesis.speak(this.utterance);
  }
  
  pauseSynthesis(): void{
    this.synthesis.pause();
  }
  
  resumeSynthesis(): void{
    this.synthesis.resume();
  }
  
  cancelSynthesis(): void{
    this.synthesis.cancel();
  }
  
  getVoicesSynthesis(): Array<SpeechSynthesisVoice>{
    return this.synthesis.getVoices();
  }
  
  pausedSynthesis(): boolean{
    return this.synthesis.paused;
  }
  
  pendingSynthesis(): boolean{
    return this.synthesis.pending;
  }
  
  speakingSynthesis(): boolean{
    return this.synthesis.speaking;
  }
  
  
  subscribeSynthesisStartEventHandler(
    handler: (event: SpeechSynthesisEvent) => void): void {
    this.startSynthesisSource.subscribe(handler);
  }
  subscribeSynthesisEndEventHandler(
    handler: (event: SpeechSynthesisEvent) => void): void {
    this.endSynthesisSource.subscribe(handler);
  }
  subscribeSynthesisErrorEventHandler(
    handler: (event: SpeechSynthesisErrorEvent) => void): void {
    this.errorSynthesisSource.subscribe(handler);
  }
  subscribeSynthesisBoundaryEventHandler(
    handler: (event: SpeechSynthesisEvent) => void): void {
    this.boundarySynthesisSource.subscribe(handler);
  }
  subscribeSynthesisMarkEventHandler(
    handler: (event: SpeechSynthesisEvent) => void): void {
    this.markSynthesisSource.subscribe(handler);
  }
  subscribeSynthesisResumeEventHandler(
    handler: (event: SpeechSynthesisEvent) => void): void {
    this.resumeSynthesisSource.subscribe(handler);
  }
  subscribeSynthesisPauseEventHandler(
    handler: (event: SpeechSynthesisEvent) => void): void {
    this.pauseSynthesisSource.subscribe(handler);
  }
}
