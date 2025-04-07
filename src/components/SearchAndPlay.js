import React, { useState } from 'react';
import axios from 'axios';

const SearchAndPlay = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${API_KEY}&maxResults=30`
      );
      setResults(response.data.items);
    } catch (error) {
      console.error('Error searching for videos:', error);
    }
  };

  const handlePlay = (videoId) => {
    setPlayingVideoId(videoId);
  };

  return (
    <div className="padding-bottom">
      <h1>Search and Play YouTube Videos</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a song or video"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((video) => (
          <li key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            {playingVideoId !== video.id.videoId ? (
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handlePlay(video.id.videoId)}
                />
                <button
                  onClick={() => handlePlay(video.id.videoId)}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '10px',
                    cursor: 'pointer',
                  }}
                >
                  ▶️
                </button>
              </div>
            ) : (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAndPlay;