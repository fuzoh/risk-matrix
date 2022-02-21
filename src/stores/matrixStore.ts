import type Matrix from "@/interfaces/Matrix";
import { defineStore } from "pinia";

export const useMatrixStore = defineStore({
  id: "matrixStore",
  state: () => ({
    matrix: <Matrix>{
      template: {
        id: 1,
        name: "Matrice 3x3 classique",
        x: {
          name: "Probabilité",
          size: 5,
          labels: [
            "Improbable",
            "Peu probable",
            "Probable",
            "Courant",
            "Presque certain",
          ],
        },
        y: {
          name: "Gravité",
          size: 5,
          labels: [
            "Catastrophique",
            "Critique",
            "Moyenne",
            "Faible",
            "Insignifiant",
          ],
        },
        scale: {
          name: "3 niveaux",
          description:
            "Répartition des tolérance sur 3 niveaux, dont un critique",
          levels: [
            {
              name: "Acceptable",
              color: "20bf6b",
            },
            {
              name: "A surveiller",
              color: "f7b731",
            },
            {
              name: "Innaceptable",
              color: "eb3b5a",
            },
          ],
        },
        map: {
          name: "Tolérance normale",
          coordinates: [
            {
              levelIndex: 1,
              x: 0,
              y: 0,
            },
          ],
        },
      },
      risks: [
        {
          id: "A1",
          name: "Rupture de câble",
          x: 2,
          y: 2,
        },
      ],
    },
  }),
  getters: {
    getRisksByCoordinates: (state) => {
      return (x: number, y: number) =>
        state.matrix.risks.find((risk) => risk.x === x && risk.y === y);
    },
  },
  actions: {
    newRisk(x: number, y: number, name: string, id: string) {
      this.matrix.risks.push({
        id,
        name,
        x,
        y,
      });
    },
  },
});
