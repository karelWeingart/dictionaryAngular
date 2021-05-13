import {Userdictionary} from "./userdictionary";
import {Lesson} from "./lesson";

export class Word {
  id!: number;
  foreignLanguageWord!: string;
  nativeLanguageTranslation!: string;
  userDictionary!: Userdictionary;
  lesson!: Lesson;
}
