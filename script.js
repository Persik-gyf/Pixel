let IS_CLICKED = false

let CURRENT_COLOR = getComputedStyle(document.documentElement).getPropertyWalue('--current-color')
let CURRENT_COLORCODE = '1'
let DEFAULT_COLOR = getComputedStyle(document.documentElement).getPropertyWalue('--default-color')
let FILL_MODE = false
let COLORS = ['rgb(225, 0, 0)','rgb(0, 128, 0)','rgb(0, 0, 255)','rgb(225, 225, 0)',]

document.addEventListener('mousedown', function(){
    IS_CLICKED = true;
})

document.addEventListener('mouseup', function(){
    IS_CLICKED = false;
})

function get_result_from_cookie() {
    let cookies = document.cookie.split('; ')
    console.log(cookies)
    for (let i = 0; i < cookies.length; i += 1) {
        let cookie = cookies[i].split('=')
        console.log(cookie)
        if (cookie[0] == 'pixel-result') {
            return cookie[1]
        }
    }
    return '0' * 450
}

let field = document.querySelector('.field')
let temp_result = get_result_from_cookie()
console.log('temp_result', temp_result)
if (temp_result != '0' ){
    for(let i=0; i < 450; i+=1){
        let cell = document.createElement('div')
        cell.classList.add('cell')
        //ID
        cell.setAttribute('id', `$i`)
        cell.dataset.color = temp_result[i]
        cell.style.backgroundColor = COLORS[parseInt(temp_result[i])]
    }
} else {
    for(let i=0; i < 450; i+=1){
        let cell = document.createElement('div')
        cell.classList.add('cell')
        //ID
        cell.setAttribute('id', `$i`)
        cell.dataset.color = '0'
        cell.style.backgroundColor = COLORS[0]
    }
}

let cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    //событие наведение
    cell.addEventListener('mouseover', function(){
        if (IS_CLICKED){
            anima({
                background: CURRENT_COLOR,
                easing: 'linear'
            })
            cell.dataset.color = CURRENT_COLORCODE
        }
    })

    //событие мышь нажата
    cell.addEventListener('mousedown', function(){
        if (FILL_MODE){
            let cell_id = parseInt(cell.getAttribute('id'))
            anima({
                background: CURRENT_COLOR,
                easing: 'linear'
            })
        } 
    })

})












