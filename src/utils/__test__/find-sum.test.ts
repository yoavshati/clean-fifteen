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

const s3 = new Card(3, 'Spade');
const s4 = new Card(4, 'Spade');
const s5 = new Card(5, 'Spade');
const s6 = new Card(6, 'Spade');
const s7 = new Card(7, 'Spade');
const h1 = new Card(1, 'Heart');
const h4 = new Card(4, 'Heart');
const h5 = new Card(5, 'Heart');
const h6 = new Card(6, 'Heart');
const h9 = new Card(9, 'Heart');
const c2 = new Card(2, 'Club');
const c3 = new Card(3, 'Club');
const c5 = new Card(5, 'Club');
const d6 = new Card(6, 'Diamond');
const d10 = new Card(10, 'Diamond');
