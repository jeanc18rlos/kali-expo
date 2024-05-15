import { handleResponse } from "../utils/handleRestApiResponse";

export const setDailyGoalPOST = (
  Constants: {
    API_KEY_HEADER: string;
    apikey: string;
    AUTHORIZATION_HEADER: string;
  },
  { goal }: { goal: number },
  handlers: any = {}
) =>
  fetch(
    `https://mqaounamjeyswaphhdwq.supabase.co/functions/v1/set-daily-goal`,
    {
      body: JSON.stringify({ goal }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        apikey: Constants["API_KEY_HEADER"],
        Authorization: Constants["AUTHORIZATION_HEADER"],
      },
      method: "POST",
    }
  ).then((res) => handleResponse(res, handlers));
