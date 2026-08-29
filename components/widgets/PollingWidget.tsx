'use client';

import React, { useState } from 'react';
import { Vote } from 'lucide-react';
import { Poll } from '@/types';

interface PollingWidgetProps {
  poll: Poll;
}

export const PollingWidget: React.FC<PollingWidgetProps> = ({ poll }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true);
    }
  };

  return (
    <section className="bg-surface-container-low rounded-xl p-stack-md md:p-gutter border border-outline-variant my-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Vote className="w-5 h-5 text-[#e74c3c]" />
        <h3 className="font-headline-md text-on-surface text-xl font-bold">Polling Lokal</h3>
      </div>
      <p className="font-body-lg text-on-surface mb-6">{poll.question}</p>

      <div className="flex flex-col gap-3">
        {poll.options.map(option => (
          <label
            key={option.id}
            className={`flex items-center justify-between p-4 rounded-lg border border-outline-variant hover:border-[#e74c3c] cursor-pointer transition-colors bg-surface group ${
              selectedOption === option.id ? 'border-[#e74c3c] bg-red-50/20' : ''
            }`}
          >
            <span className="font-button text-on-surface group-hover:text-[#e74c3c]">
              {option.text}
            </span>
            <input
              type="radio"
              name="poll"
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              className="text-[#e74c3c] focus:ring-[#e74c3c] w-5 h-5 border-outline-variant accent-[#e74c3c]"
            />
          </label>
        ))}
      </div>

      <div className="mt-4 text-right">
        <button
          onClick={handleVote}
          disabled={!selectedOption || hasVoted}
          className={`bg-[#e74c3c] text-on-primary font-button px-6 py-2 rounded-full transition-transform ${
            hasVoted ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
          }`}
        >
          {hasVoted ? 'Terima Kasih!' : 'Vote Sekarang'}
        </button>
      </div>
    </section>
  );
};
