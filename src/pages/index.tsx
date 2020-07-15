import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Mhar Vic</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href={require("../assets/img/favicon.png")}
          type="image/png"
          sizes="16x16"
        />
      </Head>
      <div className="relative bg-gray-800 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-0">
          <svg
            className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
            width="364"
            height="384"
            viewBox="0 0 364 384"
            fill="none"
          >
            <defs>
              <pattern
                id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect
              width="364"
              height="384"
              fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
            />
          </svg>
        </div>
        <div className="relative pt-6 pb-12 sm:pb-32">
          <main className="mt-8 sm:mt-16 md:mt-20 lg:mt-24">
            <div className="mx-auto max-w-screen-xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-1 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                        Full Stack Developer
                      </span>
                    </a>
                    <h2 className="mt-4 text-4xl tracking-tight leading-10 font-extrabold text-white sm:mt-5 sm:leading-none sm:text-6xl lg:mt-6 lg:text-5xl xl:text-6xl">
                      Haha 😁 I'am
                      <br className="hidden md:inline"></br>
                      <span className="text-indigo-400"> Mhar Vic Chicano</span>
                    </h2>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                    </p>

                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                        >
                          Okay
                        </a>
                      </div>
                      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                        >
                          Resume
                        </a>
                      </div>
                    </div>

                    <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
                      Projects
                    </p>
                    <div className="mt-3 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                      <div className="flex flex-wrap items-start justify-between">
                        <div className="flex justify-center px-1">
                          <p className="mt-3 text-base font-semibold text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl hover:text-indigo-400 cursor-pointer">
                            None
                          </p>
                        </div>
                        <div className="flex justify-center px-1">
                          <p className="mt-3 text-base font-semibold text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl hover:text-indigo-400">
                            None
                          </p>
                        </div>
                        <div className="flex justify-center px-1">
                          <p className="mt-3 text-base font-semibold text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl hover:text-indigo-400">
                            None
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6">
                  <div className="bg-transparent sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                    <img
                      className="sm:w-20 sm:h-20 lg:w-full lg:h-full"
                      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
