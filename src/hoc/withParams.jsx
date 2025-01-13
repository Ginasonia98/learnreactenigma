import { useParams } from "react-router-dom";

export const withParams = (InnerComponent) => {
  const WrapperComponent = (props) => {
    const params = useParams();
    //passinh params ke InnerComponent
    return <InnerComponent {...props} params={params} />;
  };
  return WrapperComponent;
};
