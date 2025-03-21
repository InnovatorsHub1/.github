// TODO - should return -
// const obj = {
//     'tech': {
//         items: [
//             { item: 'pc', category: 'tech', price: 15 },
//             { item: 'mouse', category: 'tech', price: 32 },
//         ], // 15 
//         avg: 23.5
//     },
//     'study': {
//         items: [
//             { item: 'notebook', category: 'study', price: 18 },
//             { item: 'pen', category: 'study', price: 22 },
//         ],
//         avg: 20
//     }
// }

// nullish -
// null undefined

// falsy -
// undefined, null, 0, false, [], ''
type Item = {
    item: string;
    category: string;
    price: number
}
const items: Item[] = [
    { item: 'pc', category: 'tech', price: 15 },
    { item: 'mouse', category: 'tech', price: 32 },
    { item: 'notebook', category: 'study', price: 18 },
    { item: 'pen', category: 'study', price: 22 },
];

interface ACC {
    [key: Item['category']]: {
        items: Item[],
        avg: number
    }
}
// current = { item: 'mouse', category: 'tech', price: 32 },
const res = items.reduce((acc, current, index) => {
    // init
    if (!acc[current.category]) {
        acc[current.category] = {
            items: [current],
            avg: current.price
        }
        return acc
    }
    acc[current.category].items.push(current);
    acc[current.category].avg += current.price;

    // last
    if (index === items.length - 1) {
        Object.keys(acc).forEach(key => {
            acc[key].avg /= acc[key].items.length
        })
    }

    return acc
}, {} as ACC);
