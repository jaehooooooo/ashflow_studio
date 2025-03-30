"use client";

const features = [
  {
    title: "Unity",
    desc: `Unity 및 C#을 활용하여 VR (META / VisionPro / Hololens2) 게임 및 전시를 제작하였으며, Unity Shader 및 다양한 Interactive Device를 통한 Interactive Art를 제작하였습니다.`,
    video: "/videos/card-1.mp4",
  },
  {
    title: "Touch Designer - Unreal - AfterEffect",
    desc: `Touch Designer 및 Unreal, AfterEffect 등 다양한 툴과 Interactive Device를 활용하여 Interactive Art를 제작하였습니다.`,
    video: "/videos/card-2.mp4",
  },
  {
    title: "Design",
    desc: `패션 산업 디자인과를 전공하여 패션쇼를 개최하였고, 다양한 3D Tool과 3D Printer를 활용하여 Artwork를 제작하였습니다.`,
    video: "/videos/card-3.mp4",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-black text-white">

      {/* 🎬 카드 그리드 */}
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

            {/* 텍스트 */}
            <div className="px-5 py-3 flex flex-col h-full">
              <div className="flex-grow">
              <h3 className="text-xl md:text-xl font-bold mb-6">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>

              <a
                href="#"
                className="mt-4 self-end border border-white text-white hover:bg-white hover:text-black transition px-4 py-2 rounded-full text-sm"
              >
                MORE <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 spacing */}
      <div className="h-[10vh]" />
    </section>
  );
}
