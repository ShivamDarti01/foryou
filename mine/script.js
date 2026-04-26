function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showLove() {
    const text = "I love you more than words can express ❤️ You are my happiness, my world 🌍 I can do every thing for you baby. Many thins i do worng with you but i promise i will give you happiness and joy in your life. i pray to  god your always with me. I love you mera baccha jaan mera baby.";
    let i = 0;
    let speed = 50;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("loveText").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    document.getElementById("loveText").innerHTML = "";
    typeWriter();
}