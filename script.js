document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Firda Hanna Ismia' && password === 'Hannyawdino') {
        document.getElementById('login-box').classList.add('d-none');
        document.getElementById('voucher-box').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.remove('d-none');
    }
});

document.getElementById('redeem-btn').addEventListener('click', function() {
    const voucherCode = document.getElementById('voucher-code').value;
    const predefinedCode = 'COUPON2024';

    if (voucherCode === predefinedCode) {
        document.getElementById('voucher-box').classList.add('d-none');
        document.getElementById('product-box').classList.remove('d-none');
    } else {
        document.getElementById('voucher-error').classList.remove('d-none');
    }
});

const productCheckboxes = document.querySelectorAll('#products-list input');
const nextButton = document.getElementById('next-btn');

productCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const selectedProducts = Array.from(productCheckboxes).filter(cb => cb.checked);

        if (selectedProducts.length > 1) {
            nextButton.disabled = false;
        } else {
            nextButton.disabled = true;
        }
    });
});

document.getElementById('next-btn').addEventListener('click', function() {
    document.getElementById('product-box').classList.add('d-none');
    document.getElementById('confirmation-box').classList.remove('d-none');
});

document.getElementById('confirm-btn').addEventListener('click', function() {
    document.getElementById('confirmation-box').classList.add('d-none');
    document.getElementById('thanks-box').classList.remove('d-none');
});
