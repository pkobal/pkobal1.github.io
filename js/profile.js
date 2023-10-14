const profileobj = {
    emailadres : "302958475@student.rocmondriaan.nl",
    username : "pkobal",
    realname: "Patryk Obal",
    birthday : "16.03.05",
    profilephoto : "/",
    biography : "Ik ben 18 jaar oud, ik kom uit Polen en ik woon in Nederland rond 5 jaar nu!",
    bannerColor : "",
    skills : ["Javascript", "HTML", "CSS"],
    projects : [
        {
            projectName : "Hoger Lager",
            teamMates : [
                {
                    fullName : "Jona", link : "",
                    fullName : "Thijs", link : "",
                }
            ],
            description : "Het spel Hoger Lager was mijn eertse Javascript Project!",
            img : "/",
            link : "#"
        },
        {
            projectName : "Boter kaas en eieren",
            teamMates : [],
            description : "Het spel Boter kaas en eieren was mijn tweede project en het minst leuke tot nu toe!",
            img : "/",
            link : "#"
        },
        {
            projectName : "Webcatalogus",
            teamMates : [
                {
                    fullName : "Jona", link : "",
                }
            ],
            description : "Het spel Boter kaas en eieren was mijn tweede project en het minst leuke tot nu toe!",
            img : "/",
            link : "#"
        }
    ],
    course : "Software Developer",
}

console.log(profileobj);

const myUserNameView = document.querySelector('.my-username');
myUserNameView.textContent = profileobj.username;

const myBioView = document.querySelector('.my-biography');
myBioView.textContent = profileobj.biography;

const myBackGroundView = document.querySelector('.my-bg');
myBackGroundView.style.backgroundColor = profileobj.bannerColor;