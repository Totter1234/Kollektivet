import { useState } from 'react'

type Screen =
  | 'home'
  | 'discover'
  | 'upload'
  | 'magazine'
  | 'profile'
  | 'artwork'
  | 'artist'
  | 'collector'
  | 'checkout'
  | 'confirmation'
  | 'cart'

type IconName =
  | 'home'
  | 'search'
  | 'plus'
  | 'magazine'
  | 'user'
  | 'heart'
  | 'bookmark'
  | 'back'
  | 'more'
  | 'filter'
  | 'arrow'
  | 'check'
  | 'camera'
  | 'bag'
  | 'close'

type ArtworkItem = {
  id: string
  title: string
  artist: string
  year: string
  image: string
  medium: string
  size: string
  price?: number
  description: string
  kind: 'Maleri' | 'Fotografi' | 'Skulptur' | 'Digital kunst'
}

const images = {
  main: '/art/blue-red.png',
  clay: '/art/fold-i.jpg',
  blue:
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85',
  photo:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
  soft:
    'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85',
  green:
    'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=900&q=85',
  rose:
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85',
  orange:
    'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=85',
  ink:
    'https://images.unsplash.com/photo-1549289524-06cf8837ace5?auto=format&fit=crop&w=900&q=85',
  digital:
    'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85',
  sculpture: '/art/stille-form.jpg',
  portrait:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85',
  collector:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85',
  profile:
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=85',
  gallery:
    'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=85',
  magazine:
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=900&q=85',
}

const artworks: ArtworkItem[] = [
  {
    id: 'mellem-linjerne',
    title: 'Mellem linjerne',
    artist: 'Liv Søndergaard',
    year: '2025',
    image: images.main,
    medium: 'Olie og pigment',
    size: '90 × 120 cm',
    price: 12800,
    kind: 'Maleri',
    description: 'Et sanseligt studie i spændingen mellem det sagte og det usagte. Lag af olie, pigment og rå lærredsflader mødes i en komposition, hvor farven både skjuler og afslører spor fra processen.',
  },
  {
    id: 'blod-horisont',
    title: 'Blød horisont',
    artist: 'Maja Ravn',
    year: '2024',
    image: images.soft,
    medium: 'Akryl på lærred',
    size: '70 × 90 cm',
    price: 6400,
    kind: 'Maleri',
    description: 'En stille undersøgelse af lys, landskab og erindring. De transparente farvelag samler sig som en horisont, der næsten forsvinder igen.',
  },
  {
    id: 'fold-i',
    title: 'Fold I',
    artist: 'Alma Engberg',
    year: '2025',
    image: images.clay,
    medium: 'Glaseret stentøj',
    size: '42 × 31 × 28 cm',
    price: 9200,
    kind: 'Skulptur',
    description: 'En håndbygget skulptur, hvor den organiske overflade folder sig omkring et skjult indre. Værket ændrer karakter alt efter, hvorfra det betragtes.',
  },
  {
    id: 'stille-form',
    title: 'Stille form',
    artist: 'Aksel Leth',
    year: '2023',
    image: images.sculpture,
    medium: 'Bronze og patina',
    size: '58 × 24 × 20 cm',
    kind: 'Skulptur',
    description: 'En figurativ form reduceret til bevægelse og tyngde. Skulpturen er uploadet som en del af kunstnerens arkiv og er ikke til salg.',
  },
  {
    id: 'nattens-kant',
    title: 'Nattens kant',
    artist: 'Sif Elholm',
    year: '2024',
    image: images.photo,
    medium: 'Pigmentprint',
    size: '60 × 80 cm',
    price: 4800,
    kind: 'Fotografi',
    description: 'Fotografiet fastholder det korte øjeblik, hvor landskabet mister sine konturer, og mørket bliver til et materiale i sig selv.',
  },
  {
    id: 'efterklang',
    title: 'Efterklang',
    artist: 'Noah Birk',
    year: '2025',
    image: images.blue,
    medium: 'Digitalt pigmentprint',
    size: '80 × 100 cm',
    kind: 'Digital kunst',
    description: 'Et digitalt værk om gentagelse og visuel støj. Værket vises som en del af serien Signalflader og er endnu ikke frigivet til salg.',
  },
  {
    id: 'mellemrum',
    title: 'Mellemrum',
    artist: 'Liv Søndergaard',
    year: '2024',
    image: images.green,
    medium: 'Olie på lærred',
    size: '100 × 80 cm',
    price: 7400,
    kind: 'Maleri',
    description: 'Grønne og jordfarvede felter danner en rytme af åbninger. Værket undersøger pausen som et aktivt og sanseligt rum.',
  },
  {
    id: 'indre-landskab',
    title: 'Indre landskab',
    artist: 'Freja Vinter',
    year: '2025',
    image: images.rose,
    medium: 'Olie og voks på lærred',
    size: '110 × 90 cm',
    price: 15600,
    kind: 'Maleri',
    description: 'Farvefelter og afbrudte bevægelser danner et landskab uden fast horisont. Værket er bygget op gennem langsomme lag af olie og voks.',
  },
  {
    id: 'rod-passage',
    title: 'Rød passage',
    artist: 'Jonas Dyring',
    year: '2024',
    image: images.orange,
    medium: 'Akryl og oliekridt',
    size: '85 × 65 cm',
    price: 5800,
    kind: 'Maleri',
    description: 'En koncentreret komposition om bevægelse, varme og modstand. De skarpe spor står åbne som en passage gennem billedfladen.',
  },
  {
    id: 'fragment-07',
    title: 'Fragment 07',
    artist: 'Elin Noor',
    year: '2025',
    image: images.digital,
    medium: 'Generativt pigmentprint',
    size: '70 × 70 cm',
    kind: 'Digital kunst',
    description: 'Et generativt studie af mønstre, der ændrer sig mellem orden og opløsning. Værket vises som del af kunstnerens igangværende arkiv.',
  },
  {
    id: 'sort-strom',
    title: 'Sort strøm',
    artist: 'Viggo Ahn',
    year: '2023',
    image: images.ink,
    medium: 'Tusche på bomuld',
    size: '140 × 100 cm',
    price: 11200,
    kind: 'Maleri',
    description: 'Store strøg af tusche bevæger sig på tværs af den rå bomuld. Et værk om tempo, tyngde og den gestus, der ikke kan gentages.',
  },
]

function BrandLogo({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <img
      src="/brand/kollektivet-logo.png"
      className={`brand-logo ${light ? 'brand-logo-light' : ''} ${className}`}
      alt="KOLLEKTIVET"
    />
  )
}

function Icon({ name, size = 22, filled = false }: { name: IconName; size?: number; filled?: boolean }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: <><path d="M3 10.8 12 3l9 7.8V21h-6v-6H9v6H3Z" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    magazine: <><path d="M4 4.5h6.5c1.3 0 1.5.8 1.5 1.5v15c0-1.2-.8-2-2-2H4Zm16 0h-6.5C12.2 4.5 12 5.3 12 6v15c0-1.2.8-2 2-2h6Z" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 21c.5-4.2 3-6.3 7.5-6.3s7 2.1 7.5 6.3" /></>,
    heart: <><path d="M20.8 5.8c-2-2.1-5.3-1.9-7.1.3L12 8.2l-1.7-2.1C8.5 3.9 5.2 3.7 3.2 5.8c-2 2.2-1.8 5.6.3 7.6L12 21l8.5-7.6c2.1-2 2.3-5.4.3-7.6Z" /></>,
    bookmark: <><path d="M6 3h12v19l-6-4.5L6 22Z" /></>,
    back: <><path d="m15 19-7-7 7-7" /></>,
    more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    filter: <><path d="M4 6h16M7 12h10M10 18h4" /></>,
    arrow: <><path d="M5 12h14m-5-5 5 5-5 5" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    camera: <><path d="M4 7h3l1.5-2h7L17 7h3v12H4Z" /><circle cx="12" cy="13" r="3.5" /></>,
    bag: <><path d="M5 8h14l-1 13H6L5 8Zm4 1V6a3 3 0 0 1 6 0v3" /></>,
    close: <><path d="M6 6l12 12M18 6 6 18" /></>,
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function StatusBar({ light = false }: { light?: boolean }) {
  return (
    <div className={`status-bar ${light ? 'text-white' : ''}`}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <span className="signal">••••</span>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none"><path d="M1 3.8A9.5 9.5 0 0 1 14 3.8M3.4 6.4a6 6 0 0 1 8.2 0M6.2 9.1a2 2 0 0 1 2.6 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
        <span className="battery"><i /></span>
      </div>
    </div>
  )
}

function TopBar({
  title,
  onBack,
  right,
}: {
  title: string
  onBack?: () => void
  right?: React.ReactNode
}) {
  return (
    <>
      <StatusBar />
      <header className="top-bar">
        <div className="w-10">
          {onBack && (
            <button className="icon-btn -ml-2" onClick={onBack} aria-label="Tilbage">
              <Icon name="back" />
            </button>
          )}
        </div>
        <h1>{title}</h1>
        <div className="flex w-10 justify-end">{right}</div>
      </header>
    </>
  )
}

function Nav({
  active,
  navigate,
}: {
  active: Screen
  navigate: (screen: Screen) => void
}) {
  const tabs: { screen: Screen; label: string; icon: IconName }[] = [
    { screen: 'home', label: 'Hjem', icon: 'home' },
    { screen: 'discover', label: 'Opdag', icon: 'search' },
    { screen: 'upload', label: 'Upload', icon: 'plus' },
    { screen: 'magazine', label: 'Magasin', icon: 'magazine' },
    { screen: 'profile', label: 'Profil', icon: 'user' },
  ]
  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.screen}
          className={active === tab.screen ? 'active' : ''}
          onClick={() => navigate(tab.screen)}
        >
          <span className={tab.screen === 'upload' ? 'upload-icon' : ''}>
            <Icon name={tab.icon} size={tab.screen === 'upload' ? 23 : 21} />
          </span>
          <small>{tab.label}</small>
        </button>
      ))}
    </nav>
  )
}

function Welcome({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="onboarding">
      <StatusBar light />
      <img src={images.main} className="absolute inset-0 h-full w-full object-cover" alt="Abstrakt maleri" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
      <BrandLogo light className="brand" />
      <div className="welcome-copy">
        <h1>Opdag kunsten.<br />Følg blikket.</h1>
        <p>Et nyt sted for kunsten, kunstnerne og dem, der ser potentialet først.</p>
        <button className="btn-white" onClick={onContinue}>
          Opret dig her <Icon name="arrow" size={19} />
        </button>
        <button className="login-link" onClick={onContinue}>Har du allerede en profil? Log ind</button>
      </div>
    </main>
  )
}

function RoleSelect({ onDone, onBack }: { onDone: () => void; onBack: () => void }) {
  const [role, setRole] = useState('Samler')
  const roles = [
    { name: 'Kunstner', text: 'Del og sælg dine værker til et nyt publikum.' },
    { name: 'Samler', text: 'Kurater din samling og løft nye stemmer frem.' },
    { name: 'Køber/Galleri', text: 'Find det næste værk til væggen eller programmet.' },
  ]
  return (
    <main className="screen bg-cream">
      <TopBar title="" onBack={onBack} />
      <section className="px-6 pt-8">
        <p className="step">TRIN 1 AF 3</p>
        <h1 className="display role-heading mt-4">Hvordan møder<br />du kunsten?</h1>
        <p className="mt-3 max-w-xs text-[15px] leading-6 text-ink/60">Vælg den rolle, der passer bedst. Du kan altid ændre den senere.</p>
        <div className="mt-9 space-y-3">
          {roles.map((item) => (
            <button
              key={item.name}
              onClick={() => setRole(item.name)}
              className={`role-card ${role === item.name ? 'selected' : ''}`}
            >
              <span>
                <strong>{item.name}</strong>
                <small>{item.text}</small>
              </span>
              <i>{role === item.name && <span />}</i>
            </button>
          ))}
        </div>
        <button className="btn-dark mt-10" onClick={onDone}>Fortsæt <Icon name="arrow" size={19} /></button>
      </section>
    </main>
  )
}

