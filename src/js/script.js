const inputElement = document.querySelector('input[type="password"]');
const iconElement = document.querySelector('#icon-view');

const handleClick = () => {
    const toggleTypePassword = (type) => inputElement.setAttribute('type', type);
    const toggleTypeIcon = (name) => iconElement.setAttribute('name', name);

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