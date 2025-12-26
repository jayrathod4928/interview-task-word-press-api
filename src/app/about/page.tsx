import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'About Us',
    description: 'Learn more about the mission, team, and values behind WPFlow.',
};

export default function AboutPage() {
    return (
        <main className="pb-20">
            {/* --- HERO SECTIONgit branch -M master --- */}
            <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500 blur-[150px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        We tell stories that <br />
                        <span className="text-blue-400">shape the future.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        WPFlow is a premier digital publication dedicated to exploring the intersection of technology, design, and sustainable innovation.
                    </p>
                </div>
            </section>

            {/* --- OUR MISSION (Split Layout) --- */}
            <section className="container mx-auto px-4 py-24 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Our Team working"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Founded in 2024, our goal has always been simple: to provide high-quality,
                                accessible insights into the rapidly changing world of web development
                                and digital architecture.
                            </p>
                            <p>
                                We believe that the web should be fast, open, and sustainable. By focusing
                                on modern headless technologies like Next.js and WordPress, we help
                                developers and businesses build better experiences for everyone.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-blue-600">500+</h4>
                                <p className="text-gray-500">Articles Published</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-blue-600">10k+</h4>
                                <p className="text-gray-500">Monthly Readers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORE VALUES (Grid) --- */}
            <section className="bg-gray-100/50 py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">What Drives Us</h2>
                        <p className="text-gray-500 mt-2">The principles that guide every article we write.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Technical Excellence",
                                desc: "We don't just scratch the surface. We dive deep into the code and the 'why' behind the tech.",
                                icon: "🚀"
                            },
                            {
                                title: "User-First Design",
                                desc: "Design isn't just how it looks; it's how it works. We champion accessibility and performance.",
                                icon: "🎨"
                            },
                            {
                                title: "Sustainability",
                                desc: "Building a digital world that doesn't cost the planet. We advocate for green web practices.",
                                icon: "🌿"
                            }
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">{val.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                                <p className="text-gray-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="container mx-auto px-4 py-24 max-w-4xl text-center">
                <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Want to join the conversation?</h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                            Check out our latest blog posts and stay ahead of the curve in the world of web development.
                        </p>
                        <Link
                            href="/blogs"
                            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
                        >
                            Explore the Blog
                        </Link>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute top-[-50%] right-[-10%] w-80 h-80 bg-blue-500 rounded-full opacity-50 blur-3xl" />
                </div>
            </section>
        </main>
    );
}