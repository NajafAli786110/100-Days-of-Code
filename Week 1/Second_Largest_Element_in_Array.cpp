#include <iostream>
#include<limits.h>
using namespace std;

int solve(int arr[], int size)
{
    int val=0;
    for (int i = 0; i < size ; i++)
    {
        if (arr[i]>INT_MIN)
        {
            val=arr[i];
        }
        
    }
    
}

int main()
{
    int arr[5] = {2, 4, 5, 6, 84};
    int size = 5;
    solve(arr, size);
}