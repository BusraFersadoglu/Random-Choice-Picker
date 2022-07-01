const textarea = document.getElementById("textarea");
const tagsElement = document.getElementById("tags");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value)

    if(e.key == "Enter"){
        setTimeout(() => {
            e.target.value = "" // clear textarea
        }, 10)

        randomSelect()
    }
});

function createTags(input){
    const tags = input.split("-").filter(tag => tag.trim() !== "").map(tag => tag.trim())
    
    tagsElement.innerHTML = ""

    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsElement.appendChild(tagEl)
    } )
}

function randomSelect(){

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        selectTag(randomTag)

        setTimeout(() => {
            unselectTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            selectTag(randomTag)
        }, 100)

    }, 3000)
}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function selectTag(tag){
    tag.classList.add("select")
}

function unselectTag(tag){
    tag.classList.remove("select")
}
