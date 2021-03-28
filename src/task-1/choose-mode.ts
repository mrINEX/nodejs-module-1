import transformStreamMode from './transform-stream-mode';
import flowingMode from './flowing-mode';
import pausedMode from './paused-mode';

type modeFunction = () => void;

export default function chooseMode(mode: string = 'transformStreamMode'): modeFunction {
  switch(mode) {
    case 'transformStreamMode':
      return transformStreamMode;
    case 'flowingMode':
      return flowingMode;
    case 'pausedMode':
      return pausedMode;
    default:
      return transformStreamMode;
  }
}
