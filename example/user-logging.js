Parse.initialize("xTAsfMOLmOoOQlLbQkYAWgeIy1ixgHk306RMJFdh", "9Z17vijIoN14L2XXvRM0Uta2AmrCMNsZW03HIG55");

var $signUpButton = $('#register-submit');
var $signUpFieldUsername = $('#username-register');
var $signUpFieldPasswordInitial = $('#password-register');
var $signUpFieldEmail =$('#email');
var $signUpFieldPasswordConfirmed = $('#confirm-password');

var $signInButton = $('#login-submit');
var $signInFieldUsername =$('#username-log-in');
var $signInFieldPassword = $('#password-log-in');

function saveCurrentUserSession(username){
    if(typeof username === 'undefined' || username === null){
        throw new Error('Incorrect username!');
    }

    sessionStorage.setItem('sessionUser', username);
}

//////// SIGN UP /////////////////////////
$signUpButton.on('click', function(event) {
    alert('Button clicked');

    event.preventDefault();
    var loggedInUser = Parse.User.current();
    Parse.User.logOut();
    console.log($signUpFieldUsername.val());
    console.log($signUpFieldPasswordInitial.val());
    //User.signUp($signUpFieldUsername.val(),$signUpFieldPasswordInitial.val()) ;
    var user = new Parse.User();
    var init = $signUpFieldPasswordInitial.val();
    var confirmed = $signUpFieldPasswordConfirmed.val();
    if (init == confirmed) {
        user.set("username", $signUpFieldUsername.val());
        user.set("password", $signUpFieldPasswordInitial.val());
        user.set("dataStored", []);
        user.set("email", $signUpFieldEmail.val());

        user.signUp(null, {
            success: function (user) {
                alert('User just signed up');

                saveCurrentUserSession($signUpFieldUsername.val());

               /* //$nameTitle.html('Logged in as ' + $signUpFieldUsername.val());
                $invalidPassword.detach();
                //$container.prepend($logOut);
                //$container.prepend($nameTitle);
                displayData();*/
            },
            error: function (user, error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    } else {

        $signUpFieldPasswordInitial.val('');
        $signUpFieldPasswordConfirmed.val('');
        $signUpFieldPasswordInitial.focus();
    }
});

///////// SIGN IN ///////////////////

$signInButton.on('click', function(ev) {

    event.preventDefault();
    var $this = $(this);

    var $formSignin = $('.form-sign-in');
    var loggedInUser = Parse.User.current();
    Parse.User.logOut();

    loggedInUser =  Parse.User.current();
    console.log(loggedInUser);

    if(!loggedInUser){
        Parse.User.logIn($signInFieldUsername.val(), $signInFieldPassword.val(), {
            success: function(user) {
                saveCurrentUserSession($signInFieldUsername.val());
                //displayData();

                //console.log(user.get('username'));
                var collection = user.get('dataStored');

                console.log(collection);

            },
            error: function(user, error) {
                alert('NO SUCH USER!');


            }
        });
    } else {
        console.log(loggedInUser.get("username"));
    }

});
