/* const topic = "HTML";
*/

const topics = [ "HTML", "CSS", "Git", "JavaScript"];
const randomTopic  = topics[Math.floor(Math.random() * topics.length)];


function listTopics() {

    for( let x =0; x < topics.length; x++) {

        console.log(topics[x]);
   }
}

function selectTopic(){
    if( randomTopic === "HTML" ) {

        console.log("Lets Study HTML!");
    
    } else if( randomTopic === "CSS" ) {
        console.log("Lets Study CSS!");
    } else if( randomTopic === "JavaScript" ) {
        console.log("Lets Study JavaScript!");
    } else if( randomTopic === "Git" ) {
        console.log("Lets Study Git!");
    } else {
        console.log("Please try again");
    } 

}

console.log("Here are the topics we learned through prework");
listTopics();
console.log("Which topic should we learn first");
selectTopic();
