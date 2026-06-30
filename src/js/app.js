export class Validator{
    validateUsername(nickname){
        return /^(?!.*\d{3})[A-Za-z][A-Za-z0-9_-]*[A-Za-z]$/.test(nickname);
    }
}