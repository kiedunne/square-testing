
describe('Square testing', function () {

  before(function() {
    square = new Square(5)
  });

    it('calculates area', function(){
      square.calculateArea();
      equal(square.area, 25)
    });

    it('calculates area', function(){
      square.calculateArea();
      equal(square.area, 20)
    });
});
