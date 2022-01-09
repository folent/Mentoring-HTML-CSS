const MAIN = document.getElementById('main');

const generateTable100x100 = () => {
    const table = document.createElement('table');
    for (let i = 0; i < 100; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 100; j++) {
            const cell = document.createElement('td');
            cell.innerHTML = (j + 1).toString();
            cell.style.top = i * 35 + 'px';
            cell.style.left = j * 30 + 'px';
            cell.draggable = true;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}

class DragNDrop {
    constructor() {
        this.x = '';
        this.y = '';
        this.currentCell = '';
        this.table = document.querySelector('table');
        this.table.addEventListener('dragstart', this.moveStart, false);
        this.table.addEventListener('dragover', this.moveDragOver, false);
        this.table.addEventListener('drop', this.moveDrop, false);
    }

    moveStart = (e) => {
        this.currentCell = e.target;
        this.x = e.offsetX === undefined ? e.layerX : e.offsetX;
        this.y = e.offsetY === undefined ? e.layerY : e.offsetY;
    }

    moveDrop = (e) => {
        e.preventDefault();
        this.moveCell.style.left = this.x;
        this.moveCell.style.top = this.y;

        this.currentCell.style.left = this.moveX;
        this.currentCell.style.top = this.moveY;
    }
    moveDragOver = (e) => {
        e.preventDefault();
        this.moveCell  = e.target;
        this.moveX = this.moveCell.style.left;
        this.moveY = this.moveCell.style.top;
        this.x = this.currentCell.style.left;
        this.y = this.currentCell.style.top;

    }
}

const table = generateTable100x100();
MAIN.appendChild(table);

new DragNDrop();