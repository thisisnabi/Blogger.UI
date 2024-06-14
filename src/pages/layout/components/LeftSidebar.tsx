import Menu from 'pages/components/Menu'
import MyBooks from 'pages/components/MyBooks'
import Profile from 'pages/components/Profile'

const LeftSidebar = () => {
  return (
    <div className={'w-[264px] space-y-4'}>
      <div className={'bg-white space-y-6 p-6'}>
        <Profile/>
        <Menu/>
      </div>
      <MyBooks/>
    </div>
  )
}

export default LeftSidebar
