import { PrismicRichText } from '@prismicio/react'
import React from 'react'

export default function RichText({ field, className}) {
  return (
    field && (
      <div className={className}>
        <PrismicRichText field={field} />
      </div>
    )
  )
}
