let myStory = $("#myStory");
let contact = $("#contact");
let github = $("#github");
let portrait = $("#portrait");
let contactPage = $(".contactPage");
let myStoryPage = $(".myStoryPage");
let githubPage = $(".githubPage");
let contentBG = $(".contentBG");
let myName = $("#beauBarrierName");
let pages = $("#contactPage") + $("#myStoryPage") + $("#githubPage");
let contactSelectionEmail = $("#contactSelectionEmail");
let contactSelectionLinkedIn = $("#contactSelectionLinkedIn");
let contactSelectionInsta = $("#contactSelectionInsta");
let emailIcon = $("#emailIcon");
let linkedInIcon = $("#linkedInIcon");
let instaIcon = $("#instaIcon");
let emailIconDiv = $("#emailIconDiv");
let githubLeafRight = $("#githubLeafRight");
let githubLeafLeft = $("#githubLeafLeft");


myName.on("click", function myNameFunc(event) {
    event.preventDefault();
    portrait.css("display", "initial");
    pages.css("display", "none");
    contentBG.css("display", "none");
})

contact.on("click", function contactPageFunc(event) {
    event.preventDefault();

    contactPage.css("display", "initial");
    contentBG.css("display", "initial");

    portrait.css("display", "none");
    myStoryPage.css("display", "none");
    githubPage.css("display", "none");

})

myStory.on("click", function myStoryFunc(event) {
    event.preventDefault();

    myStoryPage.css("display", "initial");
    contentBG.css("display", "initial");

    portrait.css("display", "none");
    githubPage.css("display", "none");
    contactPage.css("display", "none");
})

github.on("click", function githubFunc(event) {
    event.preventDefault();

    githubPage.css("display", "initial");
    contentBG.css("display", "initial");

    portrait.css("display", "none");
    myStoryPage.css("display", "none");
    contactPage.css("display", "none");
})



