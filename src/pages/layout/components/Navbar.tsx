import { MenuIcon, SearchIcon } from '@heroicons/react/outline'
import Drawer from 'components/Drawer'
import Links from 'pages/components/Links'
import Menu from 'pages/components/Menu'
import Profile from 'pages/components/Profile'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <div
        className={
          'w-full overflow-x-hidden h-navbar-height bg-white flex items-center justify-between fixed top-0 z-[1000] shadow-lg px-6'
        }
      >
        <MenuIcon
          className={'w-6 cursor-pointer'}
          onClick={() => setOpen(!open)}
        />
        <h5 className={'font-bold'}>Nabi Karampour</h5>
        <SearchIcon className={'stroke-2 w-6'} />
      </div>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className={'w-[250px]'}
      >
        <div className={'pt-5 w-full flex flex-col justify-between flex-1'}>
          <div className={'h-full w-full space-y-5'}>
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
