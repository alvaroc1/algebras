!function(){var e=window.__fuse=window.__fuse||{},t=e.modules=e.modules||{};e.dt=function(e){return e&&e.__esModule?e:{default:e}},e.bundle=function(e,l){for(var a in e)t[a]=e[a];l&&l()},e.c={},e.r=function(l){var a=e.c[l];if(a)return a.m.exports;var n=t[l];if(!n)throw new Error("Module "+l+" was not found");return(a=e.c[l]={}).exports={},a.m={exports:a.exports},n(e.r,a.exports,a.m),a.m.exports}}(),__fuse.bundle({1:function(e,t,l){t.__esModule=!0;var a=e(2),n=__fuse.dt(a),u=e(3),r=__fuse.dt(u),o=e(5),d=__fuse.dt(o),s=e(6),c=__fuse.dt(s),i=e(7),m=__fuse.dt(i),f=e(8),_=__fuse.dt(f),h=e(9),E=__fuse.dt(h),g=e(10),b=__fuse.dt(g),p=e(11),B=__fuse.dt(p),y=e(12),v=__fuse.dt(y),N=e(13),C=__fuse.dt(N),w=e(14),x=__fuse.dt(w),I=e(15),S=e(16),A=__fuse.dt(S);const M=I.createGenerateClassName({productionPrefix:"algebras"});r.default.render(n.default.createElement(n.default.StrictMode,null,n.default.createElement(I.StylesProvider,{generateClassName:M},n.default.createElement(d.default,{width:800,height:600,slides:[c.default,b.default,m.default,B.default,v.default,E.default,_.default,...C.default,...x.default,...A.default]}))),document.getElementById("root"))},6:function(e,t,l){t.__esModule=!0;var a=e(2),n=__fuse.dt(a),u=e(24),r=__fuse.dt(u),o=e(25),d=__fuse.dt(o),s=e(22),c=__fuse.dt(s);const i={boxSizing:"border-box",fontFamily:"Montserrat",fontSize:70,padding:30,textAlign:"center"};t.default=r.default.create({elements:{},render:e=>n.default.createElement(d.default,null,n.default.createElement(c.default.el,{height:"fill",width:"fill"},n.default.createElement(c.default.el,{centerX:!0,centerY:!0},n.default.createElement("h1",{style:i},"Algebras"))))})},7:function(e,t,l){t.__esModule=!0;var a=e(2),n=__fuse.dt(a),u=e(24),r=__fuse.dt(u),o=e(22),d=__fuse.dt(o),s=e(25),c=__fuse.dt(s);t.default=r.default.create({id:"dsl",elements:{},render:e=>n.default.createElement(c.default,{title:"Algebra ≈ DSL"},n.default.createElement(d.default.el,null,n.default.createElement(d.default.el,{centerX:!0,centerY:!0,width:500},n.default.createElement("div",{style:{width:500,fontSize:35}},n.default.createElement("p",null,n.default.createElement("b",null,"Algebra:"),n.default.createElement("br",null)," Symbols and the rules for manipulating them."),n.default.createElement("p",null,n.default.createElement("b",null,"Domain Specific Language:"),n.default.createElement("br",null)," Language specialized to a particular application domain.")))))})},8:function(e,t,l){t.__esModule=!0;var a=e(2),n=__fuse.dt(a),u=e(24),r=__fuse.dt(u),o=e(25),d=__fuse.dt(o),s=e(27),c=__fuse.dt(s),i=e(28),m=__fuse.dt(i),f=e(22),_=__fuse.dt(f);const h={bank:["Bank Transactions","Money, Accounts, Balances","Deposits: Dollar bills, coins, checks","Transfers, bill pay, interest, loans, investments","Withdrawals: Check identity, cash out","lisp"],employees:["Human Resources","Employees, Managers","Hiring: Interviews, On-boarding","Interactions, Commits, Deploys, Reviews","Quitting/Dismissal: Exit interview, collect equipment, etc","lisp"],compiler:["Compiler","Abstract Syntax Tree","Parsing source code","Analyisis, optimization, etc","Compilation to binary","lisp"],list:["Scala List","List[A]","List.apply, Nil, .toList, List.fill, List.range","++, .map, .flatMap, .partition",".head, .foldLeft, .size, .sum","scala"],future:["Future","Future[A]","Future.successful, Future.apply, Future.failed",".map, .flatMap, .zip, Future.sequence","Await.result","scala"],json:["Argonaut JSON","DecodeJson[A]","DecodeJson.apply, DecodeJson.derive",".map, .flatMap, .widen",".decode, .decodeOpt","scala"],finagle:["Twitter Finagle","Filter, Service","Filter.mk, Service.mk, Filter.identity, Filter.choose",".andThen, .andThenIf, .rescue",".apply, .close","scala"]};t.default=r.default.create({id:"everywhere",elements:{places:c.default.states(Object.keys(h),(e,t)=>{const l=h[e];return t&&n.default.createElement(_.default.el,null,n.default.createElement(_.default.el,{centerX:!0,centerY:!0,width:600},n.default.createElement("h1",null,"Algebra: ",l[0]),n.default.createElement("h3",{style:{marginBottom:-15,marginTop:0}},"Concepts"),n.default.createElement(_.default.column,{width:"fill"},n.default.createElement(m.default,{code:l[1],language:l[5]})),n.default.createElement("h3",{style:{marginBottom:-15,marginTop:0}},"Introduction Forms"),n.default.createElement(_.default.column,{width:"fill"},n.default.createElement(m.default,{code:l[2],language:l[5]})),n.default.createElement("h3",{style:{marginBottom:-15,marginTop:0}},"Combinators"),n.default.createElement(_.default.column,{width:"fill"},n.default.createElement(m.default,{code:l[3],language:l[5]})),n.default.createElement("h3",{style:{marginBottom:-15,marginTop:0}},"Elimination Forms"),n.default.createElement(_.default.column,{width:"fill"},n.default.createElement(m.default,{code:l[4],language:l[5]}))))})},render:e=>n.default.createElement(d.default,{title:"Algebras are Everywhere"},e.places),notes:"\n    The idea behind algebras can be found EVERYWHERE. \n    Bank: \n  "})},9:function(e,t,l){t.__esModule=!0;var a=e(2),n=__fuse.dt(a),u=e(24),r=__fuse.dt(u),o=e(25),d=__fuse.dt(o),s=e(29),c=e(27),i=__fuse.dt(c),m=e(22),f=__fuse.dt(m);let _="";t.default=r.default.create({id:"calculator",elements:{calculator:i.default.states(["introduction","combinators","elimination","all"],(e,t)=>n.default.createElement("div",null,n.default.createElement("h2",{style:{textAlign:"center",margin:"10px 0"}},t?{introduction:"Introduction Forms",combinators:"Combinators",elimination:"Elimination Forms",all:" "}[e]:"Calculator"),n.default.createElement(s.ReactCalculator,{className:"highlight-"+(t?e:"none"),defaultValue:_,onChange:e=>_=e})))},render:e=>n.default.createElement(d.default,null,n.default.createElement(f.default.el,{centerX:!0,centerY:!0},e.calculator)),notes:"\n    Introduction forms: Enter the limited world of arithmetic\n\n    Combinators: Safely work within the confines of our algebra. We don't have to worry about whether the numbers were entered as 2 or 2.0 or 2.00.\n    Non-important details are dropped.\n  "})},10:function(e,t,l){t.__esModule=!0;var a=e(2),n=__fuse.dt(a),u=e(24),r=__fuse.dt(u),o=e(22),d=__fuse.dt(o),s=e(25),c=__fuse.dt(s),i=e(30),m=__fuse.dt(i);t.default=r.default.create({elements:{},render:e=>n.default.createElement(c.default,{title:"Algebra"},n.default.createElement(d.default.el,{centerX:!0,centerY:!0},n.default.createElement("div",{style:{textAlign:"center"}},n.default.createElement("h2",null,n.default.createElement("b",null,"Symbols")," and the ",n.default.createElement("b",null,"Rules")," for manipulating them"),n.default.createElement("img",{src:m.default,alt:""})))),notes:'\n    You have some concepts, and some way to process the concepts, combine them, reduce them, etc.\n\n    But you have to "ENTER" the algebra from the outside world. \n\n    And after you\'re done, you have to "EXIT" the algebra.\n  '})},11:function(e,t,l){t.__esModule=!0;var a=e(2),n=__fuse.dt(a),u=e(24),r=__fuse.dt(u),o=e(25),d=__fuse.dt(o);t.default=r.default.create({elements:{},render:e=>n.default.createElement(d.default,{title:"Algebra"},n.default.createElement("div",null,n.default.createElement("ul",{style:{fontSize:30,margin:"0 60px"}},n.default.createElement("li",{style:{marginBottom:24}},n.default.createElement("b",null,"Concepts"),n.default.createElement("br",null),"\n            Represent domain-specific notions. They encapsulate and hide implementation details.\n          "),n.default.createElement("li",{style:{marginBottom:14}},n.default.createElement("b",null,"Combinators"),n.default.createElement("br",null),"\n            A way to safely work within the algebra, unburdened by implementation details.\n          "))))})},12:function(e,t,l){t.__esModule=!0;var a=e(2),n=__fuse.dt(a),u=e(24),r=__fuse.dt(u),o=e(25),d=__fuse.dt(o);t.default=r.default.create({elements:{},render:e=>n.default.createElement(d.default,{title:"Algebra"},n.default.createElement("div",null,n.default.createElement("ul",{style:{fontSize:30,margin:"0 60px"}},n.default.createElement("li",{style:{marginBottom:24}},n.default.createElement("b",null,"Introduction Forms"),":\n            A way to create some of the concepts. To enter the algebra.\n          "),n.default.createElement("li",{style:{marginBottom:14}},n.default.createElement("b",null,"Elimination Forms"),n.default.createElement("br",null),"\n            Collapse the concepts. Exit the algebra.\n          "))))})},13:function(e,t,l){t.__esModule=!0;var a=e(24),n=__fuse.dt(a),u=e(2),r=__fuse.dt(u),o=e(25),d=__fuse.dt(o),s=e(28),c=__fuse.dt(s),i=e(31),m=__fuse.dt(i),f=e(22),_=__fuse.dt(f);t.default=[n.default.create({id:"adt",elements:{},render:e=>r.default.createElement(d.default,{title:"Algebraic Data Types"},r.default.createElement(_.default.el,{centerX:!0,centerY:!0},r.default.createElement("h2",{style:{marginBottom:100}},"Modeling data using Products and Sums")))}),n.default.create({id:"types-are-sets",elements:{},render:e=>r.default.createElement(d.default,{title:"Types are Sets"},r.default.createElement(_.default.el,{centerX:!0,centerY:!0},r.default.createElement("h2",{style:{marginBottom:-10}},"Unit = ()"),r.default.createElement("h3",null,"1-element set"),r.default.createElement("h2",{style:{marginBottom:-10}},"Boolean = true | false"),r.default.createElement("h3",null,"2-element set"),r.default.createElement("h2",{style:{marginBottom:-10}},"Byte = -128, ..., 0, ..., 127"),r.default.createElement("h3",null,"256-element set"),r.default.createElement("h2",{style:{marginBottom:-10}},"Int = -2147483648, ..., 0, ..., 2147483648"),r.default.createElement("h3",null,"~4.3-billion-element set")))}),n.default.create({id:"products",elements:{},render:e=>r.default.createElement(d.default,{title:"Products"},r.default.createElement(_.default.el,{centerX:!0,centerY:!0},r.default.createElement("h2",{style:{marginBottom:-10}},"BooleanPair = Boolean * Boolean"),r.default.createElement("h3",null,"4-element set"),r.default.createElement("h2",{style:{marginBottom:-10}},"ByteBoolean = Byte * Boolean"),r.default.createElement("h3",null,"512-element set"),r.default.createElement("h2",{style:{marginBottom:-10}},"Point = Int * Int"),r.default.createElement("h3",null,"~1.6e+19 element set")))}),n.default.create({id:"sums",elements:{},render:e=>r.default.createElement(d.default,{title:"Sums"},r.default.createElement("h3",{style:{textAlign:"center",margin:0}},"(or disjointed unions, or coproducts)"),r.default.createElement(_.default.el,{centerX:!0,centerY:!0},r.default.createElement("h2",{style:{marginBottom:-10}},"Gate = Open + Closed"),r.default.createElement("h3",null,"2-element set"),r.default.createElement("h2",{style:{marginBottom:-10}},"Hand = Rock + Paper + Scissors"),r.default.createElement("h3",null,"3-element set"),r.default.createElement("h2",{style:{marginBottom:-10}},"ByteOrBoolean = Byte + Boolean"),r.default.createElement("h3",null,"130-element set"),r.default.createElement("h2",{style:{marginBottom:-10}},"MaybeBoolean = Unit + Boolean"),r.default.createElement("h3",null,"3-element set")))}),n.default.create({elements:{},render:e=>r.default.createElement(d.default,{title:"In Scala Now"},r.default.createElement(_.default.el,{centerX:!0,centerY:!0},r.default.createElement(c.default,{code:m.default`
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
            `,language:"scala"})))}),n.default.create({elements:{},render:e=>r.default.createElement(d.default,{title:"In Scala 3"},r.default.createElement(_.default.el,{centerX:!0,centerY:!0},r.default.createElement(c.default,{code:m.default`
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
            `,language:"scala"})))})]},14:function(e,t,l){t.__esModule=!0;var a=e(24),n=__fuse.dt(a),u=e(2),r=__fuse.dt(u),o=e(25),d=__fuse.dt(o),s=e(28),c=__fuse.dt(s),i=e(31),m=__fuse.dt(i),f=e(22),_=__fuse.dt(f),h=e(27),E=__fuse.dt(h);const g={basic:[["0","Nothing"],["1","Unit"],["2","Boolean"]],ops:[["a * b","(A, B)"],["a + b","Either[A, B]"],["2 = 1 + 1",m.default`
                    enum Bool {
                      case True
                      case False
                    }`]],equations:[["1 + a","Option[A]"],["x = 1 + a * x",m.default`enum List[A] {
                              case Nil
                              case Cons (head: A, tail: List[A])
                            }`]]};t.default=[n.default.create({id:"algebra-of-types",elements:{groups:E.default.states(Object.keys(g),(e,t,l)=>r.default.createElement("table",null,g[e].map(e=>r.default.createElement("tr",null,r.default.createElement("td",null,r.default.createElement("div",{style:{marginTop:-12,marginBottom:-12}},r.default.createElement(c.default,{code:e[0]}))),r.default.createElement("td",null,"→"),r.default.createElement("td",null,r.default.createElement("div",{style:{marginTop:-12,marginBottom:-12}},r.default.createElement(c.default,{language:"scala",code:e[1]})))))))},render:e=>{m.default`
                        enum Bool {
                          case True
                          case False
                        }`;return r.default.createElement(d.default,{title:"Digression: Algebra of Types"},r.default.createElement(_.default.el,{centerX:!0,centerY:!0},e.groups))}})]},16:function(e,t,l){t.__esModule=!0;var a=e(24),n=__fuse.dt(a),u=e(2),r=__fuse.dt(u),o=e(25),d=__fuse.dt(o);t.default=[n.default.create({elements:{},render:e=>r.default.createElement(d.default,{title:"Benefits"},r.default.createElement("h1",{style:{textAlign:"center",marginTop:100}},"Cleanly separates data ",r.default.createElement("br",null),"from implementation ",r.default.createElement("br",null),"from syntax"))}),n.default.create({elements:{},render:e=>r.default.createElement(d.default,{title:"Drawbacks"},r.default.createElement("h1",{style:{textAlign:"center",marginTop:100}},"Indirection"))})]},25:function(e,t,l){t.__esModule=!0;var a=e(2),n=e(93),u=__fuse.dt(n),r=e(94),o=__fuse.dt(r);const d={fontSize:50,textAlign:"center",color:"#fc6986"},s={flex:1,display:"flex",flexDirection:"column"};t.default=e=>{const t=a.createElement(o.default,null);return a.createElement(u.default,{background:t},e.title&&a.createElement("h1",{style:d},e.title),a.createElement("div",{style:s},e.children))}},29:function(e,t,l){t.__esModule=!0;var a=e(2),n=__fuse.dt(a),u=e(97),r=e(98);t.Calculate=e=>{try{return u.evaluate(e)}catch{return NaN}},t.ReactCalculator=function(e){const[l,a]=n.default.useState([e.defaultValue||""]),[u,o]=n.default.useState(!1),d=n.default.useRef(null),s=l[l.length-1],c=e.Buttons||r.BasicButtons;let i="ReactCalculator";e.className&&(i+=" "+e.className);const m=n.default.useCallback(t=>{const{onChange:l}=e;l&&l(t),a(e=>{const l=[...e];return l.push(t),l}),o(!1)},[e]),f=n.default.useCallback(e=>{a(t=>{const l=[...t];return l[l.length-1]=e,l}),o(!1)},[]),_=n.default.useCallback(e=>{a(t=>{const l=[...t];return l[l.length-1]+=e,l}),o(!1)},[]),h=n.default.useCallback(e=>{if(13===e.keyCode){e.preventDefault();const l=t.Calculate(s);isNaN(l)?f("Invalid operation"):m(l.toString())}return!1},[s,m,f]),E=n.default.useCallback(e=>{f(e.target.value)},[f]),g=n.default.useMemo(()=>({Calculations:l,SetCalculations:a,PushCalculation:m,CurrentValue:s,ReplaceCurrentValue:f,PushCurrentValue:_}),[l,s,m,_,f]);let b=0;for(let e of c)b<e.length&&(b=e.length);const p=n.default.useMemo(()=>c.map(e=>e.map(t=>{let l=1;return t===e[e.length-1]&&(l=b-e.length+1),n.default.createElement("button",{type:"button",key:t.value||t.className,className:t.className,title:t.title,tabIndex:-1,style:{gridColumnStart:"auto",gridColumnEnd:"span "+l},onClick:()=>{t.onClick&&t.onClick(g),t.value&&_(t.value)}},t.children)})),[c,g,_,b]);return n.default.createElement("div",{ref:d,id:e.id,className:i,"data-haschanged":u},n.default.createElement("input",{readOnly:!0,className:"InputPane",value:s.replace("*","×").replace("/","÷"),onKeyDown:h,onChange:E}),n.default.createElement("div",{className:"ButtonPane",style:{gridTemplateColumns:`repeat(${b}, 1fr)`}},p))}},30:function(e,t,l){l.exports="resources/043b2494c.png"},94:function(e,t,l){t.__esModule=!0;var a=e(2);const n={position:"absolute",top:-350,height:1250,width:900,boxShadow:"0 0 100px rgba(0,0,0,.2)",background:"rgb(30, 40, 82)"};t.default=()=>a.createElement("div",{style:{position:"relative",height:"100%",background:"rgb(30, 40, 82)",overflow:"hidden"}},a.createElement("div",{style:{...n,right:380,borderRight:"140px solid rgb(35, 45, 87)",transform:"rotate(25deg)"}}),a.createElement("div",{style:{...n,left:380,borderLeft:"160px solid rgb(35, 45, 87)",transform:"rotate(-25deg)"}}))},98:function(e,t,l){t.__esModule=!0;var a=e(29);t.Number0Button={className:"Number0Button Introduction",children:"0",value:"0"},t.Number1Button={className:"Number1Button Introduction",children:"1",value:"1"},t.Number2Button={className:"Number2Button Introduction",children:"2",value:"2"},t.Number3Button={className:"Number3Button Introduction",children:"3",value:"3"},t.Number4Button={className:"Number4Button Introduction",children:"4",value:"4"},t.Number5Button={className:"Number5Button Introduction",children:"5",value:"5"},t.Number6Button={className:"Number6Button Introduction",children:"6",value:"6"},t.Number7Button={className:"Number7Button Introduction",children:"7",value:"7"},t.Number8Button={className:"Number8Button Introduction",children:"8",value:"8"},t.Number9Button={className:"Number9Button Introduction",children:"9",value:"9"},t.DecimalButton={className:"DecimalButton Introduction",children:".",value:"."},t.DivisionButton={className:"DivisionButton Combinator",children:"÷",value:" / "},t.MultiplicationButton={className:"MultiplicationButton Combinator",children:"×",value:" * "},t.SubtractionButton={className:"SubtractionButton Combinator",children:"-",value:" - "},t.AdditionButton={className:"AdditionButton Combinator",children:"+",value:" + "},t.OpenParenthesisButton={className:"OpenParenthesisButton Introduction",children:"(",value:"("},t.ClosedParenthesisButton={className:"ClosedParenthesisButton Introduction",children:")",value:")"},t.ClearButton={className:"ClearButton Elimination",children:"C",onClick:e=>{e.SetCalculations([""])}},t.EqualsButton={className:"EqualsButton Elimination",children:"=",onClick:e=>{const t=a.Calculate(e.CurrentValue);isNaN(t)?e.ReplaceCurrentValue("Invalid operation"):e.PushCalculation(t.toString())}},t.BasicButtons=[[t.Number7Button,t.Number8Button,t.Number9Button,t.OpenParenthesisButton,t.ClosedParenthesisButton],[t.Number4Button,t.Number5Button,t.Number6Button,t.MultiplicationButton,t.DivisionButton],[t.Number1Button,t.Number2Button,t.Number3Button,t.AdditionButton,t.SubtractionButton],[t.ClearButton,t.Number0Button,t.DecimalButton,t.EqualsButton]]}});
//# sourceMappingURL=app.06f54924f.js.map