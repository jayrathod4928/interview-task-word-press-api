import AboutUs from "@/components/About-Us/About-Us";
import RadhekrupaHero from "@/components/RadhekrupaHero/RadhekrupaHero";
import FounderSection from "../../components/FounderSection/FounderSection";
import StatsCounter from "@/components/StatsCounter/StatsCounter";

export default function BulkOrdersPage() {
    return (
        <>
            <AboutUs />
            <section>
                <RadhekrupaHero />
            </section>
            <section>
                <FounderSection />
            </section>
            <section>
                <StatsCounter />
            </section>
        </>
    );
}
