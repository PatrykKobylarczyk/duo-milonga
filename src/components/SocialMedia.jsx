import React from 'react'
import {  BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='flex gap-4'>
        <a to='https://www.facebook.com/search/top?q=duo%20milonga'><FaFacebookF className='w-4 h-4'/></a>
        <a to='https://www.facebook.com/search/top?q=duo%20milonga'><BsInstagram className='w-4 h-4'/></a>
    </div>
  )
}

export default SocialMedia
