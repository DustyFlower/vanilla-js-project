import {CityType, GovernmentBuildingType} from '../02/02_02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street);
}

export const getBuildingsWithStaffCountGreaterThan = (buildings: Array<GovernmentBuildingType>, number: number) => {
    return buildings.filter(building => building.staffCount > number);
}