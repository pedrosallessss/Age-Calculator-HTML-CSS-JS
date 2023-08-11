function verificar() {
  let hoje = new Date();
  let ano = hoje.getFullYear();
  let mes = hoje.getMonth() + 1;
  let dia = hoje.getDate();
  let inputAno = document.getElementById("txtano");
  let inputMes = document.getElementById("txtmes");
  let inputDia = document.getElementById("txtdia");
  let resAno = document.getElementById("resAno");
  let resMes = document.getElementById("resMes");
  let resDia = document.getElementById("resDia");

  let idadeAno = ano - Number(inputAno.value);
  let idadeMes = mes - (Number(inputMes.value) + 1);
  let idadeDia = 31 - dia;

  if (inputDia.value == 0 || inputDia.value > 31) {
    alert("dia incorreto");
  } else {
    resDia.innerHTML = idadeDia;
  }

  if (inputMes.value == 0 || inputMes.value > 12) {
    alert("erro mes incorreto");
  } else if (idadeMes < 0) {
    idadeMes += 12;
    idadeAno--;
    resMes.innerHTML = idadeMes;
  }

  if (inputAno.value == 0 || inputAno.value > ano) {
    alert("erro ano incorreto");
  } else {
    resAno.innerHTML = idadeAno;
  }
}
