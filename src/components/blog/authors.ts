import ayhanApaydinPP from '@/images/avatars/avatar-1.png';
import { StaticImageData } from 'next/image';

export interface ArticleAuthor {
  name: string;
  twitter: string;
  ppic: StaticImageData;
}
export interface ArticleAuthors {
  [key: string]: ArticleAuthor;
}

export const authors: ArticleAuthors = {
  'Ayhan APAYDIN': { name: 'Ayhan APAYDIN', twitter: 'ayhanap', ppic: ayhanApaydinPP },
};
