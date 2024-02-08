export interface Card {
	// 1 for Ace
    // J,Q,K not included because they're not in the game
	value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	suit: 'Spade' | 'Club' | 'Heart' | 'Diamond';
}
