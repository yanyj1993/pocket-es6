import _Array from './index';


test('will be true', () => {
    expect(_Array.includesArray([1,2], 2)).toBe(true);
});


test('will be distinct', () => {
    expect(_Array.distinct([1,2,3,4,4,5])).toEqual([1,2,3,4,5]);
});
