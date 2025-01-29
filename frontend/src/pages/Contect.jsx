import React from 'react'
import Title from '../components/Title.jsx'
import { assets } from '../assets/frontend_assets/assets.js'
import NewsletterBox from '../components/NewsLetterBox.jsx'


const Contect = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row mb-28 gap-10'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555‑0132 <br /> Email: greatstackdev@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='text-center text-md text-gray-600 border border-black hover:bg-black hover:text-white transition-all duration-500 w-2/4 px-8 py-4'>Explore Jobs</button>
        </div>
      </div>    
      
    </div>
    
  )
}

export default Contect
