import chooseMode from './choose-mode';

type IModeFunction = () => void;

const [,, mode] = process.argv;

const modeFunction: IModeFunction = chooseMode(mode);

modeFunction();
