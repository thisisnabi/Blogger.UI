import Icon from 'font-icon/Icon'
import { Link } from 'react-router-dom'

const menuItems = [
  { label: 'Home', icon: 'House_01', to: '/' },
  { label: 'Tag', icon: 'Tag', to: '/' },
  { label: 'Archives', icon: 'Archive', to: '/' },
  { label: 'About', icon: 'Info', to: '/' },
  { label: 'subscribe', icon: 'House_Check', to: '/' },
]

const Menu = () => {
  return (
    <ul>
      {menuItems?.map((node, index) => (
        <li
          key={`menu-item-{${index}}`}
          className={
            'group/item h-[56px] hover:bg-primary hover:text-white rounded-4 px-5'
          }
        >
          <Link
            to={node.to}
            className={
              'flex items-center gap-x-3 w-full h-full text-gray1 group-hover/item:text-white'
            }
          >
            <Icon width={24} icon={node?.icon || ''} />
            <span className={'text-4'}>{node.label}</span>
            <span
              className={
                "invisible group-hover/item:visible after:content-['_>'] text-black ml-auto font-semibold group-hover/item:text-white"
              }
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
