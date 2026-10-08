import { useEffect, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import ComicDetailPage from './pages/ComicDetailPage';
import ReaderPage from './pages/ReaderPage';
import UserPage from './pages/UserPage';
import { COMICS } from './data/comics';

function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default function App() {
  const [favorites, setFavorites] = usePersistentState('mhq-favorites', []);
  const [readingHistory, setReadingHistory] = usePersistentState('mhq-history', []);
  const [progressMap, setProgressMap] = usePersistentState('mhq-progress', {});
  const [settings, setSettings] = usePersistentState('mhq-settings', {
    autoSave: true,
    zoom: 1,
    readingMode: 'vertical'
  });

  const toggleFavorite = (comicId) => {
    setFavorites((current) =>
      current.includes(comicId)
        ? current.filter((id) => id !== comicId)
        : [...current, comicId]
    );
  };

  const markRead = (comicId, pageIndex) => {
    const comic = COMICS.find((item) => item.id === comicId);
    if (!comic) {
      return;
    }

    const pageNumber = pageIndex + 1;
    const percent = Math.min(100, Math.max(0, Math.round((pageNumber / comic.pages.length) * 100)));

    setProgressMap((current) => ({
      ...current,
      [comicId]: {
        currentPage: pageIndex,
        percent,
        updatedAt: new Date().toISOString()
      }
    }));

    setReadingHistory((current) => {
      const remaining = current.filter((entry) => entry.comicId !== comicId);
      return [{ comicId, timestamp: new Date().toISOString() }, ...remaining].slice(0, 8);
    });
  };

  const updateSettings = (updates) => {
    setSettings((current) => ({ ...current, ...updates }));
  };

  const favoriteComics = useMemo(
    () => COMICS.filter((comic) => favorites.includes(comic.id)),
    [favorites]
  );

  return (
    <div className="app-shell">
      <TopNav />

      <main className="page-shell">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                progressMap={progressMap}
                readingHistory={readingHistory}
              />
            }
          />
          <Route
            path="/library"
            element={<LibraryPage favorites={favorites} onToggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/comic/:comicId"
            element={
              <ComicDetailPage
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/reader/:comicId"
            element={
              <ReaderPage
                progressMap={progressMap}
                settings={settings}
                markRead={markRead}
                updateSettings={updateSettings}
              />
            }
          />
          <Route
            path="/user"
            element={
              <UserPage
                favorites={favoriteComics}
                readingHistory={readingHistory}
                progressMap={progressMap}
                settings={settings}
                updateSettings={updateSettings}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}
