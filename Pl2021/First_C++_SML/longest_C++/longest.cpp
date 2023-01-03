#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

/** O αλγόριθμος που ακολουθήσαμε πάρθηκε από εδώ: https://www.geeksforgeeks.org/longest-subarray-having-average-greater-than-or-equal-to-x-set-2/ **/

// ο πίνακας κρατάει όλα τα αρχικά δεδομένα
// ενώ ο πίνακας Sum κρατάει το άθροισμα τους, έπειτα από κάποια επεξεργασία που γίνεται στη γραμμή 70
vector<double> V, Sum;

// M ==> μέρες, Ν ==> νοσοκομεία
int M, N;

int longestSubstring(vector<double> Sum)
{
    int longestSubstring, i, j, size = Sum.size(), indexI = 0, indexJ = 0;
    double minimumFromLeft[size], maximumFromRight[size];
    minimumFromLeft[0] = Sum[0];
    for (int i = 0; i < size; i++)
    {
        minimumFromLeft[i] = min(Sum[i], minimumFromLeft[i - 1]);
    }
    maximumFromRight[size - 1] = Sum[size - 1];

    for (j = size - 2; j >= 0; j--)
    {
        maximumFromRight[j] = max(Sum[j], maximumFromRight[j + 1]);
    }
    i = 0, j = 0, longestSubstring = -1;
    while (j < size && i < size)
    {
        if (minimumFromLeft[i] <= maximumFromRight[j])
        {

            if (longestSubstring < j - i)
            {
                longestSubstring = j - i;
                indexI = i;
                indexJ = j;
            }
            j = j + 1;
        }
        else
        {
            i = i + 1;
        }
    }

    // έλεγξε αν το πρώτο στοιχείο του πίνακα ανήκει στο longestSubString
    // αν ανήκει τότε απλά βάλτο και αυτό μέσα.
    int sum = 0;
    if (indexI == 0)
    {
        for (int i = indexI; i < indexJ; i++)
        {
            sum += V[i];
        }
        if (-sum / (N * (indexJ - indexI)) >= 1)
            return longestSubstring + 1;
    }
    return longestSubstring;
}

int main(int argc, char *argv[])
{

    double input, sum = 0;

    /** Διάβασμα Αρχείου **/

    ifstream myfile;
    myfile.open(argv[1]);
    myfile >> M;
    myfile >> N;
    while (myfile >> input)
    {
        // a)εξαρχής διαιρούμε με N προκειμένου να μετατρέψουμε τα δεδομένα μας σε: κρεβάτια / νοσοκομείο.
        // b)Αφαιρούμε από κάθε στοιχείο το 1, διότι θέλουμε ο μέσος όρος να είναι μεγαλύτερος >= 1.
        // c)Αλλάζουμε πρόσημο στα στοιχεία του πίνακα
        // d)Κρατάμε σε κάθε στοιχείο του πίνακα, το άθροισμα των προηγουμένων
        V.push_back(input);
        input = -1 * (input / N) - 1;
        sum += input;
        Sum.push_back(sum);
    }

    cout << longestSubstring(Sum) << endl;
    return 0;
}
