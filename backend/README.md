# MarketLink backend

Minimalni backend koristi Node.js, TypeScript, Express i SQLite.

## Pokretanje

Iz direktorija `backend` pokreni:

```sh
npm install
npm run dev
```

API je dostupan na `http://localhost:3001`.

## Probna provjera baze

Pošalji `GET` zahtjev na `http://localhost:3001/api/health`. Uspješan odgovor:

```json
{ "status": "ok", "database": "connected" }
```

Pri prvom pokretanju SQLite baza se automatski stvara u `backend/data/marketlink.sqlite`.
