import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' lg:block'>
      <div className='container'>
         <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
         <Link className='navbar__link relative' href='https://veli.store/en/'>
          HOME</Link>
          <Link className='navbar__link relative' href='https://veli.store/en/'>
          CATEGORIES</Link>
          <Link className='navbar__link relative' href='https://veli.store/en/'>
          MEN'S</Link>
          <Link className='navbar__link relative' href='https://veli.store/en/'>
          WOMEN'S</Link>
          <Link className='navbar__link relative' href='https://veli.store/en/'>
          JEWELRY</Link>
          <Link className='navbar__link relative' href='https://veli.store/en/'>
          PERFUME</Link>
          <Link className='navbar__link relative' href='https://veli.store/en/'>
          BLOG</Link>
          <Link className='navbar__link relative' href='https://veli.store/en/'>
          HOT OFFERS </Link>
         </div>
      </div>
    </div>
  )
}

export default Navbar
