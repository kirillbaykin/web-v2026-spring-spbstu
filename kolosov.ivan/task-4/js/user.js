class User {
    static #usersCount = 0;

    constructor(id, name) {
        if (typeof name != "string") {
            throw new Error("Name must be a string");
        }
        else if (typeof id != "number")
        {
            throw new Error("ID must be a number");
        }
        this.id = id;
        this.name = name;
        this.friends = [];
        User.#usersCount++;
    }

    addFriend(friendID) {
        if (typeof friendID != "number") {
            throw new Error("friendID must be a number ");
        }
        else if (friendID === this.id) {
            throw new Error("User can't be friends with himself");
        }
        else if(this.friends.findIndex(user => {
            return user.id === friendID
        }))
        this.friends.push(friendID);
    }

    removeFriend(friendID) {
        if (typeof friendID != "number") {
            throw new Error("friendID must be a number");
        }
        else if (this.friends.indexOf(friendID) === -1) {
            throw new Error("User doesn't have a friend with such ID");
        }
        this.friends.splice(this.friends.indexOf(friendID), 1);
    }

    get friendsCount() {
        return this.friends.length;
    }

    static get usersCount() {
        return this.#usersCount;
    }
}



