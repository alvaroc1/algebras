import SlideData from "@alvaroc1/present/components/SlideData";
import React from 'react'
import Base from '../parts/Base'
import Element from '@alvaroc1/layout/Layout'
import Snippet from '@alvaroc1/present/components/Snippet'
import dedent from 'dedent-js'
import Layout from "@alvaroc1/layout/Layout"
import Stepper from '@alvaroc1/present/components/Stepper'

const types = {
  basic: [
    ['0', 'Nothing'],
    ['1', 'Unit'],
    ['2', 'Boolean'],
  ],
  ops: [
    ['a * b', '(A, B)'],
    ['a + b', 'Either[A, B]'],
    ['2 = 1 + 1', dedent`
                    enum Bool {
                      case True
                      case False
                    }`],
  ],
  equations: [
    ['1 + a', dedent`
                    // categorical
                    type Option[A] = Either[Unit, A]

                    // canonical
                    enum Option[+A] {
                      case None
                      case Some(value: A)
                    }`],
    ['x = 1 + a * x', dedent`
                        // categorical
                        type List[A] = Either[Unit, (A, List[A])]

                        // canonical
                        enum List[+A] {
                          case Nil
                          case Cons(head: A, tail: List[A])
                        }`]
  ]
}

export default [
  SlideData.create({
    id: 'algebra-of-types',
    elements: {
      groups: Stepper.states(
        Object.keys(types) as (keyof typeof types)[],
        (v, active, past) =>             
        <table>
          {types[v].map(s => 
            <tr>
              <td>
                <div style={{marginTop: -12, marginBottom: -12}}>
                  <Snippet code={s[0]}/>
                </div>
              </td>
              <td>&rarr;</td>
              <td>
                <div style={{marginTop: -12, marginBottom: -12}}>
                  <Snippet language='scala' code={s[1]}/>
                </div>
              </td>
            </tr>
          )}
        </table>
      )
    },
    render: elems => {
      const samples = [
        ['0', 'Nothing'],
        ['1', 'Unit'],
        ['2', 'Boolean'],
        ['a * b', '(A, B)'],
        ['a + b', 'Either[A, B]'],
        ['2 = 1 + 1', dedent`
                        enum Bool {
                          case True
                          case False
                        }`],
        ['1 + a', 'Option[A]']
                      
      ]
      return (
        <Base title='Digression: Algebra of Types'>
          <Layout.el centerX centerY>
            {elems.groups}
          </Layout.el>
        </Base>
      )
    }
  }),
]
