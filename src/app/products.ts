export interface Product {
  id: number;
  name: string;
  description: string;
  count: number;
  weight: number;
}

export const products = [
  {
    id: 1,
    name: 'kleine Kiste',
    description: 'kleine weisse Kiste (150g)',
    count: 0,
    weight: 150,
  },
  {
    id: 2,
    name: 'kleine grüne Kiste',
    description: 'kleine grüne Kiste (200g)',
    count: 0,
    weight: 200,
  },
  {
    id: 3,
    name: 'große grüne Kiste',
    description: 'große grüne Kiste (300g)',
    count: 0,
    weight: 300,
  },
  {
    id: 3,
    name: 'große Faltkiste',
    description: 'große graue/grüne klappbare Kiste (350g)',
    count: 0,
    weight: 350,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
