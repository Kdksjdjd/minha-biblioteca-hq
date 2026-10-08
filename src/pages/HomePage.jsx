import { Link } from 'react-router-dom';

export default function ComicCard({ comic, isFavorite, onToggleFavorite, compact = false }) {
  return (
    <article className={`comic-card ${compact ? 'compact' : ''}`}>
      <Link to={`/comic/${comic.id}`} className="comic-cover-link" aria-label={`Abrir ${comic.title}`}>
        <img src={comic.cover} alt={comic.title} className="comic-cover" />
      </Link>

      <div className="comic-card-content">
        <div className="comic-meta-row">
          <span className="genre-badge">{comic.genre}</span>
          <button
            type="button"
            className={`icon-button ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(comic.id)}
            aria-label={isFavorite ? `Remover ${comic.title} dos favoritos` : `Adicionar ${comic.title} aos favoritos`}
          >
            {isFavorite ? '♥' : '♡'}
          </button>
        </div>

        <Link to={`/comic/${comic.id}`} className="title-link">
          <h3>{comic.title}</h3>
        </Link>

        <p className="comic-author">{comic.author}</p>

        <div className="comic-footer">
          <span>{comic.chapters} capítulos</span>
          <span>⭐ {comic.popularity}</span>
        </div>
      </div>
    </article>
  );
}
