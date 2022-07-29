const inputElement = document.querySelector('input[type="password"]');
const toggleTypePassword = (type) => inputElement.setAttribute('type', type);
const iconElement = document.querySelector('#icon-view');
const toggleNameIcon = (name) => iconElement.setAttribute('name', name);

const handleClick = () => {
    const getInputType = inputElement.getAttribute('type');
    (getInputType === 'password')
        ? toggleTypePassword('text')
        : toggleTypePassword('password');

    const getIconName = iconElement.getAttribute('name');
    (getIconName === 'eye-outline')
        ? toggleNameIcon('eye-off-outline')
        : toggleNameIcon('eye-outline');
}
iconElement.addEventListener('click', handleClick);