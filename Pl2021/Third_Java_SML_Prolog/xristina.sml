fun round file = 
    let
        fun whatever n bucket =
            if n < 0 then bucket
            else whatever (n-1) ((n*n)::bucket);
        
        val lol = whatever 99 [];
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
       

        fun solve_list cr tn st = 
            let
                fun solve2_list c t b loop list=
                    let 
                        fun answer cr tn st iterate= 
                            let
                            
                                fun list_creation sz vl = 
                                    let  
                                        fun helper n nbr bucket = 
                                            if n <= 0 then bucket
                                            else helper (n - 1) nbr (nbr::bucket)
                                        
                                        val rslt = helper sz vl [];
                                    in
                                        rslt
                                    end
                               

                                fun difference (s,f,nt) = 
                                    if f >= s then f - s
                                    else nt - s + f

                            
                                fun differenceList ([], [], nt) = []
                                    | differenceList([x],[y], nt) = difference(x, y, nt)::differenceList([], [], nt)
                                    | differenceList (x::xs, y::ys, nt) = difference(x, y, nt)::differenceList(xs, ys, nt)
                                    | differenceList(_,_, nt) = []

                                fun max [] = 0
                                        | max (head::[]) = head
                                        | max (head::neck::rest) = if head > neck then max (head :: rest) else max (neck :: rest)

                                fun sum [] = 0
                                    | sum (x::xs) = x + sum(xs)

                                

                                fun isRight l = 
                                    let 
                                    
                                        val topElement = max l
                                        val element_sum = sum l
                                    in 
                                        if 2 * topElement <= element_sum + 1 then true
                                        else false
                                    end
                                
                                val list_of_cities = list_creation cr iterate;
                                val difference_calc = differenceList(st, list_of_cities, tn)

                                (* αν η λυση ειναι αποδεκτη, τοτε στειλε μου πισω το head της λιστας με τις πολεις (π.χ. [0,0,0,0]) για να δω σε ποια πολη πρεπει να παω
                                και στειλε μου επισης και το sum 

                                *)
                                
                            in
                                if isRight difference_calc then (sum difference_calc, hd list_of_cities)
                                else (~1,~1)
                            end
                    
                    in 
                        if loop < 0 then list
                        else solve2_list c t b (loop - 1) ((answer c t b loop)::list)
                    end
        
                    
                fun min_list l = 
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
                            min l 1000000 1000000
                    end

                val final_list = solve2_list cr tn st (tn-1) []
        
            in 
                min_list final_list
            end
   fun testing n list =
    if n < 0 then list
    else testing (n-1) ((n*n)::list);

    val randomList = testing 1300 [];
    val rslt = solve_list c t b
    val first = #1 rslt
    val second = #2 rslt
    val _ = print(Int.toString(first)^" "^Int.toString(second)^"\n")
   
   
    in 
        ()
    end