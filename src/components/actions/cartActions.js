import { act } from "react-dom/test-utils";
import * as actions from "./cartActionsConstant";

export const additem = (data) => ({ type: actions.AddItem, data });

export const removeitem = (data) => ({ type: actions.RemoveItem, data });
