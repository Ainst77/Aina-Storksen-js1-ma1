//Question 1


const cat = {
    complain:function () {
        console.log("Meow!");
    }
}
cat.complain();


//Question 2

const heading = document.querySelector("h3");

heading.innerHTML="Updated heading";

//Question 3

heading.style.fontSize = "3em";

//Question 4

heading.className = "subheading";

//Question 5

const pElements = document.querySelectorAll("p");
console.log(pElements)

for(let i=0; i<pElements.length; i++){
    pElements[i].style.color = "red";
}

//Question 6


const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow"; 

//Question 7



function loopList(list){
    for (let i = 0; i < list.length; i++){
  
    console.log([list[i].name]);
    }
}
loopList(cats);

//Question 8


const container = document.querySelector(".cat-container");
console.log(container);

let html = "";


function createCats(cats){
    for (let i = 0; i < cats.length; i++){

        let age = "Age unknown";
        
        if (cats[i].age) {
            age = cats[i].age;
        }
        
        

        html += `<div class="cat-container">
        <h5>${cats[i].name}</h4>
        <p>Age: ${age}</p>
        </div>
        `;
       
        //console.log (html);
        

       

    }
        
    container.innerHTML = html; 
    return html;

}
createCats(cats);

