<template>
    <div class="t-transportation-label">        
        <div class="t-trafic-label">
            <div class="t-stations-label"> 
                <div class="t-title-label">Bike rental station</div>  
                <ul >                          
                    <li v-for="bikeRentalStation in bikeRentalStations " :key="bikeRentalStation.id" class="t-item"> {{ bikeRentalStation.name }}                     
                    </li>
                </ul>
            </div>
            <div class="t-stations-label">  
                <div class="t-title-label">Available bikes</div>
                <ul>              
                    <li v-for="bikeRentalStation in bikeRentalStations" :key="bikeRentalStation.id" class="t-item"> {{ bikeRentalStation.bikesAvailable }} 
                    </li>
                </ul>
            </div>
            <div class="t-stations-label">  
                <div class="t-title-label">Total bikes amount</div> 
                <ul>            
                    <li v-for="bikeRentalStation in bikeRentalStations" :key="bikeRentalStation.id" class="t-item"> {{ bikeRentalStation.spacesAvailable }} 
                    </li>
                </ul>
            </div>
            <div class="t-stations-label">  
                <div class="t-title-label">State</div>   
                <ul>         
                    <li v-for="bikeRentalStation in bikeRentalStations" :key="bikeRentalStation.id" class="t-item"> {{ bikeRentalStation.state }} 
                    </li>
                </ul>
            </div>            
        </div>
    </div>    
</template>

<script>
import gql from 'graphql-tag';

const GetAllBikeRentalStations = gql`
        query GetAllBikeRentalStations {
            bikeRentalStations {
                id
                stationId
                name
                bikesAvailable
                spacesAvailable
                state
                allowDropoff
                lat
                lon
            }            
        }`;       
        

export default {
    name: 'TransportationComponent',

    data () {
        return {
            loading: 0,
            bikeRentalStations: [],        
        }
    },

     apollo: {
        bikeRentalStations: {
        query: GetAllBikeRentalStations,
        loadingkey: 'loading',
        }
    },
}
</script>

<style scoped>
    .t-transportation-label {
        width: 1000px;
        min-width: 700px;
        border: 2px solid #323266;
        border-radius: 8px; 
        padding: 20px;
        margin: 20px 20px 40px 20px;
        display: flex;
        flex-direction:row;
        justify-content: space-between;   
    }

    .t-title-label {
        width: 200px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .t-item {
        margin-bottom: 10px;
    }

    .t-trafic-label {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    

    .t-stations-label {
        width: 200px;
        display: flex;
        flex-direction: column;
    }

    ul {
        list-style-type: none;        
    } 

</style>
