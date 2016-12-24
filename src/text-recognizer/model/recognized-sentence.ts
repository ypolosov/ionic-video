import {RecognizedWord} from "./recognized-word";

export class RecognizedSentence {
  
  constructor(
    public words: Array<RecognizedWord>,
    public isFinal: boolean) {
    
  }
}
