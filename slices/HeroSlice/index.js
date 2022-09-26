import React from 'react'
import { PrismicImage, PrismicRichText } from '@prismicio/react'
import RichText from '../../src/components/RichText'

const HeroSlice = ({ slice }) => (
  <section className='section bg-red-500'>
    <div className="container text-2xl">
      {slice.map((slice, index) => {
        return (
          <div key={index}>
            <p>{slice.}</p>
            </div>
        )
      })}
    </div>
  </section>
)

export default HeroSlice