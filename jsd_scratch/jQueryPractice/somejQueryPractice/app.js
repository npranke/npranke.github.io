// 1. Add a submit event to #my-form; remember to use preventDefault!
// 2. Capture the input from #my-input (hint: when pulling information from the DOM, we get strings, not numbers...)
// 3. Add this input to the var total, below
// 4. Output this new total to #output

let total = 0
let $form = $("#my-form")
let $input = $("#my-input")
let $output = $("#output")
let $button = $("#the-button")

function setButtonState() {
    if ($input.val().length === 0) {
        $button.prop("disabled", true)
    } else {
        $button.prop("disabled", false)
    }
}

$(document).ready(function () {
    setButtonState()
})

// Check for changes in the input box
$input.change(function(event) {
    setButtonState()
})
$input.keyup(function(event) {
    setButtonState()
})
$input.mouseup(function(event) {
    setButtonState()
})

$form.submit(function(event) {
    event.preventDefault()

    if ($input.val()) {
        let number = parseInt($input.val())
        if (isNaN(number)) {
            alert("That's not a number!")
        } else {
            total += number
        }
    }

    // $output.html(total) is alternative
    $output.text(total)

    $input.val("")
    $button.prop("disabled", true)
})
