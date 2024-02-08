import { Card } from '../../types';
import { findSum } from '../find-sum';

describe('findSum #unit-test', () => {
	test('should give the value of a single card', () => {
		expect(findSum([s3])).toBe(3);
		expect(findSum([s7])).toBe(7);
		expect(findSum([c3])).toBe(3);
		expect(findSum([d6])).toBe(6);
		expect(findSum([s5])).toBe(5);
		expect(findSum([h6])).toBe(6);
		expect(findSum([h9])).toBe(9);
	});

	test('should add up the values of two cards', () => {
		expect(findSum([s3, h5])).toBe(8);
		expect(findSum([s7, h1])).toBe(8);
		expect(findSum([c3, h4])).toBe(7);
		expect(findSum([d6, s6])).toBe(12);
		expect(findSum([s5, c5])).toBe(10);
		expect(findSum([h6, d10])).toBe(16);
		expect(findSum([h9, c2])).toBe(11);
	});

	test('should add up the values of many cards', () => {
		expect(findSum([s3, h5, s7, d10, h1, c3, h4])).toBe(33);
		expect(findSum([d6, s6, s5, c5, s4])).toBe(26);
		expect(findSum([s3, h6, d10, s4, h9, c2])).toBe(34);
	});
});

const s3: Card = { suit: 'Spade', value: 3 };
const s4: Card = { suit: 'Spade', value: 4 };
const s5: Card = { suit: 'Spade', value: 5 };
const s6: Card = { suit: 'Spade', value: 6 };
const s7: Card = { suit: 'Spade', value: 7 };
const h1: Card = { suit: 'Heart', value: 1 };
const h4: Card = { suit: 'Heart', value: 4 };
const h5: Card = { suit: 'Heart', value: 5 };
const h6: Card = { suit: 'Heart', value: 6 };
const h9: Card = { suit: 'Heart', value: 9 };
const c2: Card = { suit: 'Club', value: 2 };
const c3: Card = { suit: 'Club', value: 3 };
const c5: Card = { suit: 'Club', value: 5 };
const d6: Card = { suit: 'Diamond', value: 6 };
const d10: Card = { suit: 'Diamond', value: 10 };
