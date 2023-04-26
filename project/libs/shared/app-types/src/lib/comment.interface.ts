export interface Comment {
  _id?: number;
  _userId?: string;
  createdAt?: string;
  postId: number;
  message: string;
}
