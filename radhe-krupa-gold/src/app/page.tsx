import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/Slider";
import Image from "next/image";

import slide1 from "@/components/Images/Slide-4.jpg";
import slide2 from "@/components/Images/Slide-5.jpg";
import slide3 from "@/components/Images/Slide-2.jpg";

export default function Page() {
    return (
        <>
            <Header />

            <main>
                <Slider autoplay interval={4000}>
                    <Image
                        src={slide1}
                        alt="Slide 1"
                        priority
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />

                    <Image
                        src={slide2}
                        alt="Slide 2"
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />

                    <Image
                        src={slide3}
                        alt="Slide 3"
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />
                </Slider>
            </main>
        </>
    );
}
