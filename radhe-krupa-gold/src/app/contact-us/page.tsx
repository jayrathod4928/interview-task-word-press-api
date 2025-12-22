import LetsConnect from "@/components/LetsConnect/LetsConnect";
import Features from "@/components/Features/Features";
import HeadOffice from "@/components/HeadOffice/HeadOffice";
import ContactUsForm from "@/components/ContactUsForm/ContactUsForm";
import MapComponent from "@/components/MapComponent/MapComponent";


export default function ContactUsPage() {
    return (
        <>
            <LetsConnect />
            <section>
                <Features />
            </section>
            <section>
                <HeadOffice />
            </section>
            <section>
                <ContactUsForm />
            </section>

            <section>
                <MapComponent />
            </section>
        </>
    );
}
