let input = prompt("What would you like to do?");
const toDos = ['Do homework', 'Clean kitchen'];

while(input!=='quit'.toLowerCase()&&input!==q.toLowerCase() ){
   
    if (input === 'new'.toLowerCase()) {
        const newToDo = prompt("Ok, what is new to do?")
        toDos.push(newToDo);
        console.log(newToDo + " added to the list");
    }
    else if (input === 'list'.toLowerCase()) {         
        console.log("************");
        for (let index = 0; index < toDos.length; index++) {
            console.log(`${index}: ${toDos[index]}`);
        }
        console.log("************");
    }
    else if (input === 'delete'.toLowerCase()) {


        const index = prompt("what index do you want to delete?");
        intIndex = parseInt(index);
        if (!Number.isNaN(intIndex)) {
            const deleted = toDos.splice(intIndex,1);
            console.log (`Ok, deleted ${deleted[0]}`);
        }
        else {
            console.log("Unknown index");
        }
        
    }
  
    input = prompt("What would you like to do?");
}
console.log("Quit the App");