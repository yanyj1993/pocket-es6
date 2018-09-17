// Function test

import _Function from "./index";

describe('Function.curry', function () {

    test('curry a add Function', () => {

        let add = _Function.curry( (a,b) => a + b, 1);
        expect(add(0)).toEqual(1);
        expect(add(2)).toEqual(3);
    });

});


describe('Function.bind', function () {

    test('bind another this', () => {

        let a = {
            name: 'yanyj1'
        };

        let b = {
            name: 'yanyj2'
        };

        a.getName = function() {return this.name};

        let aBindb = _Function.bind(a.getName, b);

        expect(aBindb()).toEqual('yanyj2');
    });

});
