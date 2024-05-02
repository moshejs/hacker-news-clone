'use client'
import { useEffect, useState } from 'react';
import StoryList from '../StoryList';

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
    method: 'GET'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch top stories');
  }

  return res.json();
}

async function getStoryDetails(storyId: number): Promise<Story> {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`, {
    method: 'GET'
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
          topStoryIds.slice(0, 10).map((storyId) => getStoryDetails(storyId))
        );
        setTopStories(stories);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStories();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 p-4 border-t-4 border-orange-500" style={{ borderColor: '#FE7139' }}>
          <div className="flex items-center space-x-4">
            <h1 className="font-bold text-2xl mb-0 font-mono text-black">Hacker News</h1>
          </div>
          <StoryList stories={topStories} />
        </div>
      </div>
    </main>

  );
}
