import "@emotion/react";
import { MainColors } from "./styles";

declare module "@emotion/react" {
  export interface Theme {
    COLORS: MainColors;
  }
}
