export interface Card {
  idx: number;
  id: string;
  name: string;
  nationalPokedexNumber: number;
  artist: string;
  attacks: [];
  evolvesFrom: string;
  hp: string;
  imageUrl: string;
  imageUrlHiRes: string;
  number: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  subtype: string;
  supertype: string;
  types: string[];
  weaknesses: [];
}
