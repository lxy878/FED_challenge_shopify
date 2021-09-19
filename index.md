const api_key = "ZCcyJ6IFyddIF9icdsN5TTqgWC2NgK5LSG9w34SA"

fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&&count=5`)
.then(resp=>resp.json()).then(json=>{
    display(json)
})

function display(data){
    console.log(data)
}