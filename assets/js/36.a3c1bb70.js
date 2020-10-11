(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{347:function(t,r,a){"use strict";a.r(r);var e=a(3),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[t._v("#")]),t._v(" Why")]),t._v(" "),a("p",[t._v("将聚合类中负责遍历数据的方法提取出来，封装到专门的类中，实现数据存储和数据遍历分离，无须暴露聚合类的内部属性即可对其进行操作，即迭代器模式的目的。")]),t._v(" "),a("p",[t._v("聚合对象的两个职责，一是存储数据，而是遍历数据。前者是聚合对象的基本职责，而后者是可以变化和分离的。")]),t._v(" "),a("p",[a("strong",[t._v("迭代器模式（Iterator Pattern）")]),t._v("：提供一种方法来访问聚合对象，而不用暴露这个对象的内部表示，其别名为游标（Cursor）。")]),t._v(" "),a("h2",{attrs:{id:"what"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[t._v("#")]),t._v(" What")]),t._v(" "),a("h3",{attrs:{id:"uml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uml"}},[t._v("#")]),t._v(" UML")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blogbucket-1252640517.cos.ap-beijing.myqcloud.com/img/iterator.png",alt:"迭代器模式"}})]),t._v(" "),a("blockquote",[a("p",[t._v("需要注意的是抽象迭代器接口设计很重要，一方面要充分满足各种遍历操作需求，尽量为各种遍历方法提供声明，另一方面不能包含太多方法，因为会给子类实现带来麻烦。可以使用抽象类来设计抽象迭代器，为每一个方法提供一个空的默认实现。")])]),t._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("blockquote",[a("p",[t._v("Sunny软件公司为某商场开发了一套销售管理系统，在对该系统进行分析和设计时，Sunny软件公司开发人员发现经常需要对系统中的商品数据、客户数据等进行遍历，为了复用这些遍历代码，需要设计一个抽象的数据集合类")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ShengM/designmodedemo/tree/master/%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("示例链接")]),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("为了能够让迭代器可以访问到聚合对象中的数据，还可以将迭代器类设计为聚合类的内部类。")]),t._v(" "),a("h3",{attrs:{id:"适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),a("ul",[a("li",[t._v("访问一个聚合对象的内容而无须暴露它的内部表示。隐藏其内部实现细节")]),t._v(" "),a("li",[t._v("需要为一个聚合对象提供多种遍历方式")]),t._v(" "),a("li",[t._v("为遍历不同的聚合结构提供统一的接口，在该接口的实现中为不同的聚合结构提供不同的遍历方式，而客户端可以一致性地操作该接口")])])])}),[],!1,null,null,null);r.default=s.exports}}]);