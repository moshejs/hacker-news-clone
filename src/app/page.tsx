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
  const [topStories, setTopStories] = useState<Story[]>([]);

  useEffect(() => {
    async function fetchStories() {
      try {
        const topStoryIds = await getTopStories();
        const stories = await Promise.all(
          topStoryIds.slice(0, 20).map((storyId) => getStoryDetails(storyId))
        );
        setTopStories(stories);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStories();
  }, []);

  return (
    <main>
        <div className="bg-gray-100 p-4 border-t-4 border-orange-500" style={{ borderColor: '#FE7139' }}>
          <StoryList stories={topStories} />
        </div>
    </main>
  );
}
