

  <footer>
  <div class="up_arrow">
  <i class="fa fa-arrow-up" aria-hidden="true"></i>
  </div>
  </footer>
  <script>
  let header = document.querySelector("header");
  let upArrow = document.querySelector("footer .up_arrow i");


  let topContent = document.querySelector(".top_content");




  let main = document.querySelector("#main");

  let logo = document.querySelector("#logo");




    window.addEventListener('scroll',function() {
      let scrolled = window.scrollY;
  if (scrolled > header.offsetHeight) {
    header.classList.add("header_fixed_position");
  }

  else {
    header.classList.remove("header_fixed_position");
  }

});


     upArrow.onclick = () => {
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    };




    main.onclick = () =>  window.location.href = "../../Main/templates/main.php";

    logo.onclick = () => window.location.href = "../../Main/templates/main.php";



    <?php
    if (!isset($_SESSION["email"]))
    {
    ?>
    let reg = document.querySelector("#reg");

    let login = document.querySelector("#login");

    reg.onclick = () =>  window.location.href = "../../registration_login/templates/registration.php";


    login.onclick = () =>  window.location.href = "../../registration_login/templates/login.php";
    <?php
  }
  else {
    ?>

    let account = document.querySelector("#account");

    let add_News = document.querySelector("#add_News");

    let exit = document.querySelector("#exit");


    account.onclick = () =>  window.location.href = "../../AccountPage/templates/accountPage.php";

    add_News.onclick = () =>  window.location.href = "../../Add_News/templates/addNews.php";


    exit.onclick = () => {



      return fetch("../../registration_login/includes/logout.includes.php").
      then(() => {
        alert("Вы успешно удалили сессию");
        window.location.reload();
      })

}

<?php
}
?>
  </script>
