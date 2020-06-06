import React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Center from '@alvaroc1/present/layout/Center'
import Base from '../parts/Base'
import 'typeface-montserrat'

export default SlideData.create({
  elements: {},
  render: elements => 
    <Base title='Algebra ≈ DSL'>
      <div>
      <Center>
        <div style={{width: 500, fontSize: 35}}>
        <p><b>Algebra:</b><br/> Symbols and the rules for manipulating them.</p>
        <p><b>Domain Specific Language:</b><br/> Language specialized to a particular application domain.</p>

      </div>
      </Center>
      </div>
    </Base>
})
