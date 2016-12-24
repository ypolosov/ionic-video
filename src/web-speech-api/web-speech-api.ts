export interface WebSpeechApi {
  
  start(): void;
  
  stop(): void;
  
  abort(): void;
  
  subscribeStartEventHandler(handler: (event: Event) => void): void;
  
  subscribeEndEventHandler(handler: (event: Event) => void): void;
  
  subscribeResultEventHandler(handler: (event: SpeechRecognitionEvent) => void): void;
  
  subscribeErrorEventHandler(handler: (event: SpeechRecognitionError) => void): void;
  
  subscribeNoMatchEventHandler(handler: (event: SpeechRecognitionEvent) => void): void;
  
  subscribeAudioStartEventHandler(handler: (event: Event) => void): void;
  
  subscribeSoundStartEventHandler(handler: (event: Event) => void): void;
  
  subscribeSpeechStartEventHandler(handler: (event: Event) => void): void;
  
  subscribeSpeechEndEventHandler(handler: (event: Event) => void): void;
  
  subscribeSoundEndEventHandler(handler: (event: Event) => void): void;
  
}
