import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
    <form className='flex flex-col justify-center items-center h-2/2 w-2/2 bg-slate-500 '>
      <h1 className='text-slate-800 text-xl'>Login form</h1>
      <input className='p-5 m-5 border-slate-800 bg-blue-300 rounded-full'  type="text" placeholder='Email' />
      <input className='p-5 m-5 border-slate-800 bg-blue-300 rounded-full' type="password" placeholder='Password' />
      <button className='p-2 mx-5 my-2 text-black-700 text-2xl rounded-full bg-blue-400 w-1/2' type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default App
