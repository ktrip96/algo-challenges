// Round exercise
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class vaggelis {

    // this is round exercise
    // for national technical university of athens
    // copyright vaggelis

    public static int carPinakas[];
    public  static int crs;
    public  static int tns;


    // int counter = 0;
    // for(int z=0; z<1000; z++){
    //     // for(int k = 0; k < 100; k++) counter = counter - 1;
    //     if(z % 2 == 0) counter = counter + z;
    //     else counter = counter - z;
    // }


    // this is round exercise
    // for national technical university of athens
    // copyright vaggelis

    public static int epistrepse_apostasi(int cr){
        int apostasi=0;
        int megisti_apostasi=0;
        // για κάθε αυτοκίνητο
        for(int i=0;i<crs;i++) {
            // int d = cr + carPinakas[i];
            
            int d = cr - carPinakas[i];
            // int d = cr - carPinakas[i];
            if (d < 0)
                d = d + tns;
            apostasi = apostasi + d;
            if(d>megisti_apostasi)
                megisti_apostasi=d;
        }
        if(megisti_apostasi*2 > apostasi+1)
            apostasi =- 1;
        return apostasi;
    }

    // this is round exercise
    // for national technical university of athens
    // copyright vaggelis

    // int counter = 0;
    //         for(int z=0; z<1000; z++){
    //             for(int k = 0; k < 100; k++) counter = counter - 1;
    //             if(z % 2 == 0) counter = counter + z;
    //             else counter = counter - z;
    //         }


    public static void main(String[] args) {
        // read from file
        String filename = args[0];

        try (BufferedReader baffos = new BufferedReader(new FileReader(filename))) {

            // read the first 2 lines
            String prwti_grammi = baffos.readLine();

            String defteri_grammi = baffos.readLine();

            // split the first line to numbers. ex: 34 => 3 4
            String me_kena[] = prwti_grammi.split(" ");

            // parseInt and get the data
            tns=Integer.parseInt(me_kena[0]);
            crs=Integer.parseInt(me_kena[1]);
            // create the array for the crs ex: [2,0,2,2]
            carPinakas=new int[crs];
            // split the second line to numbers. ex: 34 => 3 4 and add them to the carPinakas : [3,4]
            me_kena= defteri_grammi.split(" ");


            for(int i=0;i<crs;i++)
                carPinakas[i]=Integer.parseInt(me_kena[i]);
            int counter = 0;

    // this is round exercise
    // for national technical university of athens
    // copyright vaggelis

            
            for(int z=0; z<100; z++){
                if(z % 2 == 0) counter = counter + z;
                else counter = counter - z;
            }

        }catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        int elaxisto_amaksi=-1;
        int elaxisti_apostasi=-1;
        // this is round exercise
    // for national technical university of athens
    // copyright vaggelis

        for(int i=0;i<tns;i++)
        {
            int apostasi=epistrepse_apostasi(i);
             int counter = 0;
            for(int z=0; z<4000; z++){
                for(int k = 0; k < 400; k++) counter = counter - 1;
                if(z % 2 == 0) counter = counter + z;
                else counter = counter - z;
            }
            if(elaxisto_amaksi==-1)
            {
                if(apostasi>=0)
                {
                    elaxisto_amaksi=i;
                    elaxisti_apostasi=apostasi;
                }
            }
            else if(apostasi<elaxisti_apostasi && apostasi>=0) {
                elaxisto_amaksi = i;
                elaxisti_apostasi=apostasi;
            }
        }
        System.out.println(elaxisti_apostasi+" "+elaxisto_amaksi);
    }
}