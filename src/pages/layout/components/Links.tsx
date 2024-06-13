import { Github, Linkedin, Twitter, Youtube } from 'assets/icons'

const links = [
  {
    icon: <Linkedin className={'text-gray1 w-5 h-5 shrink-0 '} />,
    to: 'https://www.linkedin.com/in/thisisnabi/',
  },
  {
    icon: <Twitter className={'text-gray1 w-5 h-5 shrink-0 '} />,
    to: 'https://x.com/thisisnabi',
  },
  {
    icon: <Youtube className={'text-gray1 w-6 h-6 shrink-0 '} />,
    to: 'https://www.youtube.com/@thisisnabi',
  },
  {
    icon: <Github className={'text-gray1 w-6 h-6 shrink-0 '} />,
    to: ' https://github.com/thisisnabi',
  },
]

const Links = () => {
  return (
    <div className={'flex items-center justify-between w-full flex-wrap px-3'}>
      {links?.map((link, index) => (
        <div key={`link-${index}`}>
          <a href={link?.to}>{link?.icon}</a>
        </div>
      ))}
    </div>
  )
}

export default Links
