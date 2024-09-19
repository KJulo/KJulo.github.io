import type { MessagesInterface } from "astro/types/MessagesInterface";

export const createExperienceList = (messages: MessagesInterface) => {
  let experienceList: {
    ROLE: string;
    COMPANY: string;
    DATE: string;
    ACHIEVEMENTS: string[];
  }[] = [];
  for (let i = 1; messages[`experience_${i}_role`]; i++) {
    experienceList = [
      ...experienceList,
      {
        ROLE: messages[`experience_${i}_role`](),
        COMPANY: messages[`experience_${i}_company`](),
        DATE: messages[`experience_${i}_date`](),
        ACHIEVEMENTS: [],
      },
    ];
    for (let j = 1; messages[`experience_${i}_achievements_${j}`]; j++) {
      [
        ...experienceList,
        (experienceList[i - 1].ACHIEVEMENTS = [
          ...experienceList[i - 1].ACHIEVEMENTS,
          messages[`experience_${i}_achievements_${j}`](),
        ]),
      ];
    }
  }
  return experienceList;
};
