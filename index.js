// Add your code here
const formData = {
    name: "John",
    email: "john@example.com",
  };
  
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/users", configObject)
    .then(response => response.json())   // Handle the response
    .then(object => console.log(object)) // Process the object returned by the server
    .catch(error => console.log(error)); // Handle any errors
    function submitData(name, email) {
        return fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({ name, email }),
        })
        .then(response => response.json())
        .then(object => {
          const newId = document.createElement('p');
          newId.textContent = `ID: ${object.id}`;
          document.body.appendChild(newId);
        })
        .catch(error => {
          const errorMessage = document.createElement('p');
          errorMessage.textContent = `Error: ${error.message}`;
          document.body.appendChild(errorMessage);
        });
      }
      function submitData(name, email) {
        return fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({ name, email }),
        })
        .then(response => response.json())
        .then(object => {
          const newId = document.createElement('p');
          newId.textContent = `ID: ${object.id}`;
          document.body.appendChild(newId);
        })
        .catch(error => {
          const errorMessage = document.createElement('p');
          errorMessage.textContent = `Error: ${error.message}`;
          document.body.appendChild(errorMessage);
        });
      }
      
