

const Wrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="max-w-screen-2.5xl container">
      {children}
    </div>
  )
}

export default Wrapper;