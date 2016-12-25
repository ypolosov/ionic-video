export class WebSpeechApiResultModel {
  constructor(
    public words: Array<string> = [],
    public isFinal: boolean = false) {
    
  }
  
  toString(): string{
    return `${(this.isFinal?"final":"middle")} result: ${this.words.join(" ").toUpperCase()}`;
  }
}
