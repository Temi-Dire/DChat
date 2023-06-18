const error = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center font-extrabold text-xl">
        <h1>ERROR</h1>
        <p>Oops😅... Looks you're lost</p>
        <p>This is a wrong page to visit... Head on back to the <span className="underline ">home page</span></p>
    </div>
  )
}

export default error