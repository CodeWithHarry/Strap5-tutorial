import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Blogs | Harry's Developer Portfolio",
}
// Fetch the data
const data = await fetch("http://localhost:1337/api/articles?populate=* ", { cache: 'no-store' })
const response = await data.json()

// console.log(response)

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {response.data && response.data.map(data => {
            return ( // Add return here

              <div key={data.id} className="bg-white rounded-lg shadow-md overflow-hidden  dark:border-2 hover:scale-105 ease-in-out duration-300">
                {/* data post image */}
                <img src={`http://localhost:1337${data.cover.url}`} alt={data.title} className="w-full h-64 object-cover" />

                {/* data post content */}
                <div className="p-4">
                  {/* data post title */}
                  <h2 className="text-2xl font-bold mb-2">{data.title}</h2>

                  {/* data post description */}
                  <p className=" mb-4">{data.description.split(' ').length > 6 ? data.description.split(' ').slice(0, 11).join(' ') + '...' : data.description}</p>

                  {/* data post author and date */}
                  <div className="text-sm  mb-4">
                    <span>By {data.author.name}</span> | <span>{new Date(data.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                  </div>

                  <Link href={`/blogpost/${data.slug}`}><Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button></Link>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog;
