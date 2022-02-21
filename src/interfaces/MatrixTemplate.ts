import type MatrixAxis from "./MatrixAxis";
import type ToleranceMap from "./ToleranceMap";
import type ToleranceScale from "./ToleranceScale";

export default interface MatrixTemplate {
  id: number;
  name: string;
  x: MatrixAxis;
  y: MatrixAxis;
  scale: ToleranceScale;
  map: ToleranceMap;
}
