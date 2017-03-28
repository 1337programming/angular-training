export interface Masterbook {
  id: string;
}

export interface Checkbook extends Masterbook {
  name: string;
  book: Book;
}

export interface Book {
  date: string;
}
