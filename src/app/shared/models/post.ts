import { Article } from './article';
import { RateModel } from 'src/app/blog/rate/rate-model';

export class Post {
    id: string;
    title: string;
    description: string;
    postedOn: Date;
    article: Article;
    globalRateValue: number;
    userRate: RateModel
}