export let axios = require('axios').default;

// Adding JWT Token with every API calls
axios.defaults.headers.common['authorization'] = 'Bearer '+localStorage.getItem('token');

// Interceptors
axios.interceptors.response.use(function(resp){
    return Promise.resolve(resp)
    }, function(err){
    if(err.status == 401){
        `Code block for refreshing the access token with API call`
    }
    else if(err.status == 404){
        window.location.href = '/#/404'
        console.error(err)
    }
    else{
        console.error(err)        
        window.location.href = '/#/500'
    }
})
