import { Coffee } from '../contexts/OrderContext'

import coffeeImage20230131001 from '../assets/coffees/20230131001.png'
import coffeeImage20230131002 from '../assets/coffees/20230131002.png'
import coffeeImage20230131003 from '../assets/coffees/20230131003.png'
import coffeeImage20230131004 from '../assets/coffees/20230131004.png'
import coffeeImage20230131005 from '../assets/coffees/20230131005.png'
import coffeeImage20230131006 from '../assets/coffees/20230131006.png'
import coffeeImage20230131007 from '../assets/coffees/20230131007.png'
import coffeeImage20230131008 from '../assets/coffees/20230131008.png'
import coffeeImage20230131009 from '../assets/coffees/20230131009.png'
import coffeeImage20230131010 from '../assets/coffees/20230131010.png'
import coffeeImage20230131011 from '../assets/coffees/20230131011.png'
import coffeeImage20230131012 from '../assets/coffees/20230131012.png'
import coffeeImage20230131013 from '../assets/coffees/20230131013.png'
import coffeeImage20230131014 from '../assets/coffees/20230131014.png'

export const coffeeList: Coffee[] = [
  {
    id: '20230131001',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['Tradicional'],
    imagePath: coffeeImage20230131001,
  },
  {
    id: '20230131002',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['Tradicional'],
    imagePath: coffeeImage20230131002,
  },
  {
    id: '20230131003',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['Tradicional'],
    imagePath: coffeeImage20230131003,
  },
  {
    id: '20230131004',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 11.9,
    tags: ['Tradicional', 'Gelado'],
    imagePath: coffeeImage20230131004,
  },
  {
    id: '20230131005',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 11.9,
    tags: ['Tradicional', 'Com Leite'],
    imagePath: coffeeImage20230131005,
  },
  {
    id: '20230131006',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 11.9,
    tags: ['Tradicional', 'Com Leite'],
    imagePath: coffeeImage20230131006,
  },
  {
    id: '20230131007',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 12.9,
    tags: ['Tradicional', 'Com Leite'],
    imagePath: coffeeImage20230131007,
  },
  {
    id: '20230131008',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 12.9,
    tags: ['Tradicional', 'Com Leite'],
    imagePath: coffeeImage20230131008,
  },
  {
    id: '20230131009',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 13.9,
    tags: ['Tradicional', 'Com Leite'],
    imagePath: coffeeImage20230131009,
  },
  {
    id: '20230131010',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 13.9,
    tags: ['Especial', 'Com Leite'],
    imagePath: coffeeImage20230131010,
  },
  {
    id: '20230131011',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 17.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    imagePath: coffeeImage20230131011,
  },
  {
    id: '20230131012',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 17.9,
    tags: ['Especial'],
    imagePath: coffeeImage20230131012,
  },
  {
    id: '20230131013',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 17.9,
    tags: ['Especial'],
    imagePath: coffeeImage20230131013,
  },
  {
    id: '20230131014',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 19.9,
    tags: ['Especial', 'Alcoólico'],
    imagePath: coffeeImage20230131014,
  },
]
