/**
 * 
 * random               随机字母
 * select               选中
 * selectCopy           选中且复制
 */





export function random(n) {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let idvalue = '';
    for (var i = 0; i < n; i++) { idvalue += arr[Math.floor(Math.random() * 26)]; }
    return idvalue
}


export function select(dom) {
    let selection = window.getSelection();
    selection.removeAllRanges();
    let range = document.createRange();
    range.selectNodeContents(dom);
    selection.addRange(range);

}
export function selectCopy(dom) {
    //清除选中
    let selection = window.getSelection();
    selection.removeAllRanges();
    // Range 对象表示文档中的连续范围
    let range = document.createRange();
    range.selectNodeContents(dom);
    selection.addRange(range);
    // 复制到粘贴板
    let execCommand = document.execCommand('copy')
    // 清除选中
    selection.removeAllRanges();
    return execCommand;
}
