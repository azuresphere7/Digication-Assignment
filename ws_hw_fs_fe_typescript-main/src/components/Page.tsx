import React from 'react';
import { Box } from '@mui/material';
import { useDrop } from 'react-dnd';

import Grid from './Grid';
import Module from './Module';
import { CONTAINER_WIDTH, GUTTER_SIZE, OFFSET } from '../constants';
import { cellY2LocalY, convert2LocalizedModule, localW2CellW, localX2CellX, localY2CellY } from '../helpers';
import ModuleInterface, { ModuleCoordination } from '../types/ModuleInterface';

interface OverlapDetectionResult {
  overlappedModule?: ModuleInterface;
  isDetected: boolean;
}

const Page = () => {
  const [modules, setModules] = React.useState([
    { id: 1, coord: { x: 1, y: 80, w: 2, h: 200 } },
    { id: 2, coord: { x: 5, y: 0, w: 3, h: 100 } },
    { id: 3, coord: { x: 4, y: 310, w: 3, h: 200 } },
  ]);

  const containerRef = React.useRef<HTMLDivElement>();

  // Wire the module to DnD drag system
  const [, drop] = useDrop({ accept: 'module' });
  drop(containerRef);

  // Calculate container height
  const containerHeight: number = React.useMemo(() => (
    Math.max(...modules.map(({ coord: { y, h } }) => y + h)) + GUTTER_SIZE * 2
  ), [modules]);

  const updateModules = (activeModule: ModuleInterface): ModuleInterface[] => {
    return modules.map((module) => {
      if (module.id === activeModule.id) {
        return activeModule;
      }
      return module;
    });
  };

  /**
   * Check if two modules are overlapping
   * @param {ModuleInterface} draggingModule
   * @param {ModuleInterface} overlappingModule
   * @returns {boolean} Returns true if two modules are overlapping
   */
  const isOverlapping = (draggingModule: ModuleInterface, overlappingModule: ModuleInterface): boolean => {
    const isHorizontalOverlapping: boolean =
      draggingModule.coord.x < (overlappingModule.coord.x + overlappingModule.coord.w) &&
      overlappingModule.coord.x < (draggingModule.coord.x + draggingModule.coord.w);

    const isVerticalOverlapping: boolean =
      draggingModule.coord.y < (overlappingModule.coord.y + overlappingModule.coord.h + GUTTER_SIZE * 2) &&
      overlappingModule.coord.y < (draggingModule.coord.y + draggingModule.coord.h);

    return isHorizontalOverlapping && isVerticalOverlapping;
  };

  /**
   * Handle overlapping modules
   * @param {ModuleInterface} draggingModule 
   * @param {ModuleInterface} overlappingModule 
   */
  const handleModuleOverlap = (draggingModule: ModuleInterface, overlappingModule: ModuleInterface): void => {
    const draggingModuleCoord: ModuleCoordination = draggingModule.coord;
    const overlappedModuleCoord: ModuleCoordination = overlappingModule.coord;

    if ((draggingModuleCoord.x + draggingModuleCoord.w / 2) - (overlappedModuleCoord.x + overlappedModuleCoord.w / 2) < - OFFSET) {
      // If a dragging module is overlapping in left, shift it to right side of overlapped module
      draggingModule.coord = {
        ...draggingModuleCoord,
        x: overlappedModuleCoord.x - draggingModuleCoord.w - GUTTER_SIZE,
      };
    } else if ((draggingModuleCoord.x + draggingModuleCoord.w / 2) - (overlappedModuleCoord.x + overlappedModuleCoord.w / 2) > OFFSET) {
      // If a dragging module is overlapping in right, shift it to left side of overlapped module
      draggingModule.coord = {
        ...draggingModuleCoord,
        x: overlappedModuleCoord.x + overlappedModuleCoord.w + GUTTER_SIZE,
      };
    } else {
      if ((draggingModuleCoord.y + draggingModuleCoord.h / 2) - (overlappedModuleCoord.y + overlappedModuleCoord.h / 2) > 0) {
        // If a dragging module is overlapping to the top, shift it to bottom of overlapped module
        draggingModule.coord = {
          ...draggingModuleCoord,
          y: overlappedModuleCoord.y + overlappedModuleCoord.h + GUTTER_SIZE * 2,
        };
      } else {
        // If a dragging module is overlapping to the bottom, shift it to top of overlapped module
        draggingModule.coord = {
          ...draggingModuleCoord,
          y: overlappedModuleCoord.y - draggingModuleCoord.h,
        };
      }
    }
  };

  /**
   * Update module's movement by cell
   * @param {ModuleInterface} draggingModule
   */
  const setMovementByCell = (draggingModule: ModuleInterface): void => {
    const { coord: { x, y, w } } = draggingModule;

    // Ignore if the module is out of the container
    if (x < 0 || x + w > CONTAINER_WIDTH || y < GUTTER_SIZE) {
      return;
    }

    draggingModule.coord = {
      ...draggingModule.coord,
      x: localX2CellX(x),
      y: cellY2LocalY(localY2CellY(y)),
      w: localW2CellW(w),
    };

    setModules(updateModules(draggingModule));
  };

  /**
   * Detect overlapping modules
   * @param {ModuleInterface} draggingModule 
   * @returns {OverlapDetectionResult} Returns the overlapped module and detection result
   */
  const detectOverlap = (draggingModule: ModuleInterface): OverlapDetectionResult => {
    for (let i = 0; i < modules.length; i++) {
      const localizedModule: ModuleInterface = convert2LocalizedModule(modules[i]);

      if (modules[i].id !== draggingModule.id && isOverlapping(draggingModule, localizedModule)) {
        return {
          overlappedModule: localizedModule,
          isDetected: true,
        };
      }
    }

    return {
      isDetected: false,
    };
  };

  /**
   * Manage modules by setting the movement by cell
   * @param {ModuleInterface} draggingModule
   */
  const manageModules = (draggingModule: ModuleInterface): void => {
    const { overlappedModule, isDetected }: OverlapDetectionResult = detectOverlap(draggingModule);

    if (isDetected && overlappedModule) {
      handleModuleOverlap(draggingModule, overlappedModule);

      const { isDetected: isDetectedTwice }: OverlapDetectionResult = detectOverlap(draggingModule);
      if (isDetectedTwice) {
        return;
      }
    }

    setMovementByCell(draggingModule);
  };

  return (
    <Box
      ref={containerRef}
      position="relative"
      width={1024}
      height={containerHeight}
      margin="auto"
      sx={{
        overflow: 'hidden',
        outline: '2px dashed #ccc',
        transition: 'height 0.2s',
      }}
    >
      <Grid height={containerHeight} />

      {modules.map((module) => (
        <Module key={module.id} data={module} manageModules={manageModules} />
      ))}
    </Box>
  );
};

export default React.memo(Page);
