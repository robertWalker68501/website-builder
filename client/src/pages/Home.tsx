import { type FormEvent, useState } from 'react';

import { Loader2Icon } from 'lucide-react';
import { MdChevronRight } from 'react-icons/md';

const Home = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    console.log(input);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <section className='flex flex-col items-center px-4 pb-20 text-sm text-white'>
      <a
        href='/'
        className='mt-20 flex items-center gap-2 rounded-full border border-slate-700 p-1 pr-3 text-sm'
      >
        <span className='rounded-full bg-indigo-600 px-3 py-1 text-xs'>
          NEW
        </span>
        <p className='flex items-center gap-2'>
          <span>Try 30 days free trial option</span>
          <MdChevronRight />
        </p>
      </a>

      <h1 className='mt-4 max-w-3xl text-center text-[40px] leading-12 font-semibold md:text-6xl md:leading-[70px]'>
        Turn thoughts into websites instantly, with AI.
      </h1>

      <p className='mt-2 max-w-md text-center text-base'>
        Create, customize and publish websites faster than ever with our AI site
        builder.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className='mt-10 w-full max-w-2xl rounded-xl border border-indigo-600/70 bg-white/10 p-4 ring-indigo-500 transition-all focus-within:ring-2'
      >
        <textarea
          onChange={(e) => setInput(e.target.value)}
          className='w-full resize-none bg-transparent text-gray-300 outline-none'
          rows={4}
          placeholder='Describe your website in detail...'
          required
        />
        <button className='ml-auto flex items-center gap-2 rounded-md bg-linear-to-r from-[#CB52D4] to-indigo-600 px-4 py-2'>
          {!loading ? (
            'Create with AI'
          ) : (
            <>
              Creating{' '}
              <Loader2Icon className='size-4 animate-spin text-white' />
            </>
          )}
        </button>
      </form>

      <div className='mx-auto mt-16 flex flex-wrap items-center justify-center gap-16 md:gap-20'>
        <img
          className='max-w-28 md:max-w-32'
          src='https://saasly.prebuiltui.com/assets/companies-logo/framer.svg'
          alt='Framer logo'
        />
        <img
          className='max-w-28 md:max-w-32'
          src='https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg'
          alt='Huawei logo'
        />
        <img
          className='max-w-28 md:max-w-32'
          src='https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg'
          alt='Instagram logo'
        />
        <img
          className='max-w-28 md:max-w-32'
          src='https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg'
          alt='Microsoft logo'
        />
        <img
          className='max-w-28 md:max-w-32'
          src='https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg'
          alt='Walmart logo'
        />
      </div>
    </section>
  );
};

export default Home;
