<template>
    <div class="f-frontpage">
        <div class="top-illustration">
            <img alt="Illustration_Kristiina_Laaksonen_2021" src="@/assets/Kuvitus_Kristiina_Laaksonen_2021.png" /> 
        </div>         
        <div class="f-frontpage-component"> 
            <div class="f-title">
                <h1>Welcome to my Portfolio</h1> 
            </div>    
        </div> 
        <!-- Quiz component -->
        <QuizComponent />    
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
            // GetAllBikeRentalStations: []                
        }
    },              
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