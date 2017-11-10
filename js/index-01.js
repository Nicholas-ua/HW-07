// JavaScript File
var N = Number(prompt('Input Number\'s Fibonachi row: '));
var fib = [1, 1];
var i;
document.write(fib[0] + ' ' + fib[1]);
for (i = 2; i < N; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    fib.push([i]);
    document.write(' ' + fib[i]);
}
document.write('<br>Row length ' + fib.length);
document.write('<br>Number ' + N + ' Fibonachi\'s row is ' + fib[N-1]);