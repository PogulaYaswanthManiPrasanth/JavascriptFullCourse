// ------------FOR IN loop  is Used for Array of Items------------------------

const socialNetworkPlatforms = ["Youtube","Instagram","Facebook","AmazonPrime","Netflix"];

/* for (const socialMedia in socialNetworkPlatforms) {
    if (Object.hasOwnProperty.call(socialNetworkPlatforms,socialMedia )) {
        const element = socialNetworkPlatforms[socialMedia];
        console.log(element);
    }
} */

//---------------OR---------------------

for (const socialMedia of socialNetworkPlatforms){
    console.log(socialMedia);

}
console.log("---------------------------")
//==================FOR OF LOOP is used for objects===================

const objectForSocialMedia = {
    yt : "Youtube",
    fb : "Facebook",
    insta:"Instagram",
    pymp:"PogulaYaswanthManiPrasanth"

}
for (const socialMediaObjects in objectForSocialMedia) {
   // It is giving the output as keys Only
//     console.log(socialMediaObjects)
//    // To access the values from object
//    console.log(objectForSocialMedia[socialMediaObjects]); 
   //Use template literals for better understanding
   console.log(`key is : ${socialMediaObjects} and the value is :  ${objectForSocialMedia[socialMediaObjects]}`)
}






















