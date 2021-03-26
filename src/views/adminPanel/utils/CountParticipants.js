export const countParticipants = (participantsList) => {
  const list = participantsList.reduce((total, current) => ({
    participantsQuantity: total.participantsQuantity + current.participantsQuantity,
  }));
  return list.participantsQuantity;
};
