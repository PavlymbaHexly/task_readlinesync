function calculateRectangleProperties(width, height) {
    const perimeter = 2 * (width + height);
    const area = width * height;
    
    return {
    perimeter: perimeter,
    area: area
    };
    
    }
    const rectangleWidth = 5;
    const rectangleHeight = 10;
    const rectangleProperties = calculateRectangleProperties(rectangleWidth, rectangleHeight);
    console.log(rectangleProperties);