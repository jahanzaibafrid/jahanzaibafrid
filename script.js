var _a;
// listing elements
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var expirenceElement = document.getElementById("expirence");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailElement && phoneElement && educationElement && expirenceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var expirence = expirenceElement.value;
        var skills = skillsElement.value;
        // create output
        var resumeOutput = "\n        <h2>resume</h2>\n        <p><strong>Name</strong>".concat(name_1, " </p>\n        <p><strong>email</strong>").concat(email, " </p>\n        <p><strong>phone</strong>").concat(phone, " </p>\n        \n        <h3>education</h3>\n        <p>").concat(education, "<p/>\n\n        <h3>exprience</>\n        <p>").concat(expirence, "<p/>\n\n        <h3>skills</h3>\n        <p>").concat(skills, "<p/>\n        ");
        var resumeOutputElement = document.getElementById("resumeoutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("the resume output element are missing");
        }
    }
});
