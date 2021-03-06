import { Page } from "./page.model";

export interface Game {
  id?: string;
  start: Page;
  end: Page;
  total_points: number;
  started?: boolean;
  type: string;
}

export const GAME_TYPES = {
  QUALIFIERS: 'qualifiers',
  FINALS: 'finals'
};
