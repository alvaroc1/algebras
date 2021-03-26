import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import { Deck } from '@alvaroc1/present/components'
import Deck from '@alvaroc1/present/components/Deck'
//import * as serviceWorker from './serviceWorker'
import TitleSlide from './slides/TitleSlide'
import AlgebraDslSlide from './slides/AlgebraDslSlide'
import EverywhereSlide from './slides/EverywhereSlide'
import CalculatorSlide from './slides/CalculatorSlide'
import AlgebraSlide from './slides/AlgebraSlide'
import Algebra2Slide from './slides/Algebra2Slide'
import CpmSlide from './slides/CpmSlide'
import Algebra3Slide from './slides/Algebra3Slide'
import adtSlides from './slides/adts'
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'

const generateClassName = createGenerateClassName({
  productionPrefix: 'algebras',
})

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider generateClassName={generateClassName}>
    <Deck width={800} height={600} slides={[
      TitleSlide,
      AlgebraSlide,
      AlgebraDslSlide,
      Algebra2Slide,
      Algebra3Slide,
      CalculatorSlide,
      EverywhereSlide,
      //CpmSlide,
      ...adtSlides
    ]}/></StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
