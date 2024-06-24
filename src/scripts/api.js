export async function fetchMusicData() {
    const url = 'https://openmusic-fake-api.onrender.com/api/musics';

    const response = await fetch(url);

    const data = await response.json();
    return data;
}