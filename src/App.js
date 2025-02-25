import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentGif, setCurrentGif] = useState(0);
  
  const gifs = [
    `${process.env.PUBLIC_URL}/gifs/animation1.gif`,
    `${process.env.PUBLIC_URL}/gifs/animation2.gif`,
    `${process.env.PUBLIC_URL}/gifs/animation3.gif`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGif((prev) => (prev + 1) % gifs.length);
    }, 5000); // 각 GIF를 5초간 보여줍니다. 필요에 따라 시간을 조절하세요

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <nav className="main-nav">
        <div className="nav-left">
          <img 
            src={`${process.env.PUBLIC_URL}/unity-logo.svg`} 
            alt="Unity" 
            className="unity-logo" 
          />
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
          <div className="hero-content">
            <h1>실시간 콘텐츠를 위한 세계 최고의 플랫폼</h1>
            <p>게임, 자동차, 영화, 건축 등 실시간 3D 개발을 위한 선도적인 플랫폼으로 놀라운 경험을 만들어보세요.</p>
            <div className="hero-buttons">
              <button className="primary-btn">무료로 시작하기</button>
              <button className="secondary-btn">Unity 살펴보기</button>
            </div>
          </div>
          <div className="gif-container">
            <img 
              src={gifs[currentGif]} 
              alt="Unity showcase"
              className="hero-gif"
            />
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