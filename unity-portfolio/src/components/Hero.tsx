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
  const featureRef = useRef<HTMLDivElement>(null);

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
        top: featureRef.current.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <section className="relative w-full h-screen text-white overflow-hidden">
        {/* 🎬 배경 비디오 */}
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
      </section>

      {/* 스크롤 이동용 reference */}
      <div ref={featureRef} />
    </>
  );
}
