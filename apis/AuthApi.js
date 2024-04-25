import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import encodeQueryParam from '../utils/encodeQueryParam';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const loginPOST = (Constants, { email, password }, handlers = {}) =>
  fetch(
    `https://mqaounamjeyswaphhdwq.supabase.co/auth/v1/token?grant_type=password`,
    {
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['API_KEY_HEADER'],
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useLoginPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['authLoginPOST', args],
    () => loginPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['authLoginPOSTS']),
    }
  );
};

export const FetchLoginPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email,
  password,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useLoginPOST(
    { email, password },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLogin: refetch });
};

export const signUpPOST = (
  Constants,
  { signupEmail, signupPassword },
  handlers = {}
) =>
  fetch(`https://mqaounamjeyswaphhdwq.supabase.co/auth/v1/signup`, {
    body: JSON.stringify({ email: signupEmail, password: signupPassword }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useSignUpPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['authSignUpPOST', args],
    () => signUpPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['authSignUpPOSTS']),
    }
  );
};

export const FetchSignUpPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  signupEmail,
  signupPassword,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useSignUpPOST(
    { signupEmail, signupPassword },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchSignUp: refetch });
};
