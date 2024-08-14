import cx from 'classnames'
import React from 'react'

type DrawerProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

const Drawer = (props: DrawerProps) => {
  const { onClose, open, children, className } = props

  return (
    <div
      id={`dialog-`}
      className="relative z-10 pt-navbar-height"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
    >
      <div className={cx({ 'fixed inset-0 overflow-hidden': open })}>
        <div
          className="absolute inset-0 overflow-hidden bg-black bg-opacity-60"
          onClick={onClose}
        >
          <div
            className={cx(
              'pointer-events-none fixed max-w-full',
              'inset-y-0 left-0'
            )}
          >
            <div
              className={cx(
                'pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500',
                open ? 'translate-x-0' : '-translate-x-full'
              )}
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
              }}
            >
              <div
                className={cx(
                  'flex flex-col h-full overflow-y-scroll bg-white px-6 py-navbar-height shadow-xl bg-white rounded-lg ',
                  className
                )}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
