import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { COMICS } from '../data/comics';

export default function ReaderPage({ progressMap, settings, markRead, updateSettings }) {
  const { comicId } = useParams();
  const comic = COMICS.find((item) => item.id === comicId);

  const savedPage = comic ? progressMap[comic.id]?.currentPage ?? 0 : 0;
  const [currentPage, setCurrentPage] = useState(savedPage);
  const [zoom, setZoom] = useState(settings.zoom || 1);

  useEffect(() => {
    setZoom(settings.zoom || 1);
  }, [settings.zoom]);

  useEffect(() => {
    if (!comic) {
      return;
    }

    if (settings.autoSave) {
      markRead(comic.id, currentPage);
    }
  }, [comic, currentPage, settings.autoSave, markRead]);

  const pageDisplay = useMemo(() => {
    if (!comic) {
      return [];
    }

    return comic.pages.map((page, index) => ({
      ...page,
      index,
      label: `Página ${index + 1}`
    }));
  }, [comic]);

  if (!comic) {
    return (
      <div className="page-stack">
        <p className="empty-state">Leitor indisponível para esta HQ.</p>
        <Link to="/library" className="primary-button">
          Voltar à biblioteca
        </Link>
      </div>
    );
  }

  const hasPrev = currentPage > 0;
  const hasNext = currentPage < comic.pages.length - 1;

  const goToPrev = () => {
    setCurrentPage((page) => Math.max(0, page - 1));
  };

  const goToNext = () => {
    setCurrentPage((page) => Math.min(comic.pages.length - 1, page + 1));
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
  };

  return (
    <div className="reader-shell">
      <header className="reader-toolbar">
        <div>
          <p className="eyebrow">Leitor</p>
          <h2>{comic.title}</h2>
        </div>

        <div className="toolbar-actions">
          <button type="button" className="small-button" onClick={() => setZoom((value) => Math.max(0.8, Number((value - 0.2).toFixed(2))))}>
            -
          </button>
          <span>{zoom.toFixed(1)}x</span>
          <button type="button" className="small-button" onClick={() => setZoom((value) => Math.min(2, Number((value + 0.2).toFixed(2))))}>
            +
          </button>
          <button type="button" className="small-button" onClick={toggleFullscreen}>
            Tela cheia
          </button>
          <Link to="/library" className="small-button link-button">
            Voltar
          </Link>
        </div>
      </header>

      <div className="reader-progress">
        <span>
          Página {currentPage + 1} de {comic.pages.length}
        </span>
        <div className="progress-track">
          <span style={{ width: `${((currentPage + 1) / comic.pages.length) * 100}%` }} />
        </div>
      </div>

      <div className="reader-page-list">
        {pageDisplay.map((page) => (
          <figure key={page.label} className={`reader-page ${currentPage === page.index ? 'active' : ''}`}>
            <img src={page.src} alt={page.label} style={{ transform: `scale(${zoom})` }} />
            <figcaption>{page.label}</figcaption>
          </figure>
        ))}
      </div>

      <div className="reader-navigation">
        <button type="button" className="secondary-button" onClick={goToPrev} disabled={!hasPrev}>
          Página anterior
        </button>

        <button type="button" className="primary-button" onClick={goToNext} disabled={!hasNext}>
          Próxima página
        </button>
      </div>
    </div>
  );
}
