// 1 for Ace
// J,Q,K not included because they're not in the game
export type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Suit = 'Spade' | 'Club' | 'Heart' | 'Diamond';

export class Card {
  constructor(
    readonly value: Value,
    readonly suit: Suit,
  ) {
    this.value = value;
    this.suit = suit;
  }

  sameAs(other: Card) {
    return this.value === other.value && this.suit === other.suit;
  }

  getName() {
    return `${this.value === 1 ? 'A' : this.value} of ${this.suit}s`;
  }
}
