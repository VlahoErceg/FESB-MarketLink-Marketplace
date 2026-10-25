import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  Heart,
  Headphones,
  LaptopMinimal,
  Menu,
  Search,
  ShoppingBag,
  ShoppingCart,
  Watch,
  X,
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

const categories = [
  "Elektronika",
  "Računala i periferija",
  "Odjeća i obuća",
  "Dom i vrt",
  "Sport i rekreacija",
  "Gaming",
  "Knjige i edukacija",
  "Ostalo",
];

function SearchField() {
  return (
    <label className="nav-search">
      <Search size={18} aria-hidden="true" />
      <input
        type="search"
        aria-label="Pretraži proizvode"
        placeholder="Pretraži proizvode..."
        disabled
      />
    </label>
  );
}

function CategoryMenu({
  id,
  open,
  onToggle,
}: {
  id: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="nav-categories">
      <button
        className="nav-category-trigger"
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        Kategorije
        <ChevronDown
          className={open ? "nav-category-chevron is-open" : "nav-category-chevron"}
          size={15}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="nav-category-menu" id={id}>
          <span className="nav-category-menu__title">Pregled kategorija</span>
          {categories.map((category) => (
            <button className="nav-category-option" type="button" disabled key={category}>
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function AccountButtons() {
  return (
    <div className="nav-account">
      <button className="nav-login" type="button" disabled>
        Prijava
      </button>
      <button className="nav-register" type="button" disabled>
        Registracija
      </button>
    </div>
  );
}

function NavIconButton({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <button className="nav-icon-button" type="button" aria-label={label} disabled>
      {children}
    </button>
  );
}

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  function toggleCategories() {
    setCategoryOpen((open) => !open);
  }

  return (
    <header className="site-header">
      <nav className="site-header__inner" aria-label="Glavna navigacija">
        <a className="brand" href="/" aria-label="MarketLink — početna stranica">
          <span className="brand__mark" aria-hidden="true">
            <ShoppingBag size={20} strokeWidth={2} />
          </span>
          <span className="brand__name">Market<span>Link</span></span>
        </a>

        <div className="site-header__desktop">
          <SearchField />
          <CategoryMenu
            id="desktop-category-menu"
            open={categoryOpen}
            onToggle={toggleCategories}
          />
          <AccountButtons />
          <NavIconButton label="Favoriti">
            <Heart size={19} aria-hidden="true" />
          </NavIconButton>
          <NavIconButton label="Košarica, 0 proizvoda">
            <ShoppingCart size={19} aria-hidden="true" />
            <span className="nav-cart-count" aria-hidden="true">0</span>
          </NavIconButton>
        </div>

        <div className="site-header__mobile-actions">
          <NavIconButton label="Košarica, 0 proizvoda">
            <ShoppingCart size={20} aria-hidden="true" />
            <span className="nav-cart-count" aria-hidden="true">0</span>
          </NavIconButton>
          <button
            className="nav-icon-button nav-menu-toggle"
            type="button"
            aria-label={mobileOpen ? "Zatvori navigacijski izbornik" : "Otvori navigacijski izbornik"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="site-header__mobile-panel" id="mobile-navigation">
            <SearchField />
            <CategoryMenu
              id="mobile-category-menu"
              open={categoryOpen}
              onToggle={toggleCategories}
            />
            <AccountButtons />
            <div className="nav-mobile-shortcuts">
              <NavIconButton label="Favoriti">
                <Heart size={19} aria-hidden="true" />
                <span>Favoriti</span>
              </NavIconButton>
              <NavIconButton label="Košarica, 0 proizvoda">
                <ShoppingCart size={19} aria-hidden="true" />
                <span>Košarica</span>
                <span className="nav-cart-count" aria-hidden="true">0</span>
              </NavIconButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const visualItems = [
  { label: "Tehnologija", icon: Headphones, className: "hero-card--audio" },
  { label: "Oprema za svaki dan", icon: ShoppingBag, className: "hero-card--daily" },
  { label: "Pametni dodaci", icon: Watch, className: "hero-card--watch" },
];

function HeroVisual() {
  return (
    <div
      className="hero-visual"
      role="img"
      aria-label="Ilustracija proizvoda iz internetske trgovine"
    >
      <div className="hero-visual__glow" />
      <div className="hero-visual__device" aria-hidden="true">
        <LaptopMinimal size={34} strokeWidth={1.5} />
      </div>
      <div className="hero-visual__orbit hero-visual__orbit--one" />
      <div className="hero-visual__orbit hero-visual__orbit--two" />
      {visualItems.map(({ label, icon: Icon, className }) => (
        <div className={`hero-card ${className}`} key={label}>
          <span className="hero-card__icon" aria-hidden="true">
            <Icon size={23} strokeWidth={1.7} />
          </span>
          <span className="hero-card__label">{label}</span>
        </div>
      ))}
      <div className="hero-visual__caption">
        <span className="hero-visual__caption-dot" />
        Otkrij ponudu na jednom mjestu
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <span className="hero__eyebrow">
              <span className="hero__eyebrow-mark" aria-hidden="true" />
              FESB MarketLink
            </span>
            <h1 id="hero-title">
              Sve što tražiš.
              <br />
              <span>Na jednom mjestu.</span>
            </h1>
            <p className="hero__description">
              Otkrij proizvode različitih prodavača, pronađi najbolje ponude i kupuj
              jednostavno putem MarketLinka.
            </p>
            <div className="hero__actions">
              <button className="button button--primary" type="button" disabled>
                Istraži proizvode
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
              <button className="button button--secondary" type="button" disabled>
                Postani prodavač
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            </div>
            <p className="hero__note">Početna verzija platforme je u izradi.</p>
            <a className="hero__scroll" href="#hero-visual">
              <span className="hero__scroll-icon" aria-hidden="true">
                <ArrowDown size={15} />
              </span>
              Upoznaj MarketLink
            </a>
          </div>
          <div id="hero-visual" className="hero__art">
            <HeroVisual />
          </div>
        </section>
      </main>
    </>
  );
}
