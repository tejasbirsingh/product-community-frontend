import { VoteType } from './vote-type';

export class AnswerVotePayload {
    voteType: VoteType;
    answerId: number;
}