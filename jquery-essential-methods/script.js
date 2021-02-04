/**
 * Several things to note in this file:
 *
 * - code organization: we define all our functions first, then attach them as event listeners
 * - naming conventions:
 *     - event listener function names start with "on" or "handle"
 *     - variables that hold jQuery objects have a "$" in front of their name
 */

// obviously this is a little simplified, but works for our purposes
function getPasswordStrength(password) {
    if (password.length < 5) {
        return "weak";
    } else if (password.length < 8) {
        return "moderate";
    } else {
        return "strong";
    }
}

function onPasswordInput(e) {
    // A slightly better way to write this might be with .closest (https://api.jquery.com/closest/),
    // i.e.
    //     $formGroup = $(e.target).closest('.row')
    // To find the closest parent with the class of "row".
    // However, .closest isn't in the curriculum, so we'll show a solution with .parent here.
    const $formGroup = $(e.target).parent().parent().parent();
    const strength = getPasswordStrength(e.target.value);

    // clear out any old classes
    $formGroup.removeClass(["text-danger", "text-warning", "text-success"]);

    // add the right class
    if (strength === "weak") {
        $formGroup.addClass("text-danger");
    } else if (strength === "moderate") {
        $formGroup.addClass("text-warning");
    } else {
        $formGroup.addClass("text-success");
    }

    $('#password-feedback').text(strength);
}

function onConfirmPasswordInput(e) {
    $formGroup = $(e.target).parent().parent().parent();
    const passwordConfirmation = e.target.value;
    const password = $('#password').val();

    $formGroup.removeClass(["text-success", "text-danger"])

    if (password === passwordConfirmation) {
        $formGroup.addClass("text-success");
    } else {
        $formGroup.addClass("text-danger");
    }
}

function handleNextButtonClick(e) {
    const $currentSection = $('.active');
    const $nextSection = $('.active').next();
    const $currentPage = $('#current-page');

    // update section visibility
    $currentSection.removeClass('active').addClass('d-none');
    $nextSection.removeClass('d-none').addClass('active');

    // update current page display
    const nextPage = parseInt($currentPage.text()) + 1;
    console.log(nextPage);
    $currentPage.text(nextPage);
}

$('#password').on("input", onPasswordInput);
$('#confirm-password').on("input", onConfirmPasswordInput);
$('.next-button').click(handleNextButtonClick);
