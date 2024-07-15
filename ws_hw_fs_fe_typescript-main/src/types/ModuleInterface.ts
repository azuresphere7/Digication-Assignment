export interface ModuleCoordination {
  x: number;
  y: number;
  w: number;
  h: number;
}

export default interface ModuleInterface {
  id: number;
  coord: ModuleCoordination;
  handleOverlap?: () => void;
}
