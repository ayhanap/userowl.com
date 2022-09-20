/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

const formPost = async (e) => {
  e.preventDefault();
  const params = new URLSearchParams([...new FormData(e.target).entries()]);
  fetch("https://assets.mailerlite.com/jsonp/136585/forms/65697174350988725/subscribe", { method: "POST", body: params })
  const response = await new Response(params).text();
  document.getElementById("owl-newsletter-form").classList.add("hidden");
  document.getElementById("owl-newsletter-form-thank-you").classList.remove("hidden");
  console.log(response);
}
export function Hero() {
  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
          <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 pb-20">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  Coming soon
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-5xl">
                  <span className="block text-gray-900">Get feedback from your</span>
                  <span className="block text-purple-600">web application</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Userowl let&apos;s you collect feedback from your website or web app. Hear what your users are trying to tell you.
                Let your users report bugs, suggest feature requests or just give general feedback about your web app.
              </p>
              <div id="owl-newsletter-form" className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.</p>
                <form action="https://assets.mailerlite.com/jsonp/136585/forms/65697174350988725/subscribe" method="POST" onSubmit={formPost} className="ml-block-form mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="fields[email]"
                    id="email"
                    className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:flex-1 border-gray-300"
                    placeholder="Enter your email"
                    required
                  />
                  <button
                    className="ml-onclick-form mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Notify me
                  </button>
                </form>
                {/* <p className="mt-3 text-sm text-gray-500">
                  We care about the protection of your data. Read our&nbsp;
                  <a href="#" className="font-medium text-gray-900 underline">
                    Privacy Policy
                  </a>
                  .
                </p> */}
              </div>
              <div id="owl-newsletter-form-thank-you" className="hidden mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 ">
                <p className="text-2xl font-medium text-gray-900">Thank You!</p>
                <p className="text-base font-normal text-gray-500">We will notify when Userowl is ready. Please check your email to confirm your subscription.</p>
              </div>
            </div>

          </div>
          <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </main>
      </div >
    </section >
  )
}