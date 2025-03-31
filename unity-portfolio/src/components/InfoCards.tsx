// components/InfoCards.tsx (새 파일로 분리하거나 아래처럼 직접 작성)
export default function InfoCards() {
    return (
      <div
        className={`
    w-full z-20
    flex flex-col md:flex-row justify-center md:items-center items-start gap-4 md:gap-6 px-4
    md:absolute md:bottom-28
    md:left-0 md:right-0
    relative mt-8
        `}
      >
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
            className: 'w-60',
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
            className: 'w-80',
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
            className: 'w-96',
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
    );
  }
  