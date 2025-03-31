//import Image from "next/image";
import Head from "next/head"; // 요거 꼭 필요!
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCards"
import FeatureCards from "@/components/FeatureCards";
import SuccessGrid from "@/components/SuccessGrid";


export default function Home() {
    return (
        <main>
            <Head>
                <title>Ash의 Unity 포트폴리오</title>
                <meta property="og:title" content="최재호(Ash) Portfolio" />
                <meta property="og:description" content="인터랙티브 아트와 프로젝트를 확인해보세요." />
                <meta property="og:image" content="https://www.ashflow.info/og-image.png" />
                <meta property="og:url" content="https://ashflow.info" />
                <meta name="description" content="인터랙티브 아트 개발자 포트폴리오 사이트입니다." />
            </Head>

            <Hero />
            <InfoCard/>
            <FeatureCards />
            <SuccessGrid />
        </main>
    );
}
