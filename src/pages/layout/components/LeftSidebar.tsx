import Menu from 'pages/layout/components/Menu'
import MyBooks from 'pages/layout/components/MyBooks'
import Profile from 'pages/layout/components/Profile'

const LeftSidebar = () => {
  return (
    <div className={'w-[264px] space-y-4'}>
      <div className={'bg-white space-y-6 p-6'}>
        <Profile />
        <Menu />
      </div>
      <MyBooks />
    </div>
  )
}

export default LeftSidebar
