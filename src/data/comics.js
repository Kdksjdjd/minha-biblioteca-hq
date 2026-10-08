import { Link } from 'react-router-dom';
import { COMICS } from '../data/comics';

export default function UserPage({ favorites, readingHistory, progressMap, settings, updateSettings }) {
  const recentEntries = readingHistory
    .map((entry) => COMICS.find((comic) => comic.id === entry.comicId))
    .filter(Boolean)
    .slice(0, 4);

  const progressEntries = Object.entries(progressMap)
    .map(([comicId, progress]) => ({
      comic: COMICS.find((comic) => comic.id === comicId),
      progress
    }))
    .filter((entry) => entry.comic)
    .sort((a, b) => new Date(b.progress.updatedAt) - new Date(a.progress.updatedAt))
    .slice(0, 4);

  return (
    <div className="page-stack user-page">
      <section className="user-summary">
        <div>
          <p className="eyebrow">Perfil</p>
          <h2>Leitor em andamento</h2>
        </div>
        <div className="stats-boxes">
          <div>
            <strong>{favorites.length}</strong>
            <span>Favoritos</span>
          </div>
          <div>
            <strong>{recentEntries.length}</strong>
            <span>Histórico</span>
          </div>
          <div>
            <strong>{progressEntries.length}</strong>
            <span>Progresso</span>
          </div>
        </div>
      </section>

      <section>
        <div className="section-header">
          <h3>Favoritos</h3>
        </div>

        {favorites.length > 0 ? (
          <div className="mini-card-grid">
            {favorites.map((comic) => (
              <Link key={comic.id} to={`/comic/${comic.id}`} className="mini-card">
                <img src={comic.cover} alt={comic.title} />
                <span>{comic.title}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="empty-state">Você ainda não salvou nenhum favorito.</p>
        )}
      </section>

      <section>
        <div className="section-header">
          <h3>Histórico de leitura</h3>
        </div>

        {recentEntries.length > 0 ? (
          <div className="mini-card-grid">
            {recentEntries.map((comic) => (
              <Link key={comic.id} to={`/reader/${comic.id}`} className="mini-card">
                <img src={comic.cover} alt={comic.title} />
                <span>{comic.title}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="empty-state">Seu histórico de leitura aparecerá aqui.</p>
        )}
      </section>

      <section>
        <div className="section-header">
          <h3>Progresso</h3>
        </div>

        {progressEntries.length > 0 ? (
          <div className="read-progress-list compact-list">
            {progressEntries.map(({ comic, progress }) => (
              <div key={comic.id} className="reading-item compact-item">
                <img src={comic.cover} alt={comic.title} />
                <div>
                  <h4>{comic.title}</h4>
                  <p>{progress.percent}% concluído</p>
                </div>
                <Link to={`/reader/${comic.id}`} className="tiny-button">
                  Abrir
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-state">Nenhum progresso registrado por enquanto.</p>
        )}
      </section>

      <section>
        <div className="section-header">
          <h3>Configurações</h3>
        </div>

        <div className="settings-panel">
          <label className="switch-row">
            <input
              type="checkbox"
              checked={settings.autoSave}
              onChange={(event) => updateSettings({ autoSave: event.target.checked })}
            />
            <span>Salvar progresso automaticamente</span>
          </label>

          <label className="switch-row">
            <input
              type="checkbox"
              checked={settings.readingMode === 'compact'}
              onChange={(event) =>
                updateSettings({ readingMode: event.target.checked ? 'compact' : 'vertical' })
              }
            />
            <span>Modo de leitura compacto</span>
          </label>
        </div>
      </section>
    </div>
  );
}
