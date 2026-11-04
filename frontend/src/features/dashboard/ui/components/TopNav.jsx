import { Bell, Menu, Search } from 'lucide-react'

const TopNav = () => {
  return (
    <div className='flex  justify-between items-center'>
        <div className='flex gap-4 w-[30%] rounded px-3 py-2 items-center bg-[var(--bg-surface)] border border-gray-700'>
            <Search size={23}/>
            <input type="text" className='outline-none w-full' placeholder='Search Workspace..' />
        </div>
        <div className='flex gap-5'>
            <Bell size={23}/>
            <Menu size={23}/>
        </div>
    </div>
  )
}

export default TopNav