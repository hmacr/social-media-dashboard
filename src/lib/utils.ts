import { DeltaType } from './data_loader';

export function computeDeltaDescTextColor(deltaType: DeltaType) {
  switch (deltaType) {
    case DeltaType.INC:
      return 'text-lime-green';
    case DeltaType.DEC:
      return 'text-bright-red';
  }
}
