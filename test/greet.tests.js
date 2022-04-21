describe('Testing greet function' , function(){
    it('it should return "Hello, Janine" when its called with "Janine"' , function(){
        assert.equal( "Hello, Janine", greet("Janine"));
    });

    // it('it should return ' , function(){
    //     assert.equal( , greet());
    // });
    it('it should return "Hello, " when its called with "Janine"' , function(){
        assert.equal( "Hello, ", greet(""));
    });
    it('it should return "Hello, Janine" when its called with "Aphelele"' , function(){
        assert.equal( "Hello, Aphelele", greet("Aphelele"));
    });
});