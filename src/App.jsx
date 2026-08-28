import React, { useState } from 'react'
import MoodPicker from './components/MoodPicker'
import Playlist from './components/Playlist'
import ai from './services/ai'

export default function App() {
  const [mood, setMood] = useState('hype')
  const [loading, setLoading] = useState(false)
  const [playlist, setPlaylist] = useState(null)
  const persona = {
    name: 'DJ Razor',
    style: 'early 2000s nu metal, cocky, high‑energy',
    short: 'nu-metal hype, cocky announcer with attitude'
  }

  async function handleGenerate(selectedMood) {
    setMood(selectedMood)
    setLoading(true)
    const result = await ai.generatePlaylist({ persona, mood: selectedMood })
    setPlaylist(result)
    setLoading(false)
  }

  return (
    <div className="app">
      <header>
        <h1>AI DJ — {persona.name}</h1>
        <p className="subtitle">{persona.style}</p>
      </header>

      <main>
        <MoodPicker onGenerate={handleGenerate} defaultMood={mood} />

        {loading && <div className="loading">Spinning up the mosh pit...</div>}

        {playlist && <Playlist playlist={playlist} persona={persona} />}

        {!playlist && !loading && (
          <div className="hint">Pick a mood and hit "Generate" to get a hyped nu-metal playlist.</div>
        )}
      </main>

      <footer>
        <small>Plays in Amazon Music via deep-links — music plays on the Amazon Music site/app.</small>
      </footer>
    </div>
  )
}
