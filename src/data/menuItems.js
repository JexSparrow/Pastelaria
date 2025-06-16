// Importe as imagens para os pasteis
import carne from "../assets/menu/pasteis/carne.png";
import carnequeijo from "../assets/menu/pasteis/carnequeijo.png";
import carneovo from "../assets/menu/pasteis/carneovo.png";

import queijo from "../assets/menu/pasteis/queijo.png";

import pizza from "../assets/menu/pasteis/pizza.png";

import frango from "../assets/menu/pasteis/frango.png";
import frangoqueijo from "../assets/menu/pasteis/frangoqueijo.png";

import palmito from "../assets/menu/pasteis/palmito.png";

import calabresa from "../assets/menu/pasteis/calabresa.png";

import chocolate from "../assets/menu/pasteis/chocolate.png";
import banana from "../assets/menu/pasteis/banana.png";


// Importe as imagens para os lanches
import misto from "../assets/menu/lanches/misto.png";
import queijoquente from "../assets/menu/lanches/queijoquente.png";
import paobife from "../assets/menu/lanches/paobife.png";
import paofrango from "../assets/menu/lanches/paofrango.png";
import paoovo from "../assets/menu/lanches/paoovo.png";
import paobolinho from "../assets/menu/lanches/paobolinho.png";
import coxinha from "../assets/menu/lanches/coxinha.png";
import bolinho from "../assets/menu/lanches/bolinho.png";
import kibe from "../assets/menu/lanches/kibe.png";


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

        { name: 'Carne', image: carne, description: 'Sabor tradicional com carne moída bem temperada.' },
        { name: 'Carne com Queijo', image: carnequeijo, description: 'Combinação perfeita de carne e queijo mussarela derretido.' },
        { name: 'Carne, Ovo e Azeitona', image: carneovo, description: 'Clássico recheio de carne com ovo cozido picadinho e azeitonas.' },
        { name: 'Frango', image: frango, description: 'Frango desfiado suculento e bem temperado.' },
        { name: 'Frango com Queijo', image: frangoqueijo, description: 'Frango Desfiado com queijo derretido.' },
        { name: 'Pizza', image: pizza, description: 'O sabor da pizza em formato de pastel, com queijo, presunto e orégano.' },
        { name: 'Queijo', image: queijo, description: 'Recheio farto de Queijo Mussarela derretido e crocante por fora.' },
        { name: 'Palmito', image: palmito, description: 'Palmito Fresco Temperado e cremoso, um clássico da feira.' },
        { name: 'Calabresa com Queijo', image: calabresa, description: 'Calabresa fatiada e temperada com queijo, sabor intenso.' },
        { name: 'Chocolate', image: chocolate, description: 'Doce tentação com chocolate ao leite cremoso.' },
        { name: 'Banana', image: banana, description: 'Banana caramelizada! Temos opção de adicionar Açúcar e Canela' },
    ],
    // Adicione mais pasteis conforme necessário

    snacks: [
        { name: 'Pão com Bife', image: paobife, description: 'Bife com Queijo Derretido e suculento feito na chapa, uma delícia!' },
        { name: 'Pão com Frango', image: paofrango, description: 'Peito de Frango  Temperado com Queijo feito na chapa, uma opção mais fit' },
        { name: 'Queijo Quente', image: queijoquente, description: 'Pão na chapa com queijo derretido.' },
        { name: 'Misto Quente', image: misto, description: 'Tradicional pão na chapa com queijo e presunto.' },
        { name: 'Pão com Ovo', image: paoovo, description: 'Simples e Saboroso. Com opção de adcionar queijo' },
        { name: 'Pão com Bolinho', image: paobolinho, description: 'Um clássico: pão francês com bolinho feito na hora. Com opção de adcionar queijo!' },
        { name: 'Coxinha de Frango', image: coxinha, description: 'Saborosa coxinha de frango desfiado com massa crocante.' },
        { name: 'Bolinho de Carne', image: bolinho, description: 'Clássico bolinho de carne, simples e saboroso.' },
        { name: 'Kibe', image: kibe, description: 'Delicioso kibe frito, temperado no ponto certo.' },
    ],

    // Adicione mais lanches

    drinks: [
        { name: 'Coca Cola', image: coca, description: 'Refrigerante tradicional para acompanhar seu pastél!' },
        { name: 'Coca Zero', image: cocazero, description: 'Refrigerante Zero Açucar, uma opção mais saudável!' },
        { name: 'Guaraná Antártica', image: guarana, description: 'Refrigerante tradicional para acompanhar seu lanche!' },
        { name: 'Guaraná Zero', image: guaranazero, description: 'Refrigerante Zero Açucar, uma opção mais saudável!' },
        { name: 'Sprite 🏳️‍🌈', image: sprite, description: 'VOCÊS TRABALHAM COM SPRITE? Refrigerante preferido do Matheus!' },
        { name: 'Fanta Laranja', image: fanta, description: 'Refrigerante Tradicional nostálgico' },
        { name: 'Fanta Uva', image: fantauva, description: 'Refrigerante Tradicional que ninguém toma...' },
        { name: 'Tônica', image: tonica, description: 'Refrigerante Refrescante que só o Tio Paulo bebe...' },
        { name: 'Sucos Del Valle', image: delvalle, description: 'Sucos de Latinha. Consultar sabores disponíveis!' },
        { name: 'Água da Serra', image: laranjinha, description: 'A clássica Laranjinha refrescante! Temos a opção de Framboesa também' },
        { name: 'Chocomilk', image: chocomilk, description: 'O lendário Achocolatado da Família Brasileira!' },
        { name: 'Cafézin', image: cafe, description: 'Café aleatório do dia, as vezes fraco e muito doce, boa sorte!' },

        { name: 'Pingadão da Massa', image: cafeleite, description: 'Café com leite para começar bem o dia!' },
        { name: 'Chocolate Quente', image: nescau, description: 'Nescauzão quentinho pra adoçar sua vida!' },
        { name: 'Água Mineral', image: agua, description: 'Escolha entre Natural ou com Gás. Para hidratar!' },
        // Adicione mais bebidas
    ]
};