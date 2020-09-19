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
    </Base>,
  notes: `
    You have some concepts, and some way to process the concepts, combine them, reduce them, etc.

    But you have to "ENTER" the algebra from the outside world. 

    And after you're done, you have to "EXIT" the algebra.
  `
})