import React from 'react';
import ExploreSection from '../../ExploreSection';
import './snacks.css';
import SnacksCollection from './snacksCollection';
import TopBrands from './TopBrands';
import {restaurants} from '../../../../data/restaurant';


const restaurantsList = restaurants;

const Snacks = () => {
  return (

    <div>
      <SnacksCollection/>
      <TopBrands/>
      <ExploreSection restaurants={restaurantsList}
        collectionName="Delivery Restaurants in Delhi"/>
      
    </div>
  )
}

export default Snacks
