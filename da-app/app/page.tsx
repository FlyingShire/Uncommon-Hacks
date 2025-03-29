import Link from "next/link";
import React from 'react';

const Home = () => {
  return (
    <main className="flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center p-8 sm:p-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Your Practice Name
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mt-4">
            Patient communication done better
          </p>
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/survey"
            className="rounded-full bg-black hover:bg-gray-800 text-white font-medium text-lg px-8 py-4 transition-colors duration-200"
          >
            Take Your Survey Now
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-black text-white py-20 px-8 sm:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            The Communication Crisis in Critical Care
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Stat Cards 1-3 remain unchanged */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-2xl font-semibold mb-3 text-blue-400">62%</div>
              <p className="text-lg text-gray-300">
                of ventilated patients experience <span className="text-white font-medium">severe frustration</span> when unable to communicate (Happ et al., 2006).
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-2xl font-semibold mb-3 text-blue-400">76% → 30%</div>
              <p className="text-lg text-gray-300">
                Projected frustration reduction with communication boards <span className="text-white font-medium">(P &lt; .001)</span>.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-2xl font-semibold mb-3 text-blue-400">69%</div>
              <p className="text-lg text-gray-300">
                of patients requested <span className="text-white font-medium">personalized communication aids</span>.
              </p>
            </div>

            {/* Fixed Evidence-Based Card */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-2xl font-semibold mb-3 text-blue-400">Evidence-Based</div>
              <div className="text-lg text-gray-300">
                Our solution implements <a href="https://pubmed.ncbi.nlm.nih.gov/17098155/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:no-underline">clinical research</a>:
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-lg text-gray-300">
                <li>Dynamic pain assessment</li>
                <li>Emotion recognition</li>
                <li>Personalized needs matrices</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <Link
              href="/survey"
              className="rounded-full bg-white hover:bg-gray-200 text-black font-medium text-lg px-8 py-4 transition-colors duration-200"
            >
              See Our Solution
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;