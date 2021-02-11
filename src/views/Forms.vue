<template>
    <div class="f-forms">
        <div class="top-illustration">
            <img alt="Illustration_Kristiina_Laaksonen_2021" src="@/assets/Kuvitus_Kristiina_Laaksonen_2021.png" /> 
        </div> 
        <div class="f-title-label">
            <font-awesome-icon :icon="['fas', 'align-left']" class="f-icon" /> 
            <h1 class="f-title">My Forms</h1>
        </div>
        <!-- form component. You can fill info here -->
        <div class="f-new-form-label">                         
            <NewFormComponent 
                :msg="message" @messageTitleChanged="message = $event" 
                :msg1="message1" @messageWhatChanged="message1 = $event"
                :msg2="message2" @messageIssueChanged="message2 = $event"
                :msg3="message3" @messageGiveUpChanged="message3 = $event"
            /> 
            <!-- Form output area-->                  
            <div class="f-form-label">  
                <h2>Your new Goal</h2>
                <p> {{ message }} </p> 
                <p> {{ message1 }} </p>
                <p> {{ message2 }} </p>
                <p> {{ message3 }} </p>
            </div>
        </div>         
    </div>
</template>

<script>
import NewFormComponent from '@/components/NewFormComponent';
import image from '@/assets/Kuvitus_Kristiina_Laaksonen_2021.png';

export default {
    name: 'Forms',
    components: { 
      NewFormComponent 
    },
    data() {
        return {
            message: 'Add your new Goal topic',
            message1: 'Add here what do you miss in your life?',
            message2: 'Add here what would you like to change?',
            message3: 'Add which things you could give up?',
            image: image
        }     
    }
}
</script>

// Add "scoped" attribute to limit CSS to this component only
<style scoped>
    .f-forms {
        width: 100%;        
        overflow: auto;        
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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

    .f-title-label {
        width: 100%;        
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .f-icon {
        margin: 10px;
        font-size: 2rem;
    }

    .f-title {
        padding-left: 20px;
    }

    .f-new-form-label {                    
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .f-form-label {
        width: 500px;
        height: 400px;
        border-color: solid grey;
        border-radius: 8px;
        margin: 20px;  
        padding:20px 40px 20px 40px;
        background: #EC605D;
        color: white; 
        text-align: justify;
        content: "";
        display: table;       
        clear: both;
    }
</style>