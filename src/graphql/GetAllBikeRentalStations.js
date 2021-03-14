import gql from 'graphql-tag';

export const GetAllBikeRentalStations = gql`
query GetAllBikeRentalStations {
  bikeRentalStations: bikeRentalStations  {
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