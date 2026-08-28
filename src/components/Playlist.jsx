import React from 'react'

function openAmazonSearch(query) {
  const web = `https://music.amazon.com/search/${encodeURIComponent(query)}`
  // amazonmusic:// deep link format may vary by platform; we open web as fallback
  window.open(web, '_blank')
}

export default function Playlist({ playlist, persona }) {
  return (
    <section className="playlist">
      <h2>{playlist.title}</h2>
      <p className="commentary">{playlist.commentary}</p>

      <ol>
        {playlist.tracks.map((t, i) => (
          <li key={i} className="track">
            <div>
              <strong>{t.title}</strong> <em>— {t.artist}</em>
            </div>
            <div className="track-actions">
              <button onClick={() => openAmazonSearch(`${t.title} ${t.artist}`)}>
                Open in Amazon Music
              </button>
              <a
                className="search-link"
                href={`https://music.amazon.com/search/${encodeURIComponent(t.title + ' ' + t.artist)}`}
                target="_blank"
                rel="noreferrer"
              >
                Open
              </a>
            </div>
          </li>
        ))}
      </ol>

      <div className="save-playlist">
        <button onClick={() => alert('Save playlist flow not implemented in MVP')}>Save this playlist</button>
      </div>
    </section>
  )
}
