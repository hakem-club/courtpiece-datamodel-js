import { TPlayerName } from "../types";

export function isNameValid(name: TPlayerName): boolean {
    return /^[a-z\d]{3,8}$/gi.test(name);
}
