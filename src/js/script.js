const inputPassword = document.querySelector('input[type="password"]');
const currentTypePassword = inputPassword.getAttribute('type');
const iconPassword = document.querySelector('ion-icon');
const currentIconPassword = iconPassword.getAttribute('name');

const handleClick = () => {

    const toggleTypePassword = (newType) => inputPassword.setAttribute('type', newType);
    const isTypePasswordText = currentTypePassword === 'text';
    (isTypePasswordText)
        ? toggleTypePassword('password')
        : toggleTypePassword('text');

    const toggleIconPassword = (iconType) => iconPassword.setAttribute('name', iconType);
    const isIconShow = currentIconPassword === 'eye-outline';
    (isIconShow)
        ? toggleIconPassword('eye-off-outline')
        : toggleIconPassword('eye-outline');
}

iconPassword.addEventListener('click', handleClick);