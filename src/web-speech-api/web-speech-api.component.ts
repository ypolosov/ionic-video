import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {WebSpeechApiService} from "./web-speech-api.service";
import {WebSpeechApiModel} from "./web-speech-api.model";
import {WebSpeechApiResultModel} from "./web-speech-api-result.model";

@Component({
             selector: 'web-speech-api',
             templateUrl: 'web-speech-api.component.html'
           })
export class WebSpeechApiComponent implements OnInit {
  
  @Input()
  model: WebSpeechApiModel = new WebSpeechApiModel();
  
  @Output()
  resultChange: EventEmitter<WebSpeechApiModel> = new EventEmitter();
  
  @Output()
  isRecognitionProcessingChange: EventEmitter<WebSpeechApiModel> = new EventEmitter();
  
  @Output()
  isSynthesisProcessingChange: EventEmitter<WebSpeechApiModel> = new EventEmitter();
  
  private timeoutId: number = 0;
  
  constructor(
    private webSpeechApiService: WebSpeechApiService) {
    
    this.webSpeechApiService.subscribeRecognitionStartEventHandler((event) => {
      this.onRecognitionStartEventHander(event)
    });
    this.webSpeechApiService.subscribeRecognitionEndEventHandler((event) => {
      this.onRecognitionEndEventHander(event)
    });
    this.webSpeechApiService.subscribeRecognitionErrorEventHandler((event) => {
      this.onRecognitionErrorEventHander(event)
    });
    this.webSpeechApiService.subscribeRecognitionResultEventHandler((event) => {
      this.onRecognitionResultEventHander(event)
    });
    this.webSpeechApiService.subscribeRecognitionNoMatchEventHandler((event) => {
      this.onRecognitionNoMatchEventHander(event)
    });
    this.webSpeechApiService.subscribeRecognitionAudioStartEventHandler((event) => {
      this.onRecognitionAudioStartEventHander(event)
    });
    this.webSpeechApiService.subscribeRecognitionSoundStartEventHandler((event) => {
      this.onRecognitionSoundStartEventHander(event)
    });
    this.webSpeechApiService.subscribeRecognitionSpeechStartEventHandler((event) => {
      this.onRecognitionSpeechStartEventHander(event)
    });
    this.webSpeechApiService.subscribeRecognitionSpeechEndEventHandler((event) => {
      this.onRecognitionSpeechEndEventHander(event)
    });
    this.webSpeechApiService.subscribeRecognitionSoundEndEventHandler((event) => {
      this.onRecognitionSoundEndEventHander(event)
    });
    
    this.webSpeechApiService.subscribeSynthesisBoundaryEventHandler((event) => {
      this.onSynthesisBoundaryEventHandler(event)
    });
    this.webSpeechApiService.subscribeSynthesisEndEventHandler((event) => {
      this.onSynthesisEndEventHandler(event)
    });
    this.webSpeechApiService.subscribeSynthesisErrorEventHandler((event) => {
      this.onSynthesisErrorEventHandler(event)
    });
    this.webSpeechApiService.subscribeSynthesisMarkEventHandler((event) => {
      this.onSynthesisMarkEventHandler(event)
    });
    this.webSpeechApiService.subscribeSynthesisPauseEventHandler((event) => {
      this.onSynthesisPauseEventHandler(event)
    });
    this.webSpeechApiService.subscribeSynthesisResumeEventHandler((event) => {
      this.onSynthesisResumeEventHandler(event)
    });
    this.webSpeechApiService.subscribeSynthesisStartEventHandler((event) => {
      this.onSynthesisStartEventHandler(event)
    });
  }
  
  ngOnInit() {
    
  }
  
  startRecognation() {
    this.startTimeout();
    this.webSpeechApiService.startRecognition();
    this.model.isRecognitionProcessing = true;
    this.isRecognitionProcessingChange.next(this.model);
  }
  
  stopRecognation() {
    this.stopTimeout();
    this.webSpeechApiService.stopRecognition();
    this.model.isRecognitionProcessing = false;
    this.isRecognitionProcessingChange.next(this.model);
  }
  
  onClickRecognationButton(event: Event): void {
    event.preventDefault();
    if(!this.model.isRecognitionProcessing) {
      this.startRecognation();
    } else {
      this.stopRecognation();
    }
  }
  
  onRecognitionStartEventHander(event: Event): void {
    console.log("start recognition");
    this.model.result = new WebSpeechApiResultModel([], false);
    this.resultChange.next(this.model);
    this.model.isRecognitionProcessing = true;
    this.isRecognitionProcessingChange.next(this.model);
  }
  
