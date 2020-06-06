import React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Center from '@alvaroc1/present/layout/Center'
import Base from '../parts/Base'
import 'typeface-montserrat'

export default SlideData.create({
  elements: {},
  render: elements => 
    <Base title='Algebra'>
      <div>
      <Center>
        <div style={{textAlign: 'center'}}>
        <h2><b>Symbols</b> and the <b>Rules</b> for manipulating them</h2>
        <img src='algebra.png' alt=''/>
        </div>
      </Center>
      </div>
    </Base>
})