export  class AppCounterService {
    counter = 1;

    increase () {
        this.counter++
      }
    
      decrease() {
        this.counter--
      }
}