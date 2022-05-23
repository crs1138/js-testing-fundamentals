const { sum, subtract } = require('../math')

test('sum test', () => {
    const result = sum(3, 7)
    const expected = 10
    expect(result).toBe(expected)
})

test('subtract test', () => {
    const result = subtract(7, 3)
    const expected = 4
    expect(result).toBe(expected)
})

function test(title, callback) {
    try {
        callback()
        console.log(`✅ ${title} passed`)
    } catch (error) {
        console.error(`❌ ${title} failed`)
        console.error(error)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
    }
}
