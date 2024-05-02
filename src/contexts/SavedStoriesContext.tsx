'use client';
import React, { createContext, useContext, useState } from 'react';

interface Story {
  id: string;
  url: string;
  title: string;
  score: number;
  by: string;
  time: number;
  descendants: number;
}

interface SavedStoriesContextType {
  savedStories: Story[];
  saveStory: (story: Story) => void;
}

const SavedStoriesContext = createContext<SavedStoriesContextType>({
  savedStories: [],
  saveStory: () => {},
});

export const useSavedStories = () => useContext(SavedStoriesContext);

export const SavedStoriesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedStories, setSavedStories] = useState<Story[]>([]);

  const saveStory = (story: Story) => {
    const isStoryAlreadySaved = savedStories.some((savedStory) => savedStory.id === story.id);

    if (isStoryAlreadySaved) {
      // Remove the story from savedStories if it's already saved
      setSavedStories(savedStories.filter((savedStory) => savedStory.id !== story.id));
    } else {
      // Add the story to savedStories if it's not already saved
      setSavedStories([...savedStories, story]);
    }
  };

  return (
    <SavedStoriesContext.Provider value={{ savedStories, saveStory }}>
      {children}
    </SavedStoriesContext.Provider>
  );
};