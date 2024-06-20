import profile from 'assets/img/user.png'

const Profile = () => {
  return (
    <div
      className={'text-center flex flex-col items-center justify-center w-full'}
    >
      <img
        alt={'profile'}
        className={'rounded-full w-[100px] h-[100px]'}
        src={profile}
      />
      <div className={'mt-[14px] space-y-2'}>
        <h1 className={'font-semibold'}>Nabi Karampour</h1>
        <span className={'text-caption-gray text-3'}>
          Engineer | Blogger | Speaker | Tech YouTuber | .NET Enthusiast
        </span>
      </div>
    </div>
  )
}

export default Profile
