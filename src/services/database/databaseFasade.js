/* eslint-disable no-console */
import { db } from '../firebase/Firebase';

const firestoreCollection = 'meetingParticipants';

export const getAllParticipants = async () => {
  // eslint-disable-next-line prefer-const
  let list = [];
  try {
    const res = await db.collection(firestoreCollection).get();
    res.docs.forEach((r) => list.push(r.data()));
  } catch (error) {
    console.log('Error getting document:', error);
  }
  console.log(list);
};

export const setToDatabase = async ({
  congregation,
  meetingId,
  participantsQuantity,
  userId,
  zoomName,
}) => {
  try {
    const res = await db.collection(firestoreCollection).add({
      congregation,
      meetingId: `4332${meetingId || 'kk'}`,
      participantsQuantity,
      userId,
      zoomName,
    });
    console.log('response', res);
  } catch (error) {
    console.log('Error setting document:', error);
  }
};
