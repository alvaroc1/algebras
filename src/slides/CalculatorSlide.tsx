import React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Base from '../parts/Base'
import { ReactCalculator } from '../calculator'
import 'typeface-montserrat'
import Stepper from '@alvaroc1/present/components/Stepper'
import Layout from '@alvaroc1/layout/Layout'

let calculation = ''

export default SlideData.create({
  id: 'calculator',
  elements: {
    calculator: Stepper.states(['introduction' as const, 'combinators' as const, 'elimination' as const, 'all' as const], (state, active) =>
      <div>
        <h2 style={{textAlign: 'center', margin: '10px 0'}}>
        {active ? 
          ({introduction: 'Introduction Forms', combinators: 'Combinators', elimination: 'Elimination Forms', all: '\u00a0'})[state] :
          'Calculator'
        }
        </h2>
        <ReactCalculator className={`highlight-${active ? state : 'none'}`} defaultValue={calculation} onChange={v => calculation = v}/>
      </div>
    )
  },
  render: elements => 
    <Base>
      <Layout.el centerX centerY>
        {elements.calculator}
      </Layout.el>
    </Base>,
  notes: `
    Introduction forms: Enter the limited world of arithmetic

    Combinators: Safely work within the confines of our algebra. We don't have to worry about whether the numbers were entered as 2 or 2.0 or 2.00.
    Non-important details are dropped.
  `
})