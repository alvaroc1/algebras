import React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Base from '../parts/Base'
import 'typeface-montserrat'

export default SlideData.create({
  elements: {},
  render: elements => 
    <Base title='Algebra'>
      <div>
        <ul style={{fontSize: 30, margin: '0 30px'}}>
          <li style={{marginBottom: 14}}>
            <b>Concepts</b>:
            Represent domain-specific concepts. They encapsulate and hide implementation details.
          </li>
          <li style={{marginBottom: 14}}>
            <b>Introduction Forms</b>:
            Allow us to create the domain specific context. To enter the algebra.
          </li>
          <li style={{marginBottom: 14}}>
            <b>Combinators</b>:
            Allow us to work within the algebra, unburdened by implementation details.
          </li>
          <li style={{marginBottom: 14}}>
            <b>Elimination Forms</b><br/>
            Collapse the concepts. Exit the algebra.
          </li>
        </ul>
      </div>
    </Base>
})