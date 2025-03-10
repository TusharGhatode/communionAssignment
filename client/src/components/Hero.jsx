import { div } from "framer-motion/client";
import React from "react";
import Loader from "./Loader";

const Hero = () => {
  return (
    <div className="shadow-xl shadow-black">
      <section class="bg-[#E5E1DA]  ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4  text-2xl sm:text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            Connecting People Across Faiths & Interests
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 ">
            Communion Hub is a platform dedicated to fostering spiritual growth
            and community engagement through events, resources, and meaningful
            connections. Stay connected with like-minded individuals and
            participate in enriching experiences
          </p>
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/explore"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-bold tex-white border-none text-center text-white  rounded-lg border border-gray-400  bg-[#003f5c] focus:ring-4 focus:ring-gray-100 "
            >
              {/* bg-[#82799f] */}
              <svg
                class="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 4a1 1 0 011.707-.707l5 5a1 1 0 010 1.414l-5 5A1 1 0 0110 14V11H3a1 1 0 110-2h7V4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Explore Events
            </a>
          </div>
          
        </div>
      </section>

      <div id="features">
        <span class="font-semibold text-xl w-full flex flex-wrap justify-center text-gray-900  mt-16 p-2 uppercase">
          FEATURED IN
        </span>

       <div className="w-full flex flex-wrap justify-center">
       <p className=" text-gray-500 sm:text-lg flex w-full  p-4 flex-wrap justify-center">Join a faith-driven community where you can connect, engage in spiritual growth, access valuable resources, and participate in enriching events.</p>
       </div>

        <div className="p-4">
          <div class=" grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                  class="w-12"
                  alt="Community"
                />
                <div class="space-y-2">
                  <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                    Engage in Community
                  </h5>
                  <p class="text-gray-600 dark:text-gray-300">
                    Join a vibrant faith-based community where you can connect,
                    share, and grow together.
                  </p>
                </div>
                <a
                  href="#"
                  class="flex items-center justify-between group-hover:text-secondary"
                >
                  <span class="text-sm">Learn more</span>
                  <svg
                    class="w-5 h-5 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                  class="w-12"
                  alt="Events"
                />
                <div class="space-y-2">
                  <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                    Faith-Based Events
                  </h5>
                  <p class="text-gray-600 dark:text-gray-300">
                    Participate in enriching spiritual events, workshops, and
                    online gatherings.
                  </p>
                </div>
                <a
                  href="#"
                  class="flex items-center justify-between group-hover:text-secondary"
                >
                  <span class="text-sm">Learn more</span>
                  <svg
                    class="w-5 h-5 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                  class="w-12"
                  alt="Resources"
                />
                <div class="space-y-2">
                  <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                    Spiritual Resources
                  </h5>
                  <p class="text-gray-600 dark:text-gray-300">
                    Access a wealth of faith-based articles, devotionals, and
                    study materials.
                  </p>
                </div>
                <a
                  href="#"
                  class="flex items-center justify-between group-hover:text-secondary"
                >
                  <span class="text-sm">Learn more</span>
                  <svg
                    class="w-5 h-5 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
                  class="w-12"
                  alt="Growth"
                />
                <div class="space-y-2">
                  <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                    Spiritual Growth
                  </h5>
                  <p class="text-gray-600 dark:text-gray-300">
                    Enhance your faith journey through teachings, mentorship,
                    and guided discussions.
                  </p>
                </div>
                <a
                  href="#"
                  class="flex items-center justify-between group-hover:text-secondary"
                >
                  <span class="text-sm">Learn more</span>
                  <svg
                    class="w-5 h-5 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
