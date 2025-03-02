import React, { useContext } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { appContext } from '../service/Context'
import { Link } from 'react-router-dom'

function Subject({item}) {

  return (
    <div>
      <Link to={`/chapter/${item.id}`} className='flex  justify-between items-center cursor-pointer hover:bg-green-300 rounded-full py-2 px-1 gap-2 md:px-24'>
        <div className='h-10 w-10 bg-amber-100 font-bold md:h-20 md:w-20 md:border-8 md:text-2xl rounded-full border-4 border-purple-500 p-1 flex justify-center items-center'>{item.id}</div>
        <div>
            <p className='md:font-bold text-sm md:text-xl text-white '>{item.title}</p>
            {/* <p  className='text-orange-400 text-xs'>6 lessons</p> */}
        </div>
        <div>
        <IoIosArrowForward size={20} />
        </div>
      </Link>
    </div>
  )
}

export default Subject
