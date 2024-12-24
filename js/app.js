themeToggler.onclick = () => {
  document.body.classList.toggle("light-mode");
  document.getElementById("header__theme__toggler__image").src =
    document.body.classList.contains("light-mode")
      ? "./images/Moon.png"
      : "./images/Sun.svg";
  document.getElementById("select-logo").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/user.black.svg"
    : "./images/User.png";

  document.getElementById("select__logo").src =
    document.body.classList.contains("light-mode")
      ? "./images/user.black.svg"
      : "./images/User.png";

  document.getElementById("third-user").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/user.black.svg"
    : "./images/User.png";

  document.getElementById("fourth-user").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/user.black.svg"
    : "./images/User.png";

  document.getElementById("fifth-user").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/user.black.svg"
    : "./images/User.png";

  document.getElementById("sixth-user").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/user.black.svg"
    : "./images/User.png";

  document.getElementById("select-file-user").src =
    document.body.classList.contains("light-mode")
      ? "./images/file-black.png"
      : "./images/File-user.png";

  document.getElementById("select-user-file").src =
    document.body.classList.contains("light-mode")
      ? "./images/file-black.png"
      : "./images/File-user.png";

  document.getElementById("third-file").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/file-black.png"
    : "./images/File-user.png";

  document.getElementById("fourth-file").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/file-black.png"
    : "./images/File-user.png";

  document.getElementById("fifth-file").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/file-black.png"
    : "./images/File-user.png";

  document.getElementById("sixth-file").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/file-black.png"
    : "./images/File-user.png";

  document.getElementById("first-gear").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/gear-black.png"
    : "./images/gear.png";

  document.getElementById("second-gear").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/gear-black.png"
    : "./images/gear.png";

  document.getElementById("third-gear").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/gear-black.png"
    : "./images/gear.png";

  document.getElementById("fourth-gear").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/gear-black.png"
    : "./images/gear.png";

  document.getElementById("fifth-gear").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/gear-black.png"
    : "./images/gear.png";

  document.getElementById("sixth-gear").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/gear-black.png"
    : "./images/gear.png";

  document.getElementById("first-oil").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/oil-black.png"
    : "./images/oil.png";

  document.getElementById("second-oil").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/oil-black.png"
    : "./images/oil.png";

  document.getElementById("third-oil").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/oil-black.png"
    : "./images/oil.png";

  document.getElementById("fourth-oil").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/oil-black.png"
    : "./images/oil.png";

  document.getElementById("fifth-oil").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/oil-black.png"
    : "./images/oil.png";

  document.getElementById("sixth-oil").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/oil-black.png"
    : "./images/oil.png";

  document.getElementById("instagram").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/i.black.png"
    : "./images/instagram.png";

  document.getElementById("twitter").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/t.black.png"
    : "./images/twitter.png";

  document.getElementById("facebook").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/f.black.png"
    : "./images/facebook.png";

  document.getElementById("watsapp").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/w.black.png"
    : "./images/watsapp.png";

  document.getElementById("black-arrow").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/black-arrow.png"
    : "./images/Caret down.png";

  document.getElementById("arrow-black").src = document.body.classList.contains(
    "light-mode"
  )
    ? "./images/black-arrow.png"
    : "./images/Caret down.png";
};
