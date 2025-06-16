
const tercaImages = import.meta.glob('../assets/Feiras/terca/*.{jpg,jpeg,png,gif}', { eager: true, query: '?url', import: 'default' });
const quintaImages = import.meta.glob('../assets/Feiras/quinta/*.{jpg,jpeg,png,gif}', { eager: true, query: '?url', import: 'default' });
const sextaImages = import.meta.glob('../assets/Feiras/sexta/*.{jpg,jpeg,png,gif}', { eager: true, query: '?url', import: 'default' });
const sabadoImages = import.meta.glob('../assets/Feiras/sabado/*.{jpg,jpeg,png,gif}', { eager: true, query: '?url', import: 'default' });
const domingoImages = import.meta.glob('../assets/Feiras/domingo/*.{jpg,jpeg,png,gif}', { eager: true, query: '?url', import: 'default' });

// Função para converter o objeto de importação em um array de URLs

const getImagesArray = (imageModule) => {

    return Object.values(imageModule);

};




export const fairDays = [

    {
        id: 'terca',
        title: 'Terça-feira',
        address: 'Rua Nunes Machado esq. Engenheiro Rebouças - Centro',
        openingHours: 'Das 7:00 às 11:30',
        description: 'Feira Orgânica e Convencional próxima a praça Ouvidor Pardinho. ',
        mapLink: 'https://maps.app.goo.gl/2BU4oTyhR4GxUUJj9',
        images: getImagesArray(tercaImages),
        layout: 'reverse'
    },
    {
        id: 'quinta',
        title: 'Quinta-feira',
        address: 'Rua Colombo esq. Ricardo Lemos - Ahu',
        openingHours: 'Das 7:00 às 11:30',
        description: 'Feira tradicional De produtos locais a delícias artesanais, cada visita é uma celebração da comunidade.',
        mapLink: 'https://maps.app.goo.gl/CbmDU624YtnA3apU8',
        images: getImagesArray(quintaImages)
    },
    {
        id: 'sexta',
        title: 'Sexta-feira',
        address: 'Rua Brasílio Itiberê esq. Rua Cel. Dulcídio - Água Verde',
        openingHours: 'Das 7:00 às 11:30',
        description: 'Feira Orgânica e Convencional localizada próxima a Ligga Arena',
        mapLink: 'https://maps.app.goo.gl/vDzjjv6ePfyx48f79',
        images: getImagesArray(sextaImages),
        layout: 'reverse'
    },
    {
        id: 'sabado',
        title: 'Sábado',
        address: 'Rua Alberto Bolinger esq. Rua Simão Bolívar',
        openingHours: 'Das 7:00 até 13:00',
        description: 'Feira Tradicional localizada próxima ao Estádio Couto Pereira. Perfeita para você e sua família!',
        mapLink: 'https://maps.app.goo.gl/68Wp2qC7C5xCvkJ8A',
        images: getImagesArray(sabadoImages)
    },
    {
        id: 'domingo',
        title: 'Domingo',
        address: 'Rua Francisco Nunes, 266 - Prado Velho',
        openingHours: 'Das 7:00 às 11:00',
        description: 'Feira Orgânica e Convencional localizada próxima ao Teatro Paiol',
        mapLink: 'https://maps.app.goo.gl/rg73UmJcEHc2LRiq7',
        images: getImagesArray(domingoImages),
        layout: 'reverse'
    }
];