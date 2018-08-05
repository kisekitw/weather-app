var getUser = (id, callback) => {
    user = {
        id: id,
        name: 'Xavier'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (userObj) => {
    console.log(userObj);
});