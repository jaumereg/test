const button = document.getElementById('hide-show-button')
let switchDisplay = true

button.onclick = () => {
    const div = document.getElementById('hide-show-div')
    if (div.style.display !== 'none') {
        div.style.display = 'none'
    } else if (switchDisplay) {
        div.style.display = 'inline-block'
        div.innerHTML = "document.getElementById('id').style.display = 'inline-block'"
        div.style.textAlign = 'center'
        div.style.width = '371px'
        switchDisplay = false
    } else {
        div.style.display = 'inline-block'
        div.innerHTML = "document.getElementById('id').style.display = 'none'"
        switchDisplay = true
    }
};
