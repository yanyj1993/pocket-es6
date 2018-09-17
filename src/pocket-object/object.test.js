import _Object from "./index";

describe('[Object.keys]', function () {

    test('Object.keys', () => {
        expect(_Object.keys({a: 1, b: 2}).length).toBe(2);
    })

});
