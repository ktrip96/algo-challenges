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
        val (towns, cars, begin) = parse file 

        (* this is a random comment to check how SML behaves with comments *)
        (* this is a random comment to check how SML behaves with comments *)
        (* this is a random comment to check how SML behaves with comments *)
        

         fun forlst n gather =
            if n < 0 then gather
            else forlst (n-1) ((n*n)::gather);
        
        val randomStuff = forlst 10240 [];

        fun createTheList crs tns bgn = 
            let
                fun append cr tn st itr lst=
                    let 
                        fun res crs tns bgn iterate= 
                            let
                            
                                fun create s v = 
                                    let  
                                        fun temp n num gather = 
                                            if n <= 0 then gather
                                            else temp (n - 1) num (num::gather)
                                        
                                        val res = temp s v [];
                                    in
                                        res
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

                                

                                fun accepted l = 
                                    let 
                                    
                                        val maxStoixeio = max l
                                        val element_sum = sum l
                                    in 
                                        if 2 * maxStoixeio <= element_sum + 1 then true
                                        else false
                                    end
                                fun forlst n gather =
                                    if n < 0 then gather
                                    else forlst (n-1) ((n*n)::gather);
                                
                                val randomStuff = forlst 10240 [];
                                val cities = create crs iterate;
                                val difference = differenceList(bgn, cities, tns)

                                (* αν η λυση ειναι αποδεκτη, τοτε στειλε μου πισω το head της λιστας με τις πολεις (π.χ. [0,0,0,0]) για να δω σε ποια πολη πρεπει να παω
                                και στειλε μου επισης και το sum 

                                *)
                                
                            in
                                if accepted difference then (sum difference, hd cities)
                                else (~1,~1)
                            end
                    
                    in 
                        if itr < 0 then lst
                        else append cr tn st (itr - 1) ((res cr tn st itr)::lst)
                    end
        
                    
                fun smallerList l = 
                    let 
                        fun min lst (max:int) (max2:int)=
                            let 
                                val head = hd lst
                                val tail = tl lst
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

                val total_list = append crs tns bgn (tns-1) []
        
            in 
                smallerList total_list
            end
   
    val res = createTheList cars towns begin
    val first = #1 res
    val second = #2 res
    val _ = print(Int.toString(first)^" "^Int.toString(second)^"\n")
   
   
    in 
        ()
    end