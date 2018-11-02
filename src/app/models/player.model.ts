import { Page } from "./page.model";
import { User } from "./user.model";
import { Stat } from "./stat.model";

export interface Player {
  player_id?: string;
  user: User;
  points: number;
  stats: Stat[];
}
