import React from "react";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import { setHeaderFlag } from "../actions/actions";

class Shop extends React.Component {
  componentDidMount() {
    this.props.setHeaderFlag(true);
  }
  componentWillUnmount() {
    this.props.setHeaderFlag(false);
  }

  render() {
    return <div> SHOP </div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHeaderFlag: flag => dispatch(setHeaderFlag(flag))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Shop);
