document.addEventListener('DOMContentLoaded', function () {
    setTimeout(writeIntro, 2500);

    function writeIntro() {
        let textElement = document.getElementById('intro');
        let textContent = "Hi, welcome to my personal website! My name is Sam Abderholden and I am currently " +
            "a junior studying Computer Science at Colorado School of Mines. I plan to continue my education " +
            "to earn my Master's in Computer Science with an expected graduation in 2026!";

        let index = 0;

        function typeWriter() {
            if (index <= textContent.length) {
                textElement.innerHTML = textContent.substring(0, index);
                index++;
                setTimeout(typeWriter, 5); // Adjust the typing speed (in milliseconds)
            }
            else{
                writeBackground();
            }
        }

        typeWriter();
    }

    function writeBackground(){
        let textElement = document.getElementById('coding-background');
        let textContent = "I began my coding journey at Colorado School of Mines after switching over from pursuing a degree in Mechanical Engineering, " +
            "and it has been one of the greatest decisions of my life! Every aspect of Computer Science has been truly interesting and enjoyable to learn, " +
            "from algorithms and basics of computing, to networking and the complexity of the Internet. Throughout my time at Mines I have learned " +
            "languages such as C++, Python, Java, MySQl, PosgreSQL. Additionally, in my own time as well as through my current job at Datava as a Software Developer Intern, " +
            "I have gained a lot of knowledge in languages like JavaScript and PHP, utilizing both daily as well as external frameworks associated with them like ExtJS, Workerman, and JointJS. " +
            "Some of my projects there have included a generative graphing tool, as well as a persistent Websocket server to enhance load speeds.";
        let index = 0;

        function typeWriter() {
            if (index <= textContent.length) {
                textElement.innerHTML = textContent.substring(0, index);
                index++;
                setTimeout(typeWriter, 5); // Adjust the typing speed (in milliseconds)
            }
            else{
                writeHobbies();
            }
        }

        typeWriter();
        
    }

    function writeHobbies(){
        let textElement = document.getElementById('hobbies');
        let textContent = "In my free time I enjoy running, climbing, playing video games, park (or any) skiing, and listening to music! " +
            "I'm originally from outside Chicago, IL, and moving to Colorado for school was a no brainer for me given the amount of outdoor activities " +
            "that are so easy to access and participate in. I also enjoy learning new coding techniques/concepts outside of school and work. " +
            "Around the rest of my website, you can find personal or school projects that I have worked on, as well as a place with all my contact information!";
        let index = 0;

        function typeWriter() {
            if (index <= textContent.length) {
                textElement.innerHTML = textContent.substring(0, index);
                index++;
                setTimeout(typeWriter, 5); // Adjust the typing speed (in milliseconds)
            }
            else{
                fadeInElement('resume', 2500);
            }
        }

        typeWriter();
        
    }

    function fadeInElement(elementId, duration) {
        let element = document.getElementById(elementId);
        let startTime = null;
        const startOpacity = 0;
        const endOpacity = 1;
    
        function animate(currentTime) {
            if (!startTime) {
                startTime = currentTime;
            }
    
            const elapsedTime = currentTime - startTime;
            const progress = elapsedTime / duration;
    
            const opacity = Math.min(progress, 1) * (endOpacity - startOpacity) + startOpacity;
            element.style.opacity = opacity;
    
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
    
        requestAnimationFrame(animate);
    }
});
