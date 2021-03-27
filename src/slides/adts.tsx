import SlideData from "@alvaroc1/present/components/SlideData";
import React from 'react'
import Base from '../parts/Base'
import Element from '@alvaroc1/layout/Layout'
import Snippet from '@alvaroc1/present/components/Snippet'
import dedent from 'dedent-js'
import Layout from "@alvaroc1/layout/Layout";

export default [
  SlideData.create({
    elements: {},
    render: elems => {
      return (
        <Base title='Algebraic Data Types'>
          
          <Layout.el centerX centerY>
            <h2 style={{marginBottom: 100}}>Modeling data using Products and Sums</h2>
          </Layout.el>
        </Base>
      )
    }
  }),
  SlideData.create({
    elements: {},
    render: elems => {
      return (
        <Base title='Types are Sets'>
          
          <Layout.el centerX centerY>
            <h2 style={{marginBottom: -10}}>Unit = ()</h2>
            <h3>1-element set</h3>

            <h2 style={{marginBottom: -10}}>Boolean = true | false</h2>
            <h3>2-element set</h3>

            <h2 style={{marginBottom: -10}}>Byte = -128, ..., 0, ..., 127</h2>
            <h3>256-element set</h3>

            <h2 style={{marginBottom: -10}}>Int = -2147483648, ..., 0, ..., 2147483648</h2>
            <h3>~4.3-billion-element set</h3>
          </Layout.el>
        </Base>
      )
    }
  }),
  SlideData.create({
    elements: {},
    render: elems => {
      return (
        <Base title='Products'>
          
          <Layout.el centerX centerY>
            <h2 style={{marginBottom: -10}}>BooleanPair = Boolean * Boolean</h2>
            <h3>4-element set</h3>

            <h2 style={{marginBottom: -10}}>ByteBoolean = Byte * Boolean</h2>
            <h3>512-element set</h3>

            <h2 style={{marginBottom: -10}}>Point = Int * Int</h2>
            <h3>~1.6e+19 element set</h3>
          </Layout.el>
        </Base>
      )
    }
  }),
  SlideData.create({
    elements: {},
    render: elems => {
      return (
        <Base title='Sums'>
          <h3 style={{textAlign: 'center', margin: 0}}>(or disjointed unions, or coproducts)</h3>
          <Layout.el centerX centerY>

            <h2 style={{marginBottom: -10}}>Gate = Open + Closed</h2>
            <h3>2-element set</h3>

            <h2 style={{marginBottom: -10}}>Hand = Rock + Paper + Scissors</h2>
            <h3>3-element set</h3>

            <h2 style={{marginBottom: -10}}>ByteOrBoolean = Byte + Boolean</h2>
            <h3>130-element set</h3>

            <h2 style={{marginBottom: -10}}>MaybeBoolean = Unit + Boolean</h2>
            <h3>3-element set</h3>
          </Layout.el>
        </Base>
      )
    }
  }),
  SlideData.create({
    elements: {},
    render: elems => {
      return (
        <Base title='In Scala Now'>
          <Layout.el centerX centerY>
            <Snippet code={dedent`
              type Point = (Int, Int)
              // or with labels
              case class Point (x: Int, y: Int)

              type User = (String, Int)
              // or with labels
              case class User (name: String, age: Int) 

              sealed trait Gate
              object Gate {
                case object Open extends Gate
                case object Closed extends Gate
              }

              sealed trait Hand
              object Hand {
                case object Rock extends Hand
                case object Paper extends Hand
                case object Scissors extends Hand
              }
            `} language='scala'/>
            </Layout.el>
        </Base>
      )
    }
  }),
  SlideData.create({
    elements: {},
    render: elems => {
      return (
        <Base title='In Scala 3'>
          <Layout.el centerX centerY>
            <Snippet code={dedent`
              case class Point (x: Int, y: Int)
              case class User (name: String, age: Int) 

              enum Gate {
                case Open
                case Closed
              }

              enum Hand {
                case Rock
                case Paper
                case Scissors
              }

              enum MyList [+T] {
                case Nil
                case Cons (head: T, tail: MyList[T])
              }
            `} language='scala'/>
            </Layout.el>
        </Base>
      )
    }
  }),
  SlideData.create({
    elements: {},
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
            <table>
              {samples.map(s => 
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
          </Layout.el>
        </Base>
      )
    }
  }),
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
