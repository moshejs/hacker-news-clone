import StoryList from './StoryList';

async function getTopStories() {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json', {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch top stories');
  }

  return res.json();
}

async function getStoryDetails(storyId) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch story details for story ID: ${storyId}`);
  }

  return res.json();
}



export default async function Home() {
  const topStoryIds = await getTopStories();
  const topStories = await Promise.all(
    topStoryIds.slice(0, 10).map((storyId) => getStoryDetails(storyId))
  );

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

