import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Blog data
import { blogPostArray } from '../../utils/BlogPosts';
import { ToggleContext } from '../../context/ToggleContext';
// Images
import WriterImage from '../../assets/images/general/writing_queen.jpg';
import Logo from '../../assets/images/logos/logo2.png';
import client from '../../api/client';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState(blogPostArray);
  const { setActiveNav, closeNavBar } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/kinky-blog');
    closeNavBar();

    client
      .get(`/blog/get-all-blog-articles`)
      .then((res) => {
        setBlogPosts(res.data.data.articles);
        console.log('ZZZZzz');
        console.log('XX', res.data.data.articles);
      })
      .catch((err) => {
        console.error('Unable to retrieve user data', err);
      });
  }, []);

  return (
    <div className='h-dvh w-full grid'>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <div className='grid md:w-1/2 px-4 md:px-0 mx-auto mt-8 mb-4'>
          <header className='h-fit'>
            <div className='text-center'>
              <div>
                <h1 className='text-4xl text-yellow-600 font-bold gothic_font_1'>
                  Blog of the goddess
                </h1>
              </div>
              <div>
                <h2>
                  See inside the twisted mind of this <strong>Goddess!</strong>
                </h2>
              </div>
              <div className='grid relative w-full my-4'>
                <img
                  src={WriterImage}
                  alt='Queens blog'
                  className='w-full rounded-sm'
                />
                <section className='absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
                  <div>
                    <img
                      src={Logo}
                      className='md:w-[50px] lg:w-[200px] 2xl:w-[300px]'
                      alt='Logo'
                    />
                  </div>
                </section>
              </div>
            </div>
          </header>

          {/* Main */}

          <main className='grid w-full h-full mt-4'>
            <section className='grid grid-flow-col mb-2 justify-end items-center'>
              <label
                htmlFor='order_by'
                className='text-white pr-2 font-semibold'
              >
                Order By:
              </label>
              <select className='outline outline-purple-900 outline-2 rounded-sm px-2'>
                <option value='latest'>Latest</option>
                <option value='oldest'>Oldest</option>
              </select>
            </section>
            <div className='grid grid-flow-row gap-6 mb-6'>
              {blogPosts.map((post, index) => {
                return (
                  <article
                    key={index}
                    className='text-white outline outline-white outline-2 rounded-xl'
                  >
                    <div className='grid grid-flow-col justify-between border-b-2 border-solid border-white p-2'>
                      <div>
                        <h4 className='md:text-xl'>{post.title}</h4>
                      </div>
                      <div>
                        <h5 className='text-sm'>
                          {formatDate(post.createdOn)}
                        </h5>
                      </div>
                    </div>

                    <div className='p-4'>
                      <p>{post.content}</p>
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
