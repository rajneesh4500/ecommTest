import React, { useEffect } from "react";
import { connect } from "react-redux";
import Rows from "../rows";
import {
  initiateCall,
  recommendationCall,
  todaysCall,
} from "../actions/initialCallActions";

const Home = (props) => {
  useEffect(() => {
    if (true) {
      switch (props.pagePath) {
        case "home":
          props.initiateCall();
          break;
        case "recommendation":
          break;
        case "todaysdeal":
          break;
        default:
          props.initiateCall();
      }
    }
    return () => {
      console.error("Stopping");
    };
  }, []);

  console.log(props);
  return (
    <div>
      <Rows />
    </div>
  );
};

const mapDispatchToState = (dispatch) => ({
  initiateCall: () => dispatch(initiateCall()),
  recommendation: () => dispatch(recommendationCall()),
  todaysDeal: () => dispatch(todaysCall()),
});

export default connect(null, mapDispatchToState)(Home);
