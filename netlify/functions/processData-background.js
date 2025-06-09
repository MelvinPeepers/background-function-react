// processData.js

exports.handler = async function (event) {
  try {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Here, you can perform any asynchronous tasks or computations
    // For demonstration, let's log the incoming event data
    console.log("Incoming event data:", event);

    // Return a response or success message
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Background function executed successfully",
      }),
    };
  } catch (error) {
    // Handle errors gracefully
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred during the function execution",
      }),
    };
  }
};
