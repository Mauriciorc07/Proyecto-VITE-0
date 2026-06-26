export default function darkmode(){
    const $btnDarkMode = document.querySelector(".header--darkModeButton");
    const $icono = $btnDarkMode.querySelector(".fa-solid")

    const theme = localStorage.getItem("theme");

    if(theme === "dark"){
        $icono.classList.remove("fa-moon")
        $icono.classList.add("fa-sun")
        document.body.classList.add("dark")
    }

    // $icono.classList.toggle("fa-sun", theme === "dark")

  


    // registrar el evento click en el boton
    $btnDarkMode.addEventListener("click", (e)=>{

        const isDark = localStorage.getItem("theme") === "dark"

        $icono.classList.toggle("fa-moon")
        $icono.classList.toggle("fa-sun")
        document.body.classList.toggle("dark")
        localStorage.setItem("theme", isDark ? "light" : "dark" );
        // const isDark = $icono.classList.contains("fa-moon");
        
        
       


        // const $header = document.querySelector("header")
        // const $main = document.querySelector("main")

        // if(isDark){
        //    $header.classList.toggle("dark")
        //    $main.classList.toggle("dark")
        // };
        
    //   console.log("click")

/*     if($icono.classList.contains("fa-moon") ){
        $icono.classList.remove("fa-moon")
        $icono.classList.add("fa-sun")
    }else{
         $icono.classList.add("fa-moon")
        $icono.classList.remove("fa-sun")
    }
      */

    }); 
    
    
}