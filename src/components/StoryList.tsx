'use client';

import { useState } from 'react';
import { useSavedStories } from '../contexts/SavedStoriesContext';
import StoryItem from './StoryItem';

interface Story {
  id: string;
  url: string;
  title: string;
  score: number;
  by: string;
  time: number;
  descendants: number;
}

interface StoryListProps {
  stories: Story[];
}

type ViewType = 'latest' | 'starred';

export default function StoryList({ stories }: StoryListProps) {
  const [view, setView] = useState<ViewType>('latest');
  const [displayedStoryCount, setDisplayedStoryCount] = useState(10);
  const { savedStories, saveStory } = useSavedStories();

  const displayedStories =
    view === 'latest'
      ? stories.slice(0, displayedStoryCount)
      : savedStories;

  const handleShowMore = () => {
    setDisplayedStoryCount((prevCount) => prevCount + 10);
  };

  return (
    <>
      <div className="flex space-x-2">
        <a
          className={`${
            view === 'latest' ? 'hover:text-indigo-700' : 'text-gray-700 hover:text-gray-800'
          } font-opensans`}
          style={{ color: view === 'latest' ? '#FE7139' : undefined }}
          onClick={() => setView('latest')}
        >
          latest
        </a>
        <span className={'text-gray-700'}> | </span>
        <a
          className={`${
            view === 'starred' ? 'hover:text-indigo-700' : 'text-gray-700 hover:text-gray-800'
          } font-opensans`}
          style={{ color: view === 'starred' ? '#FE7139' : undefined }}
          onClick={() => setView('starred')}
        >
          starred
        </a>
      </div>
      <ul className="space-y-2">
        {displayedStories.map((story, index) => (
          <StoryItem
            key={story.id}
            story={story}
            index={index}
            onSave={saveStory}
            isSaved={savedStories.some((savedStory) => savedStory.id === story.id)}
          />
        ))}
      </ul>
      {view === 'latest' && displayedStoryCount < stories.length && (
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </>
  );
}