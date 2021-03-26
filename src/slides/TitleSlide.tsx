import React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Base from '../parts/Base'
import 'typeface-montserrat'
import Layout from '@alvaroc1/layout/Layout'

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
      <Layout.el height='fill' width='fill'>
        <Layout.el centerX centerY>
          <h1 style={styles}>Algebras</h1>
        </Layout.el> 
      </Layout.el>
    </Base>
})