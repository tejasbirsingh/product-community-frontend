import { VoteType } from './vote-type';

export class CommentVotePayload {
    voteType: VoteType;
    commentId: number;
}