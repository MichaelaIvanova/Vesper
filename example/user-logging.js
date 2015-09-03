Parse.initialize("xTAsfMOLmOoOQlLbQkYAWgeIy1ixgHk306RMJFdh", "9Z17vijIoN14L2XXvRM0Uta2AmrCMNsZW03HIG55");
var $wrapper = $('#wrapper');

var $signUpButton = $('#register-submit');
var $signUpFieldUsername = $('#username-register');
var $signUpFieldPasswordInitial = $('#password-register');
var $signUpFieldEmail = $('#email');
var $signUpFieldPasswordConfirmed = $('#confirm-password');

var $signInButton = $('#login-submit');
var $signInFieldUsername = $('#username-log-in');
var $signInFieldPassword = $('#password-log-in');

var $signInForm = $('#input-form');
var $navbar = $('#navbar');
var $addButton = $('#addItem');

function saveCurrentUserSession(username) {
    if (typeof username === 'undefined' || username === null) {
        throw new Error('Incorrect username!');
    }

    sessionStorage.setItem('sessionUser', username);
}

//////// SIGN UP /////////////////////////
$signUpButton.on('click', function (event) {
    alert('Button clicked');

    event.preventDefault();
    var loggedInUser = Parse.User.current();
    Parse.User.logOut();

    console.log($signUpFieldUsername.val());
    console.log($signUpFieldPasswordInitial.val());

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

                $signInForm.hide();
                $navbar.show();

                jQuery.ajax({
                    url: "../crudeExampleOfAddingItem/tableGenerator.js",
                    dataType: "script",
                    cache: true
                }).then(function () {
                    alert('Table Generator loaded');
                    jQuery.ajax({
                        url: "../crudeExampleOfAddingItem/script.js",
                        dataType: "script",
                        cache: true
                    })
                }).then(function () {
                    alert('Scrip.js loaded');

                    jQuery.ajax({
                        url: "../crudeExampleOfAddingItem/createAndAddItem.js",
                        dataType: "script",
                        cache: true
                    })

                }).then(function () {
                    alert('Everyting is loaded:))))))))))');
                }).then(function () {

                    storedItem.set('user', user);
                    storedItem.save();
                    user.addUnique("dataStored", storedItem);
                    user.save();
                })
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

$signInButton.on('click', function (ev) {


    event.preventDefault();
    var $this = $(this);

    var $formSignin = $('.form-sign-in');
    var loggedInUser = Parse.User.current();
    Parse.User.logOut();

    loggedInUser = Parse.User.current();
    console.log(loggedInUser);

    if (!loggedInUser) {
        Parse.User.logIn($signInFieldUsername.val(), $signInFieldPassword.val(), {
            success: function (user) {
                saveCurrentUserSession($signInFieldUsername.val());

                $signInForm.hide();
                $navbar.show();

                jQuery.ajax({
                    url: "../crudeExampleOfAddingItem/tableGenerator.js",
                    dataType: "script",
                    cache: true
                }).then(function () {
                    alert('Table Generator loaded');
                    jQuery.ajax({
                        url: "../crudeExampleOfAddingItem/script.js",
                        dataType: "script",
                        cache: true
                    })
                }).then(function () {
                    alert('Scrip.js loaded');

                    jQuery.ajax({
                        url: "../crudeExampleOfAddingItem/createAndAddItem.js",
                        dataType: "script",
                        cache: true
                    })

                }).then(function () {
                    alert('Everyting is loaded:))))))))))');
                    jQuery.ajax({
                        url: "add-item-database.js",
                        dataType: "script",
                        cache: true
                    })
                }).then(function () {
                    alert('Loaded Adder function!')
                }).then(function(){

                //displayData();
                storedItem.set('user', user);
                storedItem.save();
                user.addUnique("dataStored", storedItem);
                user.save();

                });
                //console.log(user.get('username'));
                var collection = user.get('dataStored');
                console.log(collection);
                $('#input-form').fadeOut(100);
                $('#navbar').fadeIn(500);
            },
            error: function (user, error) {
                $('#invalid-user-div').fadeIn(500);

            }
        });
    } else {
        console.log(loggedInUser.get("username"));
    }

});
