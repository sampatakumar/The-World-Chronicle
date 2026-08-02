import React, { useState, useEffect } from 'react';
import { Article } from '../types/newspaper';
import { Play, Pause, SkipForward, X, Volume2, Radio } from 'lucide-react';

interface AudioPlayerProps {
  articles: Article[];
  isOpen: boolean;
  onClose: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  articles,
  isOpen,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentArticle = articles[currentIndex] || articles[0];

  useEffect(() => {
    if (!isOpen && isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
    }
  }, [isOpen]);

  const speakCurrent = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser.');
      return;
    }

    window.speechSynthesis.cancel();

    if (!currentArticle) return;

    const textToRead = `Headline: ${currentArticle.title}. ${currentArticle.aiSummary?.executiveSummary || currentArticle.description}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      // Auto advance to next article
      if (currentIndex < articles.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
    } else {
      speakCurrent();
    }
  };

  const handleNext = () => {
    window.speechSynthesis?.cancel();
    if (currentIndex < articles.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      speakCurrent();
    }
  }, [currentIndex]);

  if (!isOpen) return null;

  return (
    <div className="no-print fixed bottom-4 right-4 left-4 sm:left-auto sm:w-96 z-50 bg-[#1c1917] text-[#f4f1e8] p-4 rounded-xl shadow-2xl border-2 border-[#c29b38] font-sans-ui transition-all">
      <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-3">
        <div className="flex items-center gap-2 text-[#c29b38] font-bold text-xs uppercase tracking-widest">
          <Radio className="w-4 h-4 animate-pulse" />
          <span>AUDIO NEWSPAPER BRIEFING</span>
        </div>
        <button onClick={onClose} className="text-stone-400 hover:text-white p-1">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mb-3">
        <span className="text-[10px] text-stone-400 font-semibold uppercase">
          Story {currentIndex + 1} of {articles.length} • {currentArticle?.publisher}
        </span>
        <h4 className="font-serif-headline text-sm font-bold truncate text-white my-0.5">
          {currentArticle?.title}
        </h4>
        <p className="text-xs text-stone-300 line-clamp-2">
          {currentArticle?.aiSummary?.executiveSummary || currentArticle?.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-stone-800">
        <div className="flex items-center gap-2">
          <button
            onClick={handleTogglePlay}
            className="p-2.5 bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-full transition-colors shadow-md"
            title={isPlaying ? 'Pause Speech' : 'Play Audio Digest'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <button
            onClick={handleNext}
            className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-full transition-colors"
            title="Next Story"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 text-xs text-stone-400 font-mono">
          <Volume2 className="w-3.5 h-3.5 text-[#c29b38]" />
          <span>1.0x Voice</span>
        </div>
      </div>
    </div>
  );
};
