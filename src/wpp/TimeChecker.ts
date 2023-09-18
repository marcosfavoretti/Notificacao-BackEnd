export function TimerChecker(): boolean {
    const agora = new Date();
    const horaAtual = agora.getHours();
    if (horaAtual < 18) {
        console.log('antes das 18')
        return true
    }
    return false
}