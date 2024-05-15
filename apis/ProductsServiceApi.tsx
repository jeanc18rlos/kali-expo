import * as React from "react";
import { useQuery } from "react-query";
import { useIsFocused } from "@react-navigation/native";
import { handleResponse, isOkStatus } from "../utils/handleRestApiResponse";
import usePrevious from "../utils/usePrevious";
import * as GlobalVariables from "../config/GlobalVariableContext";

export const getProductsPOST = (_args, handlers = {}) =>
  fetch(
    `https://us-central1-kali-f3ff6.cloudfunctions.net/product-getProducts/`,
    {
      body: JSON.stringify({ data: {} }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  ).then((res) => handleResponse(res, handlers));

export const useGetProductsPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ["products", args],
    () => getProductsPOST(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchGetProductsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetProductsPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error("Fetch error: " + error.status + " " + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetProducts: refetch });
};
