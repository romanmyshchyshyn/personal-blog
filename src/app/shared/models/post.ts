import { Article } from './article';

export class Post {
    id: string;
    title: string;
    description: string;
    postedOn: Date;
    article: Article;
}