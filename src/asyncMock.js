const products = [
    {
        id: 1,
        title: 'Pc Gamer Completa Amd Ryzen',
        price: '993299',
        category: 'Pc Gamers',
        description: 'Pc Gamer Cpu Compu Completa Amd Ryzen 5 5600g 16g 240g',
        image: 'https://http2.mlstatic.com/D_NQ_NP_854927-MLA79347626791_092024-O.webp',
    },

    {
        id: 2,
        title: 'Pc Gamer Amd Ryzen 5',
        price: '678223',
        category: 'Pc Gamers',
        description: 'Pc Diseño Gamer Amd Ryzen 5 4600g Ssd 960gb 16gb Monitor Led',
        image: 'https://http2.mlstatic.com/D_NQ_NP_608451-MLA54125009062_032023-O.webp',
    },
    {
        id: 3,
        title: 'Sony PlayStation 5',
        price: '1349999',
        category: 'Consolas',
        description: 'Consola PlayStation®5 Slim',
        image: 'https://www.cdmarket.com.ar/image/0/1920_1080-image_(6).png',
    },
    {
        id: 4,
        title: 'Microsoft Xbox Series X',
        price: '1489999',
        category: 'Consolas',
        description: 'Microsoft Xbox Series X 1tb Ssd 120 Hz 4k Color Negro',
        image: 'https://http2.mlstatic.com/D_NQ_NP_989929-MLU75813976098_042024-O.webp',
    },
    {
        id: 5,
        title: 'Sony DualSense Edge -PS5',
        price: '549999',
        category: 'Accesorios',
        description: 'Sony DualSense Edge - Control PS5',
        image: 'https://www.cdmarket.com.ar/image/0/1920_1080-dualsense_edge.png',
    },
    {
        id: 6,
        title: 'Control Microsoft Xbox Serie X',
        price: '179999',
        category: 'Accesorios',
        description: 'Control Microsoft para Xbox Series - Astral Purple (Edicion Especial)',
        image: 'https://www.cdmarket.com.ar/image/0/1920_1080-944072.jpg',
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};


export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};


export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
};
