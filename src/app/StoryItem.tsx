'use client';

import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

function extractDomain(url) {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;
      const parts = hostname.split('.');
      if (parts.length > 1) {
        return parts.slice(-2).join('.'); // Joins the last two parts, e.g., domain and TLD
      }
      return hostname; // Return the full hostname if it's not a standard domain
    } catch (e) {
      console.error("Invalid URL provided");
      return null;
    }
  }

export default function StoryItem({ story, index }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveStory = () => {
    setIsSaved(!isSaved);
  };

  return (
    <li className="border-t border-gray-300 pt-2">
      <span className="text-lg font-normal leading-5 font-mono text-black-half">{index + 1}.</span>{' '}
      <a href={story.url} className="font-bold leading-5 font-opensans text-lg text-black">{story.title}</a>
      <a href={story.url} className="text-xs leading-tight font-sans text-gray-500">
        {` (${extractDomain(story.url)})`}
      </a>
      <div className="text-xs leading-tight font-opensans text-black-half pt-1.5">
        {story.score} points by {story.by}{' '}
        {formatDistanceToNow(new Date(story.time * 1000), { addSuffix: true })} |{' '}
        {story.descendants} comments |{' '}
        <button
          onClick={handleSaveStory}
          className="focus:outline-none"
        >
          {isSaved ? 'saved' : 'save'}
        </button>
      </div>
    </li>
  );
}