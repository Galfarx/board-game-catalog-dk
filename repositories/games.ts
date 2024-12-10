import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
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

export async function getGame(id: string) {
  const docRef = doc(db, "games", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    } as Game;
  }

  return null;
}

export async function getExpansions(baseGameId: string): Promise<Game[]> {
  const gamesRef = collection(db, "games");
  const q = query(gamesRef, where("baseGame", "==", baseGameId));
  const snapshot = await getDocs(q);

  const expansions = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Game));

  return expansions;
}
