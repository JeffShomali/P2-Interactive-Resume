//bio object
var bio = {
    "name": "Jeff Shomali",
    "role": "Full Stack Web Developer",
    "contacts": {
        "mobile": "415-504-1135",
        "email": "jeffshomali@gmail.com",
        "twitter": "@jeffshomali",
        "github": "JeffShomali",
        "blog": "www.JeffShomali.com",
        "location": "San Francisco"
    },
    "biopic": "images/avatar.png",
    "welcomeMessage": "Welcome to my resume",
    "skills": ["Web Developer", "Enterprunier", "Blogger", "Designer"]
};

//work object
var work = {
    jobs: [{
        "employer": "Khazar24 Co",
        "title": "UI/UX Designer",
        "dates": "2005 - 2007",
        "location": "IRAN",
        "description": "Khazar 24 was first online real estate business in the north of IRAN during 2005 to 2007. During those days, Khazar24.com was one of the Real Estate industry's most recognized brands and acquired​ by Amin Ertebatat Co for $250,000 ​ in 2008.",
    }, {
        "employer": "Perspollice LLC",
        "title": "Founder",
        "dates": "2010 - 2013",
        "location": "United States, California",
        "description": "I established an LLC company called Perspollice LLC and bought an Italian restaurant in San Ramon CA, called Pasta Primavera. Then I got my investment visa and moved to the United States. After 2 years, I sold my share to my family and start my new challenge to learn web developments​.",
    }, ]
};



var education = {
    "schools": [{
        "name": "Diablo Valley College",
        "degree": "Associate Degree in Computer Science",
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
        "title": "ZagrosFX",
        "dates": "2014 - 2015",
        "description": "ZagrodFX was a signal provider in FOREX market",
        "images": ["images/project2.png"]

    }, {
        "title": "PESS.biz",
        "dates": "2015 - 2016",
        "description": "Pars Equality is a startup accelator in Silicon Valley",
        "images": ["images/project2.png"]
    }]
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
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
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
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCounter].url);

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
