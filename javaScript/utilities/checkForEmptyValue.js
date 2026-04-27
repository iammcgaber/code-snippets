function isEmpty(value) {
    // Check for null or undefined
    if (value == null) {
        return true;
    }

    // Check for empty strings (including strings with only whitespace)
    if (typeof value === 'string' && value.trim() === '') {
        return true;
    }

    // Check for empty arrays
    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    // Check for empty objects
    if (typeof value === 'object' && Object.keys(value).length === 0) {
        return true;
    }

    // Check for booleans, numbers, and valid values (not empty in JavaScript terms)
    if (typeof value === 'boolean' || typeof value === 'number') {
        return false; // These are not considered "empty"
    }

    // Fallback - not empty
    return false;
}