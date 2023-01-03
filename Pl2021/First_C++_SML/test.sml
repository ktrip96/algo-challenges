(* fun isLarge(x : real) = if x > 10.0 then true else false

fun evenly_positioned_elems (odd::even::xs) = even::evenly_positioned_elems xs
  | evenly_positioned_elems [random] = []  (* Base case: throw away *)
  | evenly_positioned_elems []    = []  (* Base case *)
 *)

(* TODO *)

(* a) halve function
b) split function *)

fun halve [] = ([],[])
  | halve [x] = ([x],[])
  | halve (x::y::rest) = 
        let 
            val (left, right) = halve rest
        in 
            (x :: left, y :: right)
        end

fun digits number = 
    if number < 10 then [number]
    else (number mod 10) :: (digits (number div 10))

fun digitsv2 n = 
    if n < 10 then [n]
    else (digits(n div 10)) @ [(n mod 10)]