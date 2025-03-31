'use client';

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/success-1.jpg",
  "/images/success-2.jpg",
  "/images/success-3.jpg",
  "/images/success-4.jpg",
  "/images/success-5.jpg", // 5번째 이미지 (index 4)
  "/images/success-6.jpg",
  "/images/success-7.jpg",
  "/images/success-8.jpg",
  "/images/success-9.jpg",
];

export default function SuccessGrid() {
  const fifthImageRef = useRef<HTMLDivElement>(null);
  const [isInCenter, setIsInCenter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!fifthImageRef.current) return;

      const rect = fifthImageRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const imageCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;

      const isCentered = Math.abs(imageCenter - viewportCenter) < 100;
      setIsInCenter(isCentered);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">성공 사례</h2>
        <p className="text-gray-600 text-lg mb-8">
          유니티의 솔루션과 서비스로 큰 성공을 거둔 전 세계 크리에이터와 스튜디오의 이야기를 들어 보세요.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">
            활용 사례 →
          </button>
          <button className="text-sm font-semibold text-black hover:underline">
            UNITY로 제작 →
          </button>
        </div>

        {/* 이미지 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              ref={idx === 4 ? fifthImageRef : null}
              className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-700 ${
                isInCenter && idx === 4
                  ? "fixed top-0 left-0 w-screen h-screen z-50"
                  : "w-full aspect-video relative"
              }`}
            >
              <Image src={src} alt={`Success ${idx + 1}`} fill className="object-cover" />

              {isInCenter && idx === 4 && (
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-6">
                  <h3 className="text-4xl font-bold">Please, Touch the Artwork</h3>
                  <p className="text-lg mt-4 max-w-2xl">
                    Generative Art를 게임으로 변환한 사례
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 1차 설명 섹션 (리소스 카드 3개) */}
        {isInCenter && (
          <section className="w-screen bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4 text-black">풍부한 리소스, 활발하게 운영되는 커뮤니티</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    title: "리소스",
                    desc: "단계별 도움말과 Knowledge Base, 이슈 트래커 등을 사용하여 더 빠르게 시작하고 완료해 보세요.",
                  },
                  {
                    title: "레벨업 아카데미",
                    desc: "온라인 학습 과정과 인증 시험, 기관 라이선스, 교육 담당자용 툴을 살펴보세요.",
                  },
                  {
                    title: "커뮤니티",
                    desc: "취미 개발자부터 전문가까지 배우고 공유하고 영감을 주고받기 위해 커뮤니티와 연결하는 전 세계 Unity 크리에이터 네트워크에 참여해 보세요.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-100 p-6 rounded-lg flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                    <button className="mt-6 border border-blue-600 text-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition w-fit mx-auto">
                      자세히 알아보기 →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 2차 설명 섹션 (좌우 레이아웃) */}
        {isInCenter && (
          <section className="w-screen bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
              {/* 텍스트 블럭 */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">창의적인 성공 사례</h3>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  유니티로 만든 프로젝트가 어떻게 전 세계 사용자에게 감동을 전했는지 확인해 보세요. 다양한 플랫폼에서 실현된 놀라운 경험들을 소개합니다.
                </p>
                <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">
                  더 많은 사례 보기 →
                </button>
              </div>

              {/* 이미지 블럭 */}
              <div className="flex-1 relative aspect-video w-full max-w-xl rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/success-6.jpg"
                  alt="성공 사례 이미지"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
