'use client';

import { useEffect, useRef, useState } from 'react';

const videoSources = [
  '/videos/hero-1.mp4',
  '/videos/hero-2.mp4',
  '/videos/hero-3.mp4',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const featureRef = useRef<HTMLDivElement>(null); // ⭐ FeatureCards로 이동하기 위한 ref

  const handleVideoEnd = () => {
    setIndex((prev) => (prev + 1) % videoSources.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('자동 재생 실패:', err);
        });
      }
    }
  }, [index]);

  const scrollToFeature = () => {
    if (featureRef.current) {
        window.scrollTo({
            top: featureRef.current.offsetTop - 100, // ← 원하는 만큼 위로 띄우기 (80px 정도)
            behavior: 'smooth',
          });    }
  };

  return (
    <>
      <section className="relative w-full h-screen text-white overflow-hidden">
        {/* 🎬 비디오 배경 */}
        <video
          ref={videoRef}
          key={index}
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src={videoSources[index]} type="video/mp4" />
        </video>

        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* 콘텐츠 */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Media Art Developer</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10">
            안녕하세요. 하이브리드 개발자 최재호입니다. <br />
            디자인과 출신으로 감각있는 Media Art 개발을 목표로 하고 있습니다.
          </p>
          <button
            onClick={scrollToFeature}
            className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full text-sm font-semibold transition"
          >
            MORE
          </button>
        </div>

        {/* 📊 하단 통계 정보 */}
        <div className="absolute bottom-28 md:bottom-32 z-20 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 px-4">
          {[
            {
              value: 'Info',
              label: (
                <>
                  최재호<br />
                  1996.06.27<br />
                  010-5358-6951<br />
                  funjh002@gmail.com
                </>
              ),
              className: 'w-60 h-40',
            },
            {
              value: 'Career',
              label: (
                <>
                  Plinqer : 포토이즘 솔루션 개발, 전시 개발<br />
                  DoubleMe : VR 전시 개발, VR 게임 개발<br />
                  단국대학교 : 패션 산업디자인과 학사 졸업
                </>
              ),
              className: 'w-80 h-40',
            },
            {
              value: 'Skill',
              label: (
                <>
                  Language : C#, C, C++<br />
                  Develop Tools : Unity, TouchDesinger, Unreal<br />
                  Art Tools : AfterEffect, Cinema 4D, Adobe Programs
                </>
              ),
              className: 'w-96 h-40',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.className} bg-black/60 text-white rounded-lg px-6 py-4 text-sm text-left flex flex-col justify-start leading-relaxed`}
            >
              <h3 className="text-lg font-semibold mb-2">{item.value}</h3>
              <div>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔽 FeatureCards가 스크롤될 위치 지정용 */}
      <div ref={featureRef} />
    </>
  );
}
