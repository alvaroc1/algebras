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
            <b>Introduction Forms</b>:
            A way to create some of the concepts. To enter the algebra.
          </li>
          <li style={{marginBottom: 14}}>
            <b>Elimination Forms</b><br/>
            Collapse the concepts. Exit the algebra.
          </li>
        </ul>
      </div>
    </Base>
})