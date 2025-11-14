# Sports Event Calendar (Laravel + Inertia React)

A modern Laravel application with an Inertia + React (TypeScript) frontend for managing sports, teams, venues, and events. Includes Tailwind CSS v4

## Tech Stack

- Backend: Laravel ^12, PHP ^8.2, Inertia (server)
- Frontend: React 19 + TypeScript, Inertia React ^2, Vite ^7, Tailwind CSS ^4
- DB: MySQL/PostgreSQL/SQLite (your choice via `.env`)

## Features

- Manage Sports, Teams, Venues, and Events
- Event listing with filter by Sport
- Create Event dialog (with team/venue selection)
- Basic auth scaffolding via Laravel Fortify (optional to enable)

## Prerequisites

- PHP 8.2+
- Composer
- Node.js 18+ (20 LTS recommended) and npm
- A database (MySQL/MariaDB/PostgreSQL/SQLite)
- Windows users: PowerShell (commands below are PowerShell-compatible)
- Optional: Laravel Herd or Valet for a local PHP server

## Quick start (Windows PowerShell)

1) Clone and enter the project

```powershell
git clone https://github.com/lwezsenju/sport-event-calendar.git
cd sport-event-calendar
```

2) Backend: install and configure

```powershell
composer install
Copy-Item -Path .env.example -Destination .env -Force
php artisan key:generate
```

3) Configure your database in `.env`

- Set DB_CONNECTION (mysql, pgsql, sqlite, etc.)
- For MySQL/Postgres: set DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD
- For SQLite: set DB_CONNECTION=sqlite and DB_DATABASE="database/database.sqlite" (create file if missing)

4) Run migrations and seed sample data

```powershell
php artisan migrate --seed
```

This seeds a list of popular sports and creates 30 sample events.

5) Frontend: install and run the dev server

```powershell
npm install
npm run dev
```

6) Start the PHP server (if you are not using Herd)

```powershell
php artisan serve
```

- App URL (default): http://127.0.0.1:8000
- Home route lists events and includes a sport filter.

### One command (all-in-one dev)

You can also let Composer orchestrate PHP, queue worker, and Vite together using `concurrently`:

```powershell
composer run dev
```

This will run:
- `php artisan serve`
- `php artisan queue:listen --tries=1`
- `npm run dev`

## Scripts reference

- Build assets: `npm run build`
- Build client + SSR: `npm run build:ssr`
- Dev server: `npm run dev`
- Lint (fix): `npm run lint`
- Format: `npm run format` (check: `npm run format:check`)
- TS types check: `npm run types`
- Run PHP tests: `composer test` (uses Pest)

## Database schema overview

- sports: id, name
- teams: id, name, sport_id → sports.id
- venues: id, name, location, capacity
- events: id, event_date, description, team_a_id, team_b_id, venue_id

Seeders
- `DatabaseSeeder` inserts 20 sports and creates 30 random events via factories.

## Project structure (high level)

- `app/Models`: Eloquent models (Event, Sport, Team, Venue)
- `app/Http/Controllers`: Controllers for Events, Sports, Teams, Venues
- `database/migrations`: Schema for sports/teams/venues/events
- `database/factories`: Model factories for seeding
- `database/seeders`: Seeds sports and demo events
- `resources/js`: Inertia React app (pages, components, layouts)
- `resources/css`: Tailwind CSS entry
- `routes/web.php`: Routes (home → events index, plus CRUD endpoints)
