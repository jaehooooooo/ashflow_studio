"use client";

import { useEffect, useRef, useState } from "react";

const videoSources = [
    "/videos/hero-1.mp4",
    "/videos/hero-2.mp4",
    "/videos/hero-3.mp4",
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoEnd = () => {
        setIndex((prev) => (prev + 1) % videoSources.length);
    };

    useEffect(() => {
        // 재생 시도 (필요 시 자동 재생 보장)
        const video = videoRef.current;
        if (video) {
            video.load();
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch((err) => {
                    console.warn("자동 재생 실패:", err);
                });
            }
        }
    }, [index]);

    return (
        <section className="relative w-full h-screen text-white overflow-hidden">
            {/* 🎬 비디오 */}
            <video
                ref={videoRef}
                key={index}
                className="absolute inset-0 w-full h-full object-cover scale-[1.05]" // 아주 살짝 확대
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
            >
                <source src="/videos/hero-1.mp4" type="video/mp4" />
            </video>

            {/* 오버레이 */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* 콘텐츠 */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Go Create</h1>
                <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
                >
                    다운로드 →
                </a>
            </div>

            {/* 📊 하단 통계 정보 */}
            <div className="absolute bottom-28 md:bottom-32 z-20 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 px-4">
                {/* 카드 공통 스타일 */}
                {[
                    {
                        value: "20+",
                        label: (
                            <>
                                <span className="font-bold">Unity</span>로 제작된 콘텐츠를 지원하는<br />
                                최종 사용자 플랫폼 수<sup>²</sup>
                            </>
                        ),
                    },
                    {
                        value: "3.6B",
                        label: (
                            <>
                                <span className="font-bold">- Unity</span>로 제작된 애플리케이션의<br />
                                월간 다운로드 수<sup>³</sup>
                            </>
                        ),
                    },
                    {
                        value: "82",
                        label: (
                            <>
                                <span className="font-bold">- 상위 1,000개 게임 중 Unity</span>를<br />
                                사용하여 게임을 성장시키는 게임의 비율<sup>⁴</sup>
                            </>
                        ),
                    },
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center text-white max-w-xs w-full"
                    >
                        <p className="text-2xl font-bold mb-1">{item.value}</p>
                        <p className="text-sm leading-snug">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );


}
