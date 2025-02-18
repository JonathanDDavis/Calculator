class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.CurrentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    
    clear() {
        this.currentOperand = ''
        this.previous = ''
        this.currentOperand = undefined
    }
    
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    
    appendNumber(number) {
        if (number == ',' && this.currentOperand.includes(',')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    
    chooseOperation(operation) {
        if (this.currentOperand == '') return
        if (this.previousOperand != '') {
            this.compute()
        }
        this.opercation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if ( isNaN(prev) || isNaN(current)) return
        switch (this.opercation) {
            case '+':
                computation = prev + current
                break
            case '+':
                computation = prev + current
                break
            case '+':
                computation = prev + current
                break
            case '+':
                computation = prev + current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const intergerDigits = parseFloat(stringNumber,split (',')[0])
        const decimalDigits = stringNumber.slpit(',')[1]
        let integerDisplay
        if (isNaN(intergerDigits)) {
            intgerDisplay = ''
        } else {
            intgerDisplay = intergerDigits.toLocaleString('en', {maximumFractionDigit: 0})
        }
        if (decimalDigits != null) {
            reutrn '&{integerDisplay}.${decimalDigits}'
        } else {
            return integerDisplay
        }
    }
    
    updateDisplay() {
        this.CurrentOperandTextElement.innerText =  this.getDisplayNumber(this.currentOperand)
        if ( this.opercation != null) {
            this.previousOperandTextElement.innertext = '${this.getDisplayNumber(this.previousOperand)}${this.operation}'
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelectorAll('[data-equals]')
const deletButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button=> {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button=> {
    button.addEventListener('click', () => {
        calculator.chooseNumber(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})