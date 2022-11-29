import { Link } from 'gatsby'
import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='flex gap-4'>
        <Link to='https://www.facebook.com/search/top?q=duo%20milonga'><BsFacebook className='w-5 h-5'/></Link>
        <Link to='#'><BsInstagram className='w-5 h-5'/></Link>
    </div>
  )
}

export default SocialMedia
