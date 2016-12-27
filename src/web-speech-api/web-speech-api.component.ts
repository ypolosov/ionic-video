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
  isProcessingChange: EventEmitter<WebSpeechApiModel> = new EventEmitter();
  
  private timeoutId: number = 0;
  
  constructor(
    private webSpeechApiService: WebSpeechApiService) {
    
    this.webSpeechApiService.subscribeStartEventHandler((event) => {
      this.onStartEventHander(event)
    });
    this.webSpeechApiService.subscribeEndEventHandler((event) => {
      this.onEndEventHander(event)
    });
    this.webSpeechApiService.subscribeErrorEventHandler((event) => {
      this.onErrorEventHander(event)
    });
    this.webSpeechApiService.subscribeResultEventHandler((event) => {
      this.onResultEventHander(event)
    });
    this.webSpeechApiService.subscribeNoMatchEventHandler((event) => {
      this.onNoMatchEventHander(event)
    });
    this.webSpeechApiService.subscribeAudioStartEventHandler((event) => {
      this.onAudioStartEventHander(event)
    });
    this.webSpeechApiService.subscribeSoundStartEventHandler((event) => {
      this.onSoundStartEventHander(event)
    });
    this.webSpeechApiService.subscribeSpeechStartEventHandler((event) => {
      this.onSpeechStartEventHander(event)
    });
    this.webSpeechApiService.subscribeSpeechEndEventHandler((event) => {
      this.onSpeechEndEventHander(event)
    });
    this.webSpeechApiService.subscribeSoundEndEventHandler((event) => {
      this.onSoundEndEventHander(event)
    });
    
  }
  
  ngOnInit() {
    
  }
  
  start() {
    this.startTimeout();
    this.webSpeechApiService.start();
    this.model.isProcessing = true;
    this.isProcessingChange.next(this.model);
  }
  
  stop() {
    this.stopTimeout();
    this.webSpeechApiService.stop();
    this.model.isProcessing = false;
    this.isProcessingChange.next(this.model);
  }
  
  onClickButton(event: Event): void {
    event.preventDefault();
    if(!this.model.isProcessing) {
      this.start();
    } else {
      this.stop();
    }
  }
  
  onStartEventHander(event: Event): void {
    console.log("start");
    this.model.result = new WebSpeechApiResultModel([], false);
    this.resultChange.next(this.model);
    this.model.isProcessing = true;
    this.isProcessingChange.next(this.model);
  }
  
  onEndEventHander(event: Event): void {
    console.log("end");
    this.model.isProcessing = false;
    this.isProcessingChange.next(this.model);
  }
  
  onErrorEventHander(event: SpeechRecognitionError): void {
    console.log("error");
    this.model.result = new WebSpeechApiResultModel([], false);
    this.resultChange.next(this.model);
    this.model.isProcessing = false;
    this.isProcessingChange.next(this.model);
  }
  
  onResultEventHander(event: SpeechRecognitionEvent): void {
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
  
  onNoMatchEventHander(event: SpeechRecognitionEvent): void {
    console.log("nomatch");
  }
  
  onAudioStartEventHander(event: Event): void {
    console.log("audiostart");
  }
  
  onSoundStartEventHander(event: Event): void {
    console.log("soundstart");
  }
  
  onSpeechStartEventHander(event: Event): void {
    console.log("speechstart");
  }
  
  onSpeechEndEventHander(event: Event): void {
    console.log("speechend");
    this.makeLastResult();
  }
  
  onSoundEndEventHander(event: Event): void {
    console.log("soundend");
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
      this.stop();
    }, 3000);
  }
  
  private stopTimeout() {
    console.log("stop timeout");
    clearTimeout(this.timeoutId);
  }
}
