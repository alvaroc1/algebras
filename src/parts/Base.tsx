import * as React from 'react'
import Slide from '@alvaroc1/present/components/Slide'
import Background from './Background'

interface Props {
  title?: React.ReactNode,
  children: React.ReactNode,
}

const h1Styles: React.CSSProperties = {
  fontSize: 50, 
  textAlign: 'center',
  color: '#fc6986'
}

const bodyStyles: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
}

export default (props: Props) => {
  const backgroundComp = 
    <Background/>

  return (
    <Slide background={backgroundComp}>
      {props.title &&
        <h1 style={h1Styles}>{props.title}</h1>
      }
      <div style={bodyStyles}>
        {props.children}
      </div>
    </Slide>
  )
}
