export class StringUtil {
    static isNullOrEmpty(text: String) {
        if (typeof(text) === "undefined" || text === null) {
            return true;
        } else if (typeof(text) !== 'string') {
            text = text.toString();
        }
        return text.length === 0 || text.trim().length === 0;
    }
}
