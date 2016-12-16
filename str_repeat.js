export default function (string, length) {
    let out = "";
    while (out.length < length) {
        out += string;
    }

    // Hack, this should have been done earlier
    return out.substring(0, length);
}