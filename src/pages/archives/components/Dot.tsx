const Dot = () => {
  return (
    <div
      className={
        'w-4 h-4 lg:w-5 lg:h-5 bg-primary rounded-full p-[6px] shrink-0'
      }
    >
      <div
        style={{ backgroundColor: 'InfoBackground' }}
        className={'rounded-full w-full h-full'}
      />
    </div>
  )
}

export default Dot
