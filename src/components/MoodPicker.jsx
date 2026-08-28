import React from 'react'

export default function MoodPicker({ onGenerate, defaultMood }) {
  const moods = [
    { id: 'hype', label: 'Hype / Nu‑Metal' },
    { id: 'chill', label: 'Chill / Mellow' },
    { id: 'throwback', label: 'Throwback / 2000s' },
    { id: 'workout', label: 'Workout / Pump' }
  ]

  return (
    <section className="mood-picker">
      <h2>Pick a mood</h2>
      <div className="options">
        {moods.map(m => (
          <button
            key={m.id}
            className={m.id === defaultMood ? 'active' : ''}
            onClick={() => onGenerate(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>
    </section>
  )
}
