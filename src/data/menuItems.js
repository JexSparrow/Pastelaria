// Importe as imagens para os pasteis
import carne from "../assets/menu/pasteis/carne.png";
import queijo from "../assets/menu/pasteis/queijo.png";
import frango from "../assets/menu/pasteis/frango.png";
import banana from "../assets/menu/pasteis/banana.png";

// Importe as imagens para os lanches
import misto from "../assets/menu/lanches/misto.png";
import paobolinho from "../assets/menu/lanches/paobolinho.png";
import xburg from "../assets/menu/lanches/xburg.png";

//imagens para as bebidas
import cafe from "../assets/menu/bebidas/cafe.png";
import cafeleite from "../assets/menu/bebidas/cafeleite.png";
import nescau from "../assets/menu/bebidas/nescau.png";
import coca from "../assets/menu/bebidas/coca.png";
import cocazero from "../assets/menu/bebidas/cocazero.png";
import guarana from "../assets/menu/bebidas/guarana.png";
import guaranazero from "../assets/menu/bebidas/guaranazero.png";
import sprite from "../assets/menu/bebidas/sprite.png";
import fanta from "../assets/menu/bebidas/fanta.png";
import fantauva from "../assets/menu/bebidas/fantauva.png";
import tonica from "../assets/menu/bebidas/tonica.png";
import delvalle from "../assets/menu/bebidas/delvalle.png";
import laranjinha from "../assets/menu/bebidas/laranjinha.png";
import chocomilk from "../assets/menu/bebidas/chocomilk.png";
import agua from "../assets/menu/bebidas/agua.png";



export const menuItems = {
    pastels: [
        { id: 'pc1', name: 'Pastel de Carne', image: carne, description: 'Delicioso pastel de carne moída bem temperada.' },
        { id: 'pq1', name: 'Pastel de Queijo', image: queijo, description: 'Queijo derretido por dentro, crocante por fora.' },
        { id: 'pf1', name: 'Pastel de Frango', image: frango, description: 'Frango desfiado saboroso' },
        { id: 'pf1', name: 'Pastel de Banana', image: banana, description: 'Pastel Doce Delicioso, podemos adicionar Açucar e Canela!' },
        // Adicione mais pasteis conforme necessário
    ],
    snacks: [
        { id: 'lx1', name: 'X-Burger', image: xburg, description: 'Pão, hambúrguer, queijo e salada.' },
        { id: 'lm1', name: 'Misto Quente', image: misto, description: 'Pão na chapa com queijo e presunto.' },
        { id: 'ln1', name: 'Pão com Bolinho', image: paobolinho, description: 'Pão francês com bolinho feito na hora!' },
        // Adicione mais lanches
    ],
    drinks: [
        { id: 'rc1', name: 'Coca Cola', image: coca, description: 'Refrigerante tradicional para acompanhar seu pastél!' },
        { id: 'rc1', name: 'Coca Zero', image: cocazero, description: 'Refrigerante Zero Açucar, uma opção mais saudável!' },
        { id: 'rc1', name: 'Guaraná Antártica', image: guarana, description: 'Refrigerante tradicional para acompanhar seu lanche!' },
        { id: 'rc1', name: 'Guaraná Zero', image: guaranazero, description: 'Refrigerante Zero Açucar, uma opção mais saudável!' },
        { id: 'rc1', name: 'SPRITE 🏳️‍🌈', image: sprite, description: 'VOCÊS TRABALHAM COM SPRITE? Refrigerante preferido do Matheus!' },
        { id: 'rc1', name: 'Fanta Laranja', image: fanta, description: 'Refrigerante Tradicional nostálgico' },
        { id: 'rc1', name: 'Fanta Uva', image: fantauva, description: 'Refrigerante Tradicional que ninguém toma...' },
        { id: 'rc1', name: 'Tônica', image: tonica, description: 'Refrigerante Refrescante que só o Tio Paulo bebe...' },
        { id: 'rc1', name: 'Sucos Del Valle', image: delvalle, description: 'Sucos de Latinha. Consultar sabores disponíveis!' },
        { id: 'rc1', name: 'Água da Serra', image: laranjinha, description: 'A clássica Laranjinha refrescante! Temos a opção de Framboesa também' },
        { id: 'rc1', name: 'Chocomilk', image: chocomilk, description: 'O lendário Achocolatado da Família Brasileira!' },
        { id: 'sl1', name: 'Cafézin', image: cafe, description: 'Café aleatório do dia, as vezes fraco e muito doce, boa sorte!' },

        { id: 'sl2', name: 'Pingadão da Massa', image: cafeleite, description: 'Café com leite para começar bem o dia!' },
        { id: 'ns1', name: 'Chocolate Quente', image: nescau, description: 'Nescauzão quentinho pra adoçar sua vida!' },
        { id: 'am1', name: 'Água Mineral', image: agua, description: 'Escolha entre Natural ou com Gás. Para hidratar!' },
        // Adicione mais bebidas
    ]
};