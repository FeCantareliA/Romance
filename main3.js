const { DateTime, Interval } = luxon;

    // Data e hora de início
    const inicio = DateTime.fromISO('2019-09-23T00:00:00');

    setInterval(() => {
      const agora = DateTime.now();

      // Cálculo preciso da diferença
      const diff = agora.diff(inicio, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();

      const anos = Math.floor(diff.years);
      const meses = Math.floor(diff.months);
      const dias = Math.floor(diff.days);
      const horas = Math.floor(diff.hours);
      const minutos = Math.floor(diff.minutes);
      const segundos = Math.floor(diff.seconds);

      // Exibe o contador no formato desejado
      document.getElementById("contador").innerText =
        `${anos} anos, ${meses} meses, ${dias} dias, ` +
        `${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    }, 1000);


function img(){

  let imagem = document.getElementById('image');
  let imagens = ['./assets/João-Clara-1.png','./assets/João-Clara-2.png','./assets/João-Clara-3.png',
    './assets/João-Clara-4.png','./assets/João-Clara-5.png','./assets/João-Clara-6.png',
  ]

  let random  = Math.floor(Math.random()*imagens.length)
  imagem.src = imagens[random]

}
setInterval(img, 3000);