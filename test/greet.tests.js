
// greet
describe('Testing greet function' , function(){
    it('it should return "Hello, Janine" when its called with "Janine"' , function(){
        assert.equal( "Hello, Janine", greet("Janine"));
    });

    
    it('it should return "Hello, " when its called with "Janine"' , function(){
        assert.equal( "Hello, ", greet(""));
    });
    it('it should return "Hello, Janine" when its called with "Aphelele"' , function(){
        assert.equal( "Hello, Aphelele", greet("Aphelele"));
    });
});

// isFromBellville
describe('testing the regstration is fromBellvel function' , function(){
    it('it should return "false" when the registration does not start with "CY"' , function(){
        assert.equal( false,(isFromBellville('CJ 123'))) ;
    });


    it('it should return "false" when the registration does not start with "CY"' , function(){
        assert.equal( false,(isFromBellville('CA 123'))) ;
    });

    it('it should return "false" when the registration does not start with "CY"' , function(){
        assert.equal( false,(isFromBellville('CB 123'))) ;
    });
});
// regCheck
describe('test regCheck function' , function(){
    it('it should return "true" whe the registration does not start with "CA"' , function(){
        assert.equal( false,(isFromCapeTown('CJ 123'))) ;
    });
    it('it should return "true" whe the registration does not start with "CA"' , function(){
        assert.equal( false,(isFromCapeTown('CJ 123'))) ;
    });
    it('it should return "true" whe the registration does not start with "CA"' , function(){
        assert.equal( false,(isFromCapeTown('CY 123'))) ;
    });

});
  3//  countRegNumber
  describe('testing  countRegNumber function' , function(){
    it('it should return "false" when the registration does not start with "CY"' , function(){
        assert.equal( false,(isFromBellville('CJ 123'))) ;
    });
        
    });
    
  //  5isWeekday
describe('testing isWeekday function' , function(){
    it('it should return "false"  if weekday starts with "S"' , function(){
        assert.equal(false,isWeekday('Saturday')) ;
    });
    it('it should return "false"  if weekday starts with "S"' , function(){
        assert.equal(false,isWeekday('Sanday')) ;
});
it('it should return "false"  if weekday starts with "S"' , function(){
    assert.equal(false,isWeekday('Saturday')) ;

});
});
// 6yearsAgo 
describe('testing yearsAgo function' , function(){
    it('should return "22" when its caltculate yearAgo from 2000 till the current year 2022' , function(){
        assert.equal((new Date().getFullYear() - 2000))

    });
    it('should return "46" when its caltculate yearsago from 1970' , function(){
        assert.equal((new Date).getFullYear() - 2000), yearsAgo(2000);
    });
   
});
//  7countAllPaarl

    describe('testing  the countAllPaarl function' , function(){
        it('it should return all registration starts with "CJ" ', function(){
            assert.equal( true,(countAllPaar('CJ 123'))) ;
        });
});
// 8transportFee
describe('testing the  transportFee function' , function(){
    it('it should return R20', function(){
        assert.equal (R20,(shifts === "morning"));
    });
});
// 9totalPhoneBill
describe('testing totalPhoneBill function' , function(){
    it('it should be able to calculate tatal price of 2 call ' ,function(){
        assert.equal('R5.5', totalPhoneBill('2.75,2.75,')); 
    });
});