import { COLUMN_WIDTH, GUTTER_SIZE } from './constants';
import ModuleInterface from './types/ModuleInterface';

export const moduleW2LocalWidth = (moduleW: number): number => moduleW * COLUMN_WIDTH - GUTTER_SIZE;
export const moduleX2LocalX = (moduleX: number): number => moduleW2LocalWidth(moduleX) + GUTTER_SIZE * 2;
export const moduleY2LocalY = (moduleY: number): number => moduleY + GUTTER_SIZE;

export const cellX2LocalX = (cellX: number): number => moduleX2LocalX(cellX);
export const localX2CellX = (localX: number): number => Math.round((localX - GUTTER_SIZE) / COLUMN_WIDTH);
export const localW2CellW = (localW: number): number => Math.round((localW + GUTTER_SIZE) / COLUMN_WIDTH);

export const cellY2LocalY = (cellY: number): number => cellY * GUTTER_SIZE;
export const localY2CellY = (localY: number): number => Math.round((localY - GUTTER_SIZE) / GUTTER_SIZE);

export const convert2LocalizedModule = (module: ModuleInterface): ModuleInterface => {
  const localizedModule = {
    ...module,
    coord: {
      ...module.coord,
      x: moduleX2LocalX(module.coord.x),
      w: moduleW2LocalWidth(module.coord.w),
    },
  };
  return localizedModule;
};