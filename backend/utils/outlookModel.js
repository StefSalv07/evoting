require("dotenv").config();
const ClIENT_SECRET = process.env.ClIENT_SECRET;
const CLIENT_ID = process.env.CLIENT_ID;
exports.authenticate = async () => {
  try {
    // Authenticate with Microsoft Graph API
    const tokenResponse = await axios.post(
      "https://login.microsoftonline.com/common/oauth2/v2.0/token",
      {
        grant_type: "password",
        client_id: CLIENT_ID,
        scope: "https://graph.microsoft.com/.default",
        username: email,
        password: password,
        client_secret: ClIENT_SECRET,
      }
    );

    // Extract access token
    const accessToken = tokenResponse.data.access_token;

    // You can use the access token to make requests to Microsoft Graph API endpoints
    // For example, to get user details:
    // const userDetailsResponse = await axios.get('https://graph.microsoft.com/v1.0/me', {
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`
    //     }
    // });

    return { success: true, message: "Login successful" };
  } catch (error) {
    console.error("Authentication failed:", error);
    throw new Error("Invalid email or password");
  }
};
