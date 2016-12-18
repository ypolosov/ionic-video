import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {VgAPI, VgFullscreenAPI} from "videogular2/core";

// import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage = TabsPage;
  
  
  sources: Array<Object>;
  track: Object;
  controls: boolean = false;
  autoplay: boolean = false;
  loop: boolean = false;
  preload: string = 'auto';
  api: VgAPI;
  fsAPI: VgFullscreenAPI;
  
  clickedCue: any;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
  
  
      
      
      
    });
  
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
