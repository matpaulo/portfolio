/*
    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

    - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
    - passo 2 - dar um jeito de identificar o clique no elemento da aba
    - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    - passo 4 - marcar a aba clicada como selecionado
    - passo 5 - esconder o conteúdo anterior
    - passo 6 - mostrar o conteúdo da aba selecionada
*/

//passo 1
const tabs = document.querySelectorAll(".tab");

//passo 2
tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        if (tab.classList.contains("selected")) {
            return;
        }
        //passo 3 e 4 (linha 33-39)
       selectTab(tab);
        //passo 5 e 6 (linha 36-43)
        tradeInformationsTab(tab);
    })
})

function selectTab(tab) {
     //passo 3
     const tabSelected = document.querySelector(".tab.selected");
     tabSelected.classList.remove("selected");
     //passo 4
     tab.classList.add("selected");
}

function tradeInformationsTab(tab) {
    //passo 5
    const informationsSelected = document.querySelector(".informations.selected");
    informationsSelected.classList.remove("selected");
    //passo 6
    const idElementInformationsTabs = `informations-${tab.id}`;
    const informatinsToShow = document.getElementById(idElementInformationsTabs);
    informatinsToShow.classList.add("selected");
}