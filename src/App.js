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
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="#archiving">Archiving</a>
            <a href="#projects">Projects</a>
            <a href="#career">Career</a>
          </div>
        </div>
        <div className="nav-right">
          <button className="signin-btn">Contact</button>
          <button className="download-btn">Resume</button>
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
            <div className="hero-main-content">
              <h1>Media Art Developer</h1>
              <p>안녕하세요. 하이브리드 개발자 최재호입니다.<br />
              디자인과 출신으로 감각있는 Media Art 개발을 목표로 하고 있습니다.</p>
              <div className="hero-buttons">
                <button className="primary-btn">More</button>
                <button className="secondary-btn">Contact</button>
              </div>
            </div>
            <div className="stats-container">
              <div className="stat-item side">
                <p className="stat-info">
                  <span className="stat-label">Name</span>|<span>최재호 Choi Jaeho</span><br />
                  <span className="stat-label">Birth</span>|<span>1996.06.27</span>
                </p>
              </div>
              <div className="stat-item center">
                <p className="stat-info">
                  <span className="stat-label">Call</span>|<span>010-5358-6951</span><br />
                  <span className="stat-label">Email</span>|<span>funjh002@gmail.com</span><br />
                  <span className="stat-label">Github</span>|<span>https://github.com/jaehooooooo</span>
                </p>
              </div>
              <div className="stat-item side">
                <p className="stat-info">
                  <span className="stat-label">단국대학교</span>|<span>패션 산업 디자인과</span><br />
                  <span className="stat-label">(전) doubleMe</span>|<span>VR 전시 개발 및 VR 게임 개발</span><br />
                  <span className="stat-label">(현) plinqer</span>|<span>포토이즘 솔루션 개발 및 전시 개발</span>
                </p>
              </div>
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