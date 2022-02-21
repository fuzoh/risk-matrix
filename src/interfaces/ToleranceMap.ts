import type LevelCoordinate from "./LevelCoordinate";

export default interface ToleranceMap {
  name: string;
  description?: string;
  coordinates: LevelCoordinate[];
}
