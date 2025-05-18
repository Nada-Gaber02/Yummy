
// Regex validation functions
function validateName(name) {
    return /^[A-Za-z\s]{3,}$/.test(name);
}

function validateEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
}

function validatePhone(phone) {
    return /^01[0-9]{9}$/.test(phone); // مثال مصري
}

function validateAge(age) {
    return /^(1[01][0-9]|100|[1-9][0-9]?)$/.test(age);
}

function validatePassword(pass) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass);
}

$('#nameInput').on('input', function() {
    if (!validateName(this.value)) {
        $('#nameErrorMsg').removeClass('d-none');
    } else {
        $('#nameErrorMsg').addClass('d-none');
    }
});

$('#emailInput').on('input', function() {
    if (!validateEmail(this.value)) {
        $('#emailErrorMsg').removeClass('d-none');
    } else {
        $('#emailErrorMsg').addClass('d-none');
    }
});

$('#phoneInput').on('input', function() {
    if (!validatePhone(this.value)) {
        $('#phoneErrorMsg').removeClass('d-none');
    } else {
        $('#phoneErrorMsg').addClass('d-none');
    }
});

$('#ageInput').on('input', function() {
    if (!validateAge(this.value)) {
        $('#ageErrorMsg').removeClass('d-none');
    } else {
        $('#ageErrorMsg').addClass('d-none');
    }
});

$('#passInput').on('input', function() {
    if (!validatePassword(this.value)) {
        $('#passErrorMsg').removeClass('d-none');
    } else {
        $('#passErrorMsg').addClass('d-none');
    }
});

$('#repassInput').on('input', function() {
    if (this.value !== $('#passInput').val() || this.value === '') {
        $('#repassErrorMsg').removeClass('d-none');
    } else {
        $('#repassErrorMsg').addClass('d-none');
    }
});

function checkAllValid() {
    const nameValid = validateName($('#nameInput').val());
    const emailValid = validateEmail($('#emailInput').val());
    const phoneValid = validatePhone($('#phoneInput').val());
    const ageValid = validateAge($('#ageInput').val());
    const passValid = validatePassword($('#passInput').val());
    const repassValid = $('#repassInput').val() === $('#passInput').val() && $('#repassInput').val() !== '';

    if (nameValid && emailValid && phoneValid && ageValid && passValid && repassValid) {
        $('.submitBtn').removeClass('disabled');
    } else {
        $('.submitBtn').addClass('disabled');
    }
}
$('#nameInput, #emailInput, #phoneInput, #ageInput, #passInput, #repassInput').on('input', function() {
    checkAllValid();
});