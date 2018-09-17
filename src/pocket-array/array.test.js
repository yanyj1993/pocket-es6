import _Array from './index';

//
// test('will be true', () => {
//     expect(_Array.includes([1,2], 2)).toBe(true);
// });
//
//
// test('will be distinct', () => {
//     expect(_Array.distinct([1,2,3,4,4,5])).toEqual([1,2,3,4,5]);
// });

/*Array.filter*/
describe('Array.filter', function () {
    test('filter equal', () => {
        expect(_Array.filter([0,1,3], i => i === 0)).toEqual(expect.arrayContaining([0]));
    });
    test('filter not equal', () => {
        expect(_Array.filter([0,1,3], i => i !== 0)).toEqual(expect.arrayContaining([1,3]));
    });
});

/*Array.union*/
describe('Array.union', () => {
    test('have a empty array', () => {
       expect(_Array.union([1,2,3], [])).toEqual(expect.arrayContaining([1,2,3]));
       expect(_Array.union([], [])).toEqual(expect.arrayContaining([]));
       expect(_Array.union([], [1,2,3])).toEqual(expect.arrayContaining([1,2,3]));
    });

    test('have not empty array', () => {
        expect(_Array.union([1,2,3], [1])).toEqual(expect.arrayContaining([1,2,3]));
        expect(_Array.union([1], [2])).toEqual(expect.arrayContaining([1,2]));
        expect(_Array.union([4], [1,2,3])).toEqual(expect.arrayContaining([4,1,2,3]));
    });
});

/*Array.intersection*//*交集*/
describe('Array.intersection', () => {
    test('have a empty array', () => {
        expect(_Array.intersection([1,2,3], [])).toEqual(expect.arrayContaining([]));
        expect(_Array.intersection([], [])).toEqual(expect.arrayContaining([]));
        expect(_Array.intersection([], [1,2,3])).toEqual(expect.arrayContaining([]));
    });

    test('have not empty array', () => {
        expect(_Array.intersection([1,2,3], [1])).toEqual(expect.arrayContaining([1]));
        expect(_Array.intersection([1], [2])).toEqual(expect.arrayContaining([]));
        expect(_Array.intersection([1,2,4], [1,2,3])).toEqual(expect.arrayContaining([1,2]));
    });
});

/*Array.intersection*//*差集*/
describe('Array.difference', () => {
    test('have a empty array', () => {
        expect(_Array.difference([1,2,3], [])).toEqual(expect.arrayContaining([1,2,3]));
        expect(_Array.difference([], [])).toEqual(expect.arrayContaining([]));
        expect(_Array.difference([], [1,2,3])).toEqual(expect.arrayContaining([]));
    });

    test('have not empty array', () => {
        expect(_Array.difference([1,2,3], [1])).toEqual(expect.arrayContaining([2,3]));
        expect(_Array.difference([1], [2])).toEqual(expect.arrayContaining([1]));
        expect(_Array.difference([1,2,4], [1,2,3])).toEqual(expect.arrayContaining([4]));
    });
});
