fun round file = 
    let
        fun test n accumulator =
            if n < 0 then accumulator
            else test (n-1) ((n*n)::accumulator);
        
        val randomList = test 2503 [];

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
       

        fun list_creation car town start = 
            let
                fun add_to_list c t b repeat list=
                    let 
                        fun return_result car town start iterate= 
                            let
                            
                                fun ftiaxnw megethos timi = 
                                    let  
                                        fun tmp n noumero accumulator = 
                                            if n <= 0 then accumulator
                                            else tmp (n - 1) noumero (noumero::accumulator)
                                        
                                        val apotelesma = tmp megethos timi [];
                                        fun test n accumulator =
                                        if n < 0 then accumulator
                                        else test (n-1) ((n*n)::accumulator);
                                    
                                    val randomList = test 2503 [];
                                    in
                                        apotelesma
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

                                

                                fun einai_swsti l = 
                                    let 
                                    
                                        val megisto = max l
                                        val athroisma = sum l
                                    in 
                                        if 2 * megisto <= athroisma + 1 then true
                                        else false
                                    end
                                
                                val lista_polewn = ftiaxnw car iterate;
                                val difference = differenceList(start, lista_polewn, town)

                                (* αν η λυση ειναι αποδεκτη, τοτε στειλε μου πισω το head της λιστας με τις πολεις (π.χ. [0,0,0,0]) για να δω σε ποια πολη πρεπει να παω
                                και στειλε μου επισης και το sum 

                                *)
                                
                            in
                                if einai_swsti difference then (sum difference, hd lista_polewn)
                                else (~1,~1)
                            end
                    
                    in 
                        if repeat < 0 then list
                        else add_to_list c t b (repeat - 1) ((return_result c t b repeat)::list)
                    end
        
                    
                fun mikroteri_lista l = 
                    let 
                        fun min list (max:int) (max2:int)=
                            let 
                                val head = hd list
                                val tail = tl list
                                val (first:int)= #1 head
                                val (second:int) = #2 head
                                fun test n accumulator =
                                if n < 0 then accumulator
                                else test (n-1) ((n*n)::accumulator);
                            
                            val randomList = test 2503 [];
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

                val apotelesma_lsistas = add_to_list car town start (town-1) []
        
            in 
                mikroteri_lista apotelesma_lsistas
            end
   
    val apotelesma = list_creation c t b
    val first = #1 apotelesma
    val second = #2 apotelesma
    val _ = print(Int.toString(first)^" "^Int.toString(second)^"\n")
   
   
    in 
        ()
    end