const app=Vue.createApp({
    //template:'<h1>Hello World{{firstName}}<h1>',
    data(){
        return {
            firstName:'Johny',
            lastName:'Depo',
            email:'johnydepp@example.com',
            gender:'male',
<<<<<<< HEAD
            picture:'https://randomuser.me/api/portraits/men/11.jpg',
=======
            picture:'https://randomuser.me/api/portraits/men/12.jpg',
>>>>>>> new-feature


        }
    },
    methods:{
        async getUser(){
            const res=await fetch('https://randomuser.me/api')
            
            const {results}=await res.json()
            console.log(results)
            this.firstName=results[0].name.first;
            this.lastName=results[0].name.last;
            this.email=results[0].email;
            this.gender=results[0].gender;
            this.picture=results[0].picture.large;

        }
    }
})

app.mount('#app')