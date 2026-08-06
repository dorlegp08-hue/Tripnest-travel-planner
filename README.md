# TripNest — AI-Powered Travel Itinerary Planner & Destination Discovery

TripNest is a fully responsive, frontend-only travel itinerary planner web application built for the **TechRush Hackathon (Frontend Web Development track)** using **React 18, TypeScript, Vite, Tailwind CSS, Zustand, Framer Motion, React-Leaflet, and Recharts**.

---

## 🌟 Key Features

- **Home Page (`/`)**: Hero banner with live search prompt, trending destinations filterable by season (Summer / Winter / Monsoon / All), curated seasonal picks, and feature highlight cards.
- **Search & Discover (`/search`)**: Real-time debounced text search with multi-faceted client-side filters (Weather, Budget tiers, Destination types) and sorting controls (Popularity, Price low/high, Rating).
- **Interactive OpenStreetMap (`/map`)**: Real interactive Leaflet map plotted with 18 real Indian destination GPS coordinates, custom markers displaying crowd density badges (Low/Medium/High), live OpenWeatherMap tooltips, legend key, and map-to-list synchronization.
- **Day-by-Day Itinerary Planner (`/itinerary`)**: Trip creator auto-generating day cards based on date range, activity timeline, activity modal (pick destination presets or add custom items), activity reordering (up/down), estimated cost summary, and `localStorage` persistence via Zustand.
- **Bonus Travel Toolkit (`/bonus`)**:
  - **Smart Budget Calculator**: Per-day and per-person trip cost estimator with Recharts PieChart and BarChart visualizations.
  - **Weather Packing Checklist**: Climate-tailored packing lists with interactive check-off and custom item support saved in `localStorage`.
  - **Destination Comparison**: Side-by-side matrix comparing up to 3 selected destinations across pricing, weather, rating, and best season.
  - **AI Travel Assistant**: Simulated preference-based recommendation engine with simulated AI thinking state and rationale cards.
- **Global Dark Mode**: Class-based Tailwind dark mode toggle persisted to `localStorage` and synchronized across all pages and map tiles.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + Custom CSS utilities & Dark Mode
- **State Management**: Zustand with `localStorage` persistence
- **Animations**: Framer Motion
- **Map SDK**: React-Leaflet + Leaflet + OpenStreetMap tiles (100% free, no billing setup required)
- **Data Visualization**: Recharts
- **Icons**: Lucide React
- **Weather API**: OpenWeatherMap free tier (with intelligent fallback mock data)

---

## 📂 Project Folder Structure

```
tripnest/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   └── DestinationDetailModal.tsx
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
│   ├── data/
│   │   ├── destinations.ts
│   │   ├── activities.ts
│   │   ├── weather.ts
│   │   └── packingItems.ts
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   └── useDebounce.ts
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── SearchPage.tsx
│   │   ├── MapPage.tsx
│   │   ├── ItineraryPlannerPage.tsx
│   │   ├── BonusPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── store/
│   │   ├── useThemeStore.ts
│   │   ├── useItineraryStore.ts
│   │   ├── useFilterStore.ts
│   │   └── useComparisonStore.ts
│   ├── types/
│   │   ├── destination.ts
│   │   ├── itinerary.ts
│   │   ├── bonus.ts
│   │   └── index.ts
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

## 🚀 Setup & Local Execution

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **(Optional) OpenWeatherMap Live API Key**:
   Create a `.env.local` file in the root directory if you want live weather data:
   ```env
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
   ```
   *Note: If no API key is provided, TripNest automatically falls back to intelligent seasonal weather data without errors.*

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

---

## 🔒 Constraints & Architecture Note

- **Client-Side Only**: TripNest operates entirely in the browser using static TypeScript mock data and browser `localStorage`. No backend database or authentication server is required.
- **No Booking Flow**: TripNest is designed purely as an itinerary planning and destination discovery tool.
