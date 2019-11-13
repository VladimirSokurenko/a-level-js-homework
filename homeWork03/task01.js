function showArguments () {
    console.log(arguments.callee.name)
    for ( var arg of arguments ) {
        console.log(arg)
    }
}

showArguments (10, false, "google")



