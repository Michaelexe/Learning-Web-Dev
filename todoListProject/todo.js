const list = [];

function startToDo() {
    let command = prompt('What do you want to do?').toLowerCase();

    while (command !== "quit") {
        switch (command) {
            case 'new':
                let todo = prompt('What do you want to add to the list?');
                list.push(todo);
                console.log(`Added ${todo} to the list`);
                break;
            
            case 'list':
                console.log('************');

                for (let i in list) {
                    console.log(`${i}: ${list[i]}`);
                }

                console.log('************');
                break;
            
            case 'remove':
                let removeIndex = parseInt(prompt('Type the index of the ToDo you want to remove:'));
                list.splice(removeIndex,1);
        } 

        command = prompt('What do you want to do?').toLowerCase();
    }
}