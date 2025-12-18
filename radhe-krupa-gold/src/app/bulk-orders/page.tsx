import BulkHero from "@/components/BulkHero/BulkHero";
import SampleDesigns from "@/components/SampleDesigns/SampleDesigns";
import OrderNow from "@/components/OrderNow/OrderNow";

export default function BulkOrdersPage() {
    return (
        <>
        <BulkHero />
            <section>
                <SampleDesigns />
            </section>
            <section>
                <OrderNow />
            </section>
        </>
    );
}
