// Mock AI service that returns a playlist and a short commentary in a "hype nu-metal" voice.

function mockTracks() {
  return [
    { title: 'Break the Silence', artist: 'Rivet Riot' },
    { title: 'Smashed Mirrors', artist: 'Neon Clench' },
    { title: 'Crank the Voltage', artist: 'Black Circuit' },
    { title: 'Rattle the Cage', artist: 'Iron Bloom' },
    { title: 'Static Burn', artist: 'Scar Atlas' },
    { title: 'Shockwave Heart', artist: 'Velvet Wrench' },
    { title: 'Molten Crowns', artist: 'Gutter Throne' },
    { title: 'Last Call to Arms', artist: 'Echo Fist' }
  ]
}

export default {
  async generatePlaylist({ persona, mood }) {
    // Simulate async LLM call
    await new Promise(r => setTimeout(r, 800))

    const base = mockTracks()

    const title = `${persona.name} — ${mood.toUpperCase()} Mix`
    const commentary = persona.name === 'DJ Razor'
      ? `Alright maggots, lock in and brace yourselves — ${persona.name} just cooked up ${base.length} tracks to crush your speakers. I'm not here to baby you; I'm here to rattle your skull.` 
      : `Here's a tight set for your vibes.`

    return {
      title,
      commentary,
      tracks: base
    }
  }
}
