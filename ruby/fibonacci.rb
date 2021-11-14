def fibonacci(num)
  fib = [0, 1]
  if num === 0 || num === 1
    return fib[num]
  end
  (num - 1).times do
    sum = fib[0] + fib[1]
    fib = [fib[1], sum]
  end
  fib.last
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
