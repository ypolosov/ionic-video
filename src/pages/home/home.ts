import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomeModel} from "./home.model";
import {TextRecognizerModel} from "../../text-recognizer/text-recognizer.model";
import {WebSpeechApiModel} from "../../web-speech-api/web-speech-api.model";

@Component({
             selector: 'page-home',
             templateUrl: 'home.html'
           })
export class HomePage implements OnInit, OnChanges{
  
  model: HomeModel = HomeModel.create("is there anybody in this room");

  
  ngOnInit() {
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
  }
  
  onResultChanged(webSpeechApiModel: WebSpeechApiModel): void{
    let isLast: boolean = webSpeechApiModel.result.isLast;
    let candidate: string = webSpeechApiModel.result.words.join(" ");
    this.model.textRecognizer = TextRecognizerModel.create(this.model.sample, candidate, isLast);
  }
  
  onIsRecognitionProcessingChanged(webSpeechApiModel: WebSpeechApiModel): void{

  }
  
  onIsSynthesisProcessingChanged(webSpeechApiModel: WebSpeechApiModel): void{
    
  }
  
  

  
}
