import { ToastContainer } from 'react-toastify'

const Toast = () => {
  return (
    <ToastContainer
      autoClose={4000}
      position={'top-center'}
      toastClassName="text-sm shadow-xl w-[320px]"
      className={'!z-[1000001]'}
      toastStyle={{}}
    />
  )
}

export default Toast
