window.addEventListener("load", () =>{

    let modeSwitchButton = document.getElementById("dark-mode-select")
    let darkModeOn = true 
    let mainTxtBkgrd = document.getElementById("main-text")
    let navBar =document.getElementById("title-bar")
    let confirm 

    modeSwitchButton.addEventListener("click", () => {

        confirm = window.confirm("Are you sure you want to switch?")

        if (darkModeOn && confirm){
            darkModeOn = false
            modeSwitchButton.innerHTML = "Click to activate dark mode"
            mainTxtBkgrd.style.backgroundColor = "white"
            mainTxtBkgrd.style.color = "black"
            navBar.style.backgroundColor = "white"
            navBar.style.color = "black"

        } else if (!darkModeOn && confirm) {
            darkModeOn = true
            modeSwitchButton.innerHTML = "Click to activate light mode"
            mainTxtBkgrd.style.backgroundColor = "black"
            mainTxtBkgrd.style.color = "white"
            navBar.style.backgroundColor = "black"
            navBar.style.color = "white"
        }
    })
})