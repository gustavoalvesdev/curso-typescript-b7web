let names = ['bonieky', 'pedro', 'paulo', 'cristina', 90];

names.forEach(function(element) {
    if (typeof element == 'string')
        console.log(element.toUpperCase());
    else 
        console.log(element);
});