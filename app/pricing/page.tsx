import Link from "next/link"

export default function Page() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center sm:mt-12">
        <div className="container mx-auto px-4 pt-20 lg:px-0">
          <h1 className="mb-3 text-3xl font-bold text-white dark:text-white sm:text-4xl sm:leading-none sm:tracking-tight">
            Our pricing plan made simple
          </h1>

          {/* <!-- Pricing Cards --> */}
          <section className="grid grid-cols-1 space-y-12 pt-9 md:grid-cols-2 md:gap-6 md:gap-x-6 md:space-y-0 lg:grid-cols-3">
            {/* <!-- Pricing Card --> */}
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-200 bg-white p-6 text-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
              <p className="sm:text-lg font-light text-gray-500 dark:text-gray-400">
                Best option for personal use &amp; for your next project.
              </p>
              <div className="my-8 flex items-baseline">
                <span className="mr-2 text-5xl font-extrabold">$29</span>
                <span className="text-gray-500 dark:text-gray-400"> month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">1 developer</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 text-sm dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center font-medium text-white focus:ring-4  dark:text-white"
              >
                Get started
              </a>
            </div>
            {/* <!-- Pricing Card --> */}
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-200 bg-white p-6 text-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Company</h3>
              <p className="sm:text-lg font-light text-gray-500 dark:text-gray-400">
                Relevant for multiple users, extended &amp; premium support.
              </p>
              <div className="my-8 flex items-baseline">
                <span className="mr-2 text-5xl font-extrabold">$99</span>
                <span className="text-gray-500 dark:text-gray-400">month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">10 developers</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">24 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">24 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 text-sm dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center font-medium text-white focus:ring-4  dark:text-white"
              >
                Get started
              </a>
            </div>
            {/* <!-- Pricing Card --> */}
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-200 bg-white p-6 text-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
              <p className="sm:text-lg font-light text-gray-500 dark:text-gray-400">
                Best for large scale uses and extended redistribution rights.
              </p>
              <div className="my-8 flex items-baseline">
                <span className="mr-2 text-5xl font-extrabold">$499</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">100+ developers</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 text-sm dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center font-medium text-white focus:ring-4  dark:text-white"
              >
                Get started
              </a>
            </div>
          </section>
          <section className="pt-20">
            <h2 className="mb-3 text-3xl font-bold text-gray-200 dark:text-white sm:text-4xl sm:leading-none sm:tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-lg sm:text-xl mb-6 font-normal text-gray-200 ">
              All types of businesses need access to development resources, so
              we give you the option to decide how much you need to use.
            </p>
            <hr className="my-6 border-gray-200  md:my-12" />
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    What do you mean by "Figma assets"?
                  </h3>
                  <p className="text-gray-400 ">
                    You will have access to download the full Figma project
                    including all of the pages, the components, responsive
                    pages, and also the icons, illustrations, and images
                    included in the screens.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    What does "lifetime access" exactly mean?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Once you have purchased either the design, code, or both
                    packages, you will have access to all of the future updates
                    based on the roadmap, free of charge.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    How does support work?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    We're aware of the importance of well qualified support,
                    that is why we decided that support will only be provided by
                    the authors that actually worked on this project.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Feel free to{" "}
                    <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      contact us
                    </a>{" "}
                    and we'll help you out as soon as we can.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    I want to build more than one project with FlowBite. Is that
                    allowed?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    You can use FlowBite for an unlimited amount of projects,
                    whether it's a personal website, a SaaS app, or a website
                    for a client. As long as you don't build a product that will
                    directly compete with FlowBite either as a UI kit, theme, or
                    template, it's fine.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Find out more information by{" "}
                    <Link
                      href="/license"
                      className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                    />
                    reading the license.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    What does "free updates" include?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    The free updates that will be provided is based on the{" "}
                    <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                    >
                      roadmap
                    </a>{" "}
                    that we have laid out for this project. It is also possible
                    that we will provide extra updates outside of the roadmap as
                    well.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    What does the free version include?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    The{" "}
                    <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                    >
                      free version
                    </a>{" "}
                    of FlowBite includes a minimal style guidelines, component
                    variants, and a dashboard page with the mobile version
                    alongside it.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    You can use this version for any purposes, because it is
                    open-source under the MIT license.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    What is the difference between FlowBite and Tailwind UI?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Although both FlowBite and Tailwind UI are built for
                    integration with Tailwind CSS, the main difference is in the
                    design, the pages, the extra components and UI elements that
                    FlowBite includes.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Additionally, FlowBite is a project that is still in
                    development, and later it will include both the application,
                    marketing, and e-commerce UI interfaces.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    How do I purchase a license for my entire team?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    You can purchase a license that you can share with your
                    entire team here:
                  </p>
                  <ul className="mb-4 list-disc pl-4">
                    <li className="mb-2 text-gray-400">
                      <span className="text-primary-600 dark:text-primary-500 cursor-pointer font-medium hover:underline">
                        Figma Files - Buy a team license for $299 USD
                      </span>
                    </li>
                    <li className="mb-2 text-gray-400">
                      <span className="text-primary-600 dark:text-primary-500 cursor-pointer font-medium hover:underline">
                        Figma Files + Tailwind CSS code pre-order - Buy a team
                        license for <del>$699</del> $559 USD
                      </span>
                    </li>
                    <li className="mb-4 text-gray-400 dark:text-gray-400">
                      <span className="text-primary-600 dark:text-primary-500 cursor-pointer font-medium hover:underline">
                        Tailwind CSS code pre-order - Buy a team license for{" "}
                        <del>$399</del> $319 USD
                      </span>
                    </li>
                  </ul>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Please use a single account to share with your team to
                    access the download files.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    Can I build/sell templates or themes using FlowBite?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    It is not allowed to use FlowBite or parts of the project to
                    build themes, templates, UI kits, or page builders.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Find out more information by{" "}
                    <Link
                      href="/license"
                      className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                    >
                      reading the license.
                    </Link>
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    Can I use FlowBite in open-source projects?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Generally, it is accepted to use FlowBite in open-source
                    projects, as long as it is not a UI library, a theme, a
                    template, a page-builder that would be considered as an
                    alternative to FlowBite itself.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    With that being said, feel free to use this design kit for
                    your open-source projects.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Find out more information by{" "}
                    <Link
                      href="/license"
                      className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                    >
                      reading the license.
                    </Link>
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    Can I use FlowBite for commercial purposes?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Absolutely! You can use this design kit to build any type of
                    commercial business, whether it's a SaaS, an e-commerce app,
                    an application UI.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    As long as it is not a design resource that you will
                    re-sell, it is alright to use it for commercial purposes.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Find out more information by{" "}
                    <Link
                      href="/license"
                      className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                    >
                      reading the license.
                    </Link>
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    Can I get an invoice?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    After opening the checkout process, you will be able to add
                    all of your personal or company information that you want to
                    be available on the invoice. After the purchase, you will
                    get an email with the invoice.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    If you forgot to complete the information, or you didn't get
                    the invoice by email, feel free to{" "}
                    <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      contact us
                    </a>{" "}
                    and help you out with the invoice.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    When will I get access to the Tailwind CSS code if I
                    pre-ordered it?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    The official date that we have set out to release the code
                    version of FlowBite is the{" "}
                    <span className="font-medium text-gray-200">
                      25th of September, 2021
                    </span>
                    . We are already working on the integration and if you have
                    a pre-order, you will also get frequent updates about the
                    progress.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    You'll be one of the first to know when it will be
                    available.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    What is your refund policy?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    If you are unhappy with your purchase, just{" "}
                    <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      contact us
                    </a>{" "}
                    within 30 days and we'll issue a full refund.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    Is it allowed to use the design assets, such as the fonts,
                    icons, and illustrations?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    What you see is what you get. Which means that all icons,
                    fonts, and illustrations can be used based on the licensing
                    that we researched or purchased. For example, we purchased
                    rights to use the illustrations in Flowbite.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    Where can I access my download files?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    After you purchased one of the plans, you will get two
                    emails: one for the invoice, and another one with the
                    download files.
                  </p>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    Soon we will create a way that you will be able to access
                    the download files from the FlowBite dashboard from this
                    website.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    I have a company registered for VAT. Where can I add the VAT
                    for the invoice?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    After initializing the checkout process from Paddle, you
                    will be able to see a text "Add VAT code". Click on that,
                    and add the VAT code for your company. This will also remove
                    the extra VAT tax from the purchase.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg mb-4 font-medium text-gray-200 dark:text-white">
                    Why would I pre-order the Tailwind CSS code?
                  </h3>
                  <p className="mb-4 text-gray-400 dark:text-gray-400">
                    If you decide to pre-order the Tailwind CSS code, which will
                    arrive on the 25th of September 2021, you can get a base 20%
                    price reduction and purchase it only for $119, instead of
                    $149.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
