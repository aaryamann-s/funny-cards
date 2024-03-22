export type Player = {
  id: string;
  username: string;
  score: number;
  isCardCzar: boolean;
};

export type Room = {
  id: string;
  code: string;
  host: Player;
  players: Player[];
  maxScore: number;
};
