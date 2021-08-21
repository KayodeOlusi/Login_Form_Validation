//How to use RegExp in Javascipt file 
// var reg = /[a-z]/gi
// var reg2 = new RegExp(/[a-z]/,"i")
const inputs = document.querySelectorAll('input')

const patterns = {
    telephone : /^\d{11}$/,
    username : /^[a-z\d]{5,12}$/,
    password : /^[\w@-]{8,20}$/,
    slug : /^[a-z\d-]{8,20}$/,
    email : /^([a-z\d\.-]+)@((gmail|yahoo))\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

const validate = ( field, regex ) => {
    if (regex.test(field.value)) {
        field.className = 'valid'
    } else{
        field.className = 'invalid'
    }
}

inputs.forEach( input => {
    input.addEventListener('keyup', e => {
        // console.log(`the ${e.target} and the ${e.target.attributes.name.value}`)
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})


