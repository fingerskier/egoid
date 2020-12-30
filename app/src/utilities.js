async function del(url_fragment = '') {
  sessionStorage.loading = true
  
  try {
    const response = await fetch(url_fragment, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    
    sessionStorage.loading = false
    return response.json()
  } catch (error) {
    sessionStorage.loading = false
    console.error(error)
    return false
  }
}

async function get(url_fragment = '') {
  sessionStorage.loading = true
  
  try {
    const response = await fetch(url_fragment, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    
    sessionStorage.loading = false
    return response.json()
  } catch (error) {
    sessionStorage.loading = false
    console.error(error)
    return false
  }
}

async function post(url = '', data = {}) {
  sessionStorage.loading = true

  try {
    let body = JSON.stringify(data)
    
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: `${body}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
    });
    
    sessionStorage.loading = false
    return await response.json()
  } catch (error) {
    sessionStorage.loading = false
    console.error(error)
    return false
  }  
}

async function put(url = '', data = {}) {
  sessionStorage.loading = true

  try {
    
    let body = JSON.stringify(data)
    
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      body: `${body}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
    });
    
    sessionStorage.loading = false
    return await response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    sessionStorage.loading = false
    console.error(error)
    return false
  }  
}

export {del,get,post,put,}