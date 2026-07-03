function showMessage()
{
    alert("Welcome To Event Management System!");
}

function goPage()
{
    window.location.href = "contact.html";
}

function changeColor(element)
{
    element.style.color = "yellow";
    alert("Event Name Color Changed!");
}

function thankYou()
{
    alert("Welcome Metro Eventmangement system");
}

function saveContact(event)
{
    event.preventDefault();

    alert("Contact Details Saved Successfully!");
}

function feedbackMsg(event)
{
    event.preventDefault();

    alert("Thank You For Your Feedback!");
}

function loginUser(event)
{
    event.preventDefault();
    alert("Login successful!");
    window.location.href = "home.html";
}

function signupUser(event)
{
    event.preventDefault();
    alert("Account created successfully!");
    window.location.href = "login.html";
}