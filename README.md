# Divide and Conquer Sum

I aqcuired help from chatgbt for tips on how to merge my recursive sum function and my split array function. I read GeeksForGeeks article on Divide and Conquer algorithms to learn more on how to implement a divide and conquer function. I also used the GeeksForGeeks article on How to analyse Complexity of Recurrence Relation as well as Recurrence Relations | A Complete Guide to better understand recurrence relation magic. I also used Chenna V's response to a merge sort analysis question on stackOverflow: 
https://stackoverflow.com/questions/7801861/why-is-merge-sort-worst-case-run-time-o-n-log-n
I used claude.ai to analyze the runtime again. 

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Answer:

T(n) = {

3T(n/3) + $\Theta$(n)    

Time Complexity:

$\Theta$(nlogn)

Reasoning:

If n = 0, n = 1, or n = 2 the base cases are known and linear. As such, the time complexity is simply T(n) where n is the input. This results to 1. If n < 2, we must solve for the theta complexity. We start by knowing the recurrence relation for a divide and conquer algorithm from class: T(n) = 2T(n/2) + $\Theta$(n). This relation is for a classic merge sort with two split sub arrays. This split relation is represented in the recurence relation as x: T(n) = xT(n/x) + $\Theta$(n). For three split subarrays, x could be changed in the relation to: T(n) = 3T(n/3) + $\Theta$(n). The time complexity for a classic merge sort is $\Theta$(nlog(base 2)n). This is because we are doing log(base 2) 'stages' of splitting the original array. While splitting the array into three subarrays, we would have log(base 3) 'stages'. As such, the time complexity is simply subsituted to $\Theta$(nlog(base 3)n). 
