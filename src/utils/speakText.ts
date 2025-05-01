// src/utils/speakText.ts
export function speakText(text: string) {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel(); // stop any current speech
    window.speechSynthesis.speak(utterance);
  }
  