import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const videos = [
    `${process.env.PUBLIC_URL}/videos/video1.mp4`,
    `${process.env.PUBLIC_URL}/videos/video2.mp4`,
    `${process.env.PUBLIC_URL}/videos/video3.mp4`
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

  const handleVideoError = (e) => {
    console.error('Video loading error:', e);
    setVideoError(true);
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
              onError={handleVideoError}
            >
              <source src={videos[currentVideo]} type="video/mp4" />
            </video>
          </div>
          <div className="hero-content">
            <h1>Media Art Developer</h1>
            <p>안녕하세요. 하이브리드 개발자 최재호입니다.<br />
            디자인과 출신으로 감각있는 Media Art 개발을 목표로 하고 있습니다.</p>
            <div className="hero-buttons">
              <button className="primary-btn">More</button>
              <button className="secondary-btn">Contact</button>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <div className="feature-video-container">
              <video 
                className="feature-video" 
                muted 
                playsInline 
                autoPlay 
                loop
                onError={(e) => console.error('Feature video 1 error:', e)}
              >
                <source src={`${process.env.PUBLIC_URL}/videos/feature1.mp4`} type="video/mp4" />
              </video>
            </div>
            <h3>Unity</h3>
            <p>Unity 및 C#을 활용하여 VR (META / VisionPro / Hololens2) 게임 및 전시를 제작하였으며, Unity Shader 및 다양한 Interactive Device를 통한 Interactive Art를 제작하였습니다.</p>
            <button className="view-project-btn">프로젝트 보기</button>
          </div>

          <div className="feature-card">
            <div className="feature-video-container">
              <video 
                className="feature-video" 
                muted 
                playsInline 
                autoPlay 
                loop
                onError={(e) => console.error('Feature video 2 error:', e)}
              >
                <source src={`${process.env.PUBLIC_URL}/videos/feature2.mp4`} type="video/mp4" />
              </video>
            </div>
            <h3>Touch Designer - Unreal - AfterEffect</h3>
            <p>Touch Designer 및 Unreal, AfterEffect 등 다양한 툴과 Interactive Device를 활용하여 Interactive Art를 제작하였습니다.</p>
            <button className="view-project-btn">프로젝트 보기</button>
          </div>

          <div className="feature-card">
            <div className="feature-video-container">
              <video 
                className="feature-video" 
                muted 
                playsInline 
                autoPlay 
                loop
                onError={(e) => console.error('Feature video 3 error:', e)}
              >
                <source src={`${process.env.PUBLIC_URL}/videos/feature3.mp4`} type="video/mp4" />
              </video>
            </div>
            <h3>Design</h3>
            <p>패션 산업 디자인과를 전공하여 패션쇼를 개최하였고, 다양한 3D Tool과 3D Printer를 활용하여 Artwork를 제작하였습니다.</p>
            <button className="view-project-btn">프로젝트 보기</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 