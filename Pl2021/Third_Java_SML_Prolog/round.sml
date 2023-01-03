fun round file = 
    let
        fun parse file =    
            let
                fun readInt input =  Option.valOf (TextIO.scanStream (Int.scan StringCvt.DEC) input)
                val inStream = TextIO.openIn file
                val n = readInt inStream
                val k = readInt inStream
                val _ = TextIO.inputLine inStream
                fun readInts 0 mylist = rev mylist 
                | readInts i mylist = readInts (i - 1) (readInt inStream :: mylist)
            in
                (n, k, readInts k [])
            end
        val (t, c, b) = parse file 
       

        fun putIntoListHighLevel cars towns begin = 
            let
                fun putIntoList c t b iterations list=
                    let 
                        fun returnResult cars towns begin iterate= 
                            let
                            
                                fun createList size value = 
                                    let  
                                        fun tempCreateList n number acc = 
                                            if n <= 0 then acc
                                            else tempCreateList (n - 1) number (number::acc)
                                        
                                        val result = tempCreateList size value [];
                                    in
                                        result
                                    end
                                fun calculateDifference (start,finish,numberOfTowns) = 
                                    if finish >= start then finish - start
                                    else numberOfTowns - start + finish

                            
                                fun differenceList ([], [], numberOfTowns) = []
                                    | differenceList([x],[y], numberOfTowns) = calculateDifference(x, y, numberOfTowns)::differenceList([], [], numberOfTowns)
                                    | differenceList (x::xs, y::ys, numberOfTowns) = calculateDifference(x, y, numberOfTowns)::differenceList(xs, ys, numberOfTowns)
                                    | differenceList(_,_, numberOfTowns) = []

                                fun max [] = 0
                                        | max (head::[]) = head
                                        | max (head::neck::rest) = if head > neck then max (head :: rest) else max (neck :: rest)

                                fun sum [] = 0
                                    | sum (x::xs) = x + sum(xs)

                                

                                fun isAcceptable l = 
                                    let 
                                    
                                        val maxElement = max l
                                        val sumOfElements = sum l
                                    in 
                                        if 2 * maxElement <= sumOfElements + 1 then true
                                        else false
                                    end
                                
                                val cityList = createList cars iterate;
                                val diff = differenceList(begin, cityList, towns)

                                (* αν η λυση ειναι αποδεκτη, τοτε στειλε μου πισω το head της λιστας με τις πολεις (π.χ. [0,0,0,0]) για να δω σε ποια πολη πρεπει να παω
                                και στειλε μου επισης και το sum 

                                *)
                                
                            in
                                if isAcceptable diff then (sum diff, hd cityList)
                                else (~1,~1)
                            end
                    
                    in 
                        if iterations < 0 then list
                        else putIntoList c t b (iterations - 1) ((returnResult c t b iterations)::list)
                    end
        
                    
                fun minOfList l = 
                    let 
                        fun min list (max:int) (max2:int)=
                            let 
                                val head = hd list
                                val tail = tl list
                                val (first:int)= #1 head
                                val (second:int) = #2 head
                            in 
                                if tail = [] then
                                    if first < 0 orelse second < 0 then (max, max2)
                                    else if first < max then head
                                    else 
                                        if first = max then 
                                            if second < max2 then (first, second)
                                            else (first, max2)
                                    else (max,max2)
                                else if first < 0 orelse second < 0 then min tail max max2
                                else if first < max then min tail first second
                                else if first = max then 
                                    if second < max2 then min tail first second
                                    else min tail first max2
                                else min tail max max2
                            end
                        in 
                            min l 1073741823 1073741823 
                    end

                val resultList = putIntoList cars towns begin (towns-1) []
        
            in 
                minOfList resultList
            end
   
    val Result = putIntoListHighLevel c t b
    val first = #1 Result
    val second = #2 Result
    val _ = print(Int.toString(first)^" "^Int.toString(second)^"\n")
   
   
    in 
        ()
    end