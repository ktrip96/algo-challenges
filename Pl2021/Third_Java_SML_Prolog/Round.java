// imports
import java.io.FileReader;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.FileNotFoundException;


public class Round {

    public  static int towns;
    public static int car_array[];
    public  static int cars;


    public static int return_Distance(int car){
        int maximum_distance=0;
        int distance=0;
        // για κάθε αυτοκίνητο
        for(int i=0;i<cars;i++) {
            // int d = car + car_array[i];
            int d = car - car_array[i];
            // int d = car - car_array[i];
            if (d < 0)
                d = d + towns;
            distance = distance + d;
            if(d>maximum_distance)
                maximum_distance=d;
        }
        if(maximum_distance*2 > distance+1)
            distance =- 1;
        return distance;
    }
    public static void main(String[] args) {
        // read from file
        String filename = args[0];
        try (BufferedReader buffer = new BufferedReader(new FileReader(filename))) {
            // read the first 2 lines
            String first_line = buffer.readLine();
            String second_line = buffer.readLine();
            // split the first line to numbers. ex: 34 => 3 4
            String add_spaces[] = first_line.split(" ");
            // parseInt and get the data
            towns=Integer.parseInt(add_spaces[0]);
            cars=Integer.parseInt(add_spaces[1]);
            // create the array for the cars ex: [2,0,2,2]
            car_array=new int[cars];
            // split the second line to numbers. ex: 34 => 3 4 and add them to the car_array : [3,4]
            add_spaces= second_line.split(" ");
            for(int i=0;i<cars;i++)
                car_array[i]=Integer.parseInt(add_spaces[i]);
            int sum = 0;
            for(int j=0; j<25000; j++){
                if(j % 2 == 0) sum = sum + j;
                else sum = sum - j;
            }
        }catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        int minimum_distance=-1;
        int minimum_car=-1;

        for(int i=0;i<towns;i++)
        {
            int distance=return_Distance(i);
             int sum = 0;
            for(int j=0; j<25; j++){
                if(j % 2 == 0) sum = sum + j;
                else sum = sum - j;
            }
            if(minimum_car==-1)
            {
                if(distance>=0)
                {                                        
                   minimum_distance=distance;
                   minimum_car=i;
                }
            }
            else if(distance<minimum_distance && distance>=0) {
                minimum_distance=distance;                
                minimum_car = i;
            }
        }
        System.out.println(minimum_distance+" "+minimum_car);
    }
}