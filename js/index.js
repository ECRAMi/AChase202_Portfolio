var packOpen = false;

$(document).ready(function(){
    $("img").on('dragstart', function () {
        return false;
    });

    $(".mainPack").click(function(){
        if(!packOpen){
            packOpen = true;
            let repeatVal = 0;
            $(".flash").removeClass("hidden");
            $(".flash").css("animation-play-state", "running");
            while(repeatVal < 50){
                
                setTimeout(function() {
                    $(".mainPack").css('top', randInt(repeatVal * 0.75) + "px");
                    $(".mainPack").css('bottom', randInt(repeatVal * 0.75) + "px");
                    $(".mainPack").css('left', randInt(repeatVal * 0.75) + "px");
                    $(".mainPack").css('right', randInt(repeatVal * 0.75) + "px");
                    
                }, 80 * repeatVal);
                repeatVal++;
            }
            setTimeout(function() {
                $(".flash").css("animation-iteration-count", "2");                
            }, 90 * repeatVal);
            $(".flash").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
                $(".mainPack").remove();
                $("#directions").text("Click a card to view more information");
                $(".card").css("display", "grid");
                $(".flash").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
                function(e) {
                    $(".flash").remove();

                });
            });
        }
    });

    $(".card").click(function(){
        $("#directions").text("Click the [ BACK ] button to return to the cards");
        if($(this).hasClass("info")){
        
            $(".mainContent").append('<div class="iblock" id="aboutMe">' +
            '<h1>About me</h1>' +
            '<p>Hello, my name is Aryon Chase. I\'m an aspiring developer hoping to bring my skills to more program development.</p> ' +
            '<p>I pride myself in completing tasks alongside helping other with their own tasks and struggles. I\'m often told I\'m skilled at error fixing and suggesting better solutions.</p>' +
            '<p>I have experience in many different languages including the basic html, css, and javascript/jquery as well as the more complex languages, php, python, and a little bit of flutter.</p>' +
            '<p>I\'ve learned from several locations, them being Video Game design (Hempfield High School 11th Grade), Interactive Media and Web Design (Lancaster County Career and Technical Center), and Computer Software Engineering Technology (Thaddeus Stevens College)</p>' +
            '<p>I\'m always friendly towards anyone, customer or not, and like making people smile so as their day is just a bit better.</p>' +
            '<p>My primary interest lies in video game programming but I also want to learn sound and art design at some point to possible design programs of my own from complete scratch and without online resources.</p>' +
            '<p>That concludes the summary of me and my interests, I hope you learned something interesting about me and what I do.</p>' +
            '</div>' +
            '<button class="back">BACK</button>');
        
        }else if($(this).hasClass("experience")){
            
            $(".mainContent").append(
            '<div class="iblock" id="experience">' +
            '<h1 class="span2">My Experience</h1>' +
            '<div class="education">' +
                '<h2>Education</h2>' +
                '<div>' +
                    '<div id="TSEDU">' +
                        '<p class="faded">JANUARY 2021 - MAY 2023</p>' +
                        '<p class="bold">Thaddeus Stevens College. 750 E King St, Lancaster, PA</p>' +
                        '<p>Graduated with an average GPA of 3.9</p>' +
                        '<p>Subject of study: Computer Software Engineering</p>' +
                    '</div>' +
                    '<div id="LCCTCEDU">' +
                        '<p class="faded">SEPTEMBER 2019 - JUNE 2020</p>' +
                        '<p class="bold">Brownstown LCCTC. 231 Snyder Rd, Ephrata, PA<span class="endLine"> - Certification</span></p>' +
                        '<p>Graduated with an average GPA of 3.9</p>' +
                        '<p>Subject of study: Interactive Media & Web Design</p>' +
                    '</div>' +
                    '<div id="LCCTCEDU">' +
                        '<p class="faded">SEPTEMBER 2016 - JUNE 2020</p>' +
                        '<p class="bold">Warwick High School. 301 W Orange St, Lititz, PA<span class="endLine"> - High School Diploma</span></p>' +
                        '<p>Graduated with an average GPA of 3.3</p>' +
                    '</div>' +
                    '<div id="LCCTCEDU">' +
                        '<p class="faded">SEPTEMBER 2018 - JUNE 2019</p>' +
                        '<p class="bold">Hempfield High School. 200 Stanley Ave, Landisville, PA</p>' +
                        '<p>Ended the year with an average GPA of 3.5</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="experience">' +
                '<h2>Work Experience</h2>' +
                '<div>' +
                    '<p class="faded">APRIL 2019 - PRESENT</p>' +
                    '<p class="bold">Riptide Carwash, 1056 Lititz Pike, Lititz, PA <span class="endLine"> - Shift Leader</span></span></p>' +
                    '<ul>' +
                        '<li>Ability to handle all maintenance and small repairs.</li>' +
                        '<li>Ability to handle daily checklist procedures.</li>' +
                        '<li>Ability to communicate to Customers and employees.</li>' +
                        '<li>Ensure that the facility is always kept clean and organized.</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
            '<div class="skills">' +
                '<h3 class="span2">Skills</h3>' +
                '<ul>' +
                    '<li>Problem Solving</li>' +
                    '<li>Critical Thinking</li>' +
                    '<li>Flexibility</li>' +
                    '<li>Communication</li>' +
                '</ul>' +
                '<ul>' +
                    '<li>Teamwork</li>' +
                    '<li>Organization</li>' +
                    '<li>Customer Service</li>' +
                    '<li>Adaptability</li>' +
                '</ul>' +
            '</div>' +
            '<div class="extrainfo">' +
                '<h4>Languanges learned</h4>' +
                '<ul>' +
                    '<li>HTML</li>' +
                    '<li>css</li>' +
                    '<li>javascript/jquery</li>' +
                '</ul>' +
                '<ul>' +
                    '<li>php</li>' +
                    '<li>python</li>' +
                    '<li>flutter</li>' +
                '</ul>' +
            '</div>' +
        '</div>' +
        '<button class="back">BACK</button>');
            
        }else if($(this).hasClass("works")){
            
            $(".mainContent").append(
                '<div class="iblock" id="works">' +
                    '<h1>My Works</h1>' +
                '</div>' +
                '<button class="back">BACK</button>'
            );
            
        }
        $(".iblock").css("animation-play-state", "running");

        $(".iblock").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
        function(e) {
            $(".iblock").css("animation-play-state", "paused");
            $(".iblock").css("animation-name", "fadeout")
            $(".back").click(function(){
                $(".iblock").css("animation-play-state", "running")
                $(".iblock").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
                function(e) {
                    $(".iblock").remove();
                    
                });
                $("#directions").text("Click a card to view more information");
                $(".card").css("display", "grid");
                $(".back").remove();

            });
        });
    });
});

function randInt(max) {
    return Math.ceil(Math.random() * max);
}