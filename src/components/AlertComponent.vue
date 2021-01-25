<template>
    <div class="a-alert-label">
      <div class="a-alert-comopent">
          <div class="a-title">Ooops, coming soon!</div>
          <button @click="closeAction" class="a-action">Close</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'AlertCoponent',


data() {
    return {
        isOpen: false
    }
    },

    methods: {
        closeAction() {
            this.$emit("closewindow")
        }
    }
}

</script>

<style scoped>
    .a-alert-comopent {
        width: 200px;
        border: 1px solid black;
        border-radius: 8px;
        border-color: transparent;
        background-color: #EC605D; 
        padding: 10px 20px 10px 20px;
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
        transition: 0.5s ease-out;
        position: center;
        top: 600px;
        margin-top: 20px;
        margin-bottom: 20px;
        z-index: 1;
    }

    .a-title {
        font-size: 1.2rem;
        font-weight: 500;
        color: #323266;
        padding: 10px 0 10px 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .a-action {
        border-radius: 25px;
        width: 120px;
        padding: 10px;
        background-color: #323266;
        border-color: transparent;
        color: white;
        font-size: 1rem;
        cursor: pointer;
    }

    .alert-overlay {
        box-sizing: border-box;
    }

</style>