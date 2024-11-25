"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8 sm:py-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="logo.svg"
              alt="FireUp logo"
              width={140}
              height={140}
              className="drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 inline-block text-transparent bg-clip-text">
            FireUp
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto mb-8">
            How to get startup ideas? Use my app to transform daily frustrations into your next
            startup
          </p>
          <a
            href="https://apps.apple.com/us/app/fireup-ai-startup-generator/id6737740837"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <Image
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
              alt="Download on the App Store"
              width={250}
              height={83}
              priority
            />
          </a>
        </div>

        <div className="space-y-16">
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Turn Problems Into Opportunities
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Have you ever spent months building a product no one wanted? Or do you dream of
              launching a startup but feel stuck without a great idea? FireUp helps you discover
              real problems worth solving using the power of AI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Problem Logging</h3>
              <p className="text-gray-600 text-lg">
                Easily capture and track your daily annoyances as they happen. Build a repository of
                real-world problems.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">AI-Powered Solutions</h3>
              <p className="text-gray-600 text-lg">
                Our AI can transform your daily annoyances into actionable startup ideas and MVP
                suggestions tailored for solo founders.
              </p>
            </div>
          </div>

          <blockquote className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
            <p className="text-xl italic text-gray-700 leading-relaxed">
              "The way to get startup ideas is not to try to think of startup ideas. It's to look
              for problems, preferably problems you have yourself."
            </p>
            <footer className="mt-4">
              <a
                href="https://paulgraham.com/startupideas.html"
                className="text-orange-600 hover:text-orange-700 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                - Paul Graham
              </a>
            </footer>
          </blockquote>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Start Building Your Next Big Thing
          </h3>
          <a
            href="https://apps.apple.com/us/app/fireup-ai-startup-generator/id6737740837"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <Image
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
              alt="Download on the App Store"
              width={250}
              height={83}
              priority
            />
          </a>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              Contact:{" "}
              <a
                href="mailto:vossen.w@hotmail.com"
                className="text-orange-600 hover:text-orange-700"
              >
                vossen.w@hotmail.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-1">
              Follow me on{" "}
              <a
                href="https://www.youtube.com/@pookiehd"
                className="text-orange-600 hover:text-orange-700 inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
