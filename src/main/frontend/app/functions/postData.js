const postData = (apiPath, payload, submissionStatusSetter) => {
  fetch(apiPath, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => {
      if (response.ok) {
        submissionStatusSetter(true);
        return response;
      } else {
        let errorMessage = `ERROR ====> ${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .catch(error => console.error(`Error in Post fetch: ${error.message}`));
};

export default postData;
