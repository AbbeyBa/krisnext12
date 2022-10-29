import React from 'react'
import Head from '../components/Head'
import Header from '../components/Header'

function comms() {
  return (
    <>
    <Head>
      <title>Krisullis - You Belong Here</title>
    </Head>
    <Header />
    <main className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
  


<div className="flex flex-col items-center sm:px-5 md:flex-row">
    <div className="w-full md:w-1/2">
        <a href="#_" className="block">
            
        </a><img className="object-cover w-full h-full rounded-lg max-h-full sm:max-h-full" src="https://ngpzwhzdavpdovrvzium.supabase.co/storage/v1/object/public/krisdemoassets/Butterfly.jpg"></img>
    </div>
    <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
            
            <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_" className="">Explore all our Communications ...</a></h1>
           {/** <p className="pt-2 text-sm font-medium">by <a href="#_" className="mr-1 underline">John Doe</a> · <span className="mx-1">April 23rd, 2021</span> · <span class="mx-1 text-gray-600">5 min. read</span></p>**/}
        </div>
    </div>
</div>

<div className="grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="/newsletter" className="block">
            <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://ngpzwhzdavpdovrvzium.supabase.co/storage/v1/object/public/krisdemoassets/news_bfly_poster.jpg"></img>
        </a>
        <div className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
            <span>Newsletter</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">What We have been upto</a></h2>
        <p className="text-sm text-gray-500">Learn about us and be a part of our Adventure</p>
        {/**<p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline"></a> · <span className="mx-1"></span> · <span className="mx-1 text-gray-600">3 min. read</span></p>**/}
    </div>

    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
            <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://ngpzwhzdavpdovrvzium.supabase.co/storage/v1/object/public/krisdemoassets/blog_img_comms.jpg"></img>
        </a>
        <div className="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
            <span>Blog</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">What interests our Community</h2>
        <p className="text-sm text-gray-500">Check out Articles curated by our Community for our Community</p>
        {/**<p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Fred Jones</a> · <span className="mx-1">April 10, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>**/}
    </div>

    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
            <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://ngpzwhzdavpdovrvzium.supabase.co/storage/v1/object/public/krisdemoassets/noti_img_comms.jpg"></img>
        </a>
        <div className="bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
            <span>Notifications</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">Events and Updates</h2>
        <p className="text-sm text-gray-500">Take the time to learn along with us and st
        ay informed of upcoming posts and discussions</p>
        {/**<p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Mike Roberts</a> · <span className="mx-1">April 6, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>**/}
    </div>

    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
            <img className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://ngpzwhzdavpdovrvzium.supabase.co/storage/v1/object/public/krisdemoassets/retro_mic_img_comms.jpg"></img>
        </a>
        <div className="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
            <span>Live Interviews</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">Listen to Experts</h2>
        <p className="text-sm text-gray-500">Listen, open your mind and stay aware of ever changing Technology and Ecosystems</p>
        {/**<p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Tom Johnson</a> · <span className="mx-1">May 25, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>**/}
    </div>

    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
            <img className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://ngpzwhzdavpdovrvzium.supabase.co/storage/v1/object/public/krisdemoassets/videos_img_comms.jpg"></img>
        </a>
        <div className="bg-gray-800 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
            <span>Videos</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">Informative Videos</h2>
        <p className="text-sm text-gray-500">Online Videos that can help you learn, become aware of upto date events and help empower you</p>
        {/**<p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Scott Reedman</a> · <span className="mx-1">May 18, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>**/}
    </div>

    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
            <img className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://ngpzwhzdavpdovrvzium.supabase.co/storage/v1/object/public/krisdemoassets/irl_img_comms.jpg"></img>
        </a>
        <div className="bg-yellow-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
            <span>I R L</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">In Real Life Events</h2>
        <p className="text-sm text-gray-500">Take part in unique expeditions to help spread the word through community activities</p>
        {/**<p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Jake Caldwell</a> · <span className="mx-1">May 15, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>**/}
    </div>

</div>

</main>
</>

)
}

export default comms