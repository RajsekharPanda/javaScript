const band={
    bandName:"Led Zeppelin",
    famousSong:"Straight way to heaven",
    famousSong2:"Kashmir",
    year:"1999",
};

// const bandName=band.bandName;
// const famousSong=band.famousSong;
// console.log(bandName , ":",famousSong);

const {bandName,famousSong,...restProps}=band;
console.log(bandName,":",famousSong);
console.log(restProps);
