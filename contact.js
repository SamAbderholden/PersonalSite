document.addEventListener('DOMContentLoaded', function () {
    setTimeout(fadeContact, 2500);

    function fadeContact(){
        fadeInElement('contactWrapper', 1500, function(){
            fadeInElement('resume', 1000, function(){
                fadeInElement('resumeDownload', 500);
            })
        });
    }

    function fadeInElement(elementId, duration, callback) {
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
            } else if (typeof callback === 'function') {
                callback();
            }
        }

        requestAnimationFrame(animate);
    }

    document.getElementById('resumeDownload').addEventListener('click', function () {
        // Get the image source
        var imageUrl = document.getElementById('resume').src;

        // Open the image in a new tab
        window.open(imageUrl, '_blank');
    });

});

function submitForm() {
    // Get form elements
    const form = document.getElementById('contactForm');
    const formData = {};

    // Iterate over form elements
    for (const element of form.elements) {
        // Exclude buttons and elements without a name attribute
        if (element.type !== 'button' && element.name) {
            formData[element.name] = element.value;
        }
    }

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abderholdens@gmail.com",
        Password : "4F3C8981EADDA6CB3AF69E8D249C18F83BA7",
        To : 'abderholdens@gmail.com',
        From : 'abderholdens@gmail.com',
        Subject : "Contact Inquiry From " + formData['name'] + " @" + formData['email'],
        Body : formData['message'] + " " + formData['phone'] 
    }).then(
        alert("Thank you for reaching out!")
    );
    
}

