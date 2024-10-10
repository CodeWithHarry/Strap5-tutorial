"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, { useRef, useEffect, useState } from 'react';
import Link from "next/link";



export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  const [data, setdata] = useState([])


  
  useEffect(() => {
    document.title = "Harry's Developer Portfolio";
    fetchData()

  }, [])


  useEffect(() => { 
    const typed = new Typed(el.current, {
      strings: data,
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [data]);


  const [response, setBlog] = useState()

  const fetchData = async () => {
    const url = `http://localhost:1337/api/articles?populate=*`;
    const data = await fetch(url, { cache: 'no-store' })


    const url2 = `http://localhost:1337/api/hometext`;
    const data2 = await fetch(url2, { cache: 'no-store' })
    const response2 = await data2.json()
    setdata(response2.data.text.split(","))
    
    
    
    const response = await data.json()
    setBlog(response)
  }



  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            <span className="font-semibold">My name is</span> Harry<br className="hidden lg:block" />I work with <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Confused on which course to take? I have got you covered. Browse blogs and find out!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">

            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Readers Say</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied Readers!</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"This blog has been a game-changer for our business. Highly recommend!"</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The writing was professional and the blogs were outstanding."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Exceptional writing. We couldn't be happier with the blogs."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Brown</h3>
                <p className="text-gray-500 dark:text-gray-300">CTO, Company C</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            {response && response.data.map(data => {
              return (
                <div key={data.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">

                  <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                    <img src={`http://localhost:1337${data.cover.url}`} alt={data.title} className="w-full h-64 object-cover rounded-t-lg" />
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{data.title}</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">{data.description.split(' ').length > 6 ? data.description.split(' ').slice(0, 10).join(' ') + '...' : data.description}</p>
                      <Link href={`/blogpost/${data.slug}`}><Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button></Link>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </section>

    </main>
  );
};







