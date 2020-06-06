import React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Center from '@alvaroc1/present/layout/Center'
import Base from '../parts/Base'
import 'typeface-montserrat'

const styles: React.CSSProperties = {
  boxSizing: 'border-box',
  fontFamily: 'Montserrat',
  fontSize: 70,
  padding: 30,
  textAlign: 'center'
}

export default SlideData.create({
  elements: {},
  render: elements => 
    <Base>
      <Center>
        <h1 style={styles}>Algebras</h1>
      </Center>
    </Base>
})