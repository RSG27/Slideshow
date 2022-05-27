# Projeto Slider

Projeto realizado predominantemente em Javascript a fim de aplicar os conceitos de diversos tópicos da linguagem, a exemplo das funções, dos métodos querySelector e querySelectorAll, das propriedades .length, 
.clientHeight e .clientWidth.

# Tecnologias Utilizadas

- HTML Semântico
- CSS  Flexbox
- Javascript

# Como o javascript foi usado?

Inicialmente como em todo código, foram usadas variáveis globais, a saber: totalSlides, currentSlide e sliderWidth para nos retornar a quantidade total de slides, a transição entre eles e a largura do slide, respectivamente.

Em seguida, usamos o querySelector na classe "slider--width" para calcular a largura total do slider, através do produto entre sliderWidth e totalSlides, na classe "slider--controls" para obtermos a largura dos controles pela variável sliderWidth(que traz a altura de "slider" via .clientWidth) e a altura dessa mesma classe(da mesma forma que na largura, só que dessa vez usando o .clientHeight), posicionando os controles no meio da tela.

Além disso, tivemos as funções goPrev() que calcula a volta de um slide para o outro, da esquerda para a direita, goNext() que calcula a ida de um slide para o outro, da direita para a esquerda e updateMargin() que calcula a largura de cada slide e a quantidade de margem necessária, em pixels, para fazer a transição entre eles através desse produto(currentSlide * sliderItemWidth).

Por último, temos setInterval, função temporizadora que executa goNext() após 3s.


