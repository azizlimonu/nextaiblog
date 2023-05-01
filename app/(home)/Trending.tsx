import React from 'react'
import TrendingCard from './TrendingCard'

type Props = {}

const Trending = (props: Props) => {
  return (
    <section className='pt-3 pb-10'>
      <div className='flex items-center gap-3'>
        <div className='bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold'>
          Trending
        </div>

        <p className='text-sm'>
          unc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
          nulla dolor diam turpis.
        </p>
      </div>

      <div className='sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3'>
        <TrendingCard
          className="col-span-2 row-span-2 bg-wh-500"
        />
        <TrendingCard
          className="col-span-2 row-span-1 bg-wh-500"
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
        />
      </div>

      <p className="text-sm">
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
      </p>
    </section>
  )
}

export default Trending