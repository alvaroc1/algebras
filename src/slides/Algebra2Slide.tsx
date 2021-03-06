import React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Base from '../parts/Base'
import 'typeface-montserrat'

export default SlideData.create({
  elements: {},
  render: elements => 
    <Base title='Algebra'>
      <div>
        <ul style={{fontSize: 30, margin: '0 60px'}}>
          <li style={{marginBottom: 24}}>
            <b>Concepts</b><br/>
            Represent domain-specific notions. They encapsulate and hide implementation details.
          </li>
          <li style={{marginBottom: 14}}>
            <b>Combinators</b><br/>
            A way to safely work within the algebra, unburdened by implementation details.
          </li>
        </ul>
      </div>
    </Base>
})