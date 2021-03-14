<template>
    <div class="f-frontpage">        
        <div class="top-illustration">
            <img alt="Illustration_Kristiina_Laaksonen_2021" src="@/assets/Kuvitus_Kristiina_Laaksonen_2021.png" /> 
        </div> 
        <!-- developer introduction -->        
        <div class="f-frontpage-component"> 
            <div class="f-title">
                <h1>Kristiina Laaksonen</h1> 
                <h2>Junior Software Developer / Junior UI Designer</h2>
            </div>    
        </div> 
        <button @click="openQuiz = !openQuiz" class="f-buttonQuiz">Take a Quiz</button>
        <!-- Quiz component -->
        <QuizComponent v-show="openQuiz" @closewindow="closeQuiz"/>        
    </div>
</template>

<script>
import image from '@/assets/Kuvitus_Kristiina_Laaksonen_2021.png';
import QuizComponent from '@/components/QuizComponent';

export default {
    name: 'Frontpage',
    components: {
        QuizComponent    
    },    

    data() {
        return {
            image: image, 
            openQuiz: false,                                                    
        }
    },
        
    methods: {
        closeView() {
            this.$emit("closewindow")
        },
        closeQuiz() {
            this.openQuiz = false;
        },
    }
}
</script>

// Add "scoped" attribute to limit CSS to this component only
<style scoped>
    .f-frontpage {
        width: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
        align-items: center;       
    }

    .f-frontpage-component {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .f-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .f-buttonQuiz {
        background-color: #323266;
        color: white;
        width: 120px;
        height: 40px;
        margin: 10px;
        border: 1px;        
        cursor: pointer;
        font-size: 1rem;
    }

    .top-illustration {    
    display: flex;
    flex-direction: row;
    justify-content: center;
    }

    img {
        Height: 200px;
        width: auto;
    } 

</style>