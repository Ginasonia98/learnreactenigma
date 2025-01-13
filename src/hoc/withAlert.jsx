import React from "react";

export const withAlert = (InnerComponent) => {
  //inner component adalah sebuah komponen
  class WrapperComponent extends React.Component {
    // componentDidMount() {
    //   alert("component mounted!");
    // }

    render() {
      //akan return ini dan function withAlert akan return WrapperComponent
      //yang isinya render return InnerComponent
      return (
        <InnerComponent {...this.props} propsTambahan="Halo aku props HOC" />
      )
      //pengunaan props spreading sehingga semua props yang direturn akan masuk ke props
      //inner component
    }
  }
  return WrapperComponent;
};
