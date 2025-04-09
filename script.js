class LifeManager {
    constructor() {
        if (LifeManager.instance) {
            return LifeManager.instance;  
        }
        this.vida = 100;
        LifeManager.instance = this;
    }

    tomarDano(valor) {
        this.vida = Math.max(0, this.vida - valor);
    }

    curarDano(valor) {
        this.vida = Math.min(100, this.vida + valor);
    }

    reiniciar() {
        this.vida = 100;
    }

    getVida() {
        return this.vida;
    }
}

const lifeManager = new LifeManager();

function atualizar() {
    const vida = lifeManager.getVida();
    const fill = document.getElementById('lifeFill');
    const text = document.getElementById('lifeText');
    const gojoImg = document.getElementById('gojoImg');

    fill.style.width = `${vida}%`;
    fill.style.backgroundColor = vida > 50 ? '#00ff00' : vida > 20 ? '#ffaa00' : '#ff0000';
    text.textContent = `Vida: ${vida}`;

    if (vida >= 70) {
        gojoImg.src = 'images/Satoru-Gojo.png';
    }else if (vida <= 60) {
        gojoImg.src = 'images/SatoruGojo-ferido.png';
    }
}

const somGolpe = new Audio('audios/punch.mp3');
const somCura = new Audio('audios/voce-e-fraco.mp3');
const somReiniciar = new Audio('audios/gojo-reset.mp3');

function tomarDano() {
    lifeManager.tomarDano(10);
    somGolpe.play();
    atualizar();
}

function curarDano() {
    lifeManager.curarDano(10);
    somCura.play();

    const gojoImg = document.getElementById('gojoImg');
    gojoImg.src = 'images/SatoruGojo-Curado.png';

    setTimeout(() => {
        atualizar();
    }, 5000);
}

function reiniciarVida() {
    somReiniciar.play();

    setTimeout(() => {
        lifeManager.reiniciar();
        atualizar();
    }, 8500); 
}

atualizar();