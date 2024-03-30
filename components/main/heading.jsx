"use client";

import React from 'react';

const Heading= ({
    title,
}) => {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-md font-semibold'>{title}</p>
    </div>
  )
}

export default Heading
