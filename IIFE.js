// IIFE - Immediately Invoked Function Expression

const result = (function() {
  const init = {
    id: 0,
    methods: {
      call() {
        return 2;
      }
    }
  };
  return init;
})();
console.log(result.methods.call()); // 2
