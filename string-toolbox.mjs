function capitalise(string) {
    const words = string.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}

function truncate(string, length) {
    if (string.length <= length) {
        return string;
    }

    return string.slice(0, length) + '...';
}

console.log(truncate("Lok Mun", 2));

function camelCase(string) {
    let words = string.toLowerCase().split(' ');
    
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}

console.log(camelCase("Hello world"));

function reverse(string) {
    return string.split('').reverse().join('');
}

console.log(reverse("Hello world"));

function isPalindrome(string) {
    let reversedString = string.split('').reverse().join('');

    return string === reversedString;
}

console.log(isPalindrome("racecar"));

export {
    capitalise,
    truncate,
    camelCase,
    reverse,
    isPalindrome
};