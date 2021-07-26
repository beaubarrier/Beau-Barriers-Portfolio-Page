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
let instaTxtDisplay = $("#instaTxtDisplay");
let emailTxtDisplay = $("#emailTxtDisplay");
let linkedInTxtDisplay = $("#linkedInTxtDisplay");
let reachOut = $("#reachOut");


myName.on("click", function myNameFunc(e) {
    e.preventDefault();
    portrait.css("display", "initial");
    pages.css("display", "none");
    contentBG.css("display", "none");
});

contact.on("click", function contactPageFunc(e) {
    e.preventDefault();

    contactPage.css("display", "initial");
    contentBG.css("display", "initial");

    portrait.css("display", "none");
    myStoryPage.css("display", "none");
    githubPage.css("display", "none");

});


myStory.on("click", function myStoryFunc(e) {
    e.preventDefault();

    myStoryPage.css("display", "initial");
    contentBG.css("display", "initial");

    portrait.css("display", "none");
    githubPage.css("display", "none");
    contactPage.css("display", "none");
});


github.on("click", function githubFunc(e) {
    e.preventDefault();

    githubPage.css("display", "initial");
    contentBG.css("display", "initial");

    portrait.css("display", "none");
    myStoryPage.css("display", "none");
    contactPage.css("display", "none");
});


emailIcon.mouseenter(function showEmailTxt(e) {
    e.preventDefault();

    emailTxtDisplay.css("display", "initial")
    reachOut.css("display", "none")

});
emailIcon.mouseleave(function showEmailTxt(e) {
    e.preventDefault();
    reachOut.css("display", "initial")
    emailTxtDisplay.css("display", "none")

});


linkedInIcon.mouseenter(function showEmailTxt(e) {
    e.preventDefault();
    reachOut.css("display", "none")
    linkedInTxtDisplay.css("display", "initial")

});
linkedInIcon.mouseleave(function showEmailTxt(e) {
    e.preventDefault();
    reachOut.css("display", "initial")
    linkedInTxtDisplay.css("display", "none")

});


instaIcon.mouseenter(function showEmailTxt(e) {
    e.preventDefault();
    reachOut.css("display", "none")
    instaTxtDisplay.css("display", "initial")

});
instaIcon.mouseleave(function showEmailTxt(e) {
    e.preventDefault();
    reachOut.css("display", "initial")
    instaTxtDisplay.css("display", "none")

});