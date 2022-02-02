export const mapStateToProps = (state) => {
    console.log("State", state);
    return {
      loginToken: state.logIn.payload,
      userInfoData: state.userInfo.payload,
    };
  };
  export const mapDispatchToProps = (dispatch) => {
    return {
      // This is for login token
      logIn: (payload) => {
        dispatch({
          type: "Login",
          data: payload,
        });
      },
      // This is for userLogin
      userInfo: (payload) => {
        dispatch({
          type: "UserInfo",
          data: payload,
        });
      },
    };
  };
  