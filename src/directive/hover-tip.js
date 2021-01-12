import Vue from 'vue'




// 触碰 显示提示
Vue.directive('hover-tip', {
    bind: function (el, binding, vnode) {
        let data
        let width
        binding.value[0] ? data = binding.value[0] : data = '';
        binding.value[0] ? width = (data.length * 16) + 'px' : width = '100px';


        let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let idvalue = '';
        let n = 4;
        for (var i = 0; i < n; i++) { idvalue += arr[Math.floor(Math.random() * 26)]; }


        el.hoverTip = document.createElement("style");
        let str = `
                    .hover-tips-${idvalue}{
                        cursor:pointer;                     
                        padding: 5px;
                    }
                    .hover-tips-${idvalue}:hover{
                        background-color: #e0e0e0;
                        border-radius: 50%;
                    }
                    .hover-tips-${idvalue}:after{
                        position: absolute;
                        top: 200%;
                        left: 50%;
                        transform: translate(-50%, 0%);
                        padding: 13.5px 4px 0px 4px;
                        text-align: center;
                        border-radius: 5px;
                        color:#ffffff;
                        content: "${data}";
                        z-index: 2;
                        width: 0px; 
                        height: 0px;   
                        opacity: 0;      
                        font-size:13px;              
                        background-color: rgba(0, 0, 0, 0.5);
                        pointer-events: none;
                        transition: all .2s cubic-bezier(.4,0,.6,1);
                    }
                    .hover-tips-${idvalue}:hover:after{
                        position: absolute;
                        top: 150%;
                        left: 50%;
                        transform: translate(-50%, 0%);
                        padding: 13.5px 4px 0px 4px;
                        text-align: center;
                        border-radius: 5px;
                        color:#ffffff;
                        content: "${data}";
                        z-index: 2;
                        width: ${width}; 
                        height: 40px;
                        opacity: 1;      
                        font-size:13px;              
                        background-color: rgba(0, 0, 0, 0.5);
                        pointer-events: none;
                        transition: all .2s cubic-bezier(.4,0,.6,1);
                    }
                `;
                el.hoverTip.innerHTML = str;
                el.hoverTip.type = "text/css";
                document.getElementsByTagName('head').item(0).appendChild(el.hoverTip);
                el.classList.add(`hover-tips-${idvalue}`)

    },
    unbind: function (el, binding, vnode) {
        el.hoverTip.remove();
    },
    inserted: function (el, binding, vnode) { },
    update: function (el, binding, vnode) { },
    componentUpdated: function (el, binding, vnode) { }
})


