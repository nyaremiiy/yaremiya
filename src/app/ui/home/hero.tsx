export default function Hero() {
  return (
    <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center h-[75vh] relative after:absolute after:inset-0 after:bg-black/40 after:content-[''] after:z-0 rounded-bl-[40px] rounded-br-[40px] overflow-hidden shadow-2xl md:rounded-bl-[80px] md:rounded-br-[80px]">
      <div className='relative z-1 max-w-360 mx-auto flex items-center justify-center h-full'>
        <h1 className='text-white md:text-[74px] text-[34px] font-bold md:max-w-3xl text-center'>Зелений затишок для вашого простору</h1>
      </div>
    </div>
  );
}
