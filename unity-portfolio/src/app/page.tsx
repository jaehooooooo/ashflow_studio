import Image from "next/image";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCards"
import FeatureCards from "@/components/FeatureCards";
import SuccessGrid from "@/components/SuccessGrid";


export default function Home() {
    return (
        <main>
            <Hero />
            <InfoCard/>
            <FeatureCards />
            <SuccessGrid />
        </main>
    );
}
