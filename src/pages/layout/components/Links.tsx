import Instagram from 'img/svg/instagram.svg'
import Linkedin from 'img/svg/linkedin.svg'
import Twitter from 'img/svg/twetter.svg'

const links = [
  {icon: <Linkedin/>, to: 'https://www.linkedin.com/in/thisisnabi/'},
  {icon: <Instagram/>, to: 'https://www.linkedin.com/in/thisisnabi/'},
  {icon: <Twitter/>, to: 'https://x.com/thisisnabi'},
]

const Links = () => {


  return <div className={'flex items-center justify-between w-full flex-wrap'}>
    {links?.map((link, index) => <div key={`link-${index}`}>

      <a href={link?.to}>
        {/*{link?.icon}*/}
        <Linkedin/>
      </a>
    </div>)
    }
  </div>

}

export default Links
