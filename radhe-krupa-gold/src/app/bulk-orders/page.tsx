import BulkHero from "@/components/BulkHero/BulkHero";
import SampleDesigns from "@/components/SampleDesigns/SampleDesigns";
import OrderNow from "@/components/OrderNow/OrderNow";
import OrderNote from "@/components/OrderNote/OrderNote";

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
            <section>
                <OrderNote />
            </section>
        </>
    );
}
