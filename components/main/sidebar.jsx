
import { menuItems } from '@/constant'
import Image from 'next/image'
import React from 'react'
import MenuLink from './menu-link'

const Sidebar = () => {
  return (
    <div>
        <div className='flex items-center space-x-3 mb-5'>
            <Image src="/images/logo.png" alt='Logo' width={50} height={50} />
            <p className='font-semibold'>KLD Grades Portal</p>
        </div>
      <ul className='space-y-4 flex flex-col'>
        {menuItems.map((item) => (
            <li key={item.title}>
                <span className='font-bold text-xs text-muted-foreground uppercase'>{item.title}</span>
                {item.list.map((menu) => (
                    <MenuLink item={menu} key={menu.title} />
                ))}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
