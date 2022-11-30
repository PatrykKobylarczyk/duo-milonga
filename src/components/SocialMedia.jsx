import { Link } from 'gatsby'
import React from 'react'
import {  BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='flex gap-4'>
        <Link to='https://www.facebook.com/search/top?q=duo%20milonga'><FaFacebookF className='w-4 h-4'/></Link>
        <Link to='#'><BsInstagram className='w-4 h-4'/></Link>
    </div>
  )
}

export default SocialMedia
