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

var container = document.getElementById('animate');
var emoji = ['👩‍❤️‍👨', '❣️', '💕', '💞', '💜', '❤️', '🩷', '💖', '🥰', '😍', '🥰'];
var circles = [];

for (var i = 0; i < 15; i++) {
  addCircle(i * 150, [10 + 0, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 0, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 - 200, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)]);
}



function addCircle(delay, range, color) {
  setTimeout(function() {
    var c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
      x: -0.15 + Math.random() * 0.3,
      y: 1 + Math.random() * 1
    }, range);
    circles.push(c);
  }, delay);
}

function Circle(x, y, c, v, range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement('span');
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '26px';
  this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function() {
    if (_this.y > 800) {
      _this.y = 80 + Math.random() * 8;
      _this.x = _this.range[0] + Math.random() * _this.range[1];
    }
    _this.y += _this.v.y;
    _this.x += _this.v.x;
    this.element.style.opacity = 1;
    this.element.style.backgroundColor = 'transparent';
    this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
  };
}

function animate() {
  for (var i in circles) {
    circles[i].update();
  }
  requestAnimationFrame(animate);
}

animate();