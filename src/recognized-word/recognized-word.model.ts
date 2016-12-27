export class RecognizedWordModel {
  constructor(
    public sample: string = "",
    public candidate: string = "",
    public isLast: boolean = false) {
    
  }
  
  static create(
    sample: string,
    candidate: string,
    isLast: boolean): RecognizedWordModel {
    return new RecognizedWordModel(sample, candidate, isLast);
  }
  
  toString(): string {
    return JSON.stringify(this, null, "-----");
  }
}
