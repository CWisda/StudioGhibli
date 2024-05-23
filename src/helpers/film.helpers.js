/**
 * 
 * @param {Array} list An Array of film objects
 * @param {String} director The name of the director
 */


export function filterFilmsByDirector(list, director) {
    //filter()
    if (director == "") {
        //if there is no director, then just return the full list
        return list;
    }

    return list.filter((element) => {
      
        return(element.director == director);
    });
}


/**
 * 
 * @param {Array} list an array of objects
 * @param {String} prop one of the property on the objects
 */



export function getListOf(list, prop) {
    const resultsArr = [];
    // iterate over the provided list array 
    // grab each objects property value
    for (let i = 0; i < list.length; i++) {
        if (!resultsArr.includes(list[i][prop])) {
            // if array does not already include the value
            // then add that value to the array
            resultsArr.push(list[i][prop]);
        }
        
    }
    return resultsArr;
}

