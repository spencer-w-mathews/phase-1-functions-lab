// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    let hq=42;
    return Math.abs(blockNumber-hq);
}

function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber)*264;
}

function distanceTravelledInFeet(start, destination){
    return (Math.abs(start-destination))*264;
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) < 2000){
        var n = (distanceTravelledInFeet(start, destination)*0.02-8)
        var rounded = Math.round(n*100)/100;
        return rounded;
    } else if ( distanceTravelledInFeet(start, destination)< 2500){
        return 25;
    } else if (distanceTravelledInFeet(start, destination)>2500){
        return 'cannot travel that far';
    }
}