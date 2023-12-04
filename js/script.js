// array di oggetti per rappresentare i membri del team

let employees = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },   
]
console.log(employees);

// ciclo info dipendenti

let employees_display = document.getElementById('employees_container');

for(let i = 0; i<employees.length ; i++){

    let div = document.createElement('div');
    div.classList.add('col-4', 'p-3', 'text-white');

    let cardImg = document.createElement('div');
    cardImg.innerHTML = `<img src='../js-our-team/img/${employees[i].image}'>`;

    let cardName = document.createElement('div');
    cardName.classList.add('mt-3')
    cardName.innerHTML = `<h3>${employees[i].name}</h3>`;

    let cardRole = document.createElement('div');
    cardRole.innerHTML = `<h4>${employees[i].role}</h4>`;

    div.appendChild(cardImg);
    div.appendChild(cardName);
    div.appendChild(cardRole);

    employees_display.appendChild(div);
}