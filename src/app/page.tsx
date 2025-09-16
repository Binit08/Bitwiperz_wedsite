"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Shield, Zap, Cpu, WifiOff, CheckCircle, Laptop, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar"; 
export default function LandingPage() {
  const features = [
    { icon: <Shield className="mx-auto h-12 w-12 text-indigo-600 mb-4" />, title: "Security First", desc: "Industry-grade algorithms ensure secure and permanent erasure." },
    { icon: <Cpu className="mx-auto h-12 w-12 text-indigo-600 mb-4" />, title: "Resource Light", desc: "Runs on USB drives with modest requirements, even on older PCs." },
    { icon: <WifiOff className="mx-auto h-12 w-12 text-indigo-600 mb-4" />, title: "Offline Mode", desc: "Bootable ISO/USB for erasures without internet dependency." },
    { icon: <CheckCircle className="mx-auto h-12 w-12 text-indigo-600 mb-4" />, title: "Tamper-Proof Certificates", desc: "Generates signed PDF/JSON certificates for verifiable destruction." },
    { icon: <Zap className="mx-auto h-12 w-12 text-indigo-600 mb-4" />, title: "One-Click Wipe", desc: "Simple, user-friendly wiping for non-technical users." },
    { icon: <Laptop className="mx-auto h-12 w-12 text-indigo-600 mb-4" />, title: "Cross Platform", desc: "Works across Windows, macOS, and Linux seamlessly." },
    { icon: <Globe className="mx-auto h-12 w-12 text-indigo-600 mb-4" />, title: "Open Source", desc: "Transparent, community-driven development for trust and flexibility." },
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % features.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + features.length) % features.length);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
         <Navbar /> 
      {/* Hero Section */}
     {/* Hero Section */}
<header className="flex-1 flex items-center justify-center text-center px-6 py-28 bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
  <div>
    <h2 className="text-5xl font-bold mb-6">Secure. Simple. Reliable.</h2>
    <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
      Protect your privacy and recycle devices with confidence.  
      Bitwiperz erases every trace of data — permanently and verifiably — in just one click.  
    </p>
   <a 
  href="https://github.com/Binit08/Bitwiperz_app1/releases/download/v1.0.2/Bitwiperz-1.0.0-arm64.dmg" 
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-6 py-3 rounded-xl bg-white text-indigo-600 hover:bg-gray-200 font-medium text-lg shadow-md transition">
    DOWNLOAD NOW
  </button>
</a>

  </div>
</header>


      {/* About Section */}
      {/* About Section */}
<section id="about" className="py-20 max-w-5xl mx-auto px-6 text-center">
  <h3 className="text-3xl font-bold mb-6 text-indigo-700">Why Choose Bitwiperz?</h3>
 <section id="about" className="py-20 max-w-5xl mx-auto px-6 text-center">
  
  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 font-medium">
    <span className="font-semibold text-indigo-600">Bitwiperz</span> is more than just a wiping tool — 
    it’s a <span className="italic">complete solution</span> designed to build trust and confidence in 
    the process of safe device recycling.
  </p>

  <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
    Today, millions of laptops, desktops, and smartphones remain unused or improperly discarded 
    simply because people fear their <span className="font-semibold text-gray-900">personal or organizational data</span> 
    could be recovered. This hesitation contributes directly to the <span className="text-indigo-600">growing e-waste crisis.</span>
  </p>

  <blockquote className="italic text-indigo-700 font-semibold max-w-2xl mx-auto mb-6">
    “Whether you’re an individual, IT manager, or recycler — Bitwiperz gives you the power 
    to erase data forever with just one click.”
  </blockquote>

  <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
    By combining <span className="font-semibold text-indigo-600">ease of use</span> with 
    <span className="font-semibold text-indigo-600"> industry-grade security</span>, Bitwiperz ensures that 
    sensitive data is erased permanently while generating verifiable certificates.  
    Lightweight, scalable, and accessible, it’s designed not just for enterprises but for <span className="font-semibold">everyone</span>.  
    Together, we can <span className="text-indigo-600 font-medium">reduce e-waste, protect privacy, and promote a safer circular economy.</span>
  </p>
</section>

  
</section>


      {/* Features Section with Carousel */}
      <section id="features" className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {features.map((feature, idx) => (
              <div key={idx} className="min-w-full flex justify-center">
                <Card className="shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-white rounded-2xl w-full md:w-2/3 lg:w-1/2">
                  <CardContent className="p-10 text-center">
                    <div className="animate-fade-in-up">{feature.icon}</div>
                    <h4 className="text-2xl font-semibold mb-4">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition">‹</button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition">›</button>
        </div>
      </section>
{/* How It Works Section */}
<section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <h3 className="text-4xl font-bold text-center mb-16 text-indigo-700">How It Works</h3>
  <div className="relative max-w-5xl mx-auto px-6">
    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-200 rounded"></div>
    {[
      { step: "Download & Install", desc: "Download MySoftware from our official website and install it on your PC.", icon: "Download" },
      { step: "Plug In Your Pen Drive", desc: "Insert a pen drive. ⚠️ Backup important files first, as it will be formatted.", icon: "Usb" },
      { step: "Choose Device Type", desc: "Windows/Linux: continue directly. Android: connect your device via USB and keep it connected.", icon: "MonitorSmartphone" },
      { step: "Start Flashing", desc: "Open MySoftware and click Flash to prepare your USB.", icon: "Zap" },
      { step: "Erase & Restart", desc: "Click Erase. Your PC will restart automatically.", icon: "Power" },
      { step: "Select Boot Mode", desc: "Enter your boot menu and choose USB Boot / Bitwiperz Boot.", icon: "Settings" },
      { step: "Progress & Completion", desc: "Track progress. Once finished, a certificate PDF will be saved on the pen drive.", icon: "CheckCircle2" },
    ].map((item, idx) => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const Icon = require("lucide-react")[item.icon];
      return (
        <div key={idx} className={`relative flex items-start mb-14 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
          {/* Step Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg animate-bounce-once">
              <Icon className="w-6 h-6" />
            </div>
          </div>

          {/* Content Card */}
          <div className={`w-1/2 px-8 ${idx % 2 === 0 ? "text-right pr-16" : "text-left pl-16"}`}>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
              <h4 className="text-xl font-semibold text-indigo-700 mb-2">{item.step}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="mb-4 text-gray-700">Have questions or need support? Reach out to us anytime.</p>
        <p className="font-medium">📧 support@Bitwiperz .com</p>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear() }Bitwiperz. All rights reserved.</p>
      </footer>
    </div>
  );
}

