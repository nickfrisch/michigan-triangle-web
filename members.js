const positions = {
    'Executive Operations': ['Alumni Relations - Siddharth Gupta'],

    'Financial Operations':[
        "Accountant - Siddharth Gupta",
        "Grant Writing - Saksham Singh",
        "Fundraising - Saksham Singh"
    ],

    'External Affairs':[
        "Greek Relations - Alex Simpson",
        "Social Chair - Ishan Sinha",
        "Risk Manager - Philippe Bertrand"
    ],

    'Membership Development':[
        "Brotherhood Advisors - Elijah Pineda-Rodriguez and Max Salemi",
        "Academic Chair - Jack Galasso",
        "Professional Development - Philippe Bertrand",
        "Service and Philanthropy - Nick Frisch",
        "Signature Events - Eliot Wall"
    ],

    "Public Relations": [
        "Marketing - Charlie Wang",
        "Recruitment - Bao Duong, Alex Simpson, and Sam Martin",
        "Apparel - Liam Oliva",
        "Webmaster - Nick Frisch"
    ],

    "Brotherhood": [
        "Pledge Education - Emory Townley and Arya Kakarlapudi",
        "Brotherhood Chair - Nick Frisch and Charlie Wang",
        "Health and Wellness - Alex Simpson"
    ],

    "Judicial Board": [
        "Junior Justices - Michael Villeneuve and Siddharth Gupta",
        "Senior Justices - Nate Dykstra, Emory Townley, and Brennan Leinweber"
    ],
};

const members = {
  "General Fraternity Members": [
    "Alexander Gordon",
    "Arnav Sadasivan",
    "Arya Kakarlapudi",
    "Brennan Leinweber",
    "Calvin Veith",
    "Christopher Beane",
    "Ethan Gibbs",
    "Elliot Kupchik",
    "Griffin Wright",
    "Ian Moore",
    "Jack Woods",
    "Jeremy Shen",
    "Joshua Hsueh",
    "Keith LaFriniere",
    "Kevin Yin",
    "Lewin Shen",
    "Max Rucker",
    "Michael Villeneuve",
    "Raayan Brar",
    "Tahseen Younus"
  ]
}

const chairholderPositions = document.getElementById("chairholder_and_members")

for (let key in positions) {
    const underline = document.createElement("u")
    const bold_and_underlined = underline.appendChild(document.createElement("b"));
    bold_and_underlined.innerText = key;

    chairholderPositions.append(underline);
    chairholderPositions.append(document.createElement("br"));

    for(let value of positions[key]){
        const member = document.createElement("span");
        member.innerText = value;
        chairholderPositions.append(member);
        chairholderPositions.append(document.createElement("br"))
    }
    chairholderPositions.append(document.createElement("br"));        
}

const underline = document.createElement("u")
const bold_and_underlined = underline.appendChild(document.createElement("b"));
bold_and_underlined.innerText = "General Fraternity Members";

chairholderPositions.append(underline);
chairholderPositions.append(document.createElement("br"));
allMembers = "";
for(let member of members["General Fraternity Members"]){
    allMembers = allMembers + ", "  + member;
}

const allMembersElement = document.createElement("span");
allMembersElement.innerText = allMembers.substring(2);

chairholderPositions.append(allMembersElement);
