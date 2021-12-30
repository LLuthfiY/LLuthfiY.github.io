let card_container = document.getElementById("card-container");
fetch("https://raw.githubusercontent.com/LLuthfiY/LLuthfiY.github.io/master/src/json/project.json")
.then(response => {
   return response.json();
})
.then(data => {
    data["data"].forEach(element => {
        create_card(element["nama_project"], element["link"], element["image"], element["type"]);
    });
});

function create_card(name, link, image, type) {
    card_container = document.getElementById("card-container");
    card_container.innerHTML += `
                        <a href="`+link+`"cc class="col-12 col-lg-3 col-md-6 mb-2 `+type+`">
                            <div class="card p-0 h-auto bg-dark">
                                
                                <img src="`+image+`" class=" w-100 card-img opacity-50" alt="">
                                <div class=" card-img-overlay">
                                    <p class=" text-light">`+name+`</p>
                                </div>
                            </div>
                        </a>
    `
}

function getaAllCards() {
    return Array.from(card_container.children)
}

function showAll() {
    let childs = getaAllCards()
    childs.forEach(element => {
        element.classList.remove("hidden")
        
    });
}
function showProgram() {
    let childs = getaAllCards()
    childs.forEach(element => {
        element.classList.add("hidden")
        if (element.classList.contains("program")){
            element.classList.remove("hidden")
        }
        
    });
    
    
}
function showBrand() {
    let childs = getaAllCards()
    childs.forEach(element => {
        element.classList.add("hidden")
        if (element.classList.contains("brand")){
            element.classList.remove("hidden")
        }
        
    });
    
    
}
function showWeb() {
    let childs = getaAllCards()
    childs.forEach(element => {
        element.classList.add("hidden")
        if (element.classList.contains("web")){
            element.classList.remove("hidden")
        }
        
    });
    
    
}

console.log(getaAllCards());