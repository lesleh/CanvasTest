import strRepeat from "./str_repeat";

export default function (str, padStr, length) {
    return strRepeat(padStr, length - str.length) + str;
}
