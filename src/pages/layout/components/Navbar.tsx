import { MenuIcon, SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'

import Drawer from '../../../components/Drawer'
import Links from '../../components/Links'
import Menu from '../../components/Menu'
import Profile from '../../components/Profile'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <div
        className={
          'w-full h-navbar-height bg-white flex items-center justify-between fixed top-0 z-[1000] shadow-lg px-6'
        }
      >
        <MenuIcon
          className={'w-6 cursor-pointer'}
          onClick={() => setOpen(!open)}
        />
        <h5 className={'font-bold'}>Nabi Karampoor</h5>
        <SearchIcon className={'stroke-2 w-6'} />
      </div>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className={'w-[250px]'}
      >
        <div className={'pt-5 w-full flex flex-col justify-between flex-1 '}>
          <div className={'h-full w-full'}>
            <Profile />
            <Menu />
          </div>
          <Links />
        </div>
      </Drawer>
    </>
  )
}

export default Navbar
