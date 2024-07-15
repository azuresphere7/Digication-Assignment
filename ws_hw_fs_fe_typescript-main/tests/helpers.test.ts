import { COLUMN_WIDTH, GUTTER_SIZE } from '../src/constants';
import { moduleW2LocalWidth, moduleX2LocalX, moduleY2LocalY, cellX2LocalX, localX2CellX, localW2CellW, cellY2LocalY, localY2CellY, convert2LocalizedModule } from '../src/helpers';

describe('helpers', () => {
  test('moduleW2LocalWidth: Should calculate the local width of a module', () => {
    const w = 2;
    expect(moduleW2LocalWidth(w)).toEqual(w * COLUMN_WIDTH - GUTTER_SIZE);
  });

  test('moduleX2LocalX: Should calculate the local X position of a module', () => {
    const x = 2;
    expect(moduleX2LocalX(x)).toEqual(moduleW2LocalWidth(x) + GUTTER_SIZE * 2);
  });

  test('moduleY2LocalY: Should calculate the local Y position of a module', () => {
    const y = 2;
    expect(moduleY2LocalY(y)).toEqual(y + GUTTER_SIZE);
  });

  test('cellX2LocalX: Should calculate the local X position of a cell', () => {
    const x = 2;
    expect(cellX2LocalX(x)).toEqual(moduleX2LocalX(x));
  });

  test('localX2CellX: Should calculate the cell X position from a local X position', () => {
    const x = 2;
    expect(localX2CellX(x)).toEqual(Math.round((x - GUTTER_SIZE) / COLUMN_WIDTH));
  });

  test('localW2CellW: Should calculate the cell width from a local width', () => {
    const w = 2;
    expect(localW2CellW(w)).toEqual(Math.round((w + GUTTER_SIZE) / COLUMN_WIDTH));
  });

  test('cellY2LocalY: Should calculate the local Y position of a cell', () => {
    const y = 2;
    expect(cellY2LocalY(y)).toEqual(y * GUTTER_SIZE);
  });

  test('localY2CellY: Should calculate the cell Y position from a local Y position', () => {
    const y = 2;
    expect(localY2CellY(y)).toEqual(Math.round((y - GUTTER_SIZE) / GUTTER_SIZE));
  });

  test('convert2LocalizedModule: Should convert a module to a localized module', () => {
    const module = { id: 1, coord: { x: 1, y: 80, w: 2, h: 200 } };

    expect(convert2LocalizedModule(module)).toEqual({
      id: 1,
      coord: {
        x: moduleX2LocalX(module.coord.x),
        y: 80,
        w: moduleW2LocalWidth(module.coord.w),
        h: 200,
      },
    });
  });
});