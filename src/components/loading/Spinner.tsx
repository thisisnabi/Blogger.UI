import cx from 'classnames'

const Spinner = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cx(
        'inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-purple-200 align-[-0.125em] text-purple-400 motion-reduce:animate-[spin_5s_linear_infinite]',
        className
      )}
    />
  )
}

export default Spinner
