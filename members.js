const positions = {
    'Executive Operations': ['Alumni Relations - Siddharth Gupta'],

    'Financial Operations':[
        "Accountant - Liam Hoover",
        "Grant Writing - Saksham Singh",
        "Fundraising - Saksham Singh"
    ],

    'External Affairs':[
        "Greek Relations - Elan Ronen",
        "Social Chair - Alex Simpson",
        "Risk Manager - Jack Galasso"
    ],

    'Membership Development':[
        "Brotherhood Advisors - Ian Moore",
        "Academic Chair - Siddharth Gupta",
        "Professional Development - Philippe Bertrand",
        "Service and Philanthropy - Tommy Hayman",
        "Signature Events - Philippe Bertrand"
    ],

    "Internal Operations": [
        "House Manager - Jack Galasso",
        "Tech Consultant - Siddharth Gupta",
        "House Improvements - Ethan King"
    ],

    "Public Relations": [
        "Marketing - Sam Martin",
        "Recruitment - Elan Ronen, Alex Simpson, and Sam Martin",
        "Apparel - Liam Oliva",
        "Webmaster - Tommy Hayman"
    ],

    "Brotherhood": [
        "Pledge Education - Jack Galasso and Kieth LaFriniere",
        "Historian - Will Scott",
        "Brotherhood Chair - Eli Grimsley  and Charlie Wang",
        "Health and Wellness - Brandon Truong"
    ],

    "Judicial Board": [
        "Junior Justices - Alex Simpson and Eli Grimsley",
        "Senior Justices - Eliot Wall, Michael Villeneuve, and Ian Moore"
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
