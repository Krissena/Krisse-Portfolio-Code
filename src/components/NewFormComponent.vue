<template>
    <div class="nf-new-goal">
        <div class="nf-goal-label">
            <h2>Set your new Goal</h2>
            <!-- Question and input area -->
            <p class="nf-title">Your goal title</p>            
            <input type="text" :value="msg" @input="changeMessageTitle" :maxlength="max" class="nf-input-value" />
                <p>max 135 characters</p>
            <!-- Question and input area -->
            <p class="nf-title">What do you miss?</p>   
            <input type="text" :value="msg1" @input="changeMessageWhat" :maxlength="max1" class="nf-input-value" />
            <p>max 135 characters</p>
            <!-- Question and input area -->
            <p class="nf-title">What would you like to chanfe in your life?</p> 
            <input type="text" :value="msg2" @input="changeMessageIssue" :maxlength="max1" class="nf-input-value" />
            <p>max 135 characters</p>
            <!-- Question and input area -->
            <p class="nf-title">Which things you could give up?</p>
            <input type="text" :value="msg3" @input="changeMessageGiveUp" :maxlength="max1" class="nf-input-value" />
            <p>max 135 characters</p>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'NewFormComponent',
    props: [ 'msg', 'msg1', 'msg2', 'msg3' ],
    data() {
        return {            
            message: '',
            message1: '',
            message2: '',
            message3: '',
            max: 135,
            max1: 250
        }
    },
    methods: {
        changeMessageTitle(event) {
            this.message = event.target.value;
            this.$emit('messageTitleChanged', this.message);
        },

        changeMessageWhat(event) {
            this.message1 = event.target.value;
            this.$emit('messageWhatChanged', this.message1)
        },

        changeMessageIssue(event) {
            this.message2 = event.target.value;
            this.$emit('messageIssueChanged', this.message2)
        },

        changeMessageGiveUp(event) {
            this.message3 = event.target.value;
            this.$emit('messageGiveUpChanged', this.message3)
        },
    }
}
</script>

// Add "scoped" attribute to limit CSS to this component only
<style scoped>
    .nf-new-goal {
        width: 500px;
        height: 100%;
        margin-bottom: 40px;
    }

    .nf-goal-label {
        border: 2px solid #323266;
        border-radius: 8px; 
        padding: 20px;
        margin: 20px 20px 40px 20px;
        display: flex;
        flex-direction: column;
        justify-items: flex-start;        
    }

    .nf-title {
        margin: 20px 0 6px 0;
        font-weight: 600;
        color: #323266;
    }

    p {
        margin: 6px;;
    }

    .nf-content-label {
        width: 100%;
    }

    .nf-input-value{
        padding: 10px;
        margin: 0;
        font-size: 1rem;
        border-radius: 8px;
    }
</style>


