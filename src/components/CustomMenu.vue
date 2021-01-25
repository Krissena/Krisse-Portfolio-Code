<template>
    <div class="m-custom-menu">                  
        <div class="m-logo-area">
            <h1>Vue.js App</h1>
        </div>
        <!-- menu page links -->
        <div class="m-menu-component">                        
            <div class="m-links-component">
                <div class="m-link-label">                        
                    <router-link to="/" class="m-menu-link" class-active="active">
                    <font-awesome-icon :icon="['fas', 'home']" class="m-icon" />
                        <span>Frontpage</span>
                    </router-link> 
                </div>  
                <div class="m-link-label">                                     
                    <router-link to="/forms" class="m-menu-link" class-active="active">
                    <font-awesome-icon :icon="['fas', 'align-left']" class="m-icon" />
                        <span>Forms</span>
                    </router-link>  
                </div>                                        
            </div>
            <!-- menu info area -->
            <div class="m-info-area">                            
                <div class="m-menu-link">Terms of use</div>
                <button @click="isOpen = !isOpen">Accessibility statement</button>                    
                <AlertComponent v-show="isOpen" class="m-alert-overlay" v-if="showAlert" 
                @closewindow="closeAlertComponent" 
                />                       
            </div>           
        </div>        
    </div>
</template>

<script>
import AlertComponent from '@/components/AlertComponent';

export default {
    name: "CustomMenu",
    components: {
        AlertComponent
    },

    data() {
        return {
        hover: false,
        showAlert: true,
        isOpen: false
        }
    },

    methods: {
        closeAlertComponent() {
            this.isOpen = false;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .m-custom-menu {
        height: 100%;
        width: 300px;
        background-color: rgb(230, 235, 241);
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: center;
        padding-bottom: 20px;
    }

    .m-menu-component {        
        display: flex;
        flex-direction: column;
        justify-content: space-between;        
        flex-grow: 1;
        flex-shrink: 1;
    }

    .m-logo-area {        
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }    

    .m-links-component {      
        font-size: 1rem;
        font-weight: 300px;
        text-decoration: none;        
        display: flex;
        flex-direction: column;        
        justify-content: flex-start;
    }

    .m-link-label {
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .m-menu-link {
        padding: 10px 10px 10px 20px;       
    }

    .m-links-component :hover {
        color: white;
    }

    .m-links-component :active {
        color: white;
    }

    .m-icon {
        margin-right: 20px;
    }

    .m-info-area {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    } 

    button {
        border: transparent;
        background: #C0609C;
        padding: 20px;
        font-size: 1rem;
        color: white;
        margin-top: 10px;
    }       

</style>