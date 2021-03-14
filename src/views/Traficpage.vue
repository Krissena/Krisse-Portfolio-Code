<template>
    <div class="tp-traficpage">
        <div class="tp-trafic-label">
            <div class="tp-title-label">
                <font-awesome-icon :icon="['fas', 'bicycle']" class="tp-icon" /> 
                <h1>Bike rental</h1>        
            </div>
            <div>
            <transportation-component />
            </div>
        </div>
    </div>    
</template>

<script>
import TransportationComponent from '@/components/TransportationComponent';

export default { 
    name: 'Traficpage',
    components: { TransportationComponent },    
}
</script>

<style scoped>
    .tp-traficpage {
        width: 100%;
        height: 100%;
        padding: 20px;
        overflow: auto;
        display: flex;
        flex-direction: column;        
        justify-items: center;
    }

    .tp-trafic-label {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .tp-title-label {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .tp-icon {
        margin: 10px;
        font-size: 2rem;
    }

</style>
