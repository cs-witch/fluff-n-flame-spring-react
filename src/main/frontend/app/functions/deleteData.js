const deleteData = (apiPath, payload) => {
  fetch(apiPath, {
    credentials: "same-origin",
    method: "DELETE",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `ERROR DELETE ====> ${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .catch(error => console.error(`Error in delete fetch: ${error.message}`));
};

export default deleteData;
