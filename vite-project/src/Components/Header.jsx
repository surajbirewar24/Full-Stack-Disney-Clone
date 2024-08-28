import React from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from "react-icons/hi2";
import {HiPlus,HiDotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
  const menu=[
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:'ORIGINAL',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },
    {
      name:'SERIES',
      icon:HiTv
    }
  ]
  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-8 items-center'>
      <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
      {menu.map((item)=>(
        <HeaderItem  name={item.name} Icon={item.icon}/>

      ))}
    </div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AGnMFzOLvv-du52tYrZXv32ChA-0yr0urA&s"
    className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header