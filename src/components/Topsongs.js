import React from "react";
import { connect } from "react-redux";

import { fetchTopSongs } from "../action/index";

class Topsongs extends React.Component {
  componentDidMount() {
    this.props.fetchTopSongs();
  }
  render() {
    const { topsongs } = this.props;
    console.log(topsongs);
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return { topsongs: state.topsongs };
};

export default connect(mapStateToProps, { fetchTopSongs })(Topsongs);
