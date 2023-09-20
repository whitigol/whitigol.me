export default function age() {
    const birthDate = new Date('2003-07-08');
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age;
}
