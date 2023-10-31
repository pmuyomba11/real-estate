import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-slate-300 shadow-md '>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to="/">
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Simon</span>
                        <span className='text-slate-700'>Estates</span>
                    </h1>
                </Link>
                <form className='bg-slate-100 p-2 rounded flex items-center'>
                    <input type="text" name="" id="" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-slate-400' />
                </form>
                <ul className='flex gap-4 items-center'>
                <Link to="/">
                    <li className='hidden sm:inline text-slate-500 hover:underline cursor-pointer'>Home</li>
                    </Link>
                    <Link to="/about">
                    <li className='hidden sm:inline text-slate-500 hover:underline cursor-pointer'>About</li>
                    </Link>
                    <Link to="/sign-in">
                    <li className='text-slate-500 hover:underline cursor-pointer'>Sign In</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}
