let circle1 = {
    radius: 5, 
    getArea: function() {
      return Math.PI * this.radius * this.radius; // Площадь круга: π * r^2
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius; // Периметр окружности: 2 * π * r
    }
  };
  
  let circle2 = {
    radius: 10, 
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  

  console.log("Площадь circle1: " + circle1.getArea());        
  console.log("Периметр circle1: " + circle1.getPerimeter());   
  console.log("Площадь circle2: " + circle2.getArea());        
  console.log("Периметр circle2: " + circle2.getPerimeter());   
  