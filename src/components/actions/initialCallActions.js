import * as actions from "./initialCallConstant";

export const initiateCall = () => ({ type: actions.INITIATIAL_CALL });

export const recommendationCall = () => ({ type: actions.RECOMMENDATION_CALL });

export const todaysCall = () => ({ type: actions.TODAYS_DEAL });
