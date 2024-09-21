import type { MessagesInterface } from "astro/types/MessagesInterface";

export const createExperienceList = (messages: MessagesInterface) => {
  let experienceList: {
    ROLE: string;
    COMPANY: string;
    DATE_START: string;
    DATE_END: string;
    DATE_START_RAW: string;
    DATE_END_RAW: string;
    ACHIEVEMENTS: string[];
  }[] = [];
  for (let i = 1; messages[`experience_${i}_role`]; i++) {
    experienceList = [
      ...experienceList,
      {
        ROLE: messages[`experience_${i}_role`](),
        COMPANY: messages[`experience_${i}_company`](),
        DATE_START: messages[`experience_${i}_date_start`](),
        DATE_END:
          messages[`experience_${i}_date_end`]?.() ?? messages.date_now(),
        DATE_START_RAW: messages[`experience_${i}_date_raw_start`](),
        DATE_END_RAW:
          messages[`experience_${i}_date_raw_end`]?.() ??
          new Date().toISOString(),
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
