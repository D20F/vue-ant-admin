.eslintrc.js 关闭了enlist关闭

1. 登陆 验证成功存入token

enquire.register('screen and (max-width:45em)', {
    //首次匹配
    match: function () {console.log('match')},
    // 匹配到不匹配
    unmatch: function () {console.log('unmatch')},
    // 首次触发
    setup: function () {console.log('setup')},
    // 推迟首次触发
    deferSetup: true,
    // 销毁
    destroy: function () {console.log('destroy')},
})