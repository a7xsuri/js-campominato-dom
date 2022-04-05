function UtentChooseDifficulty() {
    const difficulty = document.getElementById("difficulty").value;
    let numCells;
    switch (difficulty) {
      case "1":
      default:
        numCells = 100;
        break;
      case "2":
        numCells = 81;
        break;
      case "3":
        numCells = 49;
        break;
    }
	// fatto per poi indicare la grandezza delle celle
    let CellsperRow = Math.sqrt(numCells);
    generaGriglia(numCells, CellsperRow);
  }

  function generaGriglia(numCells, CellsperRow) {
    const gridContainer = document.querySelector(".gridContainer");
    gridContainer.innerHTML = "";
    let row = document.createElement("div");
    row.className = "gridrow";
    for (let i = 1; i <= numCells; i++) {
      const Cells = generaCella(i, CellsperRow);
      row.append(Cells);
    }
    gridContainer.append(row);
  }

  function generaCella(num, CellsperRow) {
    let Cells = document.createElement("div");
    Cells.className = "box";
    Cells.style.width = `calc(100% / ${CellsperRow})`;
    Cells.style.height = `calc(100% / ${CellsperRow})`;
    Cells.innerHTML = `<span>${num}</span>`;
    Cells.addEventListener("click", coloraCella);
    return Cells;
  }
  
  function coloraCella() {
    this.classList.add("blueBg");
    this.classList.remove("pointer");
    this.removeEventListener("click", coloraCella);
  }
  
  document.getElementById("play").addEventListener("click", UtentChooseDifficulty);
