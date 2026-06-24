const axios = require("axios");
const getToken = require("./authService");

async function Log(
    stack,
    level,
    packageName,
    message
) {
    try {
        const token = await getToken();

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log(response.data);

    } catch (error) {
        console.error(
            error.response?.data || error.message
        );
    }
}

module.exports = Log;