const main = document.getElementById('main');
if (main) {
    main.remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Daphine Michere is the champion';
document.body.appendChild(newHeader);
