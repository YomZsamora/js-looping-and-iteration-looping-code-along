// Returns an array of thank you messages for each name provided to the function
let writeCards = (listOfNames, nameOfEvent) => {
   let thankYouMessages = [];
   for(let i = 0; i < listOfNames.length; i++) {
      thankYouMessages.push(`Thank you, ${listOfNames[i]}, for the wonderful ${nameOfEvent} gift!`);
   }
   return thankYouMessages;
}