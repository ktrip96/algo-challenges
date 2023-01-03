val x = 5
val name = "Kostas"
val _ = print (name ^ "\n")
val guest_list = [ "Mom", "Dad" ] @ [ "Aunt", "Uncle" ]

fun evenly_positioned_elems (odd::even::xs) = even::evenly_positioned_elems xs
  | evenly_positioned_elems [odd] = []  (* Base case: throw away *)
  | evenly_positioned_elems []    = []  (* Base case *)


fun printSquare n = 
   let 
        fun helper k acc = 
            if k < 0 then acc
            else helper (k-1) ((k*k)::acc);
    in 
        helper n []
    end

fun printList nil = ()
    | printList (x::xs) = (print(Int.toString(x)^"\n");printList(xs));


fun final number = 
    let 
        fun printSquare n = 
            let 
                    fun helper k acc = 
                        if k < 0 then acc
                        else helper (k-1) ((k*k)::acc);
            in 
                helper n []
            end
        fun printList nil = ()
        |   printList (x::xs) = (print(Int.toString(x)^"\n");printList(xs));
    in 
        printList (printSquare number)
    end


fun fordown n = 
    if n < 0 then ()
    else (print(Int.toString(n*n)^"\n");fordown (n-1));

fun untilLimit x y =
    if x > y then ()
    else (print(Int.toString(x)^"\n"); untilLimit (x + 1) y);

fun untilTen x = untilLimit x 10;