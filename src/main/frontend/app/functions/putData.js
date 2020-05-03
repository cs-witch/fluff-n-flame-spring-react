const putData = (apiPath, payload) => {
    fetch(apiPath, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `ERROR ====> ${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .catch(error => console.error(`Error in Put fetch: ${error.message}`));
  };
  
  export default putData;
  