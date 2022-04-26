let display_operationUP = document.getElementById('input_operationUP')
let display_operationDOWN = document.getElementById('input_operationDOWN')
let button_numbers = document.querySelectorAll('.button-numbers')
let button_operations = document.querySelectorAll('.button-operation')
let button_delete = document.getElementById('del_button')
let button_clean = document.getElementById('clear_button')
let button_result = document.getElementById('result_button')

class Calculator {
    constructor(display_operation1, display_operation2) {
        this.display_operationUP = display_operation1
        this.display_operationDOWN = display_operation2
        this.clearDisplay()
    }

    insertNumbers(numbers) {
        if (this.displayValueDOWN.includes('.') && numbers == '.') return //verifica se há . inserido, impede que insira mais de um .

        this.displayValueDOWN += numbers
    }

    updateDisplay() {
        if (this.displayValueDOWN.length <= 12) {
            this.display_operationDOWN.innerHTML = this.displayValueDOWN
            this.display_operationUP.innerHTML = this.displayValueUP + this.operation
        }

        if (this.result || this.result == '0') {
            this.display_operationUP.innerHTML = ''
            this.display_operationDOWN.innerHTML = this.result
        }
    }

    clearDisplay() {
        this.displayValueUP = ''
        this.displayValueDOWN = ''
        this.operation = ''
        this.display_operationUP.innerHTML = ''
        this.display_operationDOWN.innerHTML = ''
        this.result = ''
    }

    selectOperation(operation) {
        if (this.displayValueDOWN) {
            this.operation = operation
        }

        if (this.result != '' || this.result == '0') {
            this.displayValueUP = this.result
            this.displayValueDOWN = ''
            this.result = ''
        }

        if (this.displayValueUP) return

        this.displayValueUP = this.displayValueDOWN
        this.displayValueDOWN = ''

    }

    calculate() {
        let number1 = parseFloat(this.displayValueUP)
        let number2 = parseFloat(this.displayValueDOWN)
        this.result

        if (!this.displayValueDOWN) return

        switch (this.operation) {
            case '+':
                this.result = number1 + number2
                break
            case '-':
                this.result = number1 - number2
                break
            case 'x':
                this.result = number1 * number2
                break
            case '÷':
                this.result = number1 / number2
                break
        }


    }

    deleteNumber() {
        this.displayValueDOWN = this.displayValueDOWN.substring(0, this.displayValueDOWN.length - 1)
    }

}

const calculator = new Calculator(display_operationUP, display_operationDOWN)

for (const buttonNumber of button_numbers) {
    buttonNumber.addEventListener('click', function () {
        calculator.insertNumbers(buttonNumber.innerHTML)
        calculator.updateDisplay()
    })
}

button_clean.addEventListener('click', function () {
    calculator.clearDisplay()
    calculator.updateDisplay()
})

for (const buttonOperation of button_operations) {
    buttonOperation.addEventListener('click', function () {
        calculator.selectOperation(buttonOperation.innerHTML)
        calculator.updateDisplay()
    })
}

button_result.addEventListener('click', function () {
    calculator.calculate()
    calculator.updateDisplay()
})

button_delete.addEventListener('click', function(){
    calculator.deleteNumber()
    calculator.updateDisplay()
})