import type MatrixTemplate from "./MatrixTemplate";
import type Risk from "./Risk";

export default interface Matrix {
  template: MatrixTemplate;
  risks: Risk[];
}
