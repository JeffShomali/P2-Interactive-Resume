//bio object
var bio = {
    "name": "Jeff Bagheri",
    "role": "Full Stack Web Developer",
    "contacts": {
        "mobile": "415-504-1135",
        "email": "info@jeffshomali.com",
        "twitter": "@jeffshomali",
        "github": "JeffShomali",
        "blog": "www.JeffShomali.com",
        "location": "San Francisco"
    },
    "biopic": "images/avatar.jpg",
    "welcomeMessage": "Welcome to my resume",
    "skills": ["Front-end developer", "Full-stack developer", "UI/UX Designer & Developer", "PHP Developer"]
};

//work object
var work = {
    jobs: [{
        "employer": "Full Stack Web Developer",
        "title": "UI/UX Designer",
        "dates": "2015 - 2016",
        "location": "San Francisco Bay Area",
        "description": "Purrivacy.org is a crowd-sourced collaboration platform built with Ruby on Rails. It aims to educate people about online privacy.",
    }, {
        "employer": "Tutyo",
        "title": "Back End Software Engineer",
        "dates": "2015 - 2015",
        "location": "San Francisco Bay Area",
        "description": "Start-up designed to help students with their homework. The platform used Bootstrap, React, jQuery, PHP and MySQL​.",
    }, ]
};



var education = {
    "schools": [{
        "name": "Diablo Valley College",
        "degree": "Associate in Science Degree, Computer Science",
        "dates": "2014 - 2016",
        "location": "United States, California",
        "majors": ["Computer Science"]
    }, {
        "name": "Azad Univercity",
        "degree": "Bachelor of Business Administration",
        "dates": "2003 - 2007",
        "location": "IRAN",
        "majors": ["Business Administration"]
    }, ],

    "onlineCourses": [{
        "school": "Front-End Web Developer Nanodegree -- Udacity",
        "title": "https://www.udacity.com/",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

//project object
var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016",
        "description": "This is my personal website built with HTML,CSS,Javascript, Bootstrap, PHP and used Twitter API",
        "images": ["images/p1.png"]

    }, {
        "title": "Interactive Resume",
        "dates": "2015 - 2016",
        "description": "The purpose of this project was to practice basic JavaScript skills such as loops, functions and DOM manipulation in vanilla Javascript. All of the resume's content is filled in dynamically with JavaScript",
        "images": ["images/p2.png"]
   },{
       "title": "Interactive Resume",
       "dates": "2015 - 2016",
       "description": "The purpose of this project was to practice basic JavaScript skills such as loops, functions and DOM manipulation in vanilla Javascript. All of the resume's content is filled in dynamically with JavaScript",
       "images": ["images/p2.png"]
 },{
     "title": "Interactive Resume",
     "dates": "2015 - 2016",
     "description": "The purpose of this project was to practice basic JavaScript skills such as loops, functions and DOM manipulation in vanilla Javascript. All of the resume's content is filled in dynamically with JavaScript",
     "images": ["images/p2.png"]
},{
    "title": "Interactive Resume",
    "dates": "2015 - 2016",
    "description": "The purpose of this project was to practice basic JavaScript skills such as loops, functions and DOM manipulation in vanilla Javascript. All of the resume's content is filled in dynamically with JavaScript",
    "images": ["images/p2.png"]
}





]
};


// - - - - - - - - - - - - - - - - - - - - - - -  Bio - - - - - - - - - - - - - - - - - - - - - - -

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role); //HTMLheaderRole comes from helper.js
    var formattedName = HTMLheaderName.replace("%data%", bio.name); //HTMLheaderName comes from helper.js
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    //skills
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var forattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts , #footerContacts").append(formattedMobile);
    $("#topContacts , #footerContacts").append(formattedEmail);
    $("#topContacts , #footerContacts").append(formattedTwitter);
    $("#topContacts , #footerContacts").append(formattedGithub);
    $("#topContacts , #footerContacts").append(formattedBlog);
    $("#topContacts , #footerContacts").append(formattedLocation);

    // TODO: Skills
    if (bio.skills.length !== 0) { // if bio object is not empty
        $(".center-content").append(formattedBioPic);
        $(".center-content").append(forattedWelcomeMessage);
        $("#header").append(HTMLskillsStart); //append HTMLskillsStart from helperjs into #header
        //add all skills into the #skills unordered list
        if (bio.skills.lebgth !== 0) {
            var length = bio.skills.length;
            for (var i = 0; i < length; i++) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    } //end if
};

bio.display();

// - - - - - - - - - - - - - - - - - - - - - - - Work  - - - - - - - - - - - - - - - - - - -

work.display = function() {
    var length = work.jobs.length;
    for (var i = 0; i < length; i++) {
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedworkDates    = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedworkEmployer);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkLocation);
        $(".work-entry:last").append(formattedworkDescription);
    }
};

work.display();

// - - - - - - - - - - - - - - - - - - - - - - - Projects - - - - - - - - - - - - - - - - - - - - - - -
projects.display = function() {

    for (var key in projects.projects) {
        var formattedworkEmployer = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
        var formattedworkDates = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
        var formattedworkLocation = HTMLprojectDescription.replace("%data%", projects.projects[key].description);

        $('#projects').append(HTMLprojectStart);
        $(".project-entry:last").append(formattedworkEmployer);
        $(".project-entry:last").append(formattedworkDates);
        $(".project-entry:last").append(formattedworkLocation);

        var length = projects.projects[key].images.length;
        for (var i = 0; i < length; i++) {
            var formattedworkDescription = HTMLprojectImage.replace("%data%", projects.projects[key].images[i]);
            $(".project-entry:last").append(formattedworkDescription);
        }
    }
};

projects.display();

//- - - - - - - - - - - - - - - - - - - - - - -  Education - - - - - - - - - - - - - - - - - - - - - - -

education.display = function() {
    if (education.schools.length !== 0) {
        $('#education').append(HTMLschoolStart);
        for (var key in education.schools) {
            var formattedschoolNameandDegree = HTMLschoolName.replace("%data%", education.schools[key].name) + HTMLschoolDegree.replace("%data%", education.schools[key].degree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[key].dates);
            $(".education-entry:last").append(formattedschoolNameandDegree);
            $(".education-entry:last").append(formattedschoolDates);
            for (var i = 0; i < education.schools[key].majors.length; i++) {
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[key].majors[i]);
                $(".education-entry:last").append(formattedschoolMajor);
            }
        } //end for
    } //end if

    // Online Classes
    if (education.onlineCourses.length > 0) {
        var length = education.onlineCourses.length;
        for (var onlineCounter = 0; onlineCounter < length; onlineCounter++) {
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCounter].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCounter].school);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCounter].dates);
            var formattedonlineURL   = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCounter].url);

            $('.education-entry:last').append(formattedonlineTitle);
            $('.education-entry:last').append(formattedonlineDates);
            $('.education-entry:last').append(formattedonlineURL);
        }
    } //end if
};

education.display();

//- - - - - - - - - - - - - - - - - - - - - - -  Button - - - - - - - - - - - - - - - - - - - - -
// $("#main").append(internationalizeButton);

//- - - - - - - - - - - - - - - - - - - - - - -  Map - - - - - - - - - - - - - - - - - - - - - - -
$("#mapDiv").append(googleMap);

//- - - - - - - - - - - - - - - - - - - - - - -  Lets Connect - - - - - - - - - - -  - - - - - - -
