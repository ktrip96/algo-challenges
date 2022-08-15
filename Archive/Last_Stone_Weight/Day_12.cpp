class Solution {
    public:
        int lastStoneWeight(vector<int>& stones) {
            int n;
            while(true){
                n = stones.size();
                if(n==1||n==0){
                    break;
                }
                sort(stones.begin(),stones.end());
                int a = stones[n-1];
                int b = stones[n-2];
                //instead of erase,use pop_back
                stones.pop_back();
                stones.pop_back();
                if(a != b)
                    stones.push_back(abs(b-a));
                }
                if(n == 1){
                    return stones.at(0);
                }
                else
                    return 0;
        }
};