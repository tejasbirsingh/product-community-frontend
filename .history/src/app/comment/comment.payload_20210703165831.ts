export class CommentPayload{
    id:number;
    text: string;
    postId: number;
    username?:string;
    duration?: string;
    upVote: boolean;
    downVote: boolean;
    voteCount:number;
    accepted:boolean;
    questionId:number;
}