import SearchIcon from '@mui/icons-material/Search';
const home = () => {
  return (
    <div className='h-screen bg-[#ece0f7] pt-2 flex flex-col'>
        <nav className='flex justify-center'>
            <div className='w-4/5 bg-white flex justify-between px-6 py-3 rounded-3xl'>
                <input className='w-full outline-none' type="text" />
                <SearchIcon className='ml-4' />
            </div>
        </nav>
        <div>
            <h1 className='mt-8 mb-4 ml-4 font-bold text-xl'>
                CHATS
            </h1>
        </div>
        <div className='w-full h-[200px] bg-white rounded-t-3xl flex-auto'>

        </div>
    </div>
  )
}

export default home