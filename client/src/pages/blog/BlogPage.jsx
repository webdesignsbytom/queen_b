import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Blog data
import { blogPostArray } from '../../utils/BlogPosts';

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState(blogPostArray);

  return (
    <div className='h-dvh w-full grid'>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <div className='grid w-1/2 mx-auto mt-8'>
          <header className='outline outline-white outline-2 rounded-xl h-fit'>
            <div className='text-center'>
              <h1 className='text-xl text-yellow-600 font-bold gothic_font_1'>
                Blog of the goddess
              </h1>
            </div>
          </header>

          {/* Main */}

          <main className='grid w-full h-full mt-4'>
            <div className='grid grid-flow-row gap-6'>
              
              {blogPosts.map((post, index) => {
                return (
                  <article
                    key={index}
                    className='text-white outline outline-white outline-2 rounded-xl'
                  >
                    <div className='grid grid-flow-col justify-between border-b-2 border-solid border-white p-2'>
                      <div>
                        <h4 className='text-xl'>{post.title}</h4>
                      </div>
                      <div>
                        <h5>{post.createdOn}</h5>
                      </div>
                    </div>

                    <div className='p-4'>
                      <p>Posted: {post.content}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
