import en from "@/messages/en.json";
import pt from "@/messages/pt.json";

export const translations = { en, pt } as const;
export type Lang = keyof typeof translations;
export type Translations = typeof en;
