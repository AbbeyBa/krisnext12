import React from 'react'
import Image from 'next/image'
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from '@merc/react-timeline'
  
const HomePage = () => {
  return (
    <>
    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <br></br>
            <span className="block xl:inline">Krisullis</span>
            <span className="block text-indigo-600 xl:inline" data-primary="indigo-600">You Belong Here</span>
          </h1>
          <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Let's get started together to learn and thrive together...</p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto" data-primary="indigo-600" data-rounded="rounded-md">Register here<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600" data-rounded="rounded-md">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
            <Image src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" alt="" width={570} height={380}/>
          </div>
      </div>
    </div>
  
  <br></br>
  <br></br>
  <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <br></br>
            <span className="block xl:inline">Our Journey</span>
            
          </h1>
</div>
  <Timeline>
    <Events>
    <TextEvent date="Feb - Apr 2022" text="Launched our **DAO** / *R&D*" />

<TextEvent 
  date="May - July" 
  text="**Cohorts 1&2** / **Marketplace** / Blog **NFT** Campaigns" 
/>

<TextEvent 
  date="Aug - Oct" 
  text="**Cohorts 3&4** / Krisullis Moments NFT's / Art Campaign NFT's / Krisullis Newsletter NFT's" 
/>

<TextEvent 
  date="Nov - Jan 2023" 
  text="**Hyper Curation** / **Events IRL** / **Campaigns**" 
/>

    </Events>
  </Timeline>

    <div className="my-16 border-b border-gray-300 lg:my-20"></div>
    <div>
    
    
    <div class="flex flex-wrap justify-start sm:grid sm:grid-cols-4 md:grid-cols-4 gap-6 mt-8">
    <p className="text-gray-900 font-bold text-lg mt-5 flex items-center group">Our Partners</p>
    <div className="w-auto h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
            <Image src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" alt="" width={20} height={20}/>
          </div>
      
          <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
            <Image src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" alt="" width={20} height={20}/>
          </div>

      </div>

           
     </div>   
 
</div>
  </>
  )
}
  
export default HomePage