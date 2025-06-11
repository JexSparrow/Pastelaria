// Importe as imagens para os pasteis
import carne from "../assets/menu/carne.png"; // Crie estas imagens
import queijo from "../assets/menu/queijo.png";
import frango from "../assets/menu/frango.png";

// Importe as imagens para os lanches
import misto from "../assets/menu/misto.png";
import paobolinho from "../assets/menu/paobolinho.png";
import xburg from "../assets/menu/xburg.png";

// Importe as imagens para as bebidas
import coca from "../assets/menu/coca.png";
import agua from "../assets/menu/agua.png";
import cafe from "../assets/menu/cafe.png";


export const menuItems = {
    pastels: [
        { id: 'pc1', name: 'Pastel de Carne', image: carne, description: 'Delicioso pastel de carne moída bem temperada.' },
        { id: 'pq1', name: 'Pastel de Queijo', image: queijo, description: 'Queijo derretido por dentro, crocante por fora.' },
        { id: 'pf1', name: 'Pastel de Frango', image: frango, description: 'Frango desfiado saboroso' },
        // Adicione mais pasteis conforme necessário
    ],
    snacks: [
        { id: 'lx1', name: 'X-Burger', image: xburg, description: 'Pão, hambúrguer, queijo e salada.' },
        { id: 'lm1', name: 'Misto Quente', image: misto, description: 'Pão na chapa com queijo e presunto.' },
        { id: 'ln1', name: 'Pão com Bolinho', image: paobolinho, description: 'Pão francês com bolinho feito na hora!' },
        // Adicione mais lanches
    ],
    drinks: [
        { id: 'rc1', name: 'Coca Cola', image: coca, description: 'Refrigerante tradicional, TRINCANDO.' },
        { id: 'sl1', name: 'Cafézin', image: cafe, description: 'Café aleatório do dia, as vezes fraco e muito doce, boa sorte!' },
        { id: 'am1', name: 'Água Mineral', image: agua, description: 'Água mineral natural, para hidratar.' },
        // Adicione mais bebidas
    ]
};