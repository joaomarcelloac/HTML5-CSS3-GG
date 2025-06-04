// Passo 1: Encontrar o Botão no HTML
// Usamos 'document.getElementById()' para encontrar o botão pelo seu ID 'scrollToTopBtn'.
// Guardamos ele em uma variável chamada 'scrollToTopBtn' para podermos usá-lo.
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Passo 2: Fazer o Botão Aparecer/Desaparecer ao Rolar a Página
// 'window.onscroll' significa "Quando a janela do navegador for rolada..."
window.onscroll = function() {
    // Esta condição verifica se o usuário rolou a página para baixo o suficiente.
    // 'document.body.scrollTop' é para alguns navegadores (antigos ou específicos).
    // 'document.documentElement.scrollTop' é para a maioria dos navegadores modernos.
    // Se a rolagem for MAIOR que 200 pixels (você pode mudar esse valor):
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // Adiciona a classe 'show' ao botão.
        // Lembra que no CSS, a classe '.scroll-to-top.show' deixa o botão visível?
        scrollToTopBtn.classList.add("show");
    } else {
        // Caso contrário (se a rolagem for menor que 200px), remove a classe 'show'.
        // Isso esconde o botão novamente.
        scrollToTopBtn.classList.remove("show");
    }
};

// Passo 3: Fazer a Página Rolar para o Topo ao Clicar no Botão
// 'scrollToTopBtn.onclick' significa "Quando o botão for CLICADO..."
scrollToTopBtn.onclick = function() {
    // 'window.scrollTo()' é uma função do navegador que rola a página.
    window.scrollTo({
        top: 0, // Diz para rolar até o topo (posição vertical 0)
        behavior: "smooth" // Faz a rolagem ser suave, em vez de instantânea
    });
};