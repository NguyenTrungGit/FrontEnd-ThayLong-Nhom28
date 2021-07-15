// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
export class Comment {
  id: string;
  like?: boolean;
  unlike?: boolean;

  constructor(
    public surname: string,
    public name: string,
    public email: string,
    public phone: string,
    public sex: string,
    public rate: string,
    public content: string
  ) {
    this.id = uuidv4();
  }
}
