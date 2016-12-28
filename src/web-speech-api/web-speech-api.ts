export interface WebSpeechApi {
  
  startRecognition(): void;
  
  stopRecognition(): void;
  
  abortRecognition(): void;
  
  subscribeRecognitionStartEventHandler(handler: (event: Event) => void): void;
  
  subscribeRecognitionEndEventHandler(handler: (event: Event) => void): void;
  
  subscribeRecognitionResultEventHandler(handler: (event: SpeechRecognitionEvent) => void): void;
  
  subscribeRecognitionErrorEventHandler(handler: (event: SpeechRecognitionError) => void): void;
  
  subscribeRecognitionNoMatchEventHandler(handler: (event: SpeechRecognitionEvent) => void): void;
  
  subscribeRecognitionAudioStartEventHandler(handler: (event: Event) => void): void;
  
  subscribeRecognitionSoundStartEventHandler(handler: (event: Event) => void): void;
  
  subscribeRecognitionSpeechStartEventHandler(handler: (event: Event) => void): void;
  
  subscribeRecognitionSpeechEndEventHandler(handler: (event: Event) => void): void;
  
  subscribeRecognitionSoundEndEventHandler(handler: (event: Event) => void): void;
  
}
