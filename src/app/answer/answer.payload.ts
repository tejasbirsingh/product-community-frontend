export class AnswerPayload{
    id:number;
    text: string;
    username?:string;
    createdDate?: string;
    upVote: boolean;
    downVote: boolean;
    voteCount:number;
    accepted:boolean;
    questionId:number;
}