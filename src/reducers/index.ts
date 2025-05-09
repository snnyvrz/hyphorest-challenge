import type { HeroAction, HeroContextType } from "../types";

export const reducer = (
  state: HeroContextType,
  action: HeroAction
): HeroContextType => {
  switch (action.type) {
    case "SHOW_INITIAL":
      return {
        ...state,
        heroState: "initial",
      };
    case "SHOW_FORM":
      return {
        ...state,
        heroState: "form",
      };
    case "SHOW_RESULT":
      return {
        heroState: "result",
        result: action.payload,
      };
    default:
      return state;
  }
};
