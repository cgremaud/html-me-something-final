window.addEventListener("load", () =>{
    let modeSwitchButton = document.getElementById("dark-mode-select")
    modeSwitchButton.addEventListener("click", () =>{
        window.confirm("are you sure you want to switch to light mode?")
    })
})