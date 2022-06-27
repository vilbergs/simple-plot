import { expect, test } from 'vitest'
import { add, scale, length, dot } from '@/math'

// Edit an assertion and save to see HMR in action

test('adding vectors', () => {
  expect(add([1, 1], [2, 2])).toEqual([3, 3])
  expect(add([1, 1, 1], [2, 2, 2])).toEqual([3, 3, 3])
})

test('scaling vectors', () => {
  expect(scale([1, 1], 2)).toEqual([2, 2])
  expect(scale([2, 2], 0.5)).toEqual([1, 1])
  expect(scale([2, 2, 2], 2)).toEqual([4, 4, 4])
  expect(scale([2, 2, 2], 0.5)).toEqual([1, 1, 1])
})

test('vector length', () => {
  expect(length([4, 3])).toBe(5)
  expect(length([3, 4, 12])).toBe(13)
})

test('dot product', () => {
  expect(dot([2, 3], [4, 5])).toBe(23)
  expect(dot([2, 3, 0], [4, 5, 0])).toBe(23)
})
