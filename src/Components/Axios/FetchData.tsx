import axios from "axios";

// Define the parameter type for the getUserData function
type GetUserDataParams = {
  pageNumber: number;
};

// The base URL for the Random User API
const endpoint = "https://randomuser.me/api/";

/**
 * Fetch user data from the Random User API.
 * @param {GetUserDataParams} params - The parameters for fetching user data.
 * @returns {Promise<AxiosResponse> | null} - A promise that resolves to the Axios response containing user data.
 */
export const getUserData = async (params: GetUserDataParams) => {
  try {
    const response = await axios.get(endpoint, {
      params: {
        results: 32,
        page: params.pageNumber,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
    return null;
  }
};
