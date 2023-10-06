export function getPropertyType(obj: { [key: string]: any }, key: string) {
    return typeof obj[key]
}

