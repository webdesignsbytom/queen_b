import React from 'react';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function BlogItem({ post }) {
  return (
    <article className='text-white outline outline-white outline-2 rounded-xl'>
      <div className='grid grid-flow-col justify-between border-b-2 border-solid border-white p-2'>
        <div>
          <h4 className='md:text-xl'>{post.title}</h4>
        </div>
        <div>
          <h5 className='text-sm'>{formatDate(post.createdOn)}</h5>
        </div>
      </div>

      <div className='p-4'>
        {/* Map through the content array to display each paragraph */}
        {post.content.map((paragraph, index) => (
          <p key={index} className='mb-2'>
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

export default BlogItem;
