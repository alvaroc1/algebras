import React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Center from '@alvaroc1/present/layout/Center'
import Base from '../parts/Base'
import { ReactCalculator } from '../calculator'
import 'typeface-montserrat'
import Stepper from '@alvaroc1/present/components/Stepper'

let calculation = ''

export default SlideData.create({
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
        <Center>
          {elements.calculator}
        </Center>
    </Base>
})