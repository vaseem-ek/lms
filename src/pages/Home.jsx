import React from 'react'

function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-purple-800'>
        <div className='px-2 py-3'>
            <div className='bg-lime-50 p-3 md:px-10 font-semibold rounded-3xl'>
                <p>Current Course :</p>
                <p>Spoken English STARTER - Beginner</p>
               <div className='flex justify-center px-10'>
               <input type="text" className='bg-purple-700 mt-2 outline-0 w-full md:px-3 md:py-2 px-4 text-white py-1 placeholder:text-white placeholder:text-center rounded-full' placeholder='Browse Other Course' />
               </div>
            </div>
            <h1 className='text-2xl md:text-4xl text-white font-bold my-3 md:my-8 px-2'>
                Spoken English Started
            </h1>
            {/* subject list */}
            
        </div>
        
      
    </div>
  )
}

export default Home