function Home({ navigate, cartCount, openArtwork }: { navigate: (s: Screen) => void; cartCount: number; openArtwork: (id: string) => void }) {
  return (
    <main className="screen with-nav">
      <StatusBar />
      <div className="home-head">
        <BrandLogo className="logo" />
        <button className="icon-btn cart-trigger" onClick={() => navigate('cart')} aria-label={`Kurv med ${cartCount} værker`}>
          <Icon name="bag" />
          {cartCount > 0 && <span>{cartCount}</span>}
        </button>
      </div>
      <section className="pb-8">
          <div className="following-note mx-5 mt-5">
            <span>DIT PERSONLIGE FEED</span>
            <p>Nye værker og samlinger fra de 84 kunstnere og samlere, du følger.</p>
          </div>
          <div className="section-kicker px-5 pt-7"><span>NYT FRA FREJA VINTER</span><span>2 T. SIDEN</span></div>
          <button className="art-hero following-hero mt-3" onClick={() => openArtwork('indre-landskab')}>
            <img src={images.rose} alt="Indre landskab af Freja Vinter" />
          </button>
          <div className="px-5 pt-4">
            <button className="text-left" onClick={() => openArtwork('indre-landskab')}>
              <h2 className="serif text-[25px] leading-tight">Indre landskab</h2>
              <p className="mt-1 text-sm text-ink/60">Freja Vinter · Maleri · 2025</p>
            </button>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
              <span className="text-[13px] text-ink/55">Olie og voks på lærred</span>
              <strong className="text-sm font-medium">15.600 kr.</strong>
            </div>
          </div>

          <div className="mt-10 px-5">
            <div className="flex items-end justify-between"><div><p className="eyebrow">SENESTE UPLOADS</p><h2 className="serif text-[25px]">Fra dem du følger</h2></div><span className="text-[9px] text-ink/40">I DAG</span></div>
            <div className="following-grid mt-4">
              {[
                ['fold-i', images.clay, 'Fold I', 'Alma Engberg', '9.200 kr.'],
                ['fragment-07', images.digital, 'Fragment 07', 'Elin Noor', 'Kun fremvisning'],
              ].map(([id, src, title, artist, status]) => (
                <button key={id} onClick={() => openArtwork(id)}>
                  <img src={src} alt={title} />
                  <strong>{title}</strong>
                  <small>{artist}</small>
                  <em>{status}</em>
                </button>
              ))}
            </div>
          </div>

          <div className="curated-head mt-11 px-5">
            <div><p className="eyebrow">NY SAMLING FRA</p><h2 className="serif text-[25px]">Clara Uldal</h2></div>
            <button className="link-button" onClick={() => navigate('collector')}>Se samling</button>
          </div>
          <button className="following-collection mx-5 mt-4" onClick={() => openArtwork('nattens-kant')}>
            <img src={images.photo} alt="Nattens kant" />
            <span><small>8 VÆRKER</small><strong>Stilhed efter mørke</strong><p>Fotografi, pigment og nattens landskaber.</p></span>
          </button>
      </section>
      <Nav active="home" navigate={navigate} />
    </main>
  )
}

function Discover({ navigate, openArtwork }: { navigate: (s: Screen) => void; openArtwork: (id: string) => void }) {
  const [query, setQuery] = useState('')
  const [openFilter, setOpenFilter] = useState<string | null>(null)
  const [medium, setMedium] = useState('Alle')
  const [price, setPrice] = useState('Alle')
  const [style, setStyle] = useState('Alle')
  const [size, setSize] = useState('Alle')
  const styleByArtwork: Record<string, string> = {
    'mellem-linjerne': 'Abstrakt',
    'blod-horisont': 'Minimalistisk',
    'fold-i': 'Organisk',
    'stille-form': 'Figurativ',
    'nattens-kant': 'Minimalistisk',
    efterklang: 'Eksperimentel',
    mellemrum: 'Abstrakt',
    'indre-landskab': 'Abstrakt',
    'rod-passage': 'Ekspressiv',
    'fragment-07': 'Eksperimentel',
    'sort-strom': 'Ekspressiv',
  }
  const sizeByArtwork: Record<string, string> = {
    'mellem-linjerne': 'Stor',
    'blod-horisont': 'Mellem',
    'fold-i': 'Lille',
    'stille-form': 'Lille',
    'nattens-kant': 'Mellem',
    efterklang: 'Mellem',
    mellemrum: 'Stor',
    'indre-landskab': 'Stor',
    'rod-passage': 'Mellem',
    'fragment-07': 'Mellem',
    'sort-strom': 'Stor',
  }
  const filterGroups: Record<string, string[]> = {
    Medium: ['Alle', 'Maleri', 'Fotografi', 'Skulptur', 'Digital kunst'],
    Pris: ['Alle', 'Under 6.000 kr.', '6.000–10.000 kr.', 'Over 10.000 kr.', 'Kun fremvisning'],
    Stil: ['Alle', 'Abstrakt', 'Minimalistisk', 'Organisk', 'Figurativ', 'Ekspressiv', 'Eksperimentel'],
    Størrelse: ['Alle', 'Lille', 'Mellem', 'Stor'],
  }
  const selectedFilters: Record<string, string> = { Medium: medium, Pris: price, Stil: style, Størrelse: size }
  const setFilter = (group: string, value: string) => {
    if (group === 'Medium') setMedium(value)
    if (group === 'Pris') setPrice(value)
    if (group === 'Stil') setStyle(value)
    if (group === 'Størrelse') setSize(value)
    setOpenFilter(null)
  }
  const resetFilters = () => {
    setMedium('Alle')
    setPrice('Alle')
    setStyle('Alle')
    setSize('Alle')
    setQuery('')
  }
  const filteredArtworks = artworks.filter((work) => {
    const searchMatch = !query || `${work.title} ${work.artist} ${work.kind} ${styleByArtwork[work.id]}`.toLowerCase().includes(query.toLowerCase())
    const mediumMatch = medium === 'Alle' || work.kind === medium
    const styleMatch = style === 'Alle' || styleByArtwork[work.id] === style
    const sizeMatch = size === 'Alle' || sizeByArtwork[work.id] === size
    const priceMatch =
      price === 'Alle' ||
      (price === 'Kun fremvisning' && !work.price) ||
      (price === 'Under 6.000 kr.' && Boolean(work.price && work.price < 6000)) ||
      (price === '6.000–10.000 kr.' && Boolean(work.price && work.price >= 6000 && work.price <= 10000)) ||
      (price === 'Over 10.000 kr.' && Boolean(work.price && work.price > 10000))
    return searchMatch && mediumMatch && styleMatch && sizeMatch && priceMatch
  })
  const hasFilters = medium !== 'Alle' || price !== 'Alle' || style !== 'Alle' || size !== 'Alle' || Boolean(query)
  return (
    <main className="screen with-nav">
      <TopBar title="Opdag" />
      <section className="px-5 pt-6">
        <label className="search-box">
          <Icon name="search" size={19} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Søg kunstnere, værker, samlere" />
          {query && <button onClick={() => setQuery('')}><Icon name="close" size={17} /></button>}
        </label>
        <div className="hide-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5">
          {Object.keys(filterGroups).map((filter) => (
            <button
              className={`filter-pill ${selectedFilters[filter] !== 'Alle' ? 'selected' : ''}`}
              key={filter}
              onClick={() => setOpenFilter(openFilter === filter ? null : filter)}
            >
              {selectedFilters[filter] === 'Alle' ? filter : selectedFilters[filter]} <span>{openFilter === filter ? '⌃' : '⌄'}</span>
            </button>
          ))}
        </div>
        {openFilter && (
          <div className="filter-panel">
            <div className="filter-panel-head">
              <strong>{openFilter}</strong>
              <button onClick={() => setOpenFilter(null)} aria-label="Luk filter"><Icon name="close" size={16} /></button>
            </div>
            <div className="filter-options">
              {filterGroups[openFilter].map((option) => (
                <button
                  key={option}
                  className={selectedFilters[openFilter] === option ? 'active' : ''}
                  onClick={() => setFilter(openFilter, option)}
                >
                  {option}
                  {selectedFilters[openFilter] === option && <Icon name="check" size={15} />}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
      <section className="mt-8">
        <div className="flex items-end justify-between px-5">
          <div><p className="eyebrow">FREMHÆVET</p><h2 className="serif text-[27px]">Samlere at følge</h2></div>
          <button className="link-button">Se alle</button>
        </div>
        <div className="hide-scrollbar mt-4 flex gap-3 overflow-x-auto px-5">
          {[
            [images.collector, 'Frederik Hald', 'Ny nordisk kunst'],
            [images.profile, 'Clara Uldal', 'Fotografi & form'],
            [images.portrait, 'August Valeur', 'Digitale horisonter'],
          ].map((p, i) => (
            <button className="collector-card" key={p[1]} onClick={() => navigate('collector')}>
              <img src={p[0]} alt="" />
              <strong>{p[1]} {i === 0 && <span className="verified">✓</span>}</strong>
              <small>{p[2]}</small>
            </button>
          ))}
        </div>
      </section>
      <section className="px-5 pb-8 pt-9">
        <div className="flex items-end justify-between">
          <h2 className="serif text-[27px]">{hasFilters ? 'Dine resultater' : 'Udvalgte værker'}</h2>
          <span className="text-xs text-ink/45">{filteredArtworks.length} {filteredArtworks.length === 1 ? 'værk' : 'værker'}</span>
        </div>
        {hasFilters && <button className="mt-2 text-[10px] underline underline-offset-4" onClick={resetFilters}>Nulstil alle filtre</button>}
        {filteredArtworks.length > 0 ? <div className="art-grid mt-4">
          {filteredArtworks.map((work, i) => (
            <button key={work.id} onClick={() => openArtwork(work.id)} className={i % 3 === 0 ? 'tall' : ''}>
              <span className="art-grid-image">
                <img src={work.image} alt={work.title} />
                {!work.price && <i>Kun til fremvisning</i>}
              </span>
              <strong>{work.title}</strong>
              <small>{work.artist} · {work.kind}</small>
              <em>{work.price ? `${work.price.toLocaleString('da-DK')} kr.` : 'Ikke til salg'}</em>
            </button>
          ))}
        </div> : (
          <div className="filter-empty">
            <Icon name="search" size={25} />
            <h3 className="serif mt-4 text-[24px]">Ingen værker matcher</h3>
            <p>Prøv at ændre eller nulstille dine filtre.</p>
            <button className="btn-outline mt-5" onClick={resetFilters}>Nulstil filtre</button>
          </div>
        )}
      </section>
      <Nav active="discover" navigate={navigate} />
    </main>
  )
}

function Artwork({ navigate, artwork, inCart, addToCart }: { navigate: (s: Screen) => void; artwork: ArtworkItem; inCart: boolean; addToCart: (id: string) => void }) {
  const [liked, setLiked] = useState(false)
  const [offerOpen, setOfferOpen] = useState(false)
  const [offerAmount, setOfferAmount] = useState('')
  const [offerSent, setOfferSent] = useState(false)
  const submitOffer = () => {
    if (!offerAmount.trim()) return
    setOfferSent(true)
  }
  return (
    <main className="screen">
      <div className="relative">
        <StatusBar />
        <div className="absolute top-10 z-10 flex w-full justify-between px-3">
          <button className="floating-btn" onClick={() => navigate('home')}><Icon name="back" /></button>
          <div className="flex gap-2">
            <button className={`floating-btn ${liked ? 'text-accent' : ''}`} onClick={() => setLiked(!liked)}><Icon name="heart" filled={liked} /></button>
          </div>
        </div>
        <img src={artwork.image} className="h-[442px] w-full object-cover" alt={artwork.title} />
      </div>
      <section className="px-5 pb-8 pt-6">
        <p className="eyebrow">{artwork.kind.toUpperCase()} · {artwork.year}</p>
        <h1 className="display mt-2 text-[37px]">{artwork.title}</h1>
        <button className="mt-2 flex items-center gap-2" onClick={() => navigate('artist')}>
          <img src={images.portrait} className="h-7 w-7 rounded-full object-cover" alt="" />
          <span className="text-sm underline decoration-ink/30 underline-offset-4">{artwork.artist}</span>
        </button>
        <div className="mt-6 grid grid-cols-2 border-y border-line py-4 text-sm">
          <div><span className="label">MEDIUM</span><p>{artwork.medium}</p></div>
          <div><span className="label">STØRRELSE</span><p>{artwork.size}</p></div>
        </div>
        <div className="border-b border-line py-5">
          <span className="label">OM VÆRKET</span>
          <p className="text-[13px] leading-[1.7] text-ink/65">{artwork.description}</p>
        </div>
        <div className="flex items-center justify-between py-5">
          <div><span className="label">{artwork.price ? 'PRIS' : 'STATUS'}</span><p className="serif text-2xl">{artwork.price ? `${artwork.price.toLocaleString('da-DK')} kr.` : 'Kun til fremvisning'}</p></div>
          <span className={`rounded-full px-3 py-1 text-xs ${artwork.price ? 'bg-[#e7efe8] text-[#48634d]' : 'bg-[#ece9e1] text-ink/55'}`}>{artwork.price ? 'Til salg' : 'Ikke til salg'}</span>
        </div>
        {artwork.price ? (
          <>
            <button
              className="btn-accent"
              onClick={() => {
                if (!inCart) addToCart(artwork.id)
                navigate('cart')
              }}
            >
              {inCart ? 'Se i kurven' : 'Læg i kurv'}
            </button>
            <button className="btn-outline mt-2" onClick={() => { setOfferOpen(true); setOfferSent(false) }}>Giv et bud</button>
          </>
        ) : (
          <button className="btn-outline">Kontakt kunstneren</button>
        )}
        <div className="mt-10">
          <p className="eyebrow">VÆRKETS REJSE</p>
          <h2 className="serif mt-1 text-[25px]">I samlingen hos</h2>
          <button className="mt-4 flex w-full items-center border-b border-line pb-4 text-left" onClick={() => navigate('collector')}>
            <img src={images.collector} className="h-12 w-12 rounded-full object-cover" alt="" />
            <div className="ml-3 flex-1"><strong className="block text-sm font-medium">Frederik Hald</strong><small className="text-ink/50">Gemte værket · 2 dage siden</small></div>
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </section>
      {offerOpen && (
        <div className="offer-overlay" role="presentation" onClick={() => setOfferOpen(false)}>
          <section className="offer-sheet" role="dialog" aria-modal="true" aria-labelledby="offer-title" onClick={(event) => event.stopPropagation()}>
            <div className="offer-handle" />
            <button className="offer-close" onClick={() => setOfferOpen(false)} aria-label="Luk">
              <Icon name="close" size={20} />
            </button>
            {offerSent ? (
              <div className="offer-success">
                <span className="success-mark"><Icon name="check" size={28} /></span>
                <p className="eyebrow mt-6">DIT BUD ER SENDT</p>
                <h2 id="offer-title" className="display mt-2 text-[34px]">Tak for dit bud</h2>
                <p className="mt-3 text-sm leading-6 text-ink/55">
                  {artwork.artist} har modtaget dit bud på {Number(offerAmount.replace(/\D/g, '') || 0).toLocaleString('da-DK')} kr. Du får svar inden for 48 timer.
                </p>
                <button className="btn-dark mt-7" onClick={() => setOfferOpen(false)}>Tilbage til værket</button>
              </div>
            ) : (
              <>
                <p className="eyebrow text-accent">GIV ET BUD</p>
                <h2 id="offer-title" className="display mt-2 text-[34px]">Hvad vil du byde?</h2>
                <p className="mt-3 text-sm leading-6 text-ink/55">Værkets pris er {artwork.price?.toLocaleString('da-DK')} kr. Kunstneren kan acceptere, afslå eller sende et modbud.</p>
                <label className="offer-field mt-7">
                  <span>DIT BUD</span>
                  <span className="offer-input">
                    <input
                      autoFocus
                      inputMode="numeric"
                      value={offerAmount}
                      onChange={(event) => setOfferAmount(event.target.value.replace(/\D/g, ''))}
                      placeholder="10.500"
                    />
                    <strong>kr.</strong>
                  </span>
                </label>
                <label className="offer-field mt-5">
                  <span>BESKED TIL KUNSTNEREN <i>VALGFRI</i></span>
                  <textarea rows={3} placeholder="Skriv en kort besked om dit bud" />
                </label>
                <div className="offer-note mt-5">
                  <Icon name="check" size={17} />
                  <p>Buddet er ikke bindende, før kunstneren har accepteret det.</p>
                </div>
                <button className="btn-accent mt-6 disabled:opacity-40" disabled={!offerAmount.trim()} onClick={submitOffer}>Send bud</button>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  )
}

function Cart({
  navigate,
  items,
  removeArtwork,
  openArtwork,
}: {
  navigate: (s: Screen) => void
  items: ArtworkItem[]
  removeArtwork: (id: string) => void
  openArtwork: (id: string) => void
}) {
  const subtotal = items.reduce((sum, item) => sum + (item.price ?? 0), 0)
  const total = subtotal + 650
  return (
    <main className="screen">
      <TopBar title="Din kurv" onBack={() => navigate('home')} />
      {items.length > 0 ? (
        <section className="px-5 pb-8 pt-7">
          <p className="eyebrow">{items.length} {items.length === 1 ? 'VÆRK' : 'VÆRKER'} I KURVEN</p>
          <h1 className="display mt-2 text-[35px]">Din næste investering</h1>
          <div className="mt-7 space-y-5">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <button onClick={() => openArtwork(item.id)} className="shrink-0">
                  <img src={item.image} alt={item.title} />
                </button>
                <div className="cart-item-copy">
                  <div>
                    <button className="text-left" onClick={() => openArtwork(item.id)}>
                      <strong>{item.title}</strong>
                      <small>{item.artist} · {item.year}</small>
                    </button>
                    <p>{item.medium}<br />{item.size}</p>
                  </div>
                  <b>{item.price?.toLocaleString('da-DK')} kr.</b>
                </div>
                <button className="cart-remove" onClick={() => removeArtwork(item.id)} aria-label={`Fjern ${item.title} fra kurven`}>
                  <Icon name="close" size={17} />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary mt-8">
            <span>Værker</span><span>{subtotal.toLocaleString('da-DK')} kr.</span>
            <span>Kunsttransport</span><span>650 kr.</span>
            <span>Forsikring</span><span>Inkluderet</span>
            <strong>I alt</strong><strong>{total.toLocaleString('da-DK')} kr.</strong>
          </div>
          <button className="btn-accent mt-7" onClick={() => navigate('checkout')}>Gå til checkout</button>
          <button className="btn-outline mt-2" onClick={() => navigate('discover')}>Fortsæt med at udforske</button>
          <div className="cart-assurance mt-8">
            <Icon name="check" size={18} />
            <p><strong>Sikker kunsthandel</strong><span>Betaling frigives først, når værket er på vej til dig.</span></p>
          </div>
        </section>
      ) : (
        <section className="empty-cart px-8 text-center">
          <span className="empty-cart-icon"><Icon name="bag" size={29} /></span>
          <p className="eyebrow mt-6">DIN KURV ER TOM</p>
          <h1 className="display mt-2 text-[37px]">Find et værk,<br />der bliver hos dig</h1>
          <p className="mt-4 text-sm leading-6 text-ink/55">Læg et værk i kurven for at fortsætte dit køb.</p>
          <button className="btn-dark mt-8" onClick={() => navigate('discover')}>Opdag værker</button>
        </section>
      )}
    </main>
  )
}

function Artist({ navigate, openArtwork }: { navigate: (s: Screen) => void; openArtwork: (id: string) => void }) {
  const [following, setFollowing] = useState(false)
  const [tab, setTab] = useState('Værker')
  return (
    <main className="screen">
      <TopBar title="" onBack={() => navigate('artwork')} right={<button className="icon-btn"><Icon name="more" /></button>} />
      <section className="px-5 pb-10 pt-4">
        <div className="flex items-start justify-between">
          <img src={images.portrait} className="h-[88px] w-[88px] rounded-full object-cover" alt="Liv Søndergaard" />
          <button className={following ? 'follow active' : 'follow'} onClick={() => setFollowing(!following)}>{following ? 'Følger' : 'Følg'}</button>
        </div>
        <h1 className="display mt-5 text-[35px]">Liv Søndergaard</h1>
        <p className="mt-1 text-xs uppercase tracking-[.12em] text-ink/45">Kunstner · København</p>
        <p className="mt-4 max-w-[330px] text-[14px] leading-[1.6] text-ink/70">Arbejder i spændingsfeltet mellem erindring og materiale. Uddannet fra Det Kongelige Danske Kunstakademi.</p>
        <div className="mt-5 flex gap-8 border-b border-line pb-5">
          <div><strong className="block font-medium">24</strong><small className="text-ink/45">Værker</small></div>
          <div><strong className="block font-medium">1.842</strong><small className="text-ink/45">Følgere</small></div>
          <div><strong className="block font-medium">18</strong><small className="text-ink/45">Samlere</small></div>
        </div>
        <div className="profile-tabs">
          {['Værker', 'Om', 'Solgt'].map(t => <button key={t} onClick={() => setTab(t)} className={tab === t ? 'active' : ''}>{t}</button>)}
        </div>
        {tab === 'Om' ? (
          <div className="py-7 text-sm leading-7 text-ink/70"><p>Livs praksis undersøger, hvordan farve og gentagelse kan fastholde flygtige minder.</p><p className="mt-5"><span className="label">UDDANNELSE</span>Det Kongelige Danske Kunstakademi, 2022</p></div>
        ) : (
          <div className="art-grid mt-5">
            {['mellem-linjerne', 'mellemrum', 'blod-horisont', 'efterklang'].map((id, i) => {
              const work = artworks.find((item) => item.id === id)!
              return (
              <button key={id} onClick={() => openArtwork(id)} className={i === 0 ? 'tall' : ''}>
                <img src={work.image} alt={work.title} />
                <strong>{work.title}</strong>
                <small>{work.price ? `${work.price.toLocaleString('da-DK')} kr.` : 'Ikke til salg'}</small>
              </button>
            )})}
          </div>
        )}
      </section>
    </main>
  )
}

function Collector({ navigate }: { navigate: (s: Screen) => void }) {
  const [following, setFollowing] = useState(false)
  return (
    <main className="screen">
      <TopBar title="" onBack={() => navigate('home')} right={<button className="icon-btn"><Icon name="more" /></button>} />
      <section className="px-5 pb-10 pt-4">
        <div className="flex items-start justify-between">
          <img src={images.collector} className="h-[88px] w-[88px] rounded-full object-cover" alt="Frederik Hald" />
          <button className={following ? 'follow active' : 'follow'} onClick={() => setFollowing(!following)}>{following ? 'Følger' : 'Følg'}</button>
        </div>
        <h1 className="display mt-5 text-[35px]">Frederik Hald <span className="verified big">✓</span></h1>
        <p className="mt-2 serif text-lg italic text-ink/65">“Samler på fremtidsorienteret kunst”</p>
        <div className="mt-5 flex gap-8 border-b border-line pb-5">
          <div><strong className="block font-medium">68</strong><small className="text-ink/45">Værker</small></div>
          <div><strong className="block font-medium">3.210</strong><small className="text-ink/45">Følgere</small></div>
          <div><strong className="block font-medium">12</strong><small className="text-ink/45">Samlinger</small></div>
        </div>
        <div className="mt-8 flex items-end justify-between"><div><p className="eyebrow">KURATEREDE UDSTILLINGER</p><h2 className="serif text-[27px]">Frederiks samlinger</h2></div></div>
        <button className="collection-feature mt-4" onClick={() => navigate('artwork')}>
          <div className="collection-collage">
            <img src={images.main} alt="" /><img src={images.clay} alt="" /><img src={images.soft} alt="" />
          </div>
          <span className="mt-3 flex items-end justify-between text-left">
            <span><strong className="serif block text-xl font-normal">Nye virkeligheder</strong><small className="text-ink/50">8 værker · Opdateret i går</small></span><Icon name="arrow" size={18} />
          </span>
        </button>
        <button className="collection-feature mt-8">
          <img src={images.gallery} className="h-48 w-full object-cover" alt="Galleriinteriør" />
          <span className="mt-3 flex items-end justify-between text-left">
            <span><strong className="serif block text-xl font-normal">Ro i bevægelse</strong><small className="text-ink/50">12 værker · 2024</small></span><Icon name="arrow" size={18} />
          </span>
        </button>
      </section>
    </main>
  )
}

function Upload({ navigate }: { navigate: (s: Screen) => void }) {
  const [forSale, setForSale] = useState(true)
  const [uploaded, setUploaded] = useState(false)
  const [published, setPublished] = useState(false)
  const [description, setDescription] = useState('')
  const [descriptionError, setDescriptionError] = useState(false)
  const publishArtwork = () => {
    if (!description.trim()) {
      setDescriptionError(true)
      return
    }
    setPublished(true)
  }
  if (published) {
    return (
      <main className="screen with-nav flex flex-col items-center justify-center px-8 text-center">
        <span className="success-mark"><Icon name="check" size={30} /></span>
        <p className="eyebrow mt-6">VÆRKET ER UDGIVET</p>
        <h1 className="display mt-2 text-[38px]">Dit værk er nu levende</h1>
        <p className="mt-3 text-sm leading-6 text-ink/55">Samlere og købere kan nu opdage værket på din profil.</p>
        <button className="btn-dark mt-8" onClick={() => navigate('profile')}>Se på min profil</button>
        <Nav active="upload" navigate={navigate} />
      </main>
    )
  }
  return (
    <main className="screen with-nav">
      <TopBar title="Nyt værk" right={<button className="text-xs underline underline-offset-4">Gem kladde</button>} />
      <section className="px-5 pb-10">
        <button className={`upload-area mt-6 ${uploaded ? 'has-image' : ''}`} onClick={() => setUploaded(true)}>
          {uploaded ? <><img src={images.main} alt="Uploadet værk" /><span><Icon name="camera" size={17} /> Skift billede</span></> : <><Icon name="camera" size={28} /><strong>Tilføj billeder</strong><small>JPG eller PNG · maks. 20 MB</small></>}
        </button>
        <div className="form-stack mt-7">
          <label><span>Titel</span><input placeholder="Værkets titel" defaultValue={uploaded ? 'Mellem linjerne' : ''} /></label>
          <label>
            <span>Beskrivelse <b className="required-mark">*</b></span>
            <textarea
              required
              aria-required="true"
              aria-invalid={descriptionError}
              className={descriptionError ? 'field-invalid' : ''}
              placeholder="Fortæl historien bag værket"
              rows={3}
              value={description}
              onChange={(event) => {
                setDescription(event.target.value)
                if (event.target.value.trim()) setDescriptionError(false)
              }}
            />
            {descriptionError && <small className="field-error">Du skal tilføje en beskrivelse af værket.</small>}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label><span>Medium</span><select defaultValue=""><option value="" disabled>Vælg</option><option>Maleri</option><option>Fotografi</option><option>Skulptur</option></select></label>
            <label><span>År</span><input placeholder="2025" inputMode="numeric" /></label>
          </div>
          <label><span>Størrelse (cm)</span><div className="flex gap-2"><input placeholder="Højde" /><input placeholder="Bredde" /><input placeholder="Dybde" /></div></label>
          <label><span>Pris (DKK)</span><input placeholder="0 kr." inputMode="numeric" /></label>
          <div className="flex items-center justify-between border-y border-line py-4">
            <span><strong className="block text-sm font-medium">Til salg</strong><small className="text-ink/45">Værket kan købes direkte</small></span>
            <button className={`toggle ${forSale ? 'on' : ''}`} onClick={() => setForSale(!forSale)}><i /></button>
          </div>
        </div>
        <button className="btn-dark mt-7" onClick={publishArtwork}>Udgiv værk</button>
      </section>
      <Nav active="upload" navigate={navigate} />
    </main>
  )
}

function Magazine({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <main className="screen with-nav">
      <TopBar title="Magasin" />
      <section className="px-5 pb-10">
        <p className="eyebrow mt-4">KVARTALSMAGASIN · NR. 02</p>
        <div className="mag-cover mt-3">
          <img src={images.magazine} alt="Magasinets forside" />
          <div className="mag-title"><BrandLogo light /><strong>Nye<br />horisonter</strong><small>Forår / Sommer 2025</small></div>
        </div>
        <h1 className="display mt-6 text-[34px]">Kunsten flytter sig.<br />Vi følger med.</h1>
        <p className="mt-3 text-sm leading-6 text-ink/60">Mød en generation af kunstnere, der former nye billeder af verden – på papir og i virkeligheden.</p>
        <button className="btn-dark mt-6">Udforsk det nye nummer <Icon name="arrow" size={18} /></button>
        <div className="mt-10 flex items-end justify-between border-b border-line pb-3"><h2 className="serif text-[26px]">I dette nummer</h2><button className="link-button">Se alle</button></div>
        {[
          [images.portrait, 'Liv Søndergaard', 'Farven som erindring'],
          [images.clay, 'Alma Engberg', 'Formen finder sin vej'],
        ].map((article) => (
          <button className="article" key={article[1]} onClick={() => navigate('artist')}>
            <img src={article[0]} alt="" />
            <span><small>PORTRÆT</small><strong>{article[1]}</strong><p>{article[2]}</p><u>Læs mere</u></span>
          </button>
        ))}
      </section>
      <Nav active="magazine" navigate={navigate} />
    </main>
  )
}

function Profile({ navigate, openArtwork }: { navigate: (s: Screen) => void; openArtwork: (id: string) => void }) {
  return (
    <main className="screen with-nav">
      <TopBar title="Profil" />
      <section className="px-5 pb-10 pt-4">
        <div className="flex items-center gap-4">
          <img src={images.profile} className="h-20 w-20 rounded-full object-cover" alt="Sofie" />
          <div><h1 className="serif text-[28px]">Sofie Lund</h1><p className="text-xs text-ink/50">@sofielund · Samler</p></div>
        </div>
        <button className="btn-outline mt-6">Rediger profil</button>
        <div className="mt-7 grid grid-cols-3 border-y border-line py-5 text-center">
          <div><strong className="block">12</strong><small className="text-ink/45">Gemte</small></div>
          <div className="border-x border-line"><strong className="block">84</strong><small className="text-ink/45">Følger</small></div>
          <div><strong className="block">126</strong><small className="text-ink/45">Følgere</small></div>
        </div>
        <h2 className="serif mt-8 text-[26px]">Din samling</h2>
        <div className="art-grid mt-4">
          {['mellem-linjerne', 'fold-i', 'blod-horisont', 'efterklang'].map((id) => {
            const work = artworks.find((item) => item.id === id)!
            return <button key={id} onClick={() => openArtwork(id)}><img src={work.image} alt={work.title} /><strong>{work.title}</strong><small>Gemt værk</small></button>
          })}
        </div>
      </section>
      <Nav active="profile" navigate={navigate} />
    </main>
  )
}

function Checkout({ navigate, completeOrder, items }: { navigate: (s: Screen) => void; completeOrder: () => void; items: ArtworkItem[] }) {
  const [step, setStep] = useState(1)
  const subtotal = items.reduce((sum, item) => sum + (item.price ?? 0), 0)
  const total = subtotal + 650
  return (
    <main className="screen">
      <TopBar title="Køb værk" onBack={() => step > 1 ? setStep(step - 1) : navigate('cart')} />
      <div className="checkout-steps px-5"><span className={step >= 1 ? 'active' : ''}>1</span><i /><span className={step >= 2 ? 'active' : ''}>2</span><i /><span className={step >= 3 ? 'active' : ''}>3</span></div>
      <section className="px-5 pb-8 pt-7">
        {step === 1 && <>
          <p className="eyebrow">DIN ORDRE</p><h1 className="display mt-2 text-[34px]">Ordreoversigt</h1>
          {items.map((item) => (
            <div className="mt-6 flex gap-4 border-b border-line pb-5" key={item.id}>
              <img src={item.image} className="h-32 w-24 object-cover" alt={item.title} />
              <div className="flex flex-1 flex-col justify-between py-1"><span><strong className="serif block text-xl font-normal">{item.title}</strong><small className="text-ink/50">{item.artist}<br />{item.size}</small></span><strong className="text-sm font-medium">{item.price?.toLocaleString('da-DK')} kr.</strong></div>
            </div>
          ))}
          <div className="summary"><span>Værker</span><span>{subtotal.toLocaleString('da-DK')} kr.</span><span>Levering med kunsttransport</span><span>650 kr.</span><span>Forsikring</span><span>Inkluderet</span><strong>I alt</strong><strong>{total.toLocaleString('da-DK')} kr.</strong></div>
          <button className="btn-dark mt-7" onClick={() => setStep(2)}>Fortsæt til levering</button>
        </>}
        {step === 2 && <>
          <p className="eyebrow">LEVERING</p><h1 className="display mt-2 text-[34px]">Hvor skal kunsten bo?</h1>
          <div className="form-stack mt-7">
            <div className="grid grid-cols-2 gap-3"><label><span>Fornavn</span><input defaultValue="Sofie" /></label><label><span>Efternavn</span><input defaultValue="Lund" /></label></div>
            <label><span>Adresse</span><input placeholder="Gade og nummer" /></label>
            <div className="grid grid-cols-[1fr_2fr] gap-3"><label><span>Postnr.</span><input placeholder="2100" /></label><label><span>By</span><input placeholder="København Ø" /></label></div>
            <label><span>Telefon</span><input placeholder="+45" /></label>
          </div>
          <div className="delivery-note mt-6"><Icon name="check" size={19} /><span><strong>Sikker kunsttransport</strong><small>Vi kontakter dig for at aftale levering.</small></span></div>
          <button className="btn-dark mt-7" onClick={() => setStep(3)}>Fortsæt til betaling</button>
        </>}
        {step === 3 && <>
          <p className="eyebrow">BETALING</p><h1 className="display mt-2 text-[34px]">Betal sikkert</h1>
          <div className="payment-card mt-7">
            <label className="label">KORTNUMMER</label><input placeholder="1234  5678  9012  3456" />
            <div className="mt-5 grid grid-cols-2 gap-4"><span><label className="label">UDLØBSDATO</label><input placeholder="MM / ÅÅ" /></span><span><label className="label">CVC</label><input placeholder="•••" /></span></div>
          </div>
          <label className="mt-5 flex items-center gap-3 text-sm"><span className="checkbox"><Icon name="check" size={14} /></span> Gem kort til næste gang</label>
          <div className="mt-8 flex justify-between border-y border-line py-4"><span className="text-sm">Beløb i alt</span><strong className="serif text-xl">{total.toLocaleString('da-DK')} kr.</strong></div>
          <button className="btn-accent mt-7" onClick={completeOrder}>Betal {total.toLocaleString('da-DK')} kr.</button>
          <p className="mt-3 text-center text-[11px] text-ink/40">Din betaling er krypteret og sikker</p>
        </>}
      </section>
    </main>
  )
}

function Confirmation({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <main className="screen confirmation">
      <StatusBar />
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <span className="success-mark"><Icon name="check" size={30} /></span>
        <p className="eyebrow mt-7">ORDRE #A2408</p>
        <h1 className="display mt-2 text-[40px]">Kunsten er din.</h1>
        <p className="mt-4 max-w-[285px] text-sm leading-6 text-ink/60">Tak for dit køb, Sofie. Vi sender en bekræftelse og kontakter dig om leveringen.</p>
        <div className="mt-8 flex items-center gap-4 border-y border-line py-4 text-left">
          <img src={images.main} className="h-20 w-16 object-cover" alt="" />
          <span><strong className="serif block text-lg font-normal">Mellem linjerne</strong><small className="text-ink/50">af Liv Søndergaard</small></span>
        </div>
        <button className="btn-dark mt-8" onClick={() => navigate('home')}>Tilbage til forsiden</button>
        <button className="mt-4 text-sm underline underline-offset-4" onClick={() => navigate('profile')}>Se min samling</button>
      </div>
    </main>
  )
}

export default function App() {
  const [onboarding, setOnboarding] = useState<'welcome' | 'role' | 'done'>('welcome')
  const [screen, setScreen] = useState<Screen>('home')
  const [selectedArtworkId, setSelectedArtworkId] = useState('mellem-linjerne')
  const [cartArtworkIds, setCartArtworkIds] = useState<string[]>([])
  const navigate = (next: Screen) => {
    setScreen(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const openArtwork = (id: string) => {
    setSelectedArtworkId(id)
    navigate('artwork')
  }
  const selectedArtwork = artworks.find((item) => item.id === selectedArtworkId) ?? artworks[0]
  const cartItems = cartArtworkIds
    .map((id) => artworks.find((item) => item.id === id))
    .filter((item): item is ArtworkItem => Boolean(item))

  if (onboarding === 'welcome') return <Welcome onContinue={() => setOnboarding('role')} />
  if (onboarding === 'role') return <RoleSelect onBack={() => setOnboarding('welcome')} onDone={() => setOnboarding('done')} />

  const screens: Record<Screen, React.ReactNode> = {
    home: <Home navigate={navigate} cartCount={cartArtworkIds.length} openArtwork={openArtwork} />,
    discover: <Discover navigate={navigate} openArtwork={openArtwork} />,
    upload: <Upload navigate={navigate} />,
    magazine: <Magazine navigate={navigate} />,
    profile: <Profile navigate={navigate} openArtwork={openArtwork} />,
    artwork: <Artwork navigate={navigate} artwork={selectedArtwork} inCart={cartArtworkIds.includes(selectedArtwork.id)} addToCart={(id) => setCartArtworkIds((current) => current.includes(id) ? current : [...current, id])} />,
    artist: <Artist navigate={navigate} openArtwork={openArtwork} />,
    collector: <Collector navigate={navigate} />,
    checkout: <Checkout navigate={navigate} items={cartItems} completeOrder={() => { setCartArtworkIds([]); navigate('confirmation') }} />,
    confirmation: <Confirmation navigate={navigate} />,
    cart: <Cart navigate={navigate} items={cartItems} openArtwork={openArtwork} removeArtwork={(id) => setCartArtworkIds((current) => current.filter((item) => item !== id))} />,
  }
  return screens[screen]
}
