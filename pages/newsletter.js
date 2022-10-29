import React from 'react'
import Head from '../components/Head'
import Header from '../components/Header'

function newsletter() {

  return (
<>
    <Head>
      <title>Krisullis - You Belong Here</title>
    </Head>
    <Header />
    <div className="relative w-full px-5 py-6 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">

        <h1 className="mb-1 text-3xl font-bold leading-none text-gray-700 lg:text-5xl xl:text-6xl sm:mb-3"><a href="#_">Our Newsletter Hub</a></h1>
        <p className="text-lg font-medium text-gray-500 sm:text-2xl">Extra extra read all about it ...</p>

        <div className="flex grid h-auto grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                <a href="#_" className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-auto hover:scale-110">
                <img className="object-cover h-full rounded-lg sm:max-h-full" src="https://ngpzwhzdavpdovrvzium.supabase.co/storage/v1/object/public/krisdemoassets/KRISULLIS_SEPT_issue_2022.jpg"></img>
                </a>
                
        </div>
        <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                <a href="/newsoct2022" className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-auto hover:scale-110">
                <img className="object-cover h-full rounded-lg sm:max-h-full" src="https://ngpzwhzdavpdovrvzium.supabase.co/storage/v1/object/public/krisdemoassets/Coverpage_oct_issue_2022.png"></img>
                </a>
                
        </div>
        </div>
        </div>

</>
  )



}

export default newsletter