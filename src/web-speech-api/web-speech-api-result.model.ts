export class WebSpeechApiResultModel {
  constructor(
    public words: Array<string> = [],
    public isLast: boolean = false) {
    
  }
  
  toString(): string{
    return JSON.stringify( this, null, "-----" );
    // return `${(this.isFinal?"final":"middle")} result: ${this.words.join(" ").toUpperCase()}`;
  }
}
