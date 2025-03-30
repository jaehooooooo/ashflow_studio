import Image from "next/image";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import SuccessGrid from "@/components/SuccessGrid";


export default function Home() {
    return (
        <main>
            <Hero />
            <FeatureCards />
            <SuccessGrid />
        </main>
    );
}
