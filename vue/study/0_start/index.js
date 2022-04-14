var app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요 Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        date: new Date(),
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        // seen: false
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'JavaScript 배우기' },
            { text: 'Vue 배우기' },
            { text: '무언가 멋진 것을 만들기' }
        ]
    }
})
// console에서 app4.todos.push({ text: 'New item' })하면 추가됨
// app4.todos.splice(1,1) index가 1인 2번째 리스트 삭제

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: '안녕하세요! Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '안녕하세요 Vue!'
    }
})

// todo-item 이름을 가진 컴포넌트를 정의합니다
Vue.component('todo-item', {
    // 이제 todo-item 컴포넌트는 "prop" 이라고 하는
    // 사용자 정의 속성 같은 것을 입력받을 수 있습니다.
    // 이 prop은 todo라는 이름으로 정의했습니다.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})

// // 1차시도
Vue.component('nav-navlist', {
    props: ['nav'],
    template: '<li data-nav="{{nav.id}}">{{ nav.text }}</li>'
})
// // 2차시도
// Vue.component('app-nav', {
//     props: ['nav'],
//     template: '<nav><ul></ul></nav>'
// })
// // 3차시도 https://leestrument.tistory.com/entry/Component-안에-Component-components-옵션
// import NavList from './NavList.vue'
// export default {
//     components : { NavList }
// }
var appLast = new Vue({
    el: '#app-last',
    data: {
        navList: [
            {id: 0, text: 'About Me'},
            {id: 1, text: 'Experience'},
            {id: 2, text: 'Education'},
        ]
    }
})