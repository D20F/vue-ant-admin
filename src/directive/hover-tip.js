import Vue from 'vue'

// 触碰 显示提示
Vue.directive('hover-tip', {
    bind: function (el, binding, vnode) {
        let data
        if(binding.value){

            data = binding.value[0];
        }else{
            data = '2121';

        }

        let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let idvalue = '';
        let n = 4;//这个值可以改变的，对应的生成多少个字母，根据自己需求所改
        for (var i = 0; i < n; i++) { idvalue += arr[Math.floor(Math.random() * 26)]; }



        let nod = document.createElement("style");
        let str = `
                    .hover-tips-${idvalue}{}
                    .hover-tips-${idvalue}:hover{
                        background-color: #e0e0e0;
                        border-radius: 50%;
                    }
                    .hover-tips-${idvalue}:after{
                        position: absolute;
                        left: 15px;
                        top: 5px;
                        padding: 5px;
                        background: #fff;
                        border-radius: 5px;
                        color: #000000;
                        content: '${data}';
                        z-index: 2;
                        width: 120px; 
                        height: 120px;
                        opacity: 0;
                        transition: opacity 2s;
                    }
                    .hover-tips-${idvalue}:hover:after{
                        position: absolute;
                        top: 150%;
                        left: 50%;
                        transform: translate(-50%, 0%);
                        padding: 5px;
                        background: #fff;
                        border-radius: 5px;
                        color:#000000;
                        content: '${data}';
                        z-index: 2;
                        width: 80px; 
                        height: 50px;
                        transition: opacity 2s;
                        opacity: 1;
                    }
                `;
        nod.innerHTML = str;
        nod.type="text/css";
        document.getElementsByTagName('head').item(0).appendChild(nod);
        el.classList.add(`hover-tips-${idvalue}`)
        // setTimeout(() => {
        //     nod.remove();
        // }, 5000);




    },
    unbind: function (el, binding, vnode) {

    },
    inserted: function (el, binding, vnode) { },
    update: function (el, binding, vnode) { },
    componentUpdated: function (el, binding, vnode) { }
})


