
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
        val (n, k, mylist) = parse file 
    in 
    (n, k, mylist)
    end