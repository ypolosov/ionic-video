export interface WebSpeechApi {
  
  start(): void;
  
  stop(): void;
  
  abort(): void;
  
  subscribeStartEventHandler(context: any, handler: (event: Event) => void): void;
  
  subscribeEndEventHandler(context: any, handler: (event: Event) => void): void;
  
  subscribeResultEventHandler(context: any, handler: (event: SpeechRecognitionEvent) => void): void;
  
  subscribeErrorEventHandler(context: any, handler: (event: SpeechRecognitionError) => void): void;
  
  subscribeNoMatchEventHandler(context: any, handler: (event: SpeechRecognitionEvent) => void): void;
  
  subscribeAudioStartEventHandler(context: any, handler: (event: Event) => void): void;
  
  subscribeSoundStartEventHandler(context: any, handler: (event: Event) => void): void;
  
  subscribeSpeechStartEventHandler(context: any, handler: (event: Event) => void): void;
  
  subscribeSpeechEndEventHandler(context: any, handler: (event: Event) => void): void;
  
  subscribeSoundEndEventHandler(context: any, handler: (event: Event) => void): void;
  
}
