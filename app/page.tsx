import Image from 'next/image'
import Trending from './(home)/Trending'

export default function Home() {
  return (
    <main className='px-10 leading-7'>
      {/* Trending */}
      <Trending />
      
      <div className='md:flex gap-10 mb-5'>
        {/* Tech Post */}
        {/* Travel Post */}
        {/* Other Post */}

        <div className='hidden md:block'>
          {/* Subscirbe */}
        </div>
      </div>

      <div className='basis-1/4'>
        {/* Sidebar */}
      </div>
    </main>
  )
}
