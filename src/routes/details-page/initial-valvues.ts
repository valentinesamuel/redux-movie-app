export const initialMovieDetail = {
    adult: true,
    title: '',
    backdrop_path: '',
    genres: [{
        id: 1,
        name: ''
    }],
    genre_ids: [1, 2],
    id: 54,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 2,
    poster_path: '',
    release_date: '',
    status: '',
    tagline: '',
    vote_average: 1,
    vote_count: 2,
    video: false,
}

export const movieListInitialValue = {
    page: 1,
    results: [
        {
            adult: false,
            backdrop_path: null,
            genre_ids: [
                28
            ],
            id: 106912,
            original_language: "en",
            original_title: "Darna! Ang Pagbabalik",
            overview: "Valentina, Darna's snake-haired arch enemy, is trying to take over the Phillipines through subliminal messages on religious TV shows. Darna has her own problems, however, as she has lost her magic pearl and with it the ability to transform into her scantily clad super self. Trapped as her alter-ego, the plucky reporter Narda, she must try to regain the pearl and foil Valentina's plans.",
            release_date: "1994-05-09",
            poster_path: null,
            popularity: 1.012564,
            title: "Darna: The Return",
            video: false,
            vote_average: 0,
            vote_count: 0
        }
    ],
    total_pages: 9,
    total_results: 168
}

export const MovieReview = {
    id: 11,
    page: 1,
    results: [
        {
            author: "Cat Ellington",
            author_details: {
                name: "Cat Ellington",
                username: "CatEllington",
                avatar_path: "/uCmwgSbJAcHqNwSvQvTv2dB95tx.jpg",
                rating: 2
            },
            content: "(As I'm writing this review, Darth Vader's theme music begins to build in my mind...)\r\n\r\nWell, I trust that you'll too discover yourself to be a lifelong cult fan in the wake. 😊",
            created_at: "2017-02-13T22:23:1.268Z",
            id: "58a231c5925141179e000674",
            updated_at: "2017-02-13T23:16:19.538Z",
            url: "https://www.themoviedb.org/review/58a231c5925141179e000674"
        },
    ],
    total_pages: 1,
    total_results: 3
}

export const movieCreditInitialValue = {
    id: 550,
    cast: [
        {
            adult: false,
            gender: 2,
            id: 59285,
            known_for_department: "Acting",
            name: "Ezra Buzzington",
            original_name: "Ezra Buzzington",
            popularity: 2.254,
            profile_path: "/j3kJRKgQdHAMXvJUtPHXJsGGW5X.jpg",
            cast_id: 38,
            character: "Inspector Dent",
            credit_id: "52fe4250c3a36847f8014a71",
            order: 12
        },
    ],
    crew: [
        {
            adult: false,
            gender: 0,
            id: 2254363,
            known_for_department: "Production",
            name: "Shaun Ryan",
            original_name: "Shaun Ryan",
            popularity: 0.6,
            order: 12,
            profile_path: null,
            credit_id: "5c7a4f7c0e0a2637cb0e9e97",
            character: "Inspector Dent",
            cast_id: 38,
            // department: "Production",
            // job: "Production Driver"
        }
    ]
}