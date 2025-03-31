//import { projects } from '@/lib/projects';
import Link from 'next/link';

export default function UnityPage() {
  return (
    <>
      {/* 하단 프로젝트 섹션 */}
      <div className="relative z-0 bg-black text-white py-32 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Unity</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {[
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
            {
              title: 'JTBC의 오픈 디지털 플랫폼, 스마트 지구를 지원하는 기술',
              date: '2023-10-13',
              tags: ['VIDEO', 'Industry', '+1'],
              image: '/images/project-3.jpg',
              link: 'https://example.com/project-3',
            },
            {
              title: '스릴 넘치는 멀티플레이어 Histera의 세계 융합 | Unity',
              date: '2024-07-03 | 11:00 분',
              tags: ['CASE STUDIES', 'Gaming Services', 'Multiplayer and networking', '+1'],
              image: '/images/project-4.jpg',
              link: 'https://example.com/project-4',
            },
            {
              title: '해롤드 할리벗의 수중 세계를 조명하다',
              date: '2024-07-25',
              tags: ['CASE STUDIES', 'Game Creation', 'Platforms', '+2'],
              image: '/images/project-1.jpg',
              link: 'https://example.com/project-1',
            },
            {
              title: '아우디가 애플 비전 프로에서 Q6 e-트론의 몰입형 환경을 구축한 방법',
              date: '2024-07-03',
              tags: ['CASE STUDIES', 'Industry', '+1'],
              image: '/images/project-2.jpg',
              link: 'https://example.com/project-2',
            },
            {
              title: 'JTBC의 오픈 디지털 플랫폼, 스마트 지구를 지원하는 기술',
              date: '2023-10-13',
              tags: ['VIDEO', 'Industry', '+1'],
              image: '/images/project-3.jpg',
              link: 'https://example.com/project-3',
            },
            {
              title: '스릴 넘치는 멀티플레이어 Histera의 세계 융합 | Unity',
              date: '2024-07-03 | 11:00 분',
              tags: ['CASE STUDIES', 'Gaming Services', 'Multiplayer and networking', '+1'],
              image: '/images/project-4.jpg',
              link: 'https://example.com/project-4',
            },
          ].map((item, i) => {
            const isExternal = item.link.startsWith('http');

            const CardContent = (
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
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <Link key={i} href={item.link} className="block">
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
