(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{343:function(t,a,e){"use strict";e.r(a);var r=e(3),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"why"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[t._v("#")]),t._v(" Why")]),t._v(" "),e("p",[t._v("在软件系统中，有些对象像水一样具有多种状态，这些状态在某些情况下能够互相转换，而且对象在不同的状态下也将具有不同的行为。状态模式用于解决系统中复杂对象的状态转换以及不同状态下行为的封装问题。")]),t._v(" "),e("p",[e("strong",[t._v("状态模式（State Pattern）")]),t._v("：允许一个对象在其内部状态改变时改变它的行为，别名状态对象（Objects for states）。")]),t._v(" "),e("h2",{attrs:{id:"what"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[t._v("#")]),t._v(" What")]),t._v(" "),e("h3",{attrs:{id:"uml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml"}},[t._v("#")]),t._v(" UML")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://blogbucket-1252640517.cos.ap-beijing.myqcloud.com/img/state.png",alt:"状态模式"}})]),t._v(" "),e("h3",{attrs:{id:"角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#角色"}},[t._v("#")]),t._v(" 角色")]),t._v(" "),e("p",[e("strong",[t._v("Context（环境类）")]),t._v("：上下文类，是拥有多种状态的对象。在环境类中维护一个抽象状态类State的实例。")]),t._v(" "),e("p",[e("strong",[t._v("State（抽象状态类）")]),t._v("：声明了各种不同状态对应的方法，不同子类实现可能不同。")]),t._v(" "),e("p",[e("strong",[t._v("ConcreteState（具体状态类）")]),t._v("：实现一个与环境类的一个状态相关的行为，每一个具体状态类对应对应环境的一个具体状态，不同的具体状态类其行为不同。")]),t._v(" "),e("blockquote",[e("p",[t._v("在状态模式的使用过程中，一个对象的状态之间还可以进行相互转换，有两种实现方式。")]),t._v(" "),e("ul",[e("li",[t._v("统一由环境类负责状态之间的转换，此时环境类还充当了状态管理器（State Manager）角色")]),t._v(" "),e("li",[t._v("由具体状态类负责状态之间的转换")])])]),t._v(" "),e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("blockquote",[e("p",[t._v("Sunny软件公司欲为某银行开发一套信用卡业务系统，银行账户(Account)是该系统的核心类之一，通过分析，Sunny软件公司开发人员发现在该系统中，账户存在三种状态，且在不同状态下账户存在不同的行为，具体说明如下：")]),t._v(" "),e("ol",[e("li",[t._v("如果账户中余额大于等于0，则账户的状态为正常状态(Normal State)，此时用户既可以向该账户存款也可以从该账户取款；")]),t._v(" "),e("li",[t._v("如果账户中余额小于0，并且大于-2000，则账户的状态为透支状态(Overdraft State)，此时用户既可以向该账户存款也可以从该账户取款，但需要按天计算利息；")]),t._v(" "),e("li",[t._v("如果账户中余额等于-2000，那么账户的状态为受限状态(Restricted State)，此时用户只能向该账户存款，不能再从中取款，同时也将按天计算利息；")]),t._v(" "),e("li",[t._v("根据余额的不同，以上三种状态可发生相互转换。")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/ShengM/designmodedemo/tree/master/%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[t._v("示例链接")]),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"共享状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共享状态"}},[t._v("#")]),t._v(" 共享状态")]),t._v(" "),e("p",[t._v("如果希望在系统中实现多个环境对象共享一个或多个状态，可以将这些状态对象定义为环境类的静态成员")]),t._v(" "),e("h3",{attrs:{id:"适用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),e("ul",[e("li",[t._v("对象行为依赖于它的状态，状态改变将导致行为变化")]),t._v(" "),e("li",[t._v("在代码中包含大量与对象状态相关的条件语句，会导致代码可维护性和灵活性变差")])])])}),[],!1,null,null,null);a.default=s.exports}}]);