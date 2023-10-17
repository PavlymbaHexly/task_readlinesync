function calculateDiscount(price, discountPercentage) {
    const discountAmount = (price * discountPercentage) / 100;
    const discountedPrice = price - discountAmount;
    return discountedPrice;
    }
    const price = 100;
    const discountPercentage = 20;
    const discountedPrice = calculateDiscount(price, discountPercentage);
    console.log(discountedPrice);