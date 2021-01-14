
/**
 * showTip
 * @param {*} el            根dom元素
 * @param {*} data          显示值
 * @param {*} direction     方向
 */
export const showTip_div = (el, data, direction, time) => {
  // console.log(el, data, direction, time)
  const css = {
    top: `
                top: 0%;
                left: 50%;
                transform: translate(0%, -50%);
                `,
    bottom: `
                top: 100%;
                left: 50%;
                transform: translate(-50%, 0%);
                `,
    left: `
                top: 50%;
                left: 0%;
                transform: translate(0%, -50%);
                `,
    right: `
                top: 50%;
                left: 100%;
                transform: translate(-50%, 0%);
                `,
    center: `
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                `
  }
  // 防止多次添加dom
  if (!document.getElementById('copy-tip')) {
    el.insertAdjacentHTML(
      'beforeend',
      `<div 
            id = "copy-tip" 
            style="        
            opacity: 0;
            display: flex; 
            transition: opacity ${time / 1000}s;
            background: rgba(0, 0, 0, 0.4);
            align-items: center;
            justify-content: center;
            position: absolute;
            min-width: 100px;
            min-height: 40px;
            border-radius: 5px;
            padding:2px 10px;
            color: #ffffff;
            font-size: 15px;
            ${css[direction]}
            ">
            <p> 
            ${data}
            </p >
            <div />`
    )
    const tip = document.getElementById('copy-tip')
    setTimeout(() => {
      tip.style.opacity = 1
    }, 0)
    setTimeout(() => {
      tip.style.opacity = 0
    }, time)
    setTimeout(() => {
      tip.remove()
    }, time * 2)
  }
}

/** 强制定位 tip  未完成
 * showTip
 * @param {*} el            根dom元素
 * @param {*} data          显示值
 * @param {*} direction     方向
 * @param {*} time          时间
 */
export const showTip_span = (el, data, direction, time) => {
  const css = {
    top: `
                top: 0%;
                left: 50%;
                transform: translate(0%, -50%);
                `,
    bottom: `
                top: 100%;
                left: 50%;
                transform: translate(-50%, 0%);
                `,
    left: `
                top: 50%;
                left: 0%;
                transform: translate(0%, -50%);
                `,
    right: `
                top: 50%;
                left: 100%;
                transform: translate(-50%, 0%);
                `,
    center: `
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                `
  }

  el.insertAdjacentHTML(
    'beforeend',
    `<span
            id = "copy-tip" 
            style="        
            opacity: 0;
            display: flex; 
            transition: opacity ${time / 1000}s;
            background: rgba(0, 0, 0, 0.4);
            align-items: center;
            justify-content: center;
            position: absolute;
            min-width: 100px;
            min-height: 40px;
            border-radius: 5px;
            color: #ffffff;
            font-size: 15px;
            ${css[direction]}
            ">
            ${data}
        <span />`
  )
  const tip = document.getElementById('copy-tip')
  setTimeout(() => {
    tip.style.opacity = 1
  }, 0)
  setTimeout(() => {
    tip.style.opacity = 0
  }, time)
  setTimeout(() => {
    tip.remove()
  }, time * 2)
}
