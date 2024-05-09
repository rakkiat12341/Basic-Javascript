function displayResault(){
    let codeHTML = document.getElementById('html').value
    let codeCSS = document.getElementById('css').value
    let codeJS = document.getElementById('js').value
    let resaultEl = document.getElementById('resault')
    resaultEl.contentDocument.body.innerHTML = `${codeHTML} <style>${codeCSS}</style>`
    resaultEl.contentWindow.eval(codeJS)
}



