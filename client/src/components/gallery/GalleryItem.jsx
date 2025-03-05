import React from 'react';

function GalleryItem({ item }) {
  return (
    <div className="grid grid-rows-rev gap-4">
      <div
        className="grid image_container shadow-lg shadow-white/40 bg-black w-[300px] h-[400px] p-2 overflow-hidden items-center justify-center"
        style={{ borderColor: item.borderColor }}
      >
        <img
          src={item.img}
          alt="Queen Button"
          className="object-cover w-full h-full"
        />
      </div>
      <aside className='text-center'>
        <span className="text-yellow-600 text-center font-semibold">{item.name}</span>
      </aside>
    </div>
  );
}

export default GalleryItem;
