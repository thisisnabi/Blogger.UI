import profile from 'img/user.png'

const Profile = () => {
  return (
    <div className={'text-center flex flex-col items-center justify-center'}>
      <img
        alt={'profile'}
        className={'rounded-full w-[88px] h-[88px]'}
        src={profile}
      />
      <div className={'mt-[14px]'}>
        <span className={'text-gray1 text-3.5'}>Developer</span>
        <h1 className={'font-semibold'}>Nabi Karampoor</h1>
        <span className={'text-caption-gray text-3'}>
          Father, Husband, Engineer
        </span>
      </div>
    </div>
  )
}

export default Profile
