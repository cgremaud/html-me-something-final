window.addEventListener("load", () =>{
    let modeSwitchButton = document.getElementById("dark-mode-select")
    let darkModeOn = true 
    let mainTxtBkgrd = document.getElementById("main-text")
    modeSwitchButton.addEventListener("click", () =>{
        if (darkModeOn){
            darkModeOn = false
            modeSwitchButton.innerHTML = "Click to activate dark mode"
            mainTxtBkgrd.style.backgroundColor = "white"
            mainTxtBkgrd.style.color = "black"
        } else if (!darkModeOn) {
            darkModeOn = true
            modeSwitchButton.innerHTML = "Click to activate light mode"
            mainTxtBkgrd.style.backgroundColor = "black"
            mainTxtBkgrd.style.color = "white"
        }
    })
})