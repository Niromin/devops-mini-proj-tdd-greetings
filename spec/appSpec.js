import { Main } from "../src/app.js";

describe("A suite", function(){
    it ("demo function should return 1", function(){

        // Arrange
        let main = new Main();

        // Act
        let result = main.demo();

        // Assert
        expect(result).toBe(1);
    })
})