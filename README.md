# Task1Fusion
Algorithm $ JS


Algorithm for finding the smallest missing positive integer

1.	Start

2.	Sort Array [A] elements to the index position according to their values\
        2.1	Iterate through A\
        2.2	Set  correct_index = A[i]-1\
        2.3	If element is not in correct index  &&  correct_index>=0 && correct_index<=A.length-1 \
                  SWAP ( A[i], A[correct_index] )\
        2.4	Decrement the iteration count to check just Swapped elements position

3.	In the sorted array find the first value where i != A[i]\
        3.1	 Iterate through sorted A\
        3.2	 If A[i]!=i+1 , RETURN i+1 \
        3.3	 Else if A[i] ==i+1 for all i<A.length, RETURN A[i].length+1

4.	End
