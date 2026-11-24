'use client';
import { useEffect, useState } from 'react';
import StoryList from '../components/StoryList';

interface Story {
  id: string;
  url: string;
  title: string;
  score: number;
  by: string;
  time: number;
  descendants: number;
}

async function getTopStories(): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json', {
    method: 'GET',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch top stories');
  }
  return res.json();
}

async function getStoryDetails(storyId: number): Promise<Story> {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`, {
    method: 'GET',
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch story details for story ID: ${storyId}`);
  }
  return res.json();
}

export default function Home() {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [displayedStoryCount, setDisplayedStoryCount] = useState(10);
  const [loadedStoryCount, setLoadedStoryCount] = useState(0);

  useEffect(() => {
    async function fetchStoryIds() {
      try {
        const topStoryIds = await getTopStories();
        setStoryIds(topStoryIds);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStoryIds();
  }, []);

  useEffect(() => {
    async function fetchStories() {
      try {
        const storiesToFetch = storyIds.slice(loadedStoryCount, loadedStoryCount + 10);
        const fetchedStories = await Promise.all(storiesToFetch.map((storyId) => getStoryDetails(storyId)));
        setStories((prevStories) => [...prevStories, ...fetchedStories]);
        setLoadedStoryCount((prevCount) => prevCount + 10);
      } catch (error) {
        console.error(error);
      }
    }
    if (loadedStoryCount < displayedStoryCount && loadedStoryCount < storyIds.length) {
      fetchStories();
    }
  }, [storyIds, loadedStoryCount, displayedStoryCount]);

  const handleShowMore = () => {
    setDisplayedStoryCount((prevCount) => prevCount + 10);
  };

  return (
    <main>
      <div className="bg-gray-100 p-4 border-t-4 border-orange-500" style={{ borderColor: '#FE7139' }}>
        <StoryList stories={stories.slice(0, displayedStoryCount)} onShowMore={handleShowMore} />
      </div>
    </main>
  );
}