#include <iostream>
#include <string>
#include <limits.h>
#include <vector>
using namespace std;

string kthLargestNumber(vector<string> &nums, int k)
{
    string ans;
    int secondLargest = INT_MIN;
    int largest = INT_MIN;

    if (k <= 0 || k > nums.size())
    {
        return "-1";
    }

    for (int i = 0; i < k; i++)
    {
        try
        {
            int element = stoi(nums[i]);
            if (element > largest)
            {
                secondLargest = largest;
                largest = element;
            }
            else if (element > secondLargest && element < largest)
            {
                secondLargest = element;
            }
        }
        catch (const std::invalid_argument &ia)
        {
            // Handle the case where the string cannot be converted to an integer
            cerr << "Invalid argument: " << ia.what() << endl;
            return "-1";
        }
    }

    ans = to_string(secondLargest);
    return ans;
}

int main()
{
    vector<string> nums = {"3", "6", "7", "10"};
    int size = nums.size();
    string ans = kthLargestNumber(nums, size);

    cout << "Your desired answer is: " << ans;

    return 0;
}
