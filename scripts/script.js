//Theme
const chk = document.getElementById('chk')
const rootElement = document.documentElement

const lightTheme = {
    '--background': '#f1ebeb',
    '--background-visor': '#242423',
    '--background-number': '#3a5f6f',
    '--background-operator': '#ff8826',
    '--color-text-visor': '#f1ebeb',
    '--color-number': '#f1ebeb',
}

const darkTheme = {
    '--background': '#242423',
    '--background-visor': '#dad5b7',
    '--background-number': '#dad5b7',
    '--background-operator': '#ffb914',
    '--color-text-visor': '#242423',
    '--color-number': '#242423',
}

chk.addEventListener('change', function(){
    const isChecked = chk.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme){
    console.log(theme)
    for(let prop in theme){
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value){
    rootElement.style.setProperty(property, value)
}

//Calculator
function display(value){
    Calculator.visor.value = Calculator.visor.value + value
}

function evaluateExpression(){
    Calculator.visor.value = eval(Calculator.visor.value)
}