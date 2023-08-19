document.getElementById("boton").addEventListener("click", validarRegistro);

//Validar Registro
function validarRegistro(e) {
  let correo = document.getElementById("floatingInput3").value;
  let contraseña = document.getElementById("exampleInputPassword1").value;
  let alerta = document.getElementById("alerta");
  const checkbox = document.getElementById("exampleCheck1");
  let expresion = /\w+@+\w+\.+[a-z]/;

  if (expresion.test(correo) && contraseña.length >= 6 && checkbox.checked) {
    localStorage.setItem("correo", correo);
    localStorage.setItem("pass", contraseña);
    window.open("index.html");
  } else if (
    !expresion.test(correo) &&
    contraseña.length >= 6 &&
    checkbox.checked
  ) {
    document.getElementById("obligatorio").style.display = "block";
    document.getElementById("alerta1").style.display = "block";
    e.preventDefault();
  } else if (
    contraseña.length < 6 &&
    expresion.test(correo) &&
    checkbox.checked
  ) {
    document.getElementById("obligatorio1").style.display = "block";
    document.getElementById("alerta1").style.display = "block";
    e.preventDefault();
  } else if (
    expresion.test(correo) &&
    contraseña.length >= 6 &&
    !checkbox.checked
  ) {
    document.getElementById("obligatorio2").style.display = "block";
    document.getElementById("alerta1").style.display = "block";
    e.preventDefault();
  } else {
    document.getElementById("obligatorio").style.display = "block";
    document.getElementById("obligatorio1").style.display = "block";
    document.getElementById("obligatorio2").style.display = "block";
    document.getElementById("alerta1").style.display = "block";
    e.preventDefault();

    if (!localStorage.getItem("correo") || !localStorage.getItem("pass")) {
      window.location.href = "login.html";
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "b") {
    localStorage.clear();

    alert("LocalStorage ha sido borrado.");
  }
});