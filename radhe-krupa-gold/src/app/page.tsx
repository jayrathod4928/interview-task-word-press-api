import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/Slider";
import Slide from "@/components/Slider/Slide";
import Image from "next/image";

import slide1 from "@/components/Images/Slide-1.jpg";
import slide2 from "@/components/Images/Slide-4.jpg";
import slide3 from "@/components/Images/Slide-5.jpg";

export default function Page() {
    const slides = [slide1, slide2, slide3];

    return (
        <>
            <Header />
            <main >
                <Slider
                    autoplay
                    interval={5000}
                    showDots
                    showArrows
                >
                    {slides.map((slide, index) => (
                        <Slide key={index}>
                            <Image
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                width={400}
                                height={400}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                                priority={index === 0} // prioritize the first image
                            />
                        </Slide>
                    ))}
                </Slider>
            </main>
        </>
    );
}
