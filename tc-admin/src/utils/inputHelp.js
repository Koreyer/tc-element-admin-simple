const isNumber = (number) => {
    var pattern = /^[0-9]+$/
    var newNumber = ''
    var numberArr = number.split('')
    console.log(numberArr)
    numberArr.forEach(item => {
        if (pattern.test(item)) {
            newNumber += item
        }
    })
    return newNumber
}

const isSno = (number) => {
    var length = number.split('').length
    var newSno = ''
    if (length < 12) {
        newSno = isNumber(number)
    } else {
        newSno = isNumber(number).substring(0, 12)
    }
    return newSno
}

const isName = (name) => {
    var pattern = /^[\u4e00-\u9fa5_a-zA-Z]+$/
    var newName = ''
    var nameArr = name.split('')
    nameArr.forEach(item => {
        if (pattern.test(item)) {
            newName += item
        }
    })
    return newName
}
const isAccount = (name) => {
    var pattern = /^[a-zA-Z0-9]+$/
    var newName = ''
    var nameArr = name.split('')
    nameArr.forEach(item => {
        if (pattern.test(item)) {
            newName += item
        }
    })
    return newName
}

const isI18n = (value) => {
    var pattern = /^[a-zA-Z0-9.]+$/
    var newValue = ''
    var valueArr = value.split('')
    valueArr.forEach(item => {
        if (pattern.test(item)) {
            newValue += item
        }
    })
    return newValue
}
const isPath = (value) => {
    var pattern = /^[a-zA-Z0-9./]+$/
    var newValue = ''
    var valueArr = value.split('')
    valueArr.forEach(item => {
        if (pattern.test(item)) {
            newValue += item
        }
    })
    return newValue
}

export default {
    isNumber, isName, isSno, isAccount, isI18n, isPath
}