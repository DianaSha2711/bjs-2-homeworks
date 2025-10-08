class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }


    get state() {
        return this._state;

    }

    set state(newState) {
        if (newState) {
            if (newState < 0){
                this._state = 0;
            } else if (newState > 100) {
                this._state = 100;
            } else {
                this._state = newState;
            }
        }
    }

    fix() {
        this._state = this._state * 1.5;
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate,pagesCount,author);
        this.type = "fantastic";
    }
}

class Detective extends Book {
      constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate,pagesCount,author);
        this.type = "detective";
    }
}
