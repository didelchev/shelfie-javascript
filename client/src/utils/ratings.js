export const fillStars = (stars, rating) => {
    stars.forEach((star, index) => {
        star.classList.toggle('filled', index < rating);
    });
};