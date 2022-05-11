
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
    it('should return "yearsAgo " when its caltculate  yearsAgo 1946', function(){
       

    });
    it('should return "yearsAgo " when its caltculate  yearsAgo from 2000' , function(){
        
    });
   
});
//  7countAllPaarl
describe('testing  countAllPaarl function' , function(){
    it('Its should  caltulate the total number of  registration that are fromPaal that starts  "CJ"' , function(){
    });
        // it('Its should  caltulate the total number of  registration that are fromPaal that starts  "CJ"' , function(){
            // assert.equal(2,countAllPaarl("678 543","CJ 67890"));
            // assert.equal (2, regNumbersForPaarl.length,("678 543","CJ 67890"));
        // });
});
// 8transportFee
describe('testing the  transportFee function' , function(){
    it('its should return R20 the transportFee  when its in the "morning"' ,function(){
        assert.equal(transportFee('morning'));

    });
   
    it('its should return R10 the transportFee  when its in the "afternoon"' ,function(){
        // assert.equal(transportFee('afternoon'));
        assert.equal(transportFee('afternoon'), 'R10');
    });

   
    it('its should return free  transportFee  when its in the "nightshift"' ,function(){
        assert.equal(transportFee('nightshift'), 'free');

    });
});

// 9 totalPhoneBill

 describe('testing totalPhoneBill function' , function(){
     it('it should return R7.45 when  calculate tatal price of 2 calls + 3 sms ' ,function(){
        // assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        
});
        it('it should return R3.40 calculate tatal price of call and sms' ,function(){   
            // assert.equal('R3.40', totalPhoneBill('call, sms'));
});
    
    it('it should return  when calculate tatal price 2 sms' ,function(){   
    // assert.equal('R1.30', totalPhoneBill('sms, sms'));

});
});