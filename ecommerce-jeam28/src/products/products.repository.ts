import { Injectable } from '@nestjs/common';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: boolean;
  imgUrl: string;
};

@Injectable()
export class ProductsRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone',
      description: '11 Pro Max',
      price: 2000000,
      stock: true,
      imgUrl:
        'https://http2.mlstatic.com/D_NQ_NP_633454-MLA32445355370_102019-O.webp',
    },
    {
      id: 2,
      name: 'Samsung Galaxy',
      description: 'S21 Ultra',
      price: 2500000,
      stock: true,
      imgUrl:
        'https://http2.mlstatic.com/D_NQ_NP_711045-MLA45797039779_052021-O.webp',
    },
    {
      id: 3,
      name: 'Xiaomi',
      description: 'Mi 11',
      price: 1800000,
      stock: true,
      imgUrl:
        'https://http2.mlstatic.com/D_NQ_NP_981889-MLA45772634225_042021-O.webp',
    },
    {
      id: 4,
      name: 'Google Pixel',
      description: '5',
      price: 1700000,
      stock: false,
      imgUrl:
        'https://http2.mlstatic.com/D_NQ_NP_755841-MLA46722774927_072021-O.webp',
    },
    {
      id: 5,
      name: 'OnePlus',
      description: '9 Pro',
      price: 2200000,
      stock: true,
      imgUrl:
        'https://http2.mlstatic.com/D_NQ_NP_855555-MLA46666520587_072021-O.webp',
    },
    {
      id: 6,
      name: 'Motorola',
      description: 'Edge Plus',
      price: 1600000,
      stock: true,
      imgUrl:
        'https://http2.mlstatic.com/D_NQ_NP_654346-MLA46852749362_072021-O.webp',
    },
    {
      id: 7,
      name: 'Sony Xperia',
      description: '1 II',
      price: 2300000,
      stock: false,
      imgUrl:
        'https://http2.mlstatic.com/D_NQ_NP_761524-MLA43906376021_102020-O.webp',
    },
    {
      id: 8,
      name: 'Huawei',
      description: 'P40 Pro',
      price: 2100000,
      stock: true,
      imgUrl:
        'https://http2.mlstatic.com/D_NQ_NP_803703-MLA46711516226_072021-O.webp',
    },
    {
      id: 9,
      name: 'Oppo',
      description: 'Find X3 Pro',
      price: 1900000,
      stock: true,
      imgUrl:
        'https://http2.mlstatic.com/D_NQ_NP_967775-MLA46619642104_072021-O.webp',
    },
    {
      id: 10,
      name: 'LG',
      description: 'V60 ThinQ',
      price: 1500000,
      stock: true,
      imgUrl:
        'https://http2.mlstatic.com/D_NQ_NP_607206-MLA31099843450_062019-O.webp',
    },
  ];

  getProducts() {
    return this.products;
  }
}
