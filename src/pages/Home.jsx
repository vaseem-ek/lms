import React, { useContext } from 'react'
import Subject from '../component/Subject'
import { IoIosArrowDropleft } from 'react-icons/io'
import { appContext } from '../service/Context'

function Home() {

  const{allLms,searchFilter,setSearchFilter}=useContext(appContext)

  const filter=async(e)=>{
    setSearchFilter(allLms.filter(item=>item.title.toLowerCase().includes(e.target.value)))
  }
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-purple-800'>
     
      
        <div className='px-2 py-3'>
            <div className='bg-lime-50 p-3 md:px-10 font-semibold rounded-3xl'>
                <p>Current Course :</p>
                <p>Spoken English STARTER - Beginner</p>
               <div className='flex justify-center px-10'>
               <input type="text" onChange={filter} className='bg-purple-700 mt-2 outline-0 w-full md:px-3 md:py-2 px-4 text-white py-1 placeholder:text-white placeholder:text-center rounded-full placeholder:text-sm' placeholder='Browse Other Course' />
               </div>
            </div>
            <h1 className='text-2xl md:text-4xl text-white font-bold my-3 md:my-8 px-2'>
                Spoken English Started
            </h1>
            {/* subject list */}
            <div>
              {
                searchFilter.map((item,index)=>(

                  <Subject item={item} key={index} />
                ))
              }
             
            </div>
        </div>
        
      
    </div>
  )
}

export default Home
