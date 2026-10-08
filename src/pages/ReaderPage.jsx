import { Link, useNavigate, useParams } from 'react-router-dom';
import { COMICS } from '../data/comics';

export default function ComicDetailPage({ favorites, onToggleFavorite }) {
  const navigate = useNavigate();
  const { comicId } = useParams();
  const comic = COMICS.find((item) => item.id === comicId);

  if (!comic) {
    return (
      <div className="page-stack">
        <p className="empty-state">HQ não encontrada.</p>
        <Link to="/library" className="primary-button">
          Voltar à biblioteca
        </Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(comic.id);

  return (
    <div className="page-stack">
      <div className="detail-panel">
        <div className="detail-cover-wrap">
          <img src={comic.cover} alt={comic.title} className="detail-cover" />
        </div>

        <div className="detail-copy">
          <div className="detail-tag-row">
            <span className="genre-badge dark">{comic.genre}</span>
            <span className="detail-year">{comic.releaseYear}</span>
          </div>

          <h2>{comic.title}</h2>

          <div className="detail-meta">
            <p>
              <strong>Autor:</strong> {comic.author}
            </p>
            <p>
              <strong>Artista:</strong> {comic.artist}
            </p>
            <p>
              <strong>Capítulos:</strong> {comic.chapters}
            </p>
            <p>
              <strong>Popularidade:</strong> {comic.popularity}
            </p>
          </div>

          <p className="synopsis">{comic.synopsis}</p>

          <div className="detail-actions">
            <button type="button" className="primary-button" onClick={() => navigate(`/reader/${comic.id}`)}>
              Ler agora
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={() => onToggleFavorite(comic.id)}
            >
              {isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
