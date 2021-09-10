
//fetch tracks
export const fetchTracks = async () =>{
    const url = 'http://localhost:5000/api/tracks';
    const res = await fetch(url);
    return res.json();
}

//fetch one track
export const fetchOneTracks = async (id) =>{
    const url = `http://localhost:5000/api/tracks/${id}`;
    const res = await fetch(url);
    return res.json();
}


//fetch genres
export const fetchGenres = async () => {
    const url = 'http://localhost:5000/api/genres/';
    const res = await fetch(url);
    return res.json();
}

//fetch albums
export const fetchAlbums = async () => {
    const url = 'http://localhost:5000/api/albums/';
    const res = await fetch(url);
    return  res.json();
}


// fetch one album
export const fetchOneAlbum = async (id) => {
    const url = `http://localhost:5000/api/albums/${id}`
    const res = await fetch(url);
    return res.json()
}

// fetch albums from one artiste
export const fetchOneAlbumFromOneArtiste = async (id) => {
    const url = `http://localhost:5000/api/albums/albums/${id}`
    const res = await fetch(url);
    return res.json()
}


//fetch one user
export const fetchOneUser = async (id) => {
    const url = `http://localhost:5000/api/users/${id}`
    const res = await fetch(url);
    return res.json()
}

//fetch lyric
export const fetchLyric = async (id) => {
    const url = `http://localhost:5000/api/lyrics/${id}`
    const res = await fetch(url);
    return res.json()
}

//fetch one artiste
export const fetchOneArtiste = async (id) => {
    const url = `http://localhost:5000/api/artistes/${id}`
    const res = await fetch(url);
    return res.json()
}
//fetch many artiste
export const fetchArtistes  = async () => {
    const url = `http://localhost:5000/api/artistes/some`
    const res = await fetch(url);
    return res.json()
}
//fetch followers
export const fetchFollowers  = async (id) => {
    const url = `http://localhost:5000/api/actions/followers/${id}`
    const res = await fetch(url);
    return res.json()
}
//check follow
export const checkFollowers  = async (id, uid) => {
    const url = `http://localhost:5000/api/actions/check/${id}/${uid}`
    const res = await fetch(url);
    return res.json()
}

//fetch songs by one artiste
export const fetchSongsFromOneArtiste = async (id) => {
    const url = `http://localhost:5000/api/tracks/songs/${id}`
    const res = await fetch(url);
    return res.json()
}

//fetch all blogs 
export const fetchBlogs = async () => {
    const url ="http://localhost:5000/api/blogs"
    const res = await fetch(url);
    return res.json();
}