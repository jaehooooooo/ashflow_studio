"use client";

const features = [
    {
        title: "게임",
        desc: `20개 이상의 플랫폼과 수십억 개의 장치에서 놀라운 게임을 만들고 성장시키세요. 창작, 출시 및 그 이후를 위한 종합 도구와 서비스가 제공됩니다.⁵`,
        video: "/videos/card-1.mp4",
    },
    {
        title: "산업 분야",
        desc: `디바이스에 관계없이 어디서나 CAD 및 3D 데이터를 몰입형 앱과 경험으로 변환하는 데 필요한 제작 툴과 엔터프라이즈급 지원을 받아 보세요.`,
        video: "/videos/card-2.mp4",
    },
    {
        title: "Grow",
        desc: `Unity의 강력한 툴, 서비스, 전문 기술로 앱을 즉시 성장시키고 비즈니스를 성공으로 이끌어 보세요.`,
        video: "/videos/card-3.mp4",
    },
];

export default function FeatureCards() {
    return (
        <section className="bg-black py-8">
            <div className="max-w-7xl mx-auto px-2 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl overflow-hidden shadow-md bg-[#1a1a1a] text-white flex flex-col justify-between w-full min-h-[460px]"
                    >
                        {/* 영상 */}
                        <div className="px-3 pt-3 pb-0">
                            <div className="rounded-xl overflow-hidden w-full aspect-[16/9]">
                                <video
                                    src={item.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* 텍스트 + 버튼 */}
                        <div className="px-5 py-3 flex flex-col h-full">
                            <div className="flex-grow">
                                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm leading-relaxed">{item.desc}</p>
                            </div>

                            <a
                                href="#"
                                className="mt-4 self-end border border-white text-white hover:bg-white hover:text-black transition px-4 py-2 rounded-full text-sm"
                            >
                                자세히 알아보기 <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* 충분한 스크롤 영역 확보 */}
            <div className="h-[10vh]" />

  {/* 🔥 성공 사례 소개 섹션 (검정 배경, 흰 글씨) */}
<div className="relative z-10 bg-black text-white py-16 px-4 text-center">
  <h2 className="text-4xl font-bold mb-6">성공 사례</h2>
  <p className="text-gray-300 text-lg mb-10">
    유니티의 솔루션과 서비스로 큰 성공을 거둔 전 세계 크리에이터와 스튜디오의 이야기를 들어 보세요.
  </p>
  <div className="flex justify-center items-center gap-4 flex-wrap">
    <a href="#" className="px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black text-sm transition">
      활용 사례 →
    </a>
    <a href="#" className="px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black text-sm transition">
      Unity로 제작 →
    </a>
  </div>
</div>
                </section>

        

    );
}
