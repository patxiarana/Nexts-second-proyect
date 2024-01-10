"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function NewPage({ params }) {
  const router = useRouter("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState()
  useEffect(() => {
      if(params.id) {
        fetch(`http://localhost:3000/api/task/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title)
          setDescription(data.description)
        })
      }
  }, [])
  const onSubmit = async (e) => {
    e.preventDefault()

if(params.id){
  const res = await fetch(`http://localhost:3000/api/task/${params.id}`, {
    method: 'PUT',
    body : JSON.stringify({title, description}),
      headers: {'Content-Type': 'application/json' }
  })
  const data = await res.json() 
  console.log(data)
} else {
    const res = await fetch('http://localhost:3000/api/task', {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
}
router.refresh()
router.push("/")

 } 

  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='bg-slate-800 p-10 w-1/4 ' onSubmit={onSubmit} >
        <label htmlFor="title" className='font-bold text-sm'>titulo de tarea</label>
        <input type="text" id='title'
          className='border border-gray-400 p-2 mb-4 w-full text-black'
          placeholder='titulo' onChange={(e) => setTitle(e.target.value)} value={title} />s
        <label htmlFor="description" className='font-bold text-sm'>Description</label>
        <textarea className='border border-gray-400 p-2 mb-4 w-full text-black' rows="3"
          placeholder='contenido...' id='description' onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
        <button type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Crear</button>
      </form>
    </div>
  )
}
