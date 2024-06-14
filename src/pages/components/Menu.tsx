import {
  ArchiveIcon,
  CheckIcon,
  HomeIcon,
  InformationCircleIcon,
  TagIcon,
} from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const menuItems = [
  { label: 'Home', icon: <HomeIcon className={'w-4'} />, to: '/' },
  { label: 'Tag', icon: <TagIcon className={'w-4'} />, to: '/' },
  { label: 'Archives', icon: <ArchiveIcon className={'w-4'} />, to: '/' },
  {
    label: 'About',
    icon: <InformationCircleIcon className={'w-4'} />,
    to: '/',
  },
  { label: 'subscribe', icon: <CheckIcon className={'w-4'} />, to: '/' },
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
            <span>{node.icon}</span>
            <span className={'text-4'}>{node.label}</span>
            <span
              className={
                'invisible group-hover/item:visible text-black ml-auto font-semibold group-hover/item:text-white'
              }
            >
              <ChevronRightIcon className={'w-4'} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
