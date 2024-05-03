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

export const $v1$checkEmailPOST = (Constants, { email }, handlers = {}) =>
  fetch(`https://mqaounamjeyswaphhdwq.supabase.co/functions/v1/check-email`, {
    body: JSON.stringify({ email: email }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const use$v1$checkEmailPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      $v1$checkEmailPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('userExists', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('userExist');
        queryClient.invalidateQueries('userExists');
      },
    }
  );
};

export const Fetch$v1$checkEmailPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = use$v1$checkEmailPOST(
    { email },
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
  return children({ loading, data, error, refetch$v1$checkEmail: refetch });
};

export const createUserProfilePOST = (Constants, _args, handlers = {}) =>
  fetch(`https://mqaounamjeyswaphhdwq.supabase.co/functions/v1/create-user`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useCreateUserProfilePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      createUserProfilePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('userCreated', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('userCreated');
        queryClient.invalidateQueries('userCreateds');
      },
    }
  );
};

export const FetchCreateUserProfilePOST = ({
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
    mutate: refetch,
  } = useCreateUserProfilePOST(
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
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchCreateUserProfile: refetch });
};

export const goalPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `https://mqaounamjeyswaphhdwq.supabase.co/functions/v1/set-daily-goal`,
    {
      body: JSON.stringify({ timeZone: 'America/New_York', goal: 10000 }),
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useGoalPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => goalPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('userActivity', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('userActivity');
        queryClient.invalidateQueries('userActivities');
      },
    }
  );
};

export const FetchGoalPOST = ({
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
    mutate: refetch,
  } = useGoalPOST({}, { refetchInterval, handlers: { onData, ...handlers } });

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
  return children({ loading, data, error, refetchGoal: refetch });
};

export const updateSettingsNotPATCH = (Constants, _args, handlers = {}) =>
  fetch(
    `https://mqaounamjeyswaphhdwq.supabase.co/functions/v1/update-user-settings`,
    {
      body: JSON.stringify({ enable_notifications: true }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: Constants['AUTHORIZATION_HEADER'],
      },
      method: 'PATCH',
    }
  ).then(res => handleResponse(res, handlers));

export const useUpdateSettingsNotPATCH = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateSettingsNotPATCH(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('userSettings', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('userSetting');
        queryClient.invalidateQueries('userSettings');
      },
    }
  );
};

export const updateUserProfilePATCH = (
  Constants,
  { first_name },
  handlers = {}
) =>
  fetch(
    `https://mqaounamjeyswaphhdwq.supabase.co/functions/v1/update-user-profile`,
    {
      body: JSON.stringify({ first_name: first_name }),
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
    }
  ).then(res => handleResponse(res, handlers));

export const useUpdateUserProfilePATCH = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateUserProfilePATCH(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('userProfileCreated', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('userProfileCreated');
        queryClient.invalidateQueries('userProfileCreateds');
      },
    }
  );
};
