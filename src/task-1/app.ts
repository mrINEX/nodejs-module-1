import chooseMode from './choose-mode';

type ModeFunction = () => void;
let tuple: string[] = process.argv;

const [,, mode] = tuple;
const modeFunction: ModeFunction = chooseMode(mode);

modeFunction();
