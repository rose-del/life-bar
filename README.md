# Barra de Vida com Gojo (Jujutsu Kaisen)

Um mini projeto divertido de barra de vida interativa com efeitos sonoros 
e o personagem **Satoru Gojo** do anime *Jujutsu Kaisen*. Criado com HTML, 
CSS e JavaScript para estudos do Padrão de Projeto Singleton.

## Funcionalidades

- Exibe a vida do personagem de 0 a 100
- Botões para:
  - **Levar dano**: reduz a vida e troca a imagem do personagem para ferido quando a vida é menor ou igual a 60
  - **Curar**: aumenta a vida e mostra o personagem se curando temporariamente
  - **Resetar**: reinicia a vida com som de reinício
- Efeitos sonoros personalizados
- Imagens em pixel art do Gojo (normal, ferido e se curando)

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do Projeto
```
📦 life-bar
├── audios/
│   ├── gojo-reset.mp3
│   ├── punch.mp3
│   └── voce-e-fraco.mp3
├── images/
│   ├── Satoru-Gojo.png
│   ├── SatoruGojo-Curado.png
│   └── SatoruGojo-ferido.png
├── index.html
├── style.css
└── script.js
```
