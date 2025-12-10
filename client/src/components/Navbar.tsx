import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { assets } from '../assets/assets.ts';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className='z-50 flex w-full items-center justify-between border-b border-slate-800 px-4 py-4 text-white backdrop-blur md:px-16 lg:px-24 xl:px-32'>
        <Link
          to='/'
          className='flex items-center gap-2 text-2xl'
        >
          <img
            src={assets.logo}
            alt='Website Builder Logo'
            className='h-5 sm:h-7'
          />
          Website Builder
        </Link>

        <div className='hidden items-center gap-8 transition duration-500 md:flex'>
          <Link to='/'>Home</Link>
          <Link to='/projects'>My Projects</Link>
          <Link to='/community'>Community</Link>
          <Link to='/pricing'>Pricing</Link>
        </div>

        <div className='flex items-center gap-3'>
          <button
            onClick={() => navigate('/auth/signin')}
            className='rounded bg-indigo-600 px-6 py-1.5 transition hover:bg-indigo-700 active:scale-95 max-sm:text-sm'
          >
            Get started
          </button>

          <button
            id='open-menu'
            className='transition active:scale-90 md:hidden'
            onClick={() => setMenuOpen(true)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M4 5h16' />
              <path d='M4 12h16' />
              <path d='M4 19h16' />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='fixed inset-0 z-100 flex flex-col items-center justify-center gap-8 bg-black/60 text-lg text-white backdrop-blur transition-transform duration-300 md:hidden'>
          <Link
            to='/'
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to='/projects'
            onClick={() => setMenuOpen(false)}
          >
            My Projects
          </Link>
          <Link
            to='/community'
            onClick={() => setMenuOpen(false)}
          >
            Community
          </Link>
          <Link
            to='/pricing'
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>

          <button
            className='flex aspect-square size-10 items-center justify-center rounded-md bg-slate-100 p-1 text-black transition hover:bg-slate-200 active:ring-3 active:ring-white'
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M18 6 6 18' />
              <path d='m6 6 12 12' />
            </svg>
          </button>
        </div>
      )}

      {/* BACKGROUND IMAGE */}
      <svg
        className='absolute inset-0 -z-10 size-full blur-[300px]'
        width='1440'
        height='900'
        viewBox='0 0 1440 900'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#a)'>
          <path
            d='M1279.12 651.482c-22 6.106-44 12.212-135.83 19.142-91.82 6.929-252.813 14.497-345.534 14.119s-112.296-8.932-132.029-20.074c-40.902-23.095-67.695-48.431-92.222-82.426-43.46-60.236-63.449-115.445-66.098-143.181-2.37-24.804 6.608-45.711 18.307-63.328 12.043-18.137 33.695-29.82 71.913-43.681 73.132-26.523 132.819-39.093 158.087-37.728 35.983 1.944 85.151 19.972 133.921 42.519 54.55 25.219 85.81 54.21 147.755 103.202 40.89 42.153 74.78 87.455 96.15 121.421 9.68 13.541 17 19.579 26.15 28.613'
            stroke='#8C00FF'
            strokeWidth='130'
            strokeLinecap='round'
          />
        </g>
        <g filter='url(#b)'>
          <path
            d='M984.952 466.869c-15.802 15.902-31.604 31.803-106.587 82.344-74.982 50.541-208.666 135.24-287.962 179.98-79.297 44.74-100.155 46.955-122.408 47.039-46.123.173-81.297-8.423-118.747-25.508-66.356-30.274-110.243-67.666-125.983-90.043-14.077-20.012-16.578-42.214-15.158-62.931 1.461-21.329 14.257-41.82 40.13-72.221 49.508-58.173 94.326-97.906 116.549-109.022 31.647-15.829 82.36-24.343 134.93-28.808 58.801-4.994 99.563 4.55 176.224 16.248 55.375 16.094 106.309 38.276 141.054 56.869 14.842 6.848 24.021 8.443 36.22 11.703'
            stroke='#3E0090'
            strokeWidth='130'
            strokeLinecap='round'
          />
        </g>
      </svg>
    </>
  );
};

export default Navbar;
