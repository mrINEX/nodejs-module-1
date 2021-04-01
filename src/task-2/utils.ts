import { InputBook, OutputBook } from './types';

let checkHeaders: boolean = false;

function headersHandler(fileLineString: string, lineIdx: number): Promise<string> {
  if (!checkHeaders && !lineIdx) {
    checkHeaders = true;
    return Promise.resolve(fileLineString.toLowerCase());
  }
  return Promise.resolve(fileLineString);
}

function rawsHandler(fileLineString: InputBook): Promise<OutputBook> {
  delete fileLineString.amount;
  if (typeof fileLineString.price === 'string') {
    const numberPrice = Number(fileLineString.price.replace(',', '.'));
    fileLineString.price = numberPrice;
  }

  return Promise.resolve(fileLineString);
}

function errorHandler(error: Error): void {
  process.stdout.write(error.message);
}

export { headersHandler, rawsHandler, errorHandler };
