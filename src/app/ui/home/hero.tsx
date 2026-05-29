import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center h-[75vh] relative after:absolute after:inset-0 after:bg-[linear-gradient(90deg,#101B07_0%,transparent_100%)] after:content-[''] after:z-0 rounded-bl-[40px] rounded-br-[40px] overflow-hidden shadow-2xl md:rounded-bl-[80px] md:rounded-br-[80px]">
      <div className='relative z-1 max-w-360 px-4 mx-auto flex flex-col justify-between h-full'>
        <div className='flex flex-1 items-center'>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-white text-[32px] min-[480px]:text-[46px] md:text-[56px] lg:text-[64px] md:max-w-190 leading-[1.1] uppercase font-bold'>
                <span className='block'>Створюємо</span> красу, яка росте
              </h1>
              <p className='text-white/80 max-w-170'>
                Допомагаємо вирощувати красу в саду та врожай на городі. Від
                сезонної розсади до декоративних рослин.
              </p>
            </div>
            <div className='flex flex-col gap-4 md:flex-row md:gap-6 items-center md:items-start mt-5 md:mt-10'>
              <Button variant='default'>Перейти в каталог</Button>
              <Button variant='outline'>Зв'язатися з нами</Button>
            </div>
          </div>
        </div>
        <div className='border-t border-white/60 pt-6 mt-6 justify-self-end mb-8 shrink-0 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-360 px-4'>
          <div className='w-full h-35 backdrop-blur-[6px] rounded-[20px] flex justify-between px-6 py-8 '>
            <div className='flex gap-4 items-center'>
              <div className=''>
                <Image
                  src='/icons/hero/hero_icon_1.svg'
                  alt='Icon plant'
                  width={92}
                  height={92}
                />
              </div>
              <span className='text-white text-[18px]'>
                Екологічно чиста продукція
              </span>
            </div>
            <span className='w-px h-full bg-white/60'></span>
            <div className='flex gap-4 items-center'>
              <div className=''></div>
              <span className='text-white text-[18px]'>
                Здорові та міцні саджанці
              </span>
            </div>
            <span className='w-px h-full bg-white/60'></span>
            <div className='flex gap-4 items-center'>
              <div className=''></div>
              <span className='text-white text-[18px]'>
                Надійне пакування та доставка
              </span>
            </div>
            <span className='w-px h-full bg-white/60'></span>
            <div className='flex gap-4 items-center'>
              <div className=''></div>
              <span className='text-white text-[18px]'>
                Підтримка та поради від експертів
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
