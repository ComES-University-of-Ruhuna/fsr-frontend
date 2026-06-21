# FSR Frontend

Vite + React + TypeScript + TailwindCSS + Framer Motion.

```bash
cp .env.example .env
npm install
npm run dev      # http://localhost:5173
```

Calls to `/api/*` are proxied to the backend at `http://localhost:4000` in dev.
For production builds, set `VITE_API_BASE_URL` to your deployed backend URL.
