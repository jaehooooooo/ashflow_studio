import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  const videos = [
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    '/videos/video3.mp4'
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentVideo, videos.length]);

  const handleImageError = (e) => {
    setImageError(true);
  };

  return (
    <div className="App">
      <nav className="main-nav">
        <div className="nav-left">
          <svg className="unity-logo" viewBox="0 0 24 24">
            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"/>
          </svg>
          <div className="nav-links">
            <a href="#games">Games</a>
            <a href="#industry">Industry</a>
            <a href="#education">Education</a>
            <a href="#about">About</a>
          </div>
        </div>
        <div className="nav-right">
          <button className="signin-btn">Sign In</button>
          <button className="download-btn">Download</button>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="video-container">
            <video
              ref={videoRef}
              className="hero-video"
              muted
              playsInline
              autoPlay
              key={currentVideo}
            >
              <source src={videos[currentVideo]} type="video/mp4" />
            </video>
          </div>
          <div className="hero-content">
            <h1>The World's Leading Platform for Real-Time Content</h1>
            <p>Create amazing experiences with the leading platform for real-time 3D development in games, automotive, film, architecture, and more.</p>
            <div className="hero-buttons">
              <button className="primary-btn">Get Started Free</button>
              <button className="secondary-btn">Explore Unity</button>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <h3>Games</h3>
            <p>Create games with the world's leading real-time development platform.</p>
          </div>
          <div className="feature-card">
            <h3>Industry</h3>
            <p>Drive innovation with real-time 3D development.</p>
          </div>
          <div className="feature-card">
            <h3>Education</h3>
            <p>Empower the next generation of creators with Unity.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 