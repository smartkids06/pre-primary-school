console.log("Smart Kids Website Loaded 🎈");
document.getElementById("contactForm").addEventListener("submit", function(e){

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if(name === "" || phone === ""){
        alert("Please fill all required fields");
        e.preventDefault();
    }
});

