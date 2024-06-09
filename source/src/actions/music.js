export function music(item) {
    return {
        state: false,
        type: "PLAY_MUSIC",
        item: item
    }
}

export function playMusic(type) {
    return {
        type: type,
    }
}