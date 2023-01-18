let notes = [];
let output = document.getElementById("output");
let defaultNotes = null;

const loadNotes = (filteredItems = notes) => {
    let finalOutput = "";
    filteredItems.length > 0 ? filteredItems.map((note,index)=>{
        finalOutput += `
        <div class="item">
            <div class="controls">
                <button onclick="editNotes(${index})">Edit</button>
                <button onclick="deleteNotes(${index})">Delete</button>
            </div>
            <h2>${note.title}</h2>
        </div>
        `
    }):finalOutput = `<h2 class="error">No Notes Fonded...!</h2>`;
    output.innerHTML = finalOutput;
}

const addEditNotes = () => {
    let valueNotes = document.getElementById("inputAddBar");
    let createNotes = {title:valueNotes.value};
    if(valueNotes.value===""){
        output.innerHTML = `
        <h2 class="error">Empty Notes Not Allowed To Add...!
        <button class="deletebtn" onclick="loadNotes(${output.finalOutput})">GoBackToNotes</button>
        </h2> 
       
        `;
        return false;
    }else if(defaultNotes != null){
        notes[defaultNotes] = createNotes;
        defaultNotes = null;
    }else{
        notes.push(createNotes);
    }
    valueNotes.value = ""
    loadNotes();
}

const editNotes = (index) => {
    let filteredItem = notes[index]
    let valueNotes = document.getElementById("inputAddBar");
    valueNotes.value = filteredItem.title;
    defaultNotes = index
}

const deleteNotes = (index) => {
    notes.splice(index,1);
    loadNotes();
}

const searchNotes = () => {
    let searchByValue = document.getElementById("searchItems");
    let filteredItems = notes.filter((note)=>note.title.toLowerCase().indexOf(searchByValue.value.toLowerCase())!==-1);
    loadNotes(filteredItems);
}

const sortBy = () => {
    let sortbyvalue = notes.reverse();
    loadNotes(sortbyvalue)
}