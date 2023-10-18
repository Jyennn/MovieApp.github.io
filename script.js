const search = document.getElementById('search')
const form = document.getElementById('form')

// The async keyword is used to indicate that this function will contain asynchronous operations, such as network requests, and it will return a promise.
const vm = Vue.createApp({
    data(){
        return{
            IMG_PATH: 'https://image.tmdb.org/t/p/w1280',
            movies: [],
        }
    },
    created(){
        axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                sort_by: 'popularity.desc',
                api_key: '3fd2be6f0c70a2a598f084ddfb75487c',
                page: 1,
            }
        })
            .then((res) => {
                this.movies = res.data.results   
            })
            .catch((err) => {
                console.log('Error',err)
            })
    },
    methods: {
        getClassByRate(vote){
            if(vote >= 8){
                return 'green'
            } else if (vote >= 5) {
                return 'orange'
            }else{
                return 'red'
            }
        }
    }
})
vm.mount('#app')

