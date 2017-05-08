'use strict';

var target = $('[data-remember-me="true"]').find('form'),
    name_placeholder = $('.has-logged-in'),
    user_field = $('.user-name-context'),
    is_saved_username = localStorage.getItem('username'),
    forget_me = $('#reset');

if (is_saved_username) {
	user_field.prepend(['<h3>', is_saved_username.charAt(0).toUpperCase() + is_saved_username.slice(1), '</h3>'].join(''));
	user_field.find('#username').val(is_saved_username).hide().siblings('label').hide();
}

target.on('submit', function () {
	localStorage.setItem('username', $(this).find('#username').val());

	console.log(localStorage.getItem('username'));
});

forget_me.click(function (e) {
	e.preventDefault();
	localStorage.removeItem('username');
	alert('username');
});