"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="grid-background min-h-screen flex flex-col items-center justify-center px-4 py-8">
      

      <div className="w-full max-w-md flex flex-col items-center justify-center space-y-6">
        {/* Logo Circle */}
        <div className="w-48 h-48 bg-black rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/30 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-25%20at%2011.02.21_e33a71ab-QMhczClIcBiQHFRaFtQIGkhAFFNnwA.jpg"
            alt="Jalwa Game Logo"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title with Emoji */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white">
            JALWA VIP PREDICTION <span className="text-2xl">🎯</span>
          </h1>
        </div>

        <a href="https://t.me/+zM0kPzKn6VMzNTNl" target="_blank" rel="noopener noreferrer" className="w-full">
          <Button
            size="lg"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
          >
                  <img
            src="/kisspng-telegram-logo-computer-icons-computer-software-5aec6aafe66cb1.3597888015254432479438.jpg" // Replace with your image path
            alt="Telegram Icon"
            className="w-6 h-6" // Adjust size as needed
          />
            JOIN TELEGRAM CHANNEL
          </Button>
        </a>

        {/* Time Info */}
        <p className="text-gray-300 text-sm">06:00 AM To 11:00 PM</p>

        {/* Subscribers Info */}
        <div className="text-center space-y-1">
          <p className="text-gray-400 text-sm">FREE VIP SIGNAL 🌟</p>
          <p className="text-gray-300 text-xs leading-relaxed">
            हम सभी सिग्नल बिल्कुल सही देते हे और सिग्नल बिल्कुल फ्री में मिलते हे
          </p>
        </div>

        {/* Create Account Link */}
        <a href="https://t.me/+zM0kPzKn6VMzNTNl" target="_blank" rel="noopener noreferrer" className="w-full">
          <Button
            size="lg"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
          >
            <img
            src="/kisspng-telegram-logo-computer-icons-computer-software-5aec6aafe66cb1.3597888015254432479438.jpg" // Replace with your image path
            alt="Telegram Icon"
            className="w-6 h-6" // Adjust size as needed
          />
            JOIN TELEGRAM CHANNEL
          </Button>
        </a>

        {/* Invitation Message */}
        <div className="text-center text-gray-400 text-xs pt-4">
          <p>You are invited to the channel</p>
          <p className="font-semibold text-white">JALWA VIP PREDICTION 🎯</p>
          <p>Click above to join.</p>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="w-full max-w-md mt-12 mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-25%20at%2011.04.18_1799ac52-5MJtukpUqNFkjYTYmx4F8uUKoyPv4d.jpg"
          alt="Daily Signal Hero"
          width={500}
          height={600}
          className="w-full h-auto rounded-2xl shadow-2xl shadow-cyan-500/30 object-contain"
        />
      </div>
      <footer className="text-xs text-gray-400 text-center px-4 mb-4">
        This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with my ideas, information, tools or strategies. I just want to help you by giving great content, direction and strategies that worked well for me and my students and that I believe can help you move forward. All of my terms, privacy policies and disclaimers for this program and website can be accessed via the links. I feel transparency is important and I hold ourselves (you & me) to a high standard of integrity. Thanks for stopping by. I hope this training and content brings you a lot of value & results.
      </footer>
    </main>
  )
}
