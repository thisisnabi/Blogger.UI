import {
  ArchiveIcon,
  CheckIcon,
  HomeIcon,
  InformationCircleIcon,
  TagIcon,
} from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import cx from 'classnames'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { label: 'Home', icon: <HomeIcon className={'w-4'} />, to: '/' },
  { label: 'Tag', icon: <TagIcon className={'w-4'} />, to: '/tags' },
  {
    label: 'Archives',
    icon: <ArchiveIcon className={'w-4'} />,
    to: '/archives',
  },
  {
    label: 'About',
    icon: <InformationCircleIcon className={'w-4'} />,
    to: '/about',
  },
  {
    label: 'subscribe',
    icon: <CheckIcon className={'w-4'} />,
    to: '/subscribe',
  },
]

const Menu = () => {
  const { pathname } = useLocation()

  return (
    <div>
      {menuItems?.map((node, index) => (
        <Link
          key={`menu-item-{${index}}`}
          to={node.to}
          className={cx(
            'flex items-center group/item !h-[56px] hover:text-primary rounded-4 px-5 gap-x-3 w-full h-full text-gray1 !text-[13px]',
            pathname === node.to ? 'bg-primary !text-white' : null
          )}
        >
          <span>{node.icon}</span>
          <h4>{node.label}</h4>
          <span
            className={cx(
              'invisible group-hover/item:visible text-black ml-auto font-semibold text-primary',
              pathname === node.to ? '!text-white' : null
            )}
          >
            <ChevronRightIcon className={'w-4'} />
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Menu
