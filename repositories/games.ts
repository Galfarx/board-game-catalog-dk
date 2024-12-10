import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import Game from './gameModel';

export async function getGames(): Promise<Game[]> {
  const gamesCol = collection(db, 'games');
  const gamesSnapshot = await getDocs(gamesCol);
  const gamesList = gamesSnapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    } as Game;
  });
  return gamesList;
}
