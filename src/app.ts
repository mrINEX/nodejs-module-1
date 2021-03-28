import chooseMode from './choose-mode';

type ModeFunction = () => void;

const [,, mode] = process.argv;

const modeFunction: ModeFunction = chooseMode(mode);

modeFunction();
