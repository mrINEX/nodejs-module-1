import chooseMode from './choose-mode';

const [,, mode] = process.argv;

const modeFunction = chooseMode(mode);

modeFunction();
