# Count the number of prime numbers less than a non-negative number, n.

# @param {Integer} n
# @return {Integer}
def count_primes(n)
    return 0 if n < 3
    primes = Array.new(n, true)
    primes[0] = primes[1] = false
    
    stop = (Math.sqrt(n)).ceil
    (2..stop).each do |num| 
        if primes[num]
            iterations = n / num
            
            (2..iterations).each do |multiple|
                primes[num * multiple] = false
            end
        end
    end
    primes.count(true)
end

