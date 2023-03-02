const cells = document.querySelectorAll(".cell");
const statustext = document.querySelector("#status");
const restartbutton = document.querySelector("#restartbtn");
const wincondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

let options = ["", "", "", "", "", "", "", "" ,""];
let currentplayer = "X";
let running = false;

intializegame()
function intializegame()
{
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartbutton.addEventListener("click", restartgame);
    statustext.textContent = `${currentplayer}' turn`;
    running=true;
}


function cellClicked()
{
    const cellindex = this.getAttribute("cellIndex");

    if(options[cellindex] != "" || !running)
    {
        return;
    }

    updatecell(this, cellindex);
    checkwinner();
}

function updatecell(cell, index)
{
    options[index] = currentplayer;
    cell.textContent = currentplayer;
    cell.classList.add(currentplayer);
}

function changeplayer()
{
    currentplayer = (currentplayer== "X")? "O" : "X";
    if(currentplayer == "X")
    {
        
    }
    statustext.textContent = `${currentplayer}'s turn`
}
function checkwinner()
{ let roundWon = false;


    for( let i= 0; i < wincondition.length; i++)
    {
        const condition = wincondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];


        if(cellA == "" && cellB == "" && cellC == "")
        {
            continue;
        }

        if(cellA == cellB && cellB == cellC)
        {
            roundWon = true;
            break;
        }
    }

    if(roundWon)
    {
        statustext.textContent = `${currentplayer}'has won`;
        running = false;
    }
    else if(!options.includes(""))
    {
        statustext.textContent = `DRAWW`;
    }
    else 
    {
        changeplayer();
    }



}
function restartgame()
{
    running =false;
    currentplayer = "X";
    statustext.textContent = `${currentplayer}'s turn`;
    options = ["", "", "", "", "", "", "", "" ,""];
    cells.forEach(cell => cell.textContent = "");
    intializegame();


}



