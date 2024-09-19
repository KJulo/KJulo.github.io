interface ExperienceData {
  [key: string]: () => string;
}

export const createExperienceList = (message: ExperienceData) => {
  let experienceList: { ROLE: string; COMPANY: string; DATE: string }[] = [];
  for (let i = 1; message[`experience_${i}_role`]; i++) {
    experienceList = [
      ...experienceList,
      {
        ROLE: message[`experience_${i}_role`](),
        COMPANY: message[`experience_${i}_company`](),
        DATE: message[`experience_${i}_date`](),
      },
    ];
  }
  return experienceList;
};
