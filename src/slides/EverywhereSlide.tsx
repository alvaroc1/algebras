import React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Base from '../parts/Base'
import 'typeface-montserrat'
import Stepper from '@alvaroc1/present/components/Stepper'
import Snippet from '@alvaroc1/present/components/Snippet'
import Layout from '@alvaroc1/layout/Layout'

type Place = [string,string,string,string,string,string]

const places = {
  bank: [
    'Bank Transactions',
    'Money, Accounts, Balances',
    'Deposits: Dollar bills, coins, checks',
    'Transfers, bill pay, interest, loans, investments',
    'Withdrawals: Check identity, cash out',
    'lisp'
  ] as Place,
  employees: [
    'Human Resources',
    'Employees, Managers',
    'Hiring: Interviews, On-boarding',
    'Interactions, Commits, Deploys, Reviews',
    'Quitting/Dismissal: Exit interview, collect equipment, etc',
    'lisp'
  ] as Place,
  compiler: [
    'Compiler',
    'Abstract Syntax Tree',
    'Parsing source code',
    'Analyisis, optimization, etc',
    'Compilation to binary',
    'lisp',
  ] as Place,
  list: [
    'Scala List',
    'List[A]',
    'List.apply, Nil, .toList, List.fill, List.range',
    '++, .map, .flatMap, .partition',
    '.head, .foldLeft, .size, .sum',
    'scala'
  ] as Place,
  future: [
    'Future',
    'Future[A]',
    'Future.successful, Future.apply, Future.failed',
    '.map, .flatMap, .zip, Future.sequence',
    'Await.result',
    'scala'
  ],
  json: [
    'Argonaut JSON', 
    'DecodeJson[A]',
    'DecodeJson.apply, DecodeJson.derive',
    '.map, .flatMap, .widen',
    '.decode, .decodeOpt',
    'scala'
  ] as Place,
  finagle: [
    'Twitter Finagle',
    'Filter, Service',
    'Filter.mk, Service.mk, Filter.identity, Filter.choose',
    '.andThen, .andThenIf, .rescue',
    '.apply, .close',
    'scala'
  ]
} as const

export default SlideData.create({
  id: 'everywhere',
  elements: {
    places: Stepper.states<keyof typeof places>(Object.keys(places) as unknown as (keyof typeof places)[], (value, active) => {
      const p = places[value]
      return active && (
        <Layout.el>
          <Layout.el centerX centerY width={600}>
            <h1>Algebra: {p[0]}</h1>
            <h3 style={{marginBottom: -15, marginTop: 0}}>Concepts</h3>
            <Layout.column width='fill'>
              <Snippet code={p[1]} language={p[5]} />
            </Layout.column>

            <h3 style={{marginBottom: -15, marginTop: 0}}>Introduction Forms</h3>
            <Layout.column width='fill'>
              <Snippet code={p[2]} language={p[5]}/>
            </Layout.column>

            <h3 style={{marginBottom: -15, marginTop: 0}}>Combinators</h3>
            <Layout.column width='fill'>
              <Snippet code={p[3]} language={p[5]}/>
            </Layout.column>

            <h3 style={{marginBottom: -15, marginTop: 0}}>Elimination Forms</h3>
            <Layout.column width='fill'>
              <Snippet code={p[4]} language={p[5]}/>
            </Layout.column>
          </Layout.el>
        </Layout.el>
      )
    })
  },
  render: elements => 
    <Base title='Algebras are Everywhere'>
      {elements.places}
    </Base>,
  notes: `
    The idea behind algebras can be found EVERYWHERE. 
    Bank: 
  `
})
