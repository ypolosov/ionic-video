import {Component} from '@angular/core';
import {VgAPI, VgFullscreenAPI} from "videogular2/core";
import {NavController} from 'ionic-angular';

@Component({
             selector: 'page-home',
             templateUrl: 'home.html'
           })
export class HomePage {
  
  sources: Array<Object>;
  track: Object;
  controls: boolean = false;
  autoplay: boolean = false;
  loop: boolean = false;
  preload: string = 'auto';
  api: VgAPI;
  fsAPI: VgFullscreenAPI;
  
  constructor(public navCtrl: NavController) {
    this.fsAPI = VgFullscreenAPI;
    
    this.sources = [
      {
        src: "assets/movie/pale-blue-dot.mp4",
        type: "video/mp4"
      }
    ];
    this.track =
      <any>{
        kind: "subtitles",
        label: "English",
        src: "assets/movie/pale-blue-dot.vtt",
        srclang: "en",
        default: true
      };
  }
  
  onPlayerReady(api: VgAPI) {
    this.api = api;
    
    this.api.getDefaultMedia()
        .subscriptions
        .ended
        .subscribe(
          () => {
            // Set the video to the beginning
            this.api.getDefaultMedia().currentTime = 0;
          }
        );
  }
  
  onEnterCuePoint($event) {
    // let startTime = $event.startTime;
    // if (this.clickedCue && (startTime == this.clickedCue.startTime)) {
    //   console.log("onEnterCuePoint - startTime: " + this.clickedCue.startTime + ", endTime: " + this.clickedCue.endTime);
    //   this.api.play();
    // }
  }
  
  onExitCuePoint($event) {
    // let endTime = $event.endTime;
    // if (this.clickedCue && (endTime == this.clickedCue.endTime)) {
    //   console.log("onExitCuePoint - startTime: " + this.clickedCue.startTime + ", endTime: " + this.clickedCue.endTime);
    //   this.clickedCue = null;
    //   this.api.pause();
    // }
  }
  
  onCueClick(cue: any) {
    
    let clickedCue = cue;
    this.api.currentTime = 0;
    console.log("onCueClick - startTime: " + clickedCue.startTime + ", endTime: " + clickedCue.endTime);
    let duration = (clickedCue.endTime - clickedCue.startTime) * 1000;
    setTimeout(() => {
      this.api.pause();
    }, duration);
    this.api.currentTime = clickedCue.startTime;
    this.api.play();
    
    // let tu = this.api.getDefaultMedia().subscriptions.timeUpdate;
    // this.api.currentTime = startTime;
    // this.api.play();
    // let tuSub = tu.subscribe(
    //     () => {
    //         if (this.api.currentTime >= endTime) {
    //             tuSub.unsubscribe();
    //             this.api.pause();
    //         }
    //     }
    // );
  }
  
}
