import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Playlist = () => {
  const [videos, setVideos] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const PLAYLIST_ID = process.env.REACT_APP_PLAYLIST_ID;

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&key=${API_KEY}&maxResults=10`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };
    fetchPlaylist();
  }, [API_KEY, PLAYLIST_ID]);

  const handlePlay = (videoId) => {
    setPlayingVideoId(videoId);
  };

  return (
    <>
      
      <div className="padding-bottom">
        <h1>Hello, Welcome to Justin's</h1>  
        <h1>YouTube Music Playlist</h1>
          Additional details wbout what is happening in this component are as follows:
        <p>
        State Management: Using React's useState and useEffect hooks to manage the state of the playlist and handle asynchronous data fetching.
        </p>
        <p>
        API Integration: Making HTTP requests with Axios to interact with the YouTube Data API and handle responses effectively.
        </p>
        <p>
        Conditional Rendering: Implementing logic to display video thumbnails and play videos dynamically based on user interactions.
        </p>
        <p>
        Responsive Design: Ensuring the UI is user-friendly and visually appealing across different devices and screen sizes. 
        </p>
        <p>
        Error Handling: Managing potential errors during API calls to provide a smooth user experience.
        </p>
        <h3>
        This component not only showcases my technical skills but also my ability to create interactive and engaging user interfaces.
        </h3>
        <ul>
          {videos.map((video, index) => (
            <button key={video.etag} className="transparent-button">
              <a href={`#video-${index}`}>{video.snippet?.title}</a>
            </button>
          ))}
        </ul>
        <ul>
          {videos.map((video, index) => (
            <li key={video.etag} id={`video-${index}`}>
              <h3>{video.snippet?.title}</h3>
              {playingVideoId !== video.snippet?.resourceId?.videoId ? (
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <img
                    src={video.snippet?.thumbnails?.medium?.url}
                    alt={video.snippet?.title}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handlePlay(video.snippet?.resourceId?.videoId)}
                  />
                  <button
                    onClick={() => handlePlay(video.snippet?.resourceId?.videoId)}
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
                  src={`https://www.youtube.com/embed/${video.snippet?.resourceId?.videoId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.snippet?.title} 
                ></iframe>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
    

  );
};

export default Playlist;