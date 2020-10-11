(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{354:function(t,a,r){"use strict";r.r(a);var e=r(3),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"why"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[t._v("#")]),t._v(" Why")]),t._v(" "),r("p",[t._v("如果需要依赖系统中已有的接口，同时保持依赖的这一部分可以扩展，此时可以采用适配器模式。当客户类调用适配器的方法时，在适配器的内部将调用适配者类的方法，这个过程对客户类是透明的，客户类并不直接访问适配者类。")]),t._v(" "),r("p",[r("strong",[t._v("适配器模式")]),t._v("：将一个接口转换成客户希望的另一个接口，使接口不兼容的那些类可以一起工作，别名为包装器（Wrapper）。可以实现为类结构型模式，也可以实现为对象结构型模式。")]),t._v(" "),r("h2",{attrs:{id:"what"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[t._v("#")]),t._v(" What")]),t._v(" "),r("h3",{attrs:{id:"uml-对象适配器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uml-对象适配器"}},[t._v("#")]),t._v(" UML—对象适配器")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://blogbucket-1252640517.cos.ap-beijing.myqcloud.com/img/adapter.png",alt:"对象适配器模式"}})]),t._v(" "),r("h3",{attrs:{id:"uml-类适配器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uml-类适配器"}},[t._v("#")]),t._v(" UML—类适配器")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://blogbucket-1252640517.cos.ap-beijing.myqcloud.com/img/adapter2.png",alt:"类适配器模式"}})]),t._v(" "),r("h3",{attrs:{id:"角色说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#角色说明"}},[t._v("#")]),t._v(" 角色说明")]),t._v(" "),r("p",[r("strong",[t._v("Target（目标抽象类）")]),t._v("：定义客户所需接口")]),t._v(" "),r("p",[r("strong",[t._v("Adapter（适配器类）")]),t._v("：作为一个转换器，对Adaptee和Target进行适配")]),t._v(" "),r("p",[r("strong",[t._v("Adaptee（适配者类）")]),t._v("：表示已经存在的接口")]),t._v(" "),r("h3",{attrs:{id:"缺省适配器模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺省适配器模式"}},[t._v("#")]),t._v(" 缺省适配器模式")]),t._v(" "),r("p",[t._v("当不需要实现一个接口提供的所有方法时，可以先提供一个抽象类提供默认实现（空方法），子类中实现需要用到的方法。")]),t._v(" "),r("h3",{attrs:{id:"示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),r("blockquote",[r("p",[t._v("Sunny软件公司OA系统需要提供一个加密模块，将用户机密信息（如口令、邮箱等）加密之后再存储在数据库中，系统已经定义好了数据库操作类。为了提高开发效率，现需要重用已有的加密算法，这些算法封装在一些由第三方提供的类中，有些甚至没有源代码。试使用适配器模式设计该加密模块，实现在不修改现有类的基础上重用第三方加密方法")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ShengM/designmodedemo/tree/master/%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("示例地址")]),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);