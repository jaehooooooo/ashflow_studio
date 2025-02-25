import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  const videos = [
    'https://assets.mixkit.co/videos/preview/mixkit-virtual-reality-game-development-4930-large.mp4',  // 게임 개발 영상
    'https://assets.mixkit.co/videos/preview/mixkit-futuristic-urban-landscape-at-night-4921-large.mp4',  // 도시 풍경
    'https://assets.mixkit.co/videos/preview/mixkit-3d-animation-of-modern-city-at-night-42374-large.mp4'  // 3D 도시
  ];

  useEffect(() => {
    const videoElement = videoRef.current;
    
    const handleVideoEnd = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      
      // 비디오 로드 후 자동 재생
      videoElement.load();
      videoElement.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentVideo]);

  const handleImageError = (e) => {
    console.log('Image failed to load:', e.target.src);
    setImageError(true);
  };

  return (
    <div className="App">
      <nav className="main-nav">
        <div className="nav-left">
          <svg 
            className="unity-logo" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
            width="32" 
            height="32"
          >
            <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 224l-96 96-96-96 96-96 96 96z"/>
          </svg>
          <div className="nav-links">
            <a href="#products">제품</a>
            <a href="#solutions">솔루션</a>
            <a href="#services">서비스</a>
            <a href="#resources">리소스</a>
            <a href="#company">회사</a>
          </div>
        </div>
        <div className="nav-right">
          <button className="download-btn">Unity 다운로드</button>
          <button className="signin-btn">로그인</button>
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
              loop
              key={videos[currentVideo]}
            >
              <source src={videos[currentVideo]} type="video/mp4" />
            </video>
          </div>
          <div className="hero-content">
            <h1>실시간 콘텐츠를 위한 세계 최고의 플랫폼</h1>
            <p>게임, 자동차, 영화, 건축 등 실시간 3D 개발을 위한 선도적인 플랫폼으로 놀라운 경험을 만들어보세요.</p>
            <div className="hero-buttons">
              <button className="primary-btn">무료로 시작하기</button>
              <button className="secondary-btn">Unity 살펴보기</button>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <h3>게임</h3>
            <p>세계 최고의 실시간 게임 개발 플랫폼으로 게임을 제작하세요.</p>
          </div>
          <div className="feature-card">
            <h3>산업</h3>
            <p>실시간 3D로 산업 혁신을 이끌어보세요.</p>
          </div>
          <div className="feature-card">
            <h3>교육</h3>
            <p>Unity로 미래의 크리에이터를 양성하세요.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 