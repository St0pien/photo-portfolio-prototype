export const Home = () => {
  return (
    <div className='h-screen relative'>
      <div className='p-10 pt-16'>
        <h1 className='text-7xl text-lime-400 tracking-widest font-semibold font-heading'>
          Test Name
        </h1>
        <p className='my-6 text-3xl text-white font-heading'>
          artystka wizualna
        </p>
      </div>
      <div className='absolute bottom-16 w-screen h-32 flex flex-col items-center justify-between'>
        <a
          className='bg-[#000132] text-lime-400 w-60 py-2 rounded-2xl text-xl font-semibold flex items-center'
          href='https://www.instagram.com/budynnnn/'
        >
          <i className='lni lni-instagram text-4xl top-0 left-0 w-10 mx-6'></i>
          <span>@instagram</span>
        </a>
        <a
          className='bg-[#000132] text-lime-400 w-60 py-2 rounded-2xl text-xl font-semibold flex items-center'
          href='https://www.instagram.com/budynnnn/'
        >
          <i className='lni lni-envelope text-4xl top-0 left-0 w-10 mx-6'></i>
          <span className='text-sm'>mail@gmail.com</span>
        </a>
      </div>
    </div>
  );
};
