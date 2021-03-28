import SlideData from "@alvaroc1/present/components/SlideData";
import React from 'react'
import Base from '../parts/Base'

export default [
  SlideData.create({
    elements: {},
    render: elems => {
      return (
        <Base title='Benefits'>
            <h1 style={{textAlign: 'center', marginTop: 100}}>Cleanly separates data <br/>from implementation <br/>from syntax</h1> 
        </Base>
      )
    }
  }),
  SlideData.create({
    elements: {},
    render: elems => {
      return (
        <Base title='Drawbacks'>
            <h1 style={{textAlign: 'center', marginTop: 100}}>Indirection</h1>
        </Base>
      )
    }
  }),
]
