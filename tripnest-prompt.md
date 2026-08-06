# TripNest — AI Build Prompt (Frontend Only)


## 1. Project Summary

Build **TripNest**, a fully responsive, frontend-only travel itinerary planner web app, using **React + TypeScript**. No real backend is required — use mock data and localStorage for persistence. This is for a hackathon (TechRush – Frontend Web Development track), so prioritize a polished, working, visually impressive UI over backend completeness.

**Core value prop:** Help users discover destinations and build personalized itineraries based on weather, budget, and travel preferences, in an interactive, visually engaging interface.

---

## 2. Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **React Router v6** (routing across pages)
- **Tailwind CSS** (styling, incl. dark mode via `class` strategy)
- **Zustand** (lightweight global state — itinerary, theme, filters, saved trips)
- **Framer Motion** (page transitions, micro-interactions)
- **Lucide React** (icons)
- **Recharts** (for budget calculator charts)
- **React-Leaflet + Leaflet** (free interactive map, OpenStreetMap tiles, no API key)
- Mock data via local JSON/TS files (no real API calls needed; structure it so a real API could be swapped in later)
- Persist itinerary, theme, and saved comparisons to `localStorage`

Do NOT set up a real backend, database, or auth system. Everything is client-side.

### 3.1 External Services (all free, no billing setup)

| Purpose | Service | Notes |
|---|---|---|
| Weather | OpenWeatherMap (free tier) | Free API key required; used for live weather on Home, Search, Map, and destination detail |
| Map | Leaflet + OpenStreetMap tiles | Fully free, no API key or credit card needed |
| Destination images | Unsplash Source / Pexels API | Free, no key issues |
| Everything else (destinations, activities, packing lists, crowd levels) | Static mock JSON/TS, AI-generated then hand-reviewed | No API — lives in `src/data/` |

---

## 3. Folder Structure

```
tripnest/
├── public/
│   └── images/
│       └── destinations/          # placeholder destination images
├── src/
│   ├── assets/
│   │   └── icons/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrendingDestinations.tsx
│   │   │   ├── SeasonalPicks.tsx
│   │   │   └── FeatureHighlights.tsx
│   │   ├── search/
│   │   │   ├── FilterSidebar.tsx
│   │   │   ├── DestinationGrid.tsx
│   │   │   ├── DestinationCard.tsx
│   │   │   └── SortControls.tsx
│   │   ├── map/
│   │   │   ├── MapPlaceholder.tsx
│   │   │   ├── MapLegend.tsx
│   │   │   └── MapDestinationList.tsx
│   │   ├── itinerary/
│   │   │   ├── ItineraryBuilder.tsx
│   │   │   ├── DayCard.tsx
│   │   │   ├── ActivityCard.tsx
│   │   │   ├── AddActivityModal.tsx
│   │   │   └── ItineraryTimeline.tsx
│   │   └── bonus/
│   │       ├── BudgetCalculator.tsx
│   │       ├── PackingChecklist.tsx
│   │       ├── DestinationComparison.tsx
│   │       └── AIRecommendations.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── SearchPage.tsx
│   │   ├── MapPage.tsx
│   │   ├── ItineraryPlannerPage.tsx
│   │   ├── BonusPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── data/
│   │   ├── destinations.ts        # mock destination dataset
│   │   ├── activities.ts          # mock activities per destination
│   │   ├── weather.ts             # mock seasonal weather data
│   │   └── packingItems.ts        # default packing checklist items
│   ├── store/
│   │   ├── useThemeStore.ts
│   │   ├── useItineraryStore.ts
│   │   ├── useFilterStore.ts
│   │   └── useComparisonStore.ts
│   ├── types/
│   │   ├── destination.ts
│   │   ├── itinerary.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   └── useDebounce.ts
│   ├── utils/
│   │   ├── budgetCalculations.ts
│   │   └── formatters.ts
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

---

## 4. Pages & Functional Requirements

### 4.1 Home Page (`/`)
- Hero section with a strong headline, subtext, and CTA button ("Plan your trip") leading to Search.
- **Trending Destinations** section — cards pulled from mock data, filterable by season (tabs: Summer / Winter / Monsoon / All).
- **Seasonal Picks** — highlight 3–4 destinations matching the current season's weather.
- Feature highlights section (icons + short text): weather-aware planning, budget tools, interactive map, AI suggestions.
- Fully responsive hero and grid layouts (stack on mobile).

### 4.2 Search / Discover Page (`/search`)
- Sidebar (collapsible drawer on mobile) with filters:
  - **Weather**: Sunny, Rainy, Snowy, Mild
  - **Budget**: Low / Medium / High (or a price range slider)
  - **Destination type**: Mountains, Beaches, Heritage, City, Adventure
- Search bar with debounced text filtering by destination name.
- Responsive grid of `DestinationCard`s showing image, name, country, type badge, weather badge, price range, rating.
- Sort controls: Popularity, Price (low–high, high–low), Rating.
- Clicking a card opens a detail modal or navigates to a detail view with an "Add to Itinerary" button.
- Empty state when no results match filters.

### 4.3 Map Page (`/map`)
- **Real, working map** — use **Leaflet + OpenStreetMap tiles** (`react-leaflet`). Free, no API key, no billing setup required (unlike Google Maps).
- Interactive pan/zoom map centered on India, with markers plotted at each destination's real lat/long from mock data.
- Marker click/hover shows a popup: name, weather icon (live from OpenWeatherMap), and a **mock crowd-level badge** (Low/Medium/High) or "restricted" tag — crowd/traffic data is simulated since no free public dataset exists for this, but clearly structured so a real traffic API could be swapped in later.
- Includes a legend (weather icons, crowd-level color coding).
- Includes a side list (`MapDestinationList`) synced with markers — clicking a list item pans/highlights the corresponding marker.
- Only the crowd/traffic layer is mocked — the map itself is fully functional, not a static image.

### 4.4 Itinerary Planner Page (`/itinerary`)
- Let users create a named trip with start/end dates and destination(s).
- Day-by-day itinerary builder:
  - Auto-generate day cards based on date range.
  - Each day card lists activities (drag-and-drop reordering is a nice-to-have; simple up/down move buttons are sufficient).
  - "Add Activity" modal — pick from mock activities for the selected destination, or add a custom activity (name, time, notes, category icon).
  - Show a running summary: total days, total estimated cost, number of activities.
- Persist itinerary state to `localStorage` via Zustand so it survives refresh.
- Allow deleting/editing days and activities.
- Responsive: timeline/vertical layout on mobile, columns on desktop.

### 4.5 Bonus Page (`/bonus`)
Combine bonus features as tabs or sub-sections on one page:
- **Budget Calculator**: inputs for travel, stay, food, activities, misc; shows total and a pie/bar chart (Recharts) breakdown; supports per-day and per-person calculation.
- **Packing Checklist**: default checklist generated based on selected destination's weather type (e.g., beach → sunscreen, swimwear; snow → jacket, gloves); users can check items off and add custom items; persisted to localStorage.
- **Destination Comparison**: pick 2–3 destinations side-by-side comparing weather, budget level, best season, type, and rating in a table/card layout.
- **AI Travel Recommendations**: a mock "AI suggestion" panel — based on selected filters/preferences, surface a curated list from mock data with a short generated-sounding rationale ("Great for budget beach trips in winter"). No real AI call needed — simulate with logic/rules over mock data, but present it as an AI-recommendation UI (loading shimmer, "Powered by TripNest AI" badge, etc.).

### 4.6 Dark Mode
- Not a separate page — a global toggle (`ThemeToggle.tsx`) in the navbar, available on every page.
- Use Tailwind's `dark:` classes with class-based strategy.
- Persist preference to `localStorage`, respect `prefers-color-scheme` on first load.
- Ensure all pages/components have properly designed dark variants (no unreadable contrast).

### 4.7 Destination Detail (click-through, no booking)

- No booking flow anywhere in the app — TripNest is a planner, not a booking platform.
- Clicking a destination card opens a **modal (quick-view)** for the MVP — not a dedicated page. Structure the modal's content component so it can be lifted into a `/destination/:id` route later as a stretch upgrade without rework.
- Modal contents: image gallery (2–4 photos), name/location/type badge/rating, live weather + best season, budget level + est. price/day, crowd-level indicator, short description, 3–5 suggested activities preview.
- Primary CTA: **"Add to Itinerary"** (opens day/date picker or adds to active trip). Secondary: **"Add to Comparison"** (feeds the bonus comparison tool).

### 4.8 Search Bar Placement

- **Navbar (global, every page)**: compact search input. On submit, redirects to `/search?q=<query>`, which pre-fills and runs the query on the Search page.
- **Search/Discover page**: full inline search bar next to filters — updates results live in place, no redirect.
- No search bar on Home (beyond an optional hero input that behaves like the navbar one), Map, Itinerary, or Bonus pages — keeps search logic centralized instead of scattered.
- Filtering/search/sort logic is real, working client-side logic (debounced substring match + array `.filter()` chains, AND-combined across filters, sort applied after filtering) — not hardcoded/fake results.

---

## 5. Shared Layout & Navigation

- `Navbar`: logo, links to Home / Search / Map / Itinerary / Bonus, theme toggle, mobile hamburger menu with slide-in drawer.
- `Footer`: simple, brand + links.
- `MainLayout` wraps all pages with Navbar + Footer + page transition animation (Framer Motion fade/slide on route change).
- Use React Router nested routes under `MainLayout`.

---

## 6. Data Modeling (TypeScript types)

Define in `src/types/`:

```ts
// destination.ts
export type WeatherType = 'sunny' | 'rainy' | 'snowy' | 'mild';
export type BudgetLevel = 'low' | 'medium' | 'high';
export type DestinationType = 'mountains' | 'beaches' | 'heritage' | 'city' | 'adventure';

export interface Destination {
  id: string;
  name: string;
  country: string;
  type: DestinationType;
  weather: WeatherType;
  budgetLevel: BudgetLevel;
  pricePerDay: number;
  rating: number;
  bestSeason: string;
  crowdLevel: 'low' | 'medium' | 'high';
  restricted?: boolean;
  imageUrl: string;
  description: string;
  coordinates: { x: number; y: number }; // percentage-based position for map placeholder
}

// itinerary.ts
export interface Activity {
  id: string;
  name: string;
  time: string;
  category: string;
  cost?: number;
  notes?: string;
}

export interface ItineraryDay {
  id: string;
  date: string;
  activities: Activity[];
}

export interface Trip {
  id: string;
  name: string;
  destinationId: string;
  startDate: string;
  endDate: string;
  days: ItineraryDay[];
}
```

Populate `src/data/destinations.ts` with **at least 15–20 mock destinations** across all types/weather/budget combinations so filters have meaningful results.

### 6.1 Data Sourcing Plan (finalized)

- **Scope**: Indian destinations only for this phase (global expansion is a future stretch goal, not in scope now). Cover mountains (Manali, Leh), beaches (Goa, Gokarna), heritage (Jaipur, Hampi), city (Mumbai, Bangalore), adventure (Rishikesh), etc. — accurate real lat/long coordinates so the map placeholder pins are positioned realistically and can later swap to a real map with minimal rework.
- **AI-generated JSON/TS (static mock data)** — used for everything structural/curated:
  - Destination core info: name, type, budget level, price/day, rating, description, best season, crowd level, image URLs
  - Activities per destination
  - Packing checklist defaults
  - This is generated once, hand-reviewed for realism, and lives in `src/data/`
- **Free public API (live data)** — used specifically for weather, since "weather-based" is a named judging requirement and static weather would look fake:
  - **OpenWeatherMap free tier** — fetched per destination city to power "trending by weather" on Home and the weather filter/badges on Search/Map
  - Images: Unsplash Source (or Pexels) for destination photos if not using AI-generated/stock images
- **To do**: confirm library additions (Tailwind/Zustand/Framer Motion) are fine with a mentor before/while building, since rules require approval for anything outside the listed stack.

---

## 7. Design Guidelines

- Clean, modern travel-app aesthetic — think warm imagery, rounded cards, soft shadows, generous whitespace.
- Consistent color system defined in `tailwind.config.ts` (a primary brand color + accent + neutral grays), with a matching dark palette.
- Consistent spacing/typography scale — pick 1–2 font families (e.g., a display font for headings, clean sans for body) via Google Fonts.
- Micro-interactions: hover states on cards, button press feedback, smooth page transitions.
- Loading skeletons/shimmer for anything simulating async behavior (search filtering, AI recommendations).
- Fully responsive: mobile-first, test at 375px, 768px, 1024px, 1440px breakpoints. Sidebar filters and navbar must collapse properly on mobile.

---

## 8. Build Instructions for the AI Assistant

1. Scaffold the project with Vite + React + TypeScript, install and configure Tailwind, React Router, Zustand, Framer Motion, Lucide React, Recharts.
2. Set up the folder structure exactly as above.
3. Build shared layout, theme store, and dark mode first (it touches every page).
4. Create mock data files with realistic, varied entries.
5. Build pages in this order: Home → Search → Map (placeholder) → Itinerary Planner → Bonus.
6. Wire up Zustand stores for itinerary, filters, comparison list, and theme; persist relevant ones to localStorage.
7. Make sure every page is responsive and dark-mode-complete before moving to the next.
8. Add a root `README.md` documenting: project overview, tech stack, folder structure, setup/run instructions, and a note that the map is a placeholder pending real map API integration.
9. Do not implement any real backend, authentication, or external API calls — everything must run fully client-side with mock data.

---

## 9. Out of Scope (for this hackathon build)

- Real authentication / user accounts
- Real backend / database persistence
- Real map SDK integration (Mapbox/Google Maps) — placeholder only
- Real AI API calls — simulate recommendation logic locally
