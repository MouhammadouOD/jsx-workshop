import React from 'react'

function Hotel({imageUrl, title, description}) {
  return (
    <div className='min-w-[200px] max-w-[300px] h-[100px] border border-red-500 flex space-x-5'>
      <img src={imageUrl} className=''/>
      <div className=''>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Hotel
