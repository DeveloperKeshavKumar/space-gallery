import React from 'react';

function ImageContainer({ data }) {
  const imageUrl = data.links[0].href;
  const title = data.data[0].title;

  return (
    <div className='w-full h-[80%]'>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-md mb-2" />
      <h1 className=' text-gray-300'>{title}</h1>
    </div>
  );
}

export default ImageContainer;
