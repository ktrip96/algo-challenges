#include <iostream>
#include <fstream>
#include <vector>
#include <stack>
#include <utility>

using namespace std;

// Ν ==> γραμμές
// Μ ==> στήλες
int N, M, deadlock_counter = 0;

// O πίνακας V έχει τον λαβύρινθο
// Ο πίνακας Helper, είναι ένας πίνακας που περιλαμβάνει μέσα ζευγάρια για κάθε στοιχείο V[i][j]
// Το κάθε ζευγάρι αντιπροσωπεύει (isVisited, isDeadLock)
// Η στοίβα S περιλαμβάνει τις συντεταγμένες των στοιχείων που έχω διαπεράσει
vector<vector<char>> V;
vector<vector<pair<bool, char>>> Helper;
stack<pair<int, int>> S;

void stackUpdate(char state);

/** Ο αλγόριθμος είναι ο εξής:
 * ==> διατρέχουμε κάθε στοιχείο του 2d πίνακα, σύμφωνα με την κατεύθυνση του κάθε στοιχείου
 * ==> Κάθε στοιχείο που συναντάς, το ενημερώνεις ως visited.
 * ==> Αν βγεις έξω από τα όρια του πίνακα, ενημέρωσε το isDeadLock σαν false
 * ==> Αν οδηγηθούμε σε τετραγωνάκι είναι visited τότε:
 *     - Έχουμε κρατήσει σε ένα stack κάθε φορά τις συντεταγμένες των κόμβων που επισκεφτήκαμε.
 *     - Αν πέσουμε πάνω σε visited: 
 *          - Aν το visited είναι Deadlock, όλα τα στοιχεία του stack γίνονται deadlock.
 *          - Αν το visited είναι κανονικό κουτάκι, όλα τα στοιχεία του stack γίνονται κανονικά.
**/

// η Solve δέχεται σαν όρισμα τις συντεταγμένες ενός κόμβου από τον οποίο πρόκειται να
// ξεκινήσει τον παραπάνω αλγόριθμο
void Solve(int i, int j)
{
    // Kαταχώρησέ το ως visited
    Helper[i][j].first = true;

    // Πρόσθεσέ το στη στοίβα
    S.push(make_pair(i, j));

    // Ενημέρωση συντεταγμένων επόμενου node
    if (V[i][j] == 'U')
        i--;
    else if (V[i][j] == 'D')
        i++;
    else if (V[i][j] == 'L')
        j--;
    else if (V[i][j] == 'R')
        j++;

    // Πριν καλέσεις αναδρομικά τσέκαρε που βρίσκεται το επόμενο κουτάκι
    // Αν είναι εντός ορίων, έλεγξε αν είναι visited.
    if (i < N && j < M && i >= 0 && j >= 0)
    {
        // Helper[i][j].first ==> isVisited
        if (Helper[i][j].first)
        {
            // Helper[i][j].second ==> isDeadLock
            //* 'a' ==> initial State
            //* 'b' ==> isDeadLock
            //* 'c' ==> isExit
            if (Helper[i][j].second == 'b')
            {
                stackUpdate('b');
            }
            // αν σε έχουμε επισκεφτεί, αλλλά δεν είσαι Deadlock, τότε κάνε όλη τη στοίβα isExit
            else if (Helper[i][j].second == 'c')
            {
                stackUpdate('c');
            }
            // αν σε έχουμε επισκεφτεί, και είσαι ακόμα στο αρχικό state, τότε σημαίνει ότι έχουμε κύκλο
            // κάνε τον εαυτό σου και όλη τη στοίβα που έχεις μαζέψει deadlock.
            else
            {
                Helper[i][j].second = 'b';
                stackUpdate('b');
            }
        }
        else
            Solve(i, j);
    }
    // αν βγεις εκτος ορίων, κάνε τον εαυτό σου + όλη τη στοίβα σου isExit (c)
    else
    {
        stackUpdate('c');
    }
    return;
}

int main(int argc, char *argv[])
{

    char input;

    /** Διάβασμα αρχείου**/

    ifstream myfile;
    myfile.open(argv[1]);
    myfile >> N;
    myfile >> M;
    for (int i = 0; i < N; i++)
    {
        vector<char> temp;
        for (int j = 0; j < M; j++)
        {
            myfile >> input;
            temp.push_back(input);
        }
        V.push_back(temp);
    }

    /** Δημιουργία του Βοηθητικού 2d πίνακα **/

    for (int i = 0; i < N; i++)
    {
        vector<pair<bool, char>> temp;
        for (int j = 0; j < M; j++)
        {
            pair<bool, char> initializer(false, 'a');
            temp.push_back(initializer);
        }
        Helper.push_back(temp);
    }

    /** Τρέξιμο του αλγορίθμου **/

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            if (!Helper[i][j].first)
                Solve(i, j);
        }
    }

    cout << deadlock_counter << endl;

    return 0;
}

/** Functions **/

void stackUpdate(char state)
{
    int i, j;
    pair<int, int> temp;
    while (!S.empty())
    {
        temp = S.top();
        i = temp.first;
        j = temp.second;
        Helper[i][j].second = state;
        if (state == 'b')
            deadlock_counter++;
        S.pop();
    }
    return;
}