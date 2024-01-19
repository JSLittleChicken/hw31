const testimonials = document.getElementById("testimonials");


const testmonialsData = [
    {
        author: 'Микола',
        description: 'Хороший товар!'
    },
    {
        author: 'Алла',
        description: 'Задоволена якістю!'
    },
    {
        author: 'Тамара',
        description: 'Товар прійшов з дефектом , але швидко замінили.'
    }
]

testmonialsData.forEach((testimonial) => {
    let testimonialBlock = document.createElement("div");
    testimonialBlock.className = "testimonial";
    testimonials.append(testimonialBlock);
    let author = document.createElement("p");
    author.className = "testimonial-author";
    author.innerText = testimonial.author;
    testimonialBlock.append(author);
    let description = document.createElement("p");
    description.className = "testimonial-text";
    description.innerText = testimonial.description;
    testimonialBlock.append(description);
})