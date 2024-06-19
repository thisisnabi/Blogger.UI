import Menu from 'pages/components/Menu'
import MyBooks from 'pages/components/MyBooks'
import PopularPosts from 'pages/components/PopularPosts'
import Profile from 'pages/components/Profile'

const LeftSidebar = () => {
  return (
    <div className={'w-[264px] space-y-4'}>
      <div className={'bg-white space-y-6 p-6 rounded-3'}>
        <Profile />
        <Menu />
      </div>
      <MyBooks />
      <PopularPosts />
    </div>
  )
}

export default LeftSidebar
