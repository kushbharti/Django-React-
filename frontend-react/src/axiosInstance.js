import axios from 'axios';


const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
    baseURL: baseURL
})


// Request Interceptor

axiosInstance.interceptors.request.use(
    function(config){
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
    
)


// Response Interceptor

axiosInstance.interceptors.request.use(
    function(response){
        return response ;
    },
    
    // Handle Failed response.
   async function(error){
    const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken')

            try {
                const response = await axiosInstance.post('/token/refresh/',{refresh:refreshToken})
                console.log('New Access Token ===> ',response.data.access)
                localStorage.setItem('accessToken',response.data.access)
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                console.log('Response==> ',response.data);

                return axiosInstance(originalRequest)
            } catch (error) {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                console.log('Error',error)
                window.location.href = '/login'
            }
        }
        return Promise.reject(error)

    }
)



export default axiosInstance