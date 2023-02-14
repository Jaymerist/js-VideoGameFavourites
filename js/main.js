/*
Steps 1-3 READ THE PDF!!!
*/

let videoGameForm = document.querySelector("#video-game-form")
let allGameList = document.querySelector(".all-games")
let allGameListItems = document.querySelectorAll(".all-games li")
let myGameList = document.querySelector(".my-favourite-games")
let myGames = []

// event listener for step 1
videoGameForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    let platform = event.target.elements['platform-family'].value.toLowerCase()

    filterGames(platform)

})

const filterGames = (platform) => {

    allGameListItems.forEach(element => {
      let gameElement = element.innerHTML

      if(gameElement.toLowerCase().includes(platform)){
        element.classList.remove("hidden-item")
      }
      else{
        element.classList.add("hidden-item")
      }

    });
}

// event listener for step 2
/* HTML for step 2 to add to the list
<li class="list-group-item">VIDEO GAME NAME HERE</li>
*/
allGameList.addEventListener("click", (event)=> {
    let game = event.target.innerText
 
    addToFavoriteGames(game)
})
 
const addToFavoriteGames = (game) => {

  //only add to list if it does not already exist in the array
    if(!myGames.includes(game)){
      console.log(myGames.includes(game))
      myGames.push(game)
    }
    renderFavoriteList()

}

const renderFavoriteList = () =>{
  myGameList.innerHTML = ""

  myGames.forEach(game => {
      let newFavoriteGame = `<li class="list-group-item">${game}</li>`
      myGameList.innerHTML = newFavoriteGame + myGameList.innerHTML
  });
}

// event listener for step 3
myGameList.addEventListener("click", (event)=> {
  let favGame = event.target.innerText

  removeFromFavouriteGames(favGame)
 
})

const removeFromFavouriteGames = (game) => {
    index = myGames.indexOf(game)
    
    myGames.splice(index, 1)
    renderFavoriteList()
}