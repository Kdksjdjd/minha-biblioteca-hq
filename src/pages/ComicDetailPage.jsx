import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ComicCard from '../components/ComicCard';
import { COMICS } from '../data/comics';

export default function LibraryPage({ favorites, onToggleFavorite }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeGenre = searchParams.get('genre') || 'all';
  const activeSort = searchParams.get('sort') || 'popular';
  const searchText = searchParams.get('q') || '';

  const genres = ['all', ...new Set(COMICS.map((comic) => comic.genre))];

  const filteredComics = useMemo(() => {
    const filtered = COMICS.filter((comic) => {
      const matchGenre = activeGenre === 'all' || comic.genre === activeGenre;
      const normalizedQuery = searchText.trim().toLowerCase();
      const matchText =
        normalizedQuery.length === 0 ||
        `${comic.title} ${comic.author} ${comic.genre}`.toLowerCase().includes(normalizedQuery);

      return matchGenre && matchText;
    });

    return filtered.sort((a, b) => {
      if (activeSort === 'name') {
        return a.title.localeCompare(b.title);
      }

      if (activeSort === 'added') {
        return new Date(b.addedAt) - new Date(a.addedAt);
      }

      return b.popularity - a.popularity;
    });
  }, [activeGenre, activeSort, searchText]);

  const updateSearch = (newValues) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(newValues).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    setSearchParams(params);
  };

  return (
    <div className="page-stack">
      <section className="library-toolbar">
        <input
          type="search"
          value={searchText}
          onChange={(event) => updateSearch({ q: event.target.value })}
          placeholder="Pesquisar na biblioteca"
          aria-label="Pesquisar na biblioteca"
        />

        <select
          value={activeSort}
          onChange={(event) => updateSearch({ sort: event.target.value })}
          aria-label="Ordenar por"
        >
          <option value="popular">Popularidade</option>
          <option value="name">Nome</option>
          <option value="added">Data adicionada</option>
        </select>
      </section>

      <section className="filter-group">
        {genres.map((genre) => (
          <button
            key={genre}
            type="button"
            className={`filter-pill ${activeGenre === genre ? 'active' : ''}`}
            onClick={() => updateSearch({ genre: genre === 'all' ? '' : genre })}
          >
            {genre === 'all' ? 'Todos' : genre}
          </button>
        ))}
      </section>

      <section>
        <div className="section-header inline-header">
          <h3>Biblioteca</h3>
          <span>{filteredComics.length} títulos</span>
        </div>

        {filteredComics.length > 0 ? (
          <div className="card-grid">
            {filteredComics.map((comic) => (
              <ComicCard
                key={comic.id}
                comic={comic}
                isFavorite={favorites.includes(comic.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">Nenhuma HQ encontrada com os filtros atuais.</p>
        )}
      </section>
    </div>
  );
}
