'use client';

import { useState } from 'react';
import StoryItem from './StoryItem';

export default function StoryList({ stories }) {
  const [view, setView] = useState('latest');
  const [savedStories, setSavedStories] = useState([]);

  const handleSaveStory = (story) => {
    if (savedStories.some((savedStory) => savedStory.id === story.id)) {
      setSavedStories(savedStories.filter((savedStory) => savedStory.id !== story.id));
    } else {
      setSavedStories([...savedStories, story]);
    }
  };

  const displayedStories = view === 'latest' ? stories : savedStories;

  return (
    <>
      <div className="flex space-x-2">
        <a
          href="#"
          className={`${
            view === 'latest' ? 'hover:text-indigo-700' : 'text-gray-700 hover:text-gray-800'
          } font-opensans`}
          style={{ color: view === 'latest' ? '#FE7139' : 'text-black' }}
          onClick={() => setView('latest')}
        >
          latest
        </a>
        <a
          href="#"
          className={`${
            view === 'starred' ? 'hover:text-indigo-700' : 'text-gray-700 hover:text-gray-800'
          } font-opensans`}
          style={{ color: view === 'starred' ? '#FE7139' : 'text-black' }}
          onClick={() => setView('starred')}
        >
          | starred
        </a>
      </div>
      <ul className="space-y-2">
        {displayedStories.map((story, index) => (
          <StoryItem
            key={story.id}
            story={story}
            index={index}
            onSave={handleSaveStory}
            isSaved={savedStories.some((savedStory) => savedStory.id === story.id)}
          />
        ))}
      </ul>
    </>
  );
}