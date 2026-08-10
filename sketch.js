let now = document.getElementById('now');
let work = document.getElementById('work');
let fun = document.getElementById('fun');
let future = document.getElementById('future');

let nowLink = document.getElementById('now-link');
let workLink = document.getElementById('work-link');
let funLink = document.getElementById('fun-link');
let futureLink = document.getElementById('future-link');


nowLink.onclick = function(event) {
    event.preventDefault();

    now.classList.add('hidden');
    work.classList.add('hidden');
    fun.classList.add('hidden');
    future.classList.add('hidden');

    now.classList.remove('hidden');
};


workLink.onclick = function(event) {
    event.preventDefault();

    now.classList.add('hidden');
    work.classList.add('hidden');
    fun.classList.add('hidden');
    future.classList.add('hidden');

    work.classList.remove('hidden');
};


funLink.onclick = function(event) {
    event.preventDefault();

    now.classList.add('hidden');
    work.classList.add('hidden');
    fun.classList.add('hidden');
    future.classList.add('hidden');

    fun.classList.remove('hidden');
};


futureLink.onclick = function(event) {
    event.preventDefault();

    now.classList.add('hidden');
    work.classList.add('hidden');
    fun.classList.add('hidden');
    future.classList.add('hidden');

    future.classList.remove('hidden');
};