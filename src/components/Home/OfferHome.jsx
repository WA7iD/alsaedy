import React from 'react'
import { offers } from '../../constant'
import OfferCard from '../cards/OfferCard'

function OfferHome() {
  return (
      <div>
          {offers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
          ))}
    </div>
  )
}

export default OfferHome