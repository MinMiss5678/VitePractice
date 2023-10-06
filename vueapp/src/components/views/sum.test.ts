import { test } from 'vitest'
import { getPropertyType } from './sum'

test('getPropertyType', () => {
    const person = { age: 30, name: "John" };
    const ageType = getPropertyType(person, "age"); // ageType 的类型是 number
    const nameType = getPropertyType(person, "name")
    console.log(ageType)
})