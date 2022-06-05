const mensagemAgendamento = () =>
{
  const pax = document.getElementById("cliente").value;
  const biometria = document.getElementById("casv").value;
  const entrevsita = document.getElementById("consulado").value;
  const placeConsulado = document.getElementById("place").value;

  let nome = pax
  let casv = biometria
  let consulado = entrevsita
  let local = placeConsulado


 if (local === "Rio de Janeiro")
 {
  document.getElementById("resultado").innerHTML = `Bom dia ${pax}, tudo bem? Aqui é a Nicolly da EC Vistos e o seu CASV está agendado para o dia ${biometria} e a entrevista no consulado para o dia ${entrevsita}, no ${placeConsulado}. Caso não tenha disponibilidade para esses agendamentos e precise reagendar, me avisa o melhor dia e horário que tentaremos remarcar. Obrigada`

 }

else{
  document.getElementById("resultado").innerHTML = `Bom dia ${pax}, tudo bem? Aqui é a Nicolly da EC Vistos e o seu CASV está agendado para o dia ${casv} e a entrevista no consulado para o dia ${entrevsita}, em ${placeConsulado}. Caso não tenha disponibilidade para esses agendamentos e precise reagendar, me avisa o melhor dia e horário que tentaremos remarcar. Obrigada`}

}
