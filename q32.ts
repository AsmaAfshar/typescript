let currentUsers: string[] = ["admin", "Eric", "ali", "Hamza", "Adeel"];
let newUsers: string[] = ["admin", "ali", "Muniza", "Laiba", "Bisma"];

let currentUsers_lower: string[] = currentUsers.map((users) => users.toLowerCase());


for (let newUser of newUsers) {
if (currentUsers_lower.includes(newUser.toLowerCase())){
        console.log(`Sorry ${newUser}, that name is taken`)
} else {
 console.log(`Yes ${newUser}, is still in available list`)
}
}