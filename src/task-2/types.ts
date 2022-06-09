type InputBook = {
  book: string,
  author: string,
  amount: number,
  price: string | number
};

type OutputBook = {
  book: string,
  author: string,
  price: number | string
};

export { InputBook, OutputBook };
