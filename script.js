const calculaNota = () =>
{
  const primeiraNota = document.getElementById("n1").value;
  const segundaNota = document.getElementById("n2").value;
  const terceiraNota = document.getElementById("n3").value;
  const quartaNota = document.getElementById("n4").value;
  /* const quintaNota = document.getElementById("n5").value;
  const sextaNota = document.getElementById("n6").value; */
  
  /* const notaFinal = ((primeiraNota + segundaNota + terceiraNota + quartaNota) / 4).toFixed(1);
   */
  let nome = primeiraNota
  let casv = segundaNota
  let consulado = terceiraNota
  let local = quartaNota
 /*  let horaCASV = quintaNota */
 /*  let horaCONS = sextaNota */

document.getElementById("resultado").innerHTML = `Bom dia ${primeiraNota}, tudo bem? O seu CASV está agendado para o dia ${segundaNota} e a entrevista no consulado para o dia ${terceiraNota}, em ${quartaNota}. Caso não tenha disponibilidade para esses agendamentos e precise reagendar, me avisa o melhor dia e horário que tentaremos remarcar. Obrigada`
}
