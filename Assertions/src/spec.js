describe("Assertions task", function(){

    let x = 0;
    let y = 1;
    let z = 1;

    it("Comparison of two numbers (=) - should pass", function(){
        expect(y).toEqual(z);//pass
    });

    it("Comparison of two numbers (=) - should fail", function(){
        expect(x).toEqual(y);//Expected 0 to equal 1.
    });

    it("Comparison of two numbers (>) - should pass", function(){
        expect(y).toBeGreaterThan(x);//pass
    });

    it("Comparison of two numbers (>) - should fail", function(){
        expect(x).toBeGreaterThan(y);//Expected 0 to be greater than 1.
    });

    it("Comparison of two numbers (<) - should pass", function(){
        expect(x).toBeLessThan(y);//pass
    });

    it("Comparison of two numbers (<) - should fail", function(){
        expect(y).toBeLessThan(x);//Expected 1 to be less than 0.
    });

    it("Comparison of two numbers (>=) - should pass", function(){
        expect(y).toBeGreaterThanOrEqualTo(z);//pass
    });

    it("Comparison of two numbers (>=) - should fail", function(){
        expect(x).toBeGreaterThanOrEqualTo(z);//Expected 0 to be greater than or equal to 1.
    });

    it("Comparison of two numbers (<=) - should pass", function(){
        expect(x).toBeLessThanOrEqualTo(z);//pass
    });

    it("Comparison of two numbers (<=) - should fail", function(){
        expect(y).toBeLessThanOrEqualTo(x);//Expected 1 to be less than or equal to 0.
    });

    let string1 = "line_for_complete_match";
    let string2 = "line_for_complete_match";
    let string3 = "line_for_unmatch";
    let string4 = "line_for_partial_match";
    let string5 = "line"

    it("Comparison of two lines for a complete match - should pass", function(){
        expect(string1).toBe(string2);//pass
    });

    it("Comparison of two lines for a complete match - should fail", function(){
        expect(string1).toBe(string3);//Expected 'line_for_complete_match' to be 'line_for_unmatch'.
    });

    it("Comparison of two lines for a partial match - should pass", function(){
        expect(string4).toContain(string5);//pass
    });

    it("Comparison of two lines for a complete match - should fail", function(){
        expect(string4).toContain(string3);//Expected 'line_for_partial_match' to contain 'line_for_unmatch'.
    });

    let arr1 = [1, 2, 3, 4];
    let arr2 = [1, 2, 3, 4];
    let arr3 = [1, 2, 3];
    let arr4 = [1, 2, 3, 4, 5];
    let arr5 = [];

    it("Comparison of arrays - should pass", function(){
        expect(arr1).toEqual(arr2);
    });//pass

    it("Comparison of arrays - should fail", function(){
        expect(arr1).toEqual(arr3);//Expected [ 1, 2, 3, 4 ] to equal [ 1, 2, 3 ].
    });

    it("Comparison of arrays - should fail", function(){
        expect(arr1).toEqual(arr4);//Expected [ 1, 2, 3, 4 ] to equal [ 1, 2, 3, 4, 5 ].
    });

    it("Comparison of arrays - should fail", function(){
        expect(arr1).toEqual(arr5);//Expected [ 1, 2, 3, 4 ] to equal [  ].
    });

    let strArr1 = ["str1", "str2", "str3"];
    let strArr2 = ["str1", "str2", "str3"];
    let strArr3 = ["str1", "str2", "str"];
    let strArr4 = ["str1", "str2"];
    let strArr5 = ["str1", "str2", "str3", "str4"];
    let strArr6 = [];

    it("Comparison of arrays of strings - should pass", function(){
        expect(strArr1).toEqual(strArr2);//pass
    });

    it("Comparison of arrays of strings - should fail", function(){
        expect(strArr1).toEqual(strArr3);//Expected [ 'str1', 'str2', 'str3' ] to equal [ 'str1', 'str2', 'str' ].
    });

    it("Comparison of arrays of strings - should fail", function(){
        expect(strArr1).toEqual(strArr4);//Expected [ 'str1', 'str2', 'str3' ] to equal [ 'str1', 'str2' ].
    });

    it("Comparison of arrays of strings - should fail", function(){
        expect(strArr1).toEqual(strArr5);//Expected [ 'str1', 'str2', 'str3' ] to equal [ 'str1', 'str2', 'str3', 'str4' ].
    });

    it("Comparison of arrays of strings - should fail", function(){
        expect(strArr1).toEqual(strArr6);//Expected [ 'str1', 'str2', 'str3' ] to equal [  ].
    });
});