import React, { Reducer, Dispatch } from "react";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IDeviceVariables {
  AUTHORIZATION_HEADER: string;
  pushToken: string;
  STRIPE_PUBLISHABLE_KEY: string;
  IS_STEP_TRACKER_PERMISSION_GRANTED: string;
  timeZone: string;
  __env__: string;
}

export const DeviceVariables: IDeviceVariables = {
  AUTHORIZATION_HEADER: "your_bearer_token",
  IS_STEP_TRACKER_PERMISSION_GRANTED: "checking",
  pushToken: "",
  STRIPE_PUBLISHABLE_KEY: "your_key",
  timeZone: "UTC",
  __env__: "Development",
};

interface IAppVariables {
  apikey: string;
  API_KEY_HEADER: string;
  ERROR_MESSAGE: string;
  isStepTrackerAvailable: string;
  todayStepsCount: number;
  goal: number;
  user_profile: {
    data: any;
    error: string | null;
    isFetching: boolean;
  };
}

export const AppVariables: IAppVariables = {
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoenZzZ2ZnZWVuaXJicWpvbnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0OTkzMjQsImV4cCI6MjAzMDA3NTMyNH0.ygBTZCbSil5mddamE3WWA1CQIs2qGaaVcC6Ex35WBjM",
  API_KEY_HEADER:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoenZzZ2ZnZWVuaXJicWpvbnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0OTkzMjQsImV4cCI6MjAzMDA3NTMyNH0.ygBTZCbSil5mddamE3WWA1CQIs2qGaaVcC6Ex35WBjM",
  ERROR_MESSAGE: "",
  isStepTrackerAvailable: "checking",
  todayStepsCount: 0,
  goal: 0,
  user_profile: { data: {}, error: null, isFetching: false },
};

const GlobalVariableContext = React.createContext<any>(null);
const GlobalVariableUpdater = React.createContext<Dispatch<any>>(() => {});

const keySuffix = "";

function tryParseJson(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  static async syncToLocalStorage(values: Record<string, any>) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]): [string, string] => [
        key + keySuffix,
        JSON.stringify(value),
      ]); // Explicitly define returned tuple type

    if (update.length > 0) {
      await AsyncStorage.multiSet(update as [string, string][]);
    }

    return update;
  }

  static async loadLocalStorage() {
    const keys = Object.keys(DeviceVariables);
    const entries = await AsyncStorage.multiGet(
      keySuffix ? keys.map((k) => k + keySuffix) : keys
    );

    const withDefaults = entries.map(([key_, value]) => {
      const key = keySuffix ? key_.replace(keySuffix, "") : key_;
      return [
        key,
        value
          ? tryParseJson(value)
          : DeviceVariables[key as keyof IDeviceVariables],
      ];
    });

    return Object.fromEntries(withDefaults);
  }
}

interface IState {
  __loaded: boolean;
  values: IDeviceVariables & IAppVariables;
}

type ActionType =
  | { type: "RESET" }
  | { type: "LOAD_FROM_ASYNC_STORAGE"; payload: any }
  | { type: "UPDATE"; payload: { key: string; value: any } };

const initialState: IState = {
  __loaded: false,
  values: { ...AppVariables, ...DeviceVariables } as IDeviceVariables &
    IAppVariables,
};

const reducer: Reducer<IState, ActionType> = (state, action) => {
  switch (action.type) {
    case "RESET":
      return {
        values: { ...AppVariables, ...DeviceVariables },
        __loaded: true,
      };
    case "LOAD_FROM_ASYNC_STORAGE":
      return { values: { ...state.values, ...action.payload }, __loaded: true };
    case "UPDATE":
      return state.__loaded
        ? {
            ...state,
            values: {
              ...state.values,
              [action.payload.key]: action.payload.value,
            },
          }
        : state;
    default:
      return state;
  }
};

export function GlobalVariableProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };

    prepare();
  }, []);

  React.useEffect(() => {
    const initialStorageLoader = async () => {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        if (
          payload?.__env__ &&
          DeviceVariables.__env__ &&
          payload.__env__ !== DeviceVariables.__env__
        ) {
          console.log(
            `Publication Environment changed from ${payload.__env__} to ${DeviceVariables.__env__}. Refreshing variables`
          );
          dispatch({
            type: "LOAD_FROM_ASYNC_STORAGE",
            payload: DeviceVariables,
          });
        } else {
          dispatch({ type: "LOAD_FROM_ASYNC_STORAGE", payload });
        }
      } catch (err) {
        console.error(err);
      }
    };
    initialStorageLoader();
  }, []);

  React.useEffect(() => {
    const syncToAsyncStorage = async () => {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    };
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  if (!state.__loaded) {
    return null; // Possibly replace this with a loading component or null depending on your design needs.
  }

  return (
    <GlobalVariableUpdater.Provider value={dispatch}>
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }: { key: string; value: any }) => {
    dispatch({ type: "UPDATE", payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
