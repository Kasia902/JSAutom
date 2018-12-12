let calc = require ("../app.js");
let compare = require ("../Compare.js");

describe ('calculator', function () {
    it('addition', function () {
      expect(calc(15,4,'+')).toEqual(19);
    });
    it ('minus', function (){
      expect(calc(25,7, '-')).toEqual(18);
    });
    it ('multiply', function (){
      expect(calc(89,4,'*')).toEqual(356);
    });
    it ('division', function(){
      expect(calc(100,2,'/')).toEqual(50);
    });
    });

   describe('compare', function(){
    it ('compare', function(){
      expect(compare(25,5)).toBeFalsy();
    });
    it ('compare', function(){
      expect(compare(0,50)).toBeTruthy();
    });
   });