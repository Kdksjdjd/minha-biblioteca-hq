const buildArt = ({ title, accentA, accentB, label }) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accentA}"/>
          <stop offset="100%" stop-color="${accentB}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="1100" fill="#0b0d13"/>
      <rect x="35" y="35" width="730" height="1030" rx="28" fill="url(#grad)" opacity="0.9"/>
      <circle cx="620" cy="210" r="170" fill="rgba(255,255,255,0.12)"/>
      <circle cx="180" cy="840" r="220" fill="rgba(0,0,0,0.15)"/>
      <path d="M120 770 C240 610, 430 550, 600 750 L600 950 L120 950 Z" fill="rgba(9, 12, 20, 0.28)"/>
      <text x="68" y="150" fill="#f4f7fb" font-size="28" font-family="Arial, sans-serif" letter-spacing="4">MINHA BIBLIOTECA</text>
      <text x="68" y="720" fill="#f8fafc" font-size="66" font-family="Arial, sans-serif" font-weight="700">${title}</text>
      <text x="68" y="782" fill="#edf2ff" font-size="24" font-family="Arial, sans-serif" letter-spacing="6">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const COMICS = [
  {
    id: 'o-sigilo-das-ruas',
    title: 'O Sigilo das Ruas',
    author: 'Mara Nogueira',
    artist: 'Ivo Caldas',
    genre: 'Aventura',
    releaseYear: 2024,
    addedAt: '2024-11-01',
    popularity: 98,
    chapters: 12,
    synopsis:
      'Uma cineasta de rua desvende um mistério sobrenatural que atravessa os becos de uma cidade em ruínas. Cada esquina revela uma memória que não deveria existir.',
    cover: buildArt({ title: 'O Sigilo', accentA: '#fd7b6d', accentB: '#ffb157', label: 'AVENTURA' }),
    pages: [
      buildArt({ title: 'Capítulo 01', accentA: '#ff7a59', accentB: '#ffcf76', label: 'PÁGINA 01' }),
      buildArt({ title: 'Capítulo 01', accentA: '#ff8d7b', accentB: '#ffc076', label: 'PÁGINA 02' }),
      buildArt({ title: 'Capítulo 01', accentA: '#ff6b6b', accentB: '#f7b267', label: 'PÁGINA 03' }),
      buildArt({ title: 'Capítulo 01', accentA: '#ff9977', accentB: '#ffd166', label: 'PÁGINA 04' }),
      buildArt({ title: 'Capítulo 01', accentA: '#f28482', accentB: '#f6bd60', label: 'PÁGINA 05' })
    ]
  },
  {
    id: 'cidadela-de-vidro',
    title: 'Cidadela de Vidro',
    author: 'Renato Vale',
    artist: 'Aline Kiro',
    genre: 'Fantasia',
    releaseYear: 2023,
    addedAt: '2024-10-18',
    popularity: 94,
    chapters: 16,
    synopsis:
      'Em uma cidade suspensa sobre o mar, a princesa do espelho tenta impedir que a última muralha de cristal desmorone e arraste seu reino inteiro.',
    cover: buildArt({ title: 'Cidadela', accentA: '#5eead4', accentB: '#60a5fa', label: 'FANTASIA' }),
    pages: [
      buildArt({ title: 'Cidadela', accentA: '#67e8f9', accentB: '#7c3aed', label: 'PÁGINA 01' }),
      buildArt({ title: 'Cidadela', accentA: '#2dd4bf', accentB: '#4f46e5', label: 'PÁGINA 02' }),
      buildArt({ title: 'Cidadela', accentA: '#22d3ee', accentB: '#8b5cf6', label: 'PÁGINA 03' }),
      buildArt({ title: 'Cidadela', accentA: '#38bdf8', accentB: '#a78bfa', label: 'PÁGINA 04' }),
      buildArt({ title: 'Cidadela', accentA: '#5eead4', accentB: '#60a5fa', label: 'PÁGINA 05' })
    ]
  },
  {
    id: 'nebulosa-sem-fim',
    title: 'Nebulosa Sem Fim',
    author: 'Cíntia Flores',
    artist: 'Tomás Kline',
    genre: 'Sci-Fi',
    releaseYear: 2025,
    addedAt: '2025-01-08',
    popularity: 97,
    chapters: 10,
    synopsis:
      'Uma tripulação de exploradores precisa atravessar uma região cósmica viva, onde cada estrela guarda uma lembrança de outra realidade.',
    cover: buildArt({ title: 'Nebulosa', accentA: '#8b5cf6', accentB: '#2dd4bf', label: 'SCI-FI' }),
    pages: [
      buildArt({ title: 'Nebulosa', accentA: '#8b5cf6', accentB: '#2dd4bf', label: 'PÁGINA 01' }),
      buildArt({ title: 'Nebulosa', accentA: '#7c3aed', accentB: '#14b8a6', label: 'PÁGINA 02' }),
      buildArt({ title: 'Nebulosa', accentA: '#a78bfa', accentB: '#34d399', label: 'PÁGINA 03' }),
      buildArt({ title: 'Nebulosa', accentA: '#c084fc', accentB: '#2dd4bf', label: 'PÁGINA 04' }),
      buildArt({ title: 'Nebulosa', accentA: '#8b5cf6', accentB: '#5eead4', label: 'PÁGINA 05' })
    ]
  },
  {
    id: 'luz-entre-rachaduras',
    title: 'Luz entre Rachaduras',
    author: 'Eloá Rios',
    artist: 'Nero Silva',
    genre: 'Drama',
    releaseYear: 2022,
    addedAt: '2024-09-17',
    popularity: 88,
    chapters: 14,
    synopsis:
      'Uma violinista que perdeu sua família encontra um grupo de sobreviventes em um prédio condenado, onde cada janela tem um segredo musical.',
    cover: buildArt({ title: 'Luz', accentA: '#facc15', accentB: '#fb7185', label: 'DRAMA' }),
    pages: [
      buildArt({ title: 'Luz', accentA: '#facc15', accentB: '#fb7185', label: 'PÁGINA 01' }),
      buildArt({ title: 'Luz', accentA: '#fbbf24', accentB: '#f43f5e', label: 'PÁGINA 02' }),
      buildArt({ title: 'Luz', accentA: '#eab308', accentB: '#f97316', label: 'PÁGINA 03' }),
      buildArt({ title: 'Luz', accentA: '#f59e0b', accentB: '#ef4444', label: 'PÁGINA 04' }),
      buildArt({ title: 'Luz', accentA: '#facc15', accentB: '#fb7185', label: 'PÁGINA 05' })
    ]
  },
  {
    id: 'gatos-do-selvagem',
    title: 'Gatos do Selvagem',
    author: 'Kiko Morel',
    artist: 'Rafa Muniz',
    genre: 'Ação',
    releaseYear: 2024,
    addedAt: '2025-02-04',
    popularity: 92,
    chapters: 9,
    synopsis:
      'Uma gangue urbana de sobreviventes tenta impedir uma corporação de roubar o último porto de energia do bairro antes do amanhecer.',
    cover: buildArt({ title: 'Gatos', accentA: '#f97316', accentB: '#ef4444', label: 'AÇÃO' }),
    pages: [
      buildArt({ title: 'Gatos', accentA: '#f97316', accentB: '#ef4444', label: 'PÁGINA 01' }),
      buildArt({ title: 'Gatos', accentA: '#fb923c', accentB: '#f43f5e', label: 'PÁGINA 02' }),
      buildArt({ title: 'Gatos', accentA: '#f59e0b', accentB: '#e11d48', label: 'PÁGINA 03' }),
      buildArt({ title: 'Gatos', accentA: '#f97316', accentB: '#be123c', label: 'PÁGINA 04' }),
      buildArt({ title: 'Gatos', accentA: '#f97316', accentB: '#ef4444', label: 'PÁGINA 05' })
    ]
  },
  {
    id: 'as-plantas-de-mareia',
    title: 'As Plantas de Mareia',
    author: 'Beatriz Salles',
    artist: 'Pietro Dantas',
    genre: 'Romance',
    releaseYear: 2021,
    addedAt: '2024-08-09',
    popularity: 86,
    chapters: 11,
    synopsis:
      'A filha de um pescador e um artista itinerante se encontram em uma vila de praias que muda de lugar conforme a maré.',
    cover: buildArt({ title: 'Mareia', accentA: '#22c55e', accentB: '#14b8a6', label: 'ROMANCE' }),
    pages: [
      buildArt({ title: 'Mareia', accentA: '#22c55e', accentB: '#14b8a6', label: 'PÁGINA 01' }),
      buildArt({ title: 'Mareia', accentA: '#34d399', accentB: '#0f766e', label: 'PÁGINA 02' }),
      buildArt({ title: 'Mareia', accentA: '#2dd4bf', accentB: '#10b981', label: 'PÁGINA 03' }),
      buildArt({ title: 'Mareia', accentA: '#4ade80', accentB: '#14b8a6', label: 'PÁGINA 04' }),
      buildArt({ title: 'Mareia', accentA: '#22c55e', accentB: '#14b8a6', label: 'PÁGINA 05' })
    ]
  },
  {
    id: 'ordem-negra',
    title: 'Ordem Negra',
    author: 'Theo Arantes',
    artist: 'Lia Novak',
    genre: 'Mistério',
    releaseYear: 2023,
    addedAt: '2024-11-26',
    popularity: 90,
    chapters: 13,
    synopsis:
      'Um investigador sem memória descobre uma rede de cultos antigos escondida sob a cidade, onde cada assinatura tem um nome que ainda não foi revelado.',
    cover: buildArt({ title: 'Ordem', accentA: '#374151', accentB: '#111827', label: 'MISTÉRIO' }),
    pages: [
      buildArt({ title: 'Ordem', accentA: '#334155', accentB: '#111827', label: 'PÁGINA 01' }),
      buildArt({ title: 'Ordem', accentA: '#475569', accentB: '#1f2937', label: 'PÁGINA 02' }),
      buildArt({ title: 'Ordem', accentA: '#64748b', accentB: '#0f172a', label: 'PÁGINA 03' }),
      buildArt({ title: 'Ordem', accentA: '#475569', accentB: '#111827', label: 'PÁGINA 04' }),
      buildArt({ title: 'Ordem', accentA: '#334155', accentB: '#0f172a', label: 'PÁGINA 05' })
    ]
  },
  {
    id: 'sinais-no-escuro',
    title: 'Sinais no Escuro',
    author: 'Inez Prado',
    artist: 'Matheus Ravel',
    genre: 'Terror',
    releaseYear: 2022,
    addedAt: '2024-07-25',
    popularity: 84,
    chapters: 8,
    synopsis:
      'Em uma floresta de cedros ao norte, um grupo de jovens descendentes de caçadores começa a ler sinais de aviso deixados por algo que nunca saiu da noite.',
    cover: buildArt({ title: 'Sinais', accentA: '#1f2937', accentB: '#4f46e5', label: 'TERROR' }),
    pages: [
      buildArt({ title: 'Sinais', accentA: '#1f2937', accentB: '#4338ca', label: 'PÁGINA 01' }),
      buildArt({ title: 'Sinais', accentA: '#1e293b', accentB: '#4f46e5', label: 'PÁGINA 02' }),
      buildArt({ title: 'Sinais', accentA: '#0f172a', accentB: '#6d28d9', label: 'PÁGINA 03' }),
      buildArt({ title: 'Sinais', accentA: '#312e81', accentB: '#1f2937', label: 'PÁGINA 04' }),
      buildArt({ title: 'Sinais', accentA: '#1f2937', accentB: '#4f46e5', label: 'PÁGINA 05' })
    ]
  },
  {
    id: 'reino-do-vento',
    title: 'Reino do Vento',
    author: 'Marina Leste',
    artist: 'Ruben Pacheco',
    genre: 'Fantasia',
    releaseYear: 2025,
    addedAt: '2025-03-05',
    popularity: 95,
    chapters: 15,
    synopsis:
      'Um reino que vive sobre nuvens precisa escolher entre manter o equilíbrio antigo ou aprender a voar de uma forma completamente nova.',
    cover: buildArt({ title: 'Vento', accentA: '#60a5fa', accentB: '#a5b4fc', label: 'FANTASIA' }),
    pages: [
      buildArt({ title: 'Vento', accentA: '#60a5fa', accentB: '#a5b4fc', label: 'PÁGINA 01' }),
      buildArt({ title: 'Vento', accentA: '#93c5fd', accentB: '#818cf8', label: 'PÁGINA 02' }),
      buildArt({ title: 'Vento', accentA: '#60a5fa', accentB: '#c4b5fd', label: 'PÁGINA 03' }),
      buildArt({ title: 'Vento', accentA: '#7dd3fc', accentB: '#a5b4fc', label: 'PÁGINA 04' }),
      buildArt({ title: 'Vento', accentA: '#60a5fa', accentB: '#c4b5fd', label: 'PÁGINA 05' })
    ]
  },
  {
    id: 'caderno-do-amanhecer',
    title: 'Caderno do Amanhecer',
    author: 'Laura Varon',
    artist: 'Pablo Lemos',
    genre: 'Slice of Life',
    releaseYear: 2024,
    addedAt: '2025-01-20',
    popularity: 89,
    chapters: 7,
    synopsis:
      'Uma estudante de design descobre que seus cadernos registram momentos que ainda não aconteceram — e cada um deles acende uma pergunta sobre o futuro.',
    cover: buildArt({ title: 'Amanhecer', accentA: '#f59e0b', accentB: '#f472b6', label: 'SLICE OF LIFE' }),
    pages: [
      buildArt({ title: 'Amanhecer', accentA: '#f59e0b', accentB: '#f472b6', label: 'PÁGINA 01' }),
      buildArt({ title: 'Amanhecer', accentA: '#fbbf24', accentB: '#fb7185', label: 'PÁGINA 02' }),
      buildArt({ title: 'Amanhecer', accentA: '#f6ad55', accentB: '#ec4899', label: 'PÁGINA 03' }),
      buildArt({ title: 'Amanhecer', accentA: '#fbbf24', accentB: '#f472b6', label: 'PÁGINA 04' }),
      buildArt({ title: 'Amanhecer', accentA: '#f59e0b', accentB: '#f472b6', label: 'PÁGINA 05' })
    ]
  }
];
