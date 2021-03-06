window.addEventListener("load", () =>{
    let modeSwitchButton = document.getElementById("dark-mode-select")
    modeSwitchButton.addEventListener("click", () =>{
        let confirm = window.confirm("are you sure you want to switch to light mode?")
        if (confirm){
            modeSwitchButton.innerHTML = "Click to activate dark mode"
            // document.body.style.backgroundColor = "white"
        }
    })
})