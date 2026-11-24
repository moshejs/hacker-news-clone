'use client';
import { useSavedStories } from '../contexts/SavedStoriesContext';
import {useState} from 'react';
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
  onShowMore: () => void;
}

type ViewType = 'latest' | 'starred';

export default function StoryList({ stories, onShowMore }: StoryListProps) {
  const [view, setView] = useState<ViewType>('latest');
  const { savedStories, saveStory } = useSavedStories();
  const displayedStories = view === 'latest' ? stories : savedStories;

  return (
    <>
      <div className="flex items-center space-x-4">
        <h1 className="font-bold text-2xl mb-0 font-mono text-black">Hacker News</h1>
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
      {view === 'latest' && (
        <button className="bg-orange-500 text-white px-4 py-2 rounded" onClick={onShowMore}>
          Show More
        </button>
      )}
    </>
  );
}