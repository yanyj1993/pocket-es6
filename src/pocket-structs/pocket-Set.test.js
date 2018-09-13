import Set from "./pocket-Set";

//add
describe('Set Add', function () {
    test('add chained', () => {
        expect(new Set([1,2]).add(3).add(4).toArray()).toEqual([1,2,3,4]);
    });


    test('add NaN', () => {
        expect(new Set([NaN]).add(NaN).size).toBe(1);
    });
});

//add
describe('Set Delete', function () {
    test('delete exist data', () => {
        let set = new Set([1,2]);
        set.delete(1);
        expect(set.toArray()).toEqual([2]);
    });


    test('delete not exist data', () => {
        expect(new Set([1]).delete(2)).toBe(false);
    });
});


//has
describe('Set has', function () {
    test('has exist data', () => {
        let set = new Set([1,2]);
        expect(set.has(1)).toEqual(true);
    });


    test('has not exist data', () => {
        expect(new Set([1]).has(2)).toBe(false);
    });
});
