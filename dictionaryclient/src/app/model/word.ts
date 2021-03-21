import {Userdictionary} from "./userdictionary";
import {Lesson} from "./lesson";

export class Word {
  foreignLanguageWord!: string;
  nativeLanguageTranslation!: string;
  dictionary!: Userdictionary;
  lesson!: Lesson;
}
