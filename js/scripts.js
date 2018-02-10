(function($){
        $(window).load(function(){
            $(".content").mCustomScrollbar({
				axis:"y"
				});
        });
    })(jQuery);

var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}

// Bind the functions...
document.getElementById('draggable-element1').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.getElementById('draggable-element2').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.getElementById('draggable-element3').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.getElementById('draggable-element4').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.onmousemove = _move_elem;
document.onmouseup = _destroy;





// auto complete js starts here

jQuery(document).ready(function(){
			
			jQuery("#full").mention({
				users: [{
					name: 'Lindsay Made',
					username: 'LindsayM',
					image: 'http://placekitten.com/25/25'
				}, {
					name: 'Rob Dyrdek',
					username: 'robdyrdek',
					image: 'http://placekitten.com/25/24'
				}, {
					name: 'Rick Bahner',
					username: 'RickyBahner',
					image: 'http://placekitten.com/25/23'
				}, {
					name: 'Jacob Kelley',
					username: 'jakiestfu',
					image: 'http://placekitten.com/25/22'
				}, {
					name: 'John Doe',
					username: 'HackMurphy',
					image: 'http://placekitten.com/25/21'
				}, {
					name: 'Charlie Edmiston',
					username: 'charlie',
					image: 'http://placekitten.com/25/20'
				}, {
					name: 'Andrea Montoya',
					username: 'andream',
					image: 'http://placekitten.com/24/20'
				}, {
					name: 'Jenna Talbert',
					username: 'calisunshine',
					image: 'http://placekitten.com/23/20'
				}, {
					name: 'Street League',
					username: 'streetleague',
					image: 'http://placekitten.com/22/20'
				}, {
					name: 'Loud Mouth Burrito',
					username: 'Loudmouthfoods',
					image: 'http://placekitten.com/21/20'
				}]
			});
			
		});
		
// autocomplete ends here