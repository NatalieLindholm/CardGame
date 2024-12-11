export type CardType = {
  botCard: botCard;
  yourCard: yourCard;
};

type botCard = {
  id: number;
  text: string;
};

type yourCard = {
  id: number;
  text: string;
};

export type ScoreBoard = {
  id: number;
  userscore: number;
  botscore: number;
};
