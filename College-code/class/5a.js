document.addEventListener("DOMContentLoaded",()=>{

    //accessing the h1 element by id
    let header=document.getElementById("header");
    console.log(header.textContent);

    //accessing the paragraph element by class
    let description=document.querySelector(".description");
    console.log(description.textContent);

    //accessing button by tag name
    let button=document.querySelector("button");
    console.log(button.textContent);

    //MANIPULATING THE DOM
//update text content
header.textContent="updated DOM header";

//update inner html
description.innerHTML="This is <strong>modified</strong> content";

//add background colour to the header
header.style.backgroundColor="lightblue";

//change the font size of he paragraph
description.style.fontSize="20px";

//create new paragraph element
let newParagraph=document.createElement("p");
newParagraph.textContent="this is dynamically added paragraph";
//append to body
document.body.appendChild(newParagraph);

header.addEventListener("mouseover",()=>{
    header.style.color="red";
});
header.addEventListener("mouseout",()=>{
    header.style.color="black";
});

});