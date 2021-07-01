export default {

listProviders: [{
    avatar: "https://api.b7web.com.br/devbarber/media/avatars/2.png", 
    distance: 0.691000000000108, 
    id: 5, 
    latitude: "-23.5530907", 
    longitude: "-46.6682795", 
    name: "Pedro Diniz", 
    stars: 4.5
    }, 
    {avatar: "https://api.b7web.com.br/devbarber/media/avatars/3.png", 
    distance: 0.691000000000108, 
    id: 7, 
    latitude: "-23.5730907",
    longitude: "-46.6682795", 
    name: "Ronaldo Sousa", 
    stars: 2.9
    }],

listAppointments: [{
        date: '2021-07-20',
        hour: '11:00',
        provider: {
            avartar:"https://api.b7web.com.br/devbarber/media/avatars/3.png", 
            name:  "Pedro Diniz", 
        },
        service: {
            name: 'service teste',
            price: 12.45
        }
    },{
        date: '2021-07-20',
        hour: '10:00',
        provider: {
            avartar:"https://api.b7web.com.br/devbarber/media/avatars/3.png", 
            name:  "Ronaldo Sousa", 
        },
        service: {
            name: 'service teste',
            price: 12.45
        }
    }],

}