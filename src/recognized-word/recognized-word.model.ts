export class RecognizedWordModel {
  constructor(public value: string = "") {
    
  }
  
  toString(): string{
    return this.value;
  }
}
