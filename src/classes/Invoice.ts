import { HasFormatter } from '../interfaces/HasFormatter.js';

// classes
export class Invoice implements HasFormatter {
  // readonly client: string;
  // public details: string;
  // private amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
