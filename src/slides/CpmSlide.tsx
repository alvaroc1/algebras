import React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Snippet from '@alvaroc1/present/components/Snippet'
import Base from '../parts/Base'
import 'typeface-montserrat'

type Props = {

}

const Slide = (props: Props) => {
  const [code1,setCode1] = React.useState('')
  //const [code2,setCode2] = React.useState('')

  React.useEffect(() => {
    fetch('snippets/cpm1.sc').then(res => res.text()).then(code => setCode1(code))
    //fetch('snippets/cpm2.sc').then(res => res.text()).then(code => setCode2(code))
  })
  return (
    <Base title='CPM'>
      <Snippet code={code1} language='scala' fontSize={14}/>
    </Base>
  )
}

export default SlideData.create({
  elements: {},
  render: elements => <Slide />
})
