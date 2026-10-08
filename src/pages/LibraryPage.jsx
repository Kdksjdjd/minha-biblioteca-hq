import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ComicCard from '../components/ComicCard';
import { COMICS } from '../data/comics';

export default function HomePage({ favorites, onToggleFavorite, progressMap, readingHistory }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const highlightComic = useMemo(
    () => [...COMICS].sort((a, b) => b.popularity - a.popularity)[0],
    []
  );

  const recentComics = useMemo(
    () => [...COMICS].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt)).slice(0, 4),
    []
  );

  const popularComics = useMemo(
    () => [...COMICS].sort((a, b) => b.popularity - a.popularity).slice(0, 4),
    []
  );

  const categories = useMemo(
    () => [...new Set(COMICS.map((comic) => comic.genre))],
    []
  );

  const continueReading = useMemo(
    () =>
      Object.entries(progressMap)
        .map(([comicId, progress]) => {
          const comic = COMICS.find((item) => item.id === comicId);
          return comic ? { comic, progress } : null;
        })
        .filter(Boolean)
        .sort((a, b) => new Date(b.progress.updatedAt) - new Date(a.progress.updatedAt))
        .slice(0, 3),
    [progressMap]
  );

  const handleSearch = () => {
    const sanitizedQuery = search.trim();
    navigate(`/library${sanitizedQuery ? `?q=${encodeURIComponent(sanitizedQuery)}` : ''}`);
  };

  return (
    <div className="page-stack">
      <section className="search-panel">
        <div className="search-box">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Pesquisar HQ, autor ou gênero"
            aria-label="Pesquisa"
          />
          <button type="button" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </section>

      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Destaque do dia</p>
          <h2>{highlightComic.title}</h2>
          <p>{highlightComic.synopsis}</p>
          <div className="hero-actions">
            <Link to={`/comic/${highlightComic.id}`} className="primary-button">
              Ver detalhes
            </Link>
            <Link to={`/reader/${highlightComic.id}`} className="secondary-button">
              Ler agora
            </Link>
          </div>
        </div>

        <img src={highlightComic.cover} alt={highlightComic.title} className="hero-cover" />
      </section>

      <section>
        <div className="section-header">
          <h3>Continuar lendo</h3>
          <Link to="/library">Ver biblioteca</Link>
        </div>

        {continueReading.length > 0 ? (
          <div className="read-progress-list">
            {continueReading.map(({ comic, progress }) => (
              <div className="reading-item" key={comic.id}>
                <img src={comic.cover} alt={comic.title} />
                <div>
                  <h4>{comic.title}</h4>
                  <p>{progress.percent}% concluído</p>
                  <div className="progress-track">
                    <span style={{ width: `${progress.percent}%` }} />
                  </div>
                </div>
                <Link to={`/reader/${comic.id}`} className="tiny-button">
                  Continuar
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-state">Ainda não há leituras em andamento. Explore a biblioteca e comece hoje.</p>
        )}
      </section>

      <section>
        <div className="section-header">
          <h3>HQs adicionadas recentemente</h3>
        </div>
        <div className="card-grid">
          {recentComics.map((comic) => (
            <ComicCard
              key={comic.id}
              comic={comic}
              isFavorite={favorites.includes(comic.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h3>Mais populares</h3>
        </div>
        <div className="card-grid">
          {popularComics.map((comic) => (
            <ComicCard
              key={comic.id}
              comic={comic}
              isFavorite={favorites.includes(comic.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h3>Categorias</h3>
        </div>
        <div className="category-grid">
          {categories.map((genre) => (
            <button
              key={genre}
              type="button"
              className="category-card"
              onClick={() => navigate(`/library?genre=${encodeURIComponent(genre)}`)}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
