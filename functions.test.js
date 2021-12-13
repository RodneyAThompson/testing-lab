const {
    returnTwo,
    greeting,
    add
} = require('./function.js')

test('should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('should return greeting', () => {
    expect(greeting('Rodney')).toBe('Hello, Rodney')
})

test('should return sum of num1 and num2', () => {
    expect(add(1, 2)).toEqual(3)
})