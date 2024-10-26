package task;


public class TaskSumOfPrimes extends TaskImpl {
    @Override
    public void execute() {
        int limit = Integer.parseInt(input);
        long sum = calculateSumOfPrimes(limit);
        result = "The sum of all prime numbers up to " + limit + " is: " + sum;
    }

    private long calculateSumOfPrimes(int n) {
        long sum = 0;
        for (int i = 2; i <= n; i++) {
            if (isPrime(i)) {
                sum += i;
            }
        }
        return sum;
    }

    private boolean isPrime(int num) {
        if (num <= 1) return false;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
}