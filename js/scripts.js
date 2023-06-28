/*
    MILESTONE 0
*/
const teamBusiness = [
    {
        name: 'Wayne Barnett',
        businessRole : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        businessRole : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        businessRole : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        businessRole : 'Social Media Menager',
        img : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        businessRole : 'Developer',
        img : 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        businessRole : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg'
    },
]   

/*
    MILESTONE 1
*/

// for (let index = 0; index < teamBusiness.length; index++) {
//     const element = teamBusiness[index];
    
//     for (const key in element) {
//         console.log(element[key]);
//     }
// }

/*
    MILESTONE 2
*/


// Funzione per stampare le informazioni su DOM
function stampaInformazioni() {
  const container = document.getElementById("ul");

    for (let i = 0; i < teamBusiness.length; i++) {
        console.log(teamBusiness[i]);
        const element = teamBusiness[i];
        console.log(typeof(element))

        const newLi = document.createElement('li');
        newLi.innerHTML = `${element.name} - ${element.businessRole}`
        const newImg = '<img src="">';

        
        container.append(newLi);
    }
  }
  
  // Chiamata alla funzione per stampare le informazioni
 document.addEventListener('DOMContentLoaded',stampaInformazioni);