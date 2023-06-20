// ADD NEW ITEM TO END OF LIST

const uList = document.querySelector('ul');
const endOfList = document.createElement('li');
endOfList.textContent = 'cream';
uList.append(endOfList);

// ADD NEW ITEM START OF LIST

const startOfList = document.createElement('li');
startOfList.textContent = 'kale';
uList.prepend(startOfList);

// ADD A CLASS OF COOL TO ALL LIST ITEMS

let numItems = 0;

const lItems = document.querySelectorAll('ul li');
lItems.forEach(i => {
    i.classList.add('cool');
    numItems++;
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

const heading = document.querySelector('h2');
const numElementsHTML = document.createElement('span');
numElementsHTML.textContent = numItems;

heading.append(numElementsHTML);
