describe('leapyear', function(){

    it('should say 2000 is a leap year',function(){
        expect(leap(2000)).toEqual('leap year');
    });
    it('should say 1900 is not a leap year',function(){
        expect(leap(1900)).toEqual('not a leap year');
    });
    it('should say 2004 is a leap year',function(){
        expect(leap(2004)).toEqual('leap year');
    });
})