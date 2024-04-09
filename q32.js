var currentUsers = ["admin", "Eric", "ali", "Hamza", "Adeel"];
var newUsers = ["admin", "ali", "Muniza", "Laiba", "Bisma"];
var currentUsers_lower = currentUsers.map(function (users) { return users.toLowerCase(); });
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (currentUsers_lower.includes(newUser.toLowerCase())) {
        console.log("Sorry ".concat(newUser, ", that name is taken"));
    }
    else {
        console.log("Yes ".concat(newUser, ", is still in available list"));
    }
}
