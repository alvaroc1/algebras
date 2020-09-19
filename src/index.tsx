import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Deck from '@alvaroc1/present/components/Deck'
import TitleSlide from './slides/TitleSlide'
import AlgebraDslSlide from './slides/AlgebraDslSlide'
import EverywhereSlide from './slides/EverywhereSlide'
import CalculatorSlide from './slides/CalculatorSlide'
import AlgebraSlide from './slides/AlgebraSlide'
import Algebra2Slide from './slides/Algebra2Slide'
import CpmSlide from './slides/CpmSlide'
import Algebra3Slide from './slides/Algebra3Slide'

ReactDOM.render(
  <React.StrictMode>
    <Deck slides={[
      TitleSlide,
      AlgebraSlide,
      AlgebraDslSlide,
      Algebra2Slide,
      Algebra3Slide,
      AlgebraSlide,
      CalculatorSlide,
      EverywhereSlide,
      CpmSlide
    ]}/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
