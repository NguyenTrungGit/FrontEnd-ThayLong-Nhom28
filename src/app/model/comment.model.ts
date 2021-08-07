// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
export class Comment {
  id: string;
  like?: boolean;
  unlike?: boolean;

  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public content: string,
    public rate: Number,
  ) {
    this.id = uuidv4();
  }
}
