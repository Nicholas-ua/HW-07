// JavaScript File
var N = Number(prompt('Input Number: '));
var a1 = 1;
var count;
var a_prev_prev = 1;
var a_prev = a1 + a_prev_prev;
var a_next;
document.write(a1 + ' ' + a_prev_prev + ' ' + a_prev +' ');

for (count = 1; count <= N-3; count++) {
        
        a_next = a_prev + a_prev_prev;

        a_prev_prev = a_prev;
        a_prev = a_next;

        document.write(' ' + a_next);
}

document.write('<br>Number ' + N + ' Fibonachi\'s row is ' + a_next);