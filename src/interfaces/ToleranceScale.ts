import type ToleranceLevel from "./ToleranceLevel";

export default interface ToleranceScale {
  name: string;
  description: string;
  levels: ToleranceLevel[];
}
