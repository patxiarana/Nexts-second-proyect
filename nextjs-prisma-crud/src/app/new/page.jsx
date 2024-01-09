

import React from 'react'

export default function NewPage() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='bg-slate-800 p-10 w-1/4' >
      <label htmlFor="title" className='font-bold text-sm'>titulo de tarea</label>
        <input type="text" id='title'
        className='border border-gray-400 p-2 mb-4 w-full' 
          placeholder='titulo' />
          <label htmlFor="description" className='font-bold text-sm'>Description</label>
        <textarea className='border border-gray-400 p-2 mb-4 w-full' rows="3"
        placeholder='contenido...' id='description'></textarea>
        <button type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Crear</button>
      </form>
    </div>
  )
}
