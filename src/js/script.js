const inputElement = document.querySelector('input[type="password"]');
const toggleTypePassword = (type) => inputElement.setAttribute('type', type);
const iconElement = document.querySelector('#icon-view');
const toggleTypeIcon = (name) => iconElement.setAttribute('name', name);

const handleClick = () => {
    const typePassword = inputElement.getAttribute('type');
    (typePassword === 'password')
        ? toggleTypePassword('text')
        : toggleTypePassword('password');

    const typeIcon = iconElement.getAttribute('name');
    (typeIcon === 'eye-outline')
        ? toggleTypeIcon('eye-off-outline')
        : toggleTypeIcon('eye-outline');
}
iconElement.addEventListener('click', handleClick);