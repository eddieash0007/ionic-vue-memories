import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories:[
                {
                    id: 'm1',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sureal_Horizon.jpg/450px-Sureal_Horizon.jpg',
                    title: 'Beyond The Horizon', 
                    description:'It was a really nice experience!'
                },
                {
                    id: 'm2',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Man_Taking_a_Selfie_Cartoon_Vector.svg/512px-Man_Taking_a_Selfie_Cartoon_Vector.svg.png',
                    title: 'Me Myself and I', 
                    description:'Selfies and chilling more than what you can imagine!'
                },
                {
                    id: 'm3',
                    image: 'https://www.colesclassroom.com/wp-content/uploads/2018/12/pexels-photo-443446.jpeg',
                    title: 'Views from Heaven', 
                    description:'Breathtaking sceneries from serene and secluded environments!'
                },
                {
                    id: 'm4',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/495px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                    title: 'Good Eating', 
                    description:'I no dey think about my future my future no dey go anywhere!'
                },
            ]
        };
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.image,
                description: memoryData.description,
            };
            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData){
          context.commit('addMemory', memoryData); 
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state){
            return (memoryID) => {
                return state.memories.find(memory => memory.id === memoryID);
            };
        }
    }
});

export default store;