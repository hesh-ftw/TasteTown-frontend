
//function to check if the restaurant already in the favourite list. if not add it to fav.
export const isPresentInFavourites=(favourites, restaurant)=>{

    for(let item of favourites){
        if(restaurant.id===item.id){
            return true
        }
    } return false;

}

