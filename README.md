# AI DJ — Amazon Music Web (MVP)

This is the initial scaffold for the AI DJ web app (Amazon Music deep-links). It includes a React + Vite app with a mocked AI service and a "hype" nu-metal DJ persona (DJ Razor).

Features in this commit:
- Vite + React scaffold
- Mood picker and playlist generation flow (mocked LLM)
- Hype "early 2000s nu metal" persona with cocky commentary
- Track list UI with "Open in Amazon Music" deep-link (search URL) for each track
- Instructions for local dev and deployment

Running locally

1. Install dependencies
   npm install

2. Run dev server
   npm run dev

3. Open the app at the printed localhost URL (http://localhost:5173 by default)

Notes

- Playback is handled by Amazon Music. When you click "Open in Amazon Music" the app opens a search page on music.amazon.com. Mobile devices that register the amazonmusic:// scheme may open the Amazon Music app instead.
- The AI is mocked for the MVP. To integrate a real LLM (OpenAI/etc.) replace src/services/ai.js with an implementation that calls your provider and returns the same shape: { title, commentary, tracks: [{ title, artist }] }

Next steps I can take for you
- Integrate OpenAI or another LLM for live playlist generation and more varied commentary
- Add a Spotify Web Playback SDK fallback for in‑browser playback
- Add user accounts and saved playlists
- Add TTS using Amazon Polly or another TTS provider

I've pushed this scaffold to the GitHub repo: https://github.com/timjequals-bit/ai-dj-amazon-music-web

