import Head from 'next/head';
import Avatar from './../components/Avatar';
import Footer from './../components/Footer';

import Image from 'next/image';

import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid';
import { useRef } from 'react';


export default function Home() {

  const seachInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = seachInputRef.current.value;
    console.log('Term', term);
    if(!term) {
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/**Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          <Avatar  url="data:image/jpeg;base64,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"/>
        </div>

      </header>

      {/**Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google" height={100} width={300}/>

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={seachInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5 mr-3 text-gray-500"  />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8
         sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm feeling lucky</button>
        </div>
      </form>

      {/**Footer */}
      <Footer />
    </div>
  )
}
