'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/success-1.jpg',
  '/images/success-2.jpg',
  '/images/success-3.jpg',
  '/images/success-4.jpg',
  '/images/success-5.jpg',
  '/images/success-6.jpg',
  '/images/success-7.jpg',
  '/images/success-8.jpg',
  '/images/success-9.jpg',
];

export default function SuccessGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [unlockScroll, setUnlockScroll] = useState(false);

  const maxScale = 3.99;
  const releaseScale = 4.5;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current || !gridRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const gridItems = gridRef.current!.querySelectorAll('div')[4];
          const rect = gridItems.getBoundingClientRect();
          const centerY = window.innerHeight / 2;

          const start = rect.top;
          const triggerPoint = centerY;

          if (start > triggerPoint) {
            setScale(1);
            setUnlockScroll(false);
          } else {
            const distance = centerY - start;
            const progress = Math.min(1.5, distance / centerY);
            let sensitivity = distance / centerY >= 1 ? 1 : 0.9;

            const adjustedProgress = progress * sensitivity;
            const computedScale = 1 + (maxScale - 1) * adjustedProgress;

            setScale(Math.min(computedScale, maxScale));

            if (computedScale >= releaseScale) {
              setUnlockScroll(true);
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-black text-white">
      {/* 확대되는 그리드 */}
      <div className={`${!unlockScroll ? 'sticky top-0' : 'relative'} h-screen flex items-center justify-center z-10`}>
        <div ref={sectionRef} className="w-full flex items-center justify-center">
          <div
            ref={gridRef}
            className="grid grid-cols-3 gap-4 w-[80vw]"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center',
              transition: 'transform 0.3s ease-out',
            }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-video overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Success ${idx + 1}`}
                  fill
                  className="object-cover"
                />
                {idx === 4 && (
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
                    <h3 className="text-xl font-bold">Please, Touch the Artwork</h3>
                    <p className="text-sm mt-2">Generative Art를 게임으로 변환한 사례</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 충분한 스크롤 영역 확보 */}
      <div className="h-[150vh]" />

      {/* 하단 일반 콘텐츠 */}
      <div className="relative z-0 bg-white text-black py-48 px-10 text-center">
        <h2 className="text-4xl font-bold leading-tight mb-16">
          풍부한 리소스, 활발하게 운영되는 커뮤니티
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-base text-left max-w-6xl mx-auto">
          {[
            {
              title: '리소스',
              desc: '단계별 가이드와 이슈 트래커를 통해 빠르게 문제를 해결하고, 필요한 정보를 쉽게 찾아보세요.',
            },
            {
              title: '레벨업 아카데미',
              desc: '온라인 강의와 인증 시험으로 실력을 높이고, 교육 기관용 라이선스도 제공합니다.',
            },
            {
              title: '커뮤니티',
              desc: '세계 각국의 Unity 개발자들과 연결되고, 아이디어와 영감을 나누는 커뮤니티에 참여해 보세요.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg flex flex-col justify-between h-full">
              <div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="mb-6">{item.desc}</p>
              </div>
              <button
                className="mt-auto px-6 py-2 border border-blue-600 rounded-full text-blue-600 text-sm hover:bg-blue-50 transition-colors duration-200"
              >
                자세히 알아보기 →
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[10vh]" />
    </section>
  );
}
