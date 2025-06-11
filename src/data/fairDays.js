import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";




export const fairDays = [

    {
        id: 'terca',
        title: 'Terça-feira',
        address: 'Rua da Feira, 123 - Centro',
        openingHours: 'Das 17:00 às 22:00',
        description: 'Feira noturna com diversas opções de comida e artesanato local.',
        mapLink: 'https://maps.app.goo.gl/link-do-mapa-terca', // Substitua
        images: [img1, img2, img3],
        layout: 'reverse'
    },
    {
        id: 'quinta',
        title: 'Quinta-feira',
        address: 'Praça da Matriz, S/N',
        openingHours: 'Das 8:00 às 14:00',
        description: 'Feira tradicional com produtos frescos direto dos produtores rurais.',
        mapLink: 'https://maps.app.goo.gl/link-do-mapa-quinta', // Substitua
        images: [img1, img2, img3],

    },
    {
        id: 'sexta',
        title: 'Sexta-feira',
        address: 'Avenida Principal, 456 - Bairro Novo',
        openingHours: 'Das 9:00 às 15:00',
        description: 'Feira gastronômica com food trucks e especialidades regionais.',
        mapLink: 'https://maps.app.goo.gl/link-do-mapa-sexta', // Substitua
        images: [img1, img2, img3],
        layout: 'reverse'
    },
    {
        id: 'sabado',
        title: 'Sábado',
        address: 'Rua Alberto Bolinger, 244',
        openingHours: 'Das 7:30 até 13:00',
        description: 'Feira localizada próxima ao Estádio Couto Pereira. Perfeita para você e sua família!',
        mapLink: 'https://maps.app.goo.gl/link-do-mapa-sabado', // Substitua pelo link real do Google Maps
        images: [img1, img2, img3]
    },
    {
        id: 'domingo',
        title: 'Domingo',
        address: 'Parque Central, Entrada 2',
        openingHours: 'Das 8:00 às 16:00',
        description: 'Feira de artesanato e antiguidades, ideal para um passeio em família.',
        mapLink: 'https://maps.app.goo.gl/link-do-mapa-domingo', // Substitua
        images: [img1, img2, img3],
        layout: 'reverse'
    }
];