import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {WebSpeechApiService} from "./web-speech-api.service";
import {RecognizedSentence} from "../text-recognizer/model/recognized-sentence";
import {RecognizedWord} from "../text-recognizer/model/recognized-word";

@Component({
             selector: 'web-speech-api',
             templateUrl: 'web-speech-api.component.html'
           })
export class WebSpeechApiComponent implements OnInit {
  
  @Input()
  isRecognizing: boolean;
  
  @Output()
  isRecognizingChange: EventEmitter<boolean> = new EventEmitter();
  
  @Input()
  recognizedSentence: RecognizedSentence;
  
  @Output()
  recognizedSentenceChange: EventEmitter<RecognizedSentence> = new EventEmitter();
  
  private
  
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
    
  }
  
  ngOnInit() {
    
  }
  
  start() {
    this.webSpeechApiService.start();
    this.isRecognizing = true;
  }
  
  stop() {
    this.webSpeechApiService.stop();
    this.isRecognizing = false;
  }
  
  onClickButton(event: Event): void {
    event.preventDefault();
    if(!this.isRecognizing) {
      this.start();
    } else {
      this.stop();
    }
  }
  
  onStartEventHander(event: Event): void {
    this.isRecognizingChange.next(true);
    this.recognizedSentence = new RecognizedSentence([], false);
    this.recognizedSentenceChange.next(this.recognizedSentence);
    console.log("start");
  }
  
  onEndEventHander(event: Event): void {
    this.isRecognizingChange.next(false);
    this.recognizedSentence = new RecognizedSentence([], false);
    this.recognizedSentenceChange.next(this.recognizedSentence);
    console.log("end");
  }
  
  onErrorEventHander(event: SpeechRecognitionError): void {
    console.log("error");
  }
  
  onResultEventHander(event: SpeechRecognitionEvent): void {
    
    let resultList: SpeechRecognitionResultList = event.results;
    for(let i = 0; i < resultList.length; i++) {
      let result: SpeechRecognitionResult = resultList[i];
      let isFinal: boolean = result.isFinal;
      for(let j = 0; j < result.length; j++) {
        let alt: SpeechRecognitionAlternative = result[j];
        let words: Array<RecognizedWord> = alt.transcript.split(" ")
                                              .map((word: string) => {
                                                return new RecognizedWord(word);
                                              });
        this.recognizedSentence = new RecognizedSentence(words, isFinal);
        this.recognizedSentenceChange.next(this.recognizedSentence);
      }
    }
  }
  
  onNoMatchEventHander(event: SpeechRecognitionEvent): void {
    console.log("nomatch");
  }
}
