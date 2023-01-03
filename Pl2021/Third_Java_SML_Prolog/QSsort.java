import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Objects;
import java.util.Queue;


public class QSsort {
    static class ArrayQueue {
        public int[] arr;
        int front, rear;
        int size ;

        public ArrayQueue(int size) {
            arr = new int[size];
            this.size=size;
            front = -1;
            rear = -1;
        }

        public int getI(int i) {
            return arr[i];
        }

        public void insert(int n) {
            if (front == -1)
                front = 0;
            rear = (rear + 1) % size;
            arr[rear] = n;
        }

        public int delete() {
            int n = arr[front];
            if (front == rear) {
                front = -1;
                rear = -1;
            }
            else {
                front = (front + 1) % size;
            }
            return n;
        }

        public boolean isEmpty() {
            if (front == -1)
                return true;
            else
                return false;
        }

        public boolean isSorted() {
            for (int i = front; i != rear; i = (i + 1) % size) {
                if (arr[(i + 1) % size] < arr[i])
                    return false;
            }
            return true;
        }

        public ArrayQueue clone() {
            ArrayQueue queue = new ArrayQueue(size);
            int i;
            for (i = front; i != rear; i = (i + 1) % size)
                queue.insert(arr[i]);
            queue.insert(arr[i]);
            return queue;
        }
    }

    static class ArrayStack {
        public int[] arr;
        public int count;

        public ArrayStack(int size) {
            count = 0;
            arr = new int[size];
        }

        public void push(int n) {
            arr[count++] = n;
        }

        public int pop() {
            count--;
            return arr[count];
        }

        public boolean isEmpty() {
            return (count == 0);
        }

        public ArrayStack clone() {
            ArrayStack stack = new ArrayStack(arr.length);
            for (int i = 0; i < count; i++)
                stack.push(arr[i]);
            return stack;
        }
    }

    public static int n;
    public static boolean checkSorted(ArrayQueue queue, ArrayStack stack) {
        if (stack.isEmpty()) {
            return queue.isSorted();
        }
        return false;
    }



    public static boolean processSteps(long steps,int numsteps, ArrayQueue q, ArrayStack s) {
        int arr[] = new int[numsteps];
        int i = numsteps;
        int sum=0;
        while (steps != 0) {
            int r = (int) (steps % 2);
            steps = steps / 2;
            arr[--i] = r;
            sum=sum+r*2-1;
            if(sum<0)
                return false;
            else if(sum>n)
                return false;
        }
        ArrayQueue queue = q.clone();
        ArrayStack stack = s.clone();
        for (i = 0; i < numsteps; i++) {
            if (arr[i] == 0) {
                if (queue.isEmpty())
                    return false;
                else
                    operationQ(queue, stack);
            } else {
                if (stack.isEmpty())
                    return false;
                else
                    operationS(queue, stack);
            }
        }
        boolean check = checkSorted(queue, stack);
        queue = null;
        stack = null;
        return check;
    }


    public static void operationQ(ArrayQueue queue, ArrayStack stack) {

            int a = queue.delete();
            stack.push(a);

    }

    public static void operationS(ArrayQueue queue, ArrayStack stack) {

            int a = stack.pop();
            queue.insert(a);

    }

    public static void processStep(ArrayQueue queue, ArrayStack stack) {
        int depth=2;
        long end=2;
        while (true) {
            for (long steps = 0; steps < end; steps++) {
                int bits=Long.bitCount(steps);
                if(bits*2!=depth)
                    continue;
                boolean done = processSteps(steps, depth, queue, stack);
                if (done) {
                    print( steps, depth);
                    return;
                }
            }
            depth=depth+2;
            end=end*4;
        }
    }
    public static void print(long steps,int numsteps){
        int arr[]=new int[numsteps];
        int i=numsteps;
        while(steps!=0) {
            int r = (int) (steps % 2);
            steps = steps / 2;
            arr[--i] = r;
        }
        for(i=0;i<numsteps;i++){
            if(arr[i]==0)
                System.out.print("Q");
            else
                System.out.print("S");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        ArrayQueue queue;
        ArrayStack stack;
        String filename = args[0];
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line1 = br.readLine();
            String line2 = br.readLine();
            String splitt[] = line2.split(" ");
            n = Integer.parseInt(line1);
            queue = new ArrayQueue(n);
            stack = new ArrayStack(n);
            int arr[] = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(splitt[i]);
                queue.insert(arr[i]);
            }
            if(checkSorted(queue,stack))
                System.out.println("empty");
            else
                processStep(queue, stack);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}