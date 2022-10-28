export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  count: number;
  weight: number;
}

export const products = [
  {
    id: 1,
    name: 'kleine Kiste',
    price: 799,
    description: 'A large phone with one of the best screens',
    count: 0,
    weight: 200,
  },
  {
    id: 2,
    name: 'mittlere Kiste',
    price: 699,
    description: 'A great phone with one of the best cameras',
    count: 0,
    weight: 250,
  },
  {
    id: 3,
    name: 'große Kiste',
    price: 299,
    description: '',
    count: 0,
    weight: 300,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
