'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectItem = {
  title: string;
  date: string;
  tags: string[];
  image: string;
  link: string;
};

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

// 공통 카드 컴포넌트
function ProjectCard({ item }: { item: ProjectItem }) {
  const isExternal = item.link.startsWith('http');

  const content = (
    <div className="relative rounded-xl overflow-hidden shadow-lg group">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4">
        <div className="flex flex-wrap gap-2 text-xs font-semibold text-white">
          {item.tags.map((tag, i) => (
            <span key={i} className="bg-white/20 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto text-white">
          <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
          <p className="text-sm mt-2">{item.date}</p>
        </div>
      </div>
    </div>
  );

  return isExternal ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {content}
    </a>
  ) : (
    <Link href={item.link} className="block">
      {content}
    </Link>
  );
}

export default function SuccessGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [unlockScroll, setUnlockScroll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const maxScale = 3.99;
  const releaseScale = 4.5;

  useEffect(() => {
    const small = window.innerWidth <= 1800;
    setIsSmallScreen(small);

    if (small) {
      setScale(maxScale);
      setUnlockScroll(true);
      return;
    }

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
            const sensitivity = distance / centerY >= 1 ? 1 : 0.9;
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

  const projectItems: ProjectItem[] = [
    {
      title: '해롤드 할리벗의 수중 세계를 조명하다',
      date: '2024-07-25',
      tags: ['CASE STUDIES', 'Game Creation', 'Platforms', '+2'],
      image: '/images/project-1.jpg',
      link: '/project/1',
    },
    {
      title: '아우디가 애플 비전 프로에서 Q6 e-트론의 몰입형 환경을 구축한 방법',
      date: '2024-07-03',
      tags: ['CASE STUDIES', 'Industry', '+1'],
      image: '/images/project-2.jpg',
      link: '/project/2',
    },
    // 추가 항목 생략
  ];

  const artworkItems: ProjectItem[] = [
    {
      title: '감정 진단 제작소',
      date: '2024-06-01',
      tags: ['INTERACTIVE', 'ART', 'DEVICE'],
      image: '/images/project-2.jpg',
      link: '/project/1',
    },
    {
      title: '인터랙티브 패션쇼 무대',
      date: '2023-12-18',
      tags: ['DESIGN', '3D', 'FASHION'],
      image: '/images/project-2.jpg',
      link: '/project/2',
    },
    // ... 더 많은 artwork 항목
  ];

  return (
    <section className="relative bg-black text-white">
      {isSmallScreen ? (
        <div className="mt-[100px] flex flex-col items-center gap-8">
          {[4, 7].map((i) => (
            <div
              key={i}
              className="relative aspect-video w-[80vw] max-w-20xl overflow-hidden rounded-xl"
            >
              <Image src={images[i]} alt={`Success ${i + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
                <h3 className="text-sm font-bold">
                  {i === 4 ? '파리 올림픽 interactive photo Booth' : '감정 진단 제작소'}
                </h3>
                <p className="text-sm mt-2">2024</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
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
                  <div key={idx} className="relative aspect-video overflow-hidden rounded-xl">
                    <Image src={src} alt={`Success ${idx + 1}`} fill className="object-cover" />
                    {[4, 7].includes(idx) && scale >= 3 && (
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
                        <h3 className="text-sm font-bold">
                          {idx === 4 ? '파리 올림픽 interactive photo Booth' : '감정 진단 제작소'}
                        </h3>
                        <p className="text-sm mt-2">2024</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-[150vh]" />
        </>
      )}

      {/* Projects 섹션 */}
      <div className="relative z-0 bg-black text-white py-32 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projectItems.map((item, i) => (
            <ProjectCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Artwork 섹션 */}
      <div className="relative z-0 bg-white text-black py-32 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Artwork</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {artworkItems.map((item, i) => (
            <ProjectCard key={i} item={item} />
          ))}
        </div>
      </div>

      <div className="h-[10vh]" />
    </section>
  );
}
