import {useState} from "react";

import { getStaticProps } from "@/API";

import Story from "@/components/Story";
import Sidebar from "@/components/Sidebar";
import IndexContent from "@/components/IndexContent";

import Head from "next/head";

const Home=({items})=>{

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // console.log(items);
 
  const urls= items.map((i) => i.url)
  const thumbnailUrls = items.map((i) => i.thumbnailUrl)
  

  return (
<main className = "w-[80%] mx-auto dark:bg-gray-700 dark:text-white dark:p-1 dark:rounded-md" >
  <Head>
    <title>Home | BEK Technology</title>
  </Head>
  <Story thumbnailUrls = {thumbnailUrls}/>
  <div className="flex h-full p-2">
    <IndexContent urls = {urls}/>
    <Sidebar toggleMenu = {toggleMenu} isOpen = {isOpen}/>
  </div> 
</main> 
  )
}

export {
  getStaticProps
};

export default Home;
