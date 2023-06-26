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

for (let index = 0; index < teamBusiness.length; index++) {
    const element = teamBusiness[index];
    
    for (const key in element) {
        console.log(element[key]);
    }
}

/*
    MILESTONE 2
*/
