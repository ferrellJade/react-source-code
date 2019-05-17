import React, {Component} from 'react';
export default class Home extends Component {
    render() {
        return (
            <div>
                <p>学习canvas</p>
            </div>
        );
    }
}

// es6

/* 这个home组建实际是js对象, 不是真的dom
*<Home/> 组建嵌套一个div结果是在<Home />组建props属性上增加了一个children属性
*如此增加多层嵌套都是在父组件的props属性上增加children
*
*/

// es5
/* es5 是通过React.createClass({})方法创建的组件
* 与es6是一样的
*/

// 那么形如HTML标签实际上却是对象的React组件是如何构成的呢？
// 因为我们的组件声明基于React和Component，所以首先我们打开React.js,可以看到如下代码:

