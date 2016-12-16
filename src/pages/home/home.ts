import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {VgAPI, VgFullscreenAPI} from "videogular2/core";

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
  
  clickedCue: any;
  
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
    
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
        // Set the video to the beginning
        this.api.getDefaultMedia().currentTime = 0;
      }
    );
  }
  
  
  onEnterCuePoint($event) {
    let startTime = $event.startTime;
    if (this.clickedCue && (startTime == this.clickedCue.startTime)) {
      this.api.play();
    }
  }
  
  onExitCuePoint($event) {
    let endTime = $event.endTime;
    if (this.clickedCue && (endTime == this.clickedCue.endTime)) {
      this.clickedCue = null;
      this.api.pause();
    }
    
  }
  
  onCueClick(cue: any) {
    
    this.clickedCue = cue;
    this.api.currentTime = this.clickedCue.startTime;
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