  onRecognitionEndEventHander(event: Event): void {
    console.log("end recognition");
    this.model.isRecognitionProcessing = false;
    this.isRecognitionProcessingChange.next(this.model);
  }
  
  onRecognitionErrorEventHander(event: SpeechRecognitionError): void {
    console.log("error recognition");
    this.model.result = new WebSpeechApiResultModel([], false);
    this.resultChange.next(this.model);
    this.model.isRecognitionProcessing = false;
    this.isRecognitionProcessingChange.next(this.model);
  }
  
  onRecognitionResultEventHander(event: SpeechRecognitionEvent): void {
    this.stopTimeout();
    this.startTimeout();
    
    // let isLast: boolean = false;
    let resultList: SpeechRecognitionResultList = event.results;
    for(let i = 0; i < resultList.length; i++) {
      let r: SpeechRecognitionResult = resultList[i];
      // for(let j = 0; j < r.length; j++) {
      let j = 0;
      let alt: SpeechRecognitionAlternative = r[j];
      let words: Array<string> = alt.transcript.split(" ");
      // isLast = (r.isFinal && j == r.length - 1);
      this.model.result = new WebSpeechApiResultModel(words, false);
      console.log(`${i}-${j}: ${this.model.result}`);
      this.resultChange.next(this.model);
      // }
    }
    // if(isLast) {
    //   this.stop();
    // }
  }
  
  onRecognitionNoMatchEventHander(event: SpeechRecognitionEvent): void {
    console.log("nomatch recognition");
  }
  
  onRecognitionAudioStartEventHander(event: Event): void {
    console.log("audiostart recognition");
  }
  
  onRecognitionSoundStartEventHander(event: Event): void {
    console.log("soundstart recognition");
  }
  
  onRecognitionSpeechStartEventHander(event: Event): void {
    console.log("speechstart recognition");
  }
  
  onRecognitionSpeechEndEventHander(event: Event): void {
    console.log("speechend recognition");
    this.makeLastResult();
  }
  
  onRecognitionSoundEndEventHander(event: Event): void {
    console.log("soundend recognition");
  }
  
  makeLastResult(): void {
    this.model.result = new WebSpeechApiResultModel(this.model.result.words, true);
    console.log(`LAST: ${this.model.result}`);
    this.resultChange.next(this.model);
  }
  
  private startTimeout() {
    console.log("start timeout");
    this.timeoutId = setTimeout(() => {
      console.log("run timeout");
      this.stopRecognation();
    }, 3000);
  }
  
  private stopTimeout() {
    console.log("stop timeout");
    clearTimeout(this.timeoutId);
  }
  
  
  
  
  
  
  speakSynthesis(text: string): void {
    this.webSpeechApiService.speakSynthesis(text);
    this.model.isSynthesisProcessing = true;
    this.isSynthesisProcessingChange.next(this.model);
    
  }
  
  cancelSynthesis(): void {
    this.webSpeechApiService.cancelSynthesis();
    this.model.isSynthesisProcessing = false;
    this.isSynthesisProcessingChange.next(this.model);
  }
  
  onClickSynthesisButton(event: Event): void {
    event.preventDefault();
    if(!this.model.isSynthesisProcessing) {
      this.speakSynthesis(this.model.sample);
    } else {
      this.cancelSynthesis();
    }
  }
  
  onSynthesisBoundaryEventHandler(event: SpeechSynthesisEvent): void {
    console.log("boundary synthesis");
  }
  
  onSynthesisEndEventHandler(event: SpeechSynthesisEvent): void {
    console.log("end synthesis");
    this.model.isSynthesisProcessing = false;
    this.isSynthesisProcessingChange.next(this.model);
  }
  
  onSynthesisErrorEventHandler(event: SpeechSynthesisErrorEvent): void {
    console.log("error synthesis");
    this.model.isSynthesisProcessing = false;
    this.isSynthesisProcessingChange.next(this.model);
  }
  
  onSynthesisMarkEventHandler(event: SpeechSynthesisEvent): void {
    console.log("mark synthesis");
  }
  
  onSynthesisPauseEventHandler(event: SpeechSynthesisEvent): void {
    console.log("pause synthesis");
  }
  
  onSynthesisResumeEventHandler(event: SpeechSynthesisEvent): void {
    console.log("resume synthesis");
  }
  
  onSynthesisStartEventHandler(event: SpeechSynthesisEvent): void {
    console.log("start synthesis");
  }
}
