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

  document.getElementById("select-file-user").src =
    document.body.classList.contains("light-mode")
      ? "./images/File-user.png"
      : "./images/black.svg";
};
