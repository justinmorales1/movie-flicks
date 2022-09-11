export const itemData = [
    {
        img: 'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy._V1_SX300.jpg',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_SX300.jpg',
        title: 'Family Guy',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg',
        title: 'Everything Everywhere All At Once',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMmZmMjgyOTUtZjljMS00NjhlLTkzMmItM2EyMzY5NzU0NzFiXkEyXkFqcGdeQXVyNjIzMTEyNDk@._V1_SX300.jpg',
        title: 'The Bear',
        author: '@katie_wasserman',
    }
];

export const mustWatchTVShows = [
    {
        img: 'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
        title: 'Rick And Morty',
        author: '@bkristastucchio',
        featured: true,
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy._V1_SX300.jpg',
        title: 'South Park',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_SX300.jpg',
        title: 'Family Guy',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMmZmMjgyOTUtZjljMS00NjhlLTkzMmItM2EyMzY5NzU0NzFiXkEyXkFqcGdeQXVyNjIzMTEyNDk@._V1_SX300.jpg',
        title: 'The Bear',
        author: '@katie_wasserman',
    }
];

const watchListMoviesAndShows = [
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
];


const example = {
    "id": {
        "S": "0"
    },
    "featuredMoviesAndShows": {
        "L": [
            {
                "M": {
                    "id": {
                        "N": "0"
                    },
                    "author": {
                        "S": "Justin Roiland and Dan Harmmond"
                    },
                    "img": {
                        "S": "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg"
                    },
                    "title": {
                        "S": "Rick and Morty"
                    }
                }
            },
            {
                "M": {
                    "id": {
                        "N": "1"
                    },
                    "author": {
                        "S": "Chad Stahelski"
                    },
                    "img": {
                        "S": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg"
                    },
                    "title": {
                        "S": "John Wick"
                    }
                }
            },
            {
                "M": {
                    "id": {
                        "N": "2"
                    },
                    "author": {
                        "S": "Ann Peacock, Andrew Adamson, Christopher Markus"
                    },
                    "img": {
                        "S": "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_SX300.jpg"
                    },
                    "title": {
                        "S": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe"
                    }
                }
            },
            {
                "M": {
                    "id": {
                        "S": "3"
                    },
                    "author": {
                        "S": "Jason Hall, Chris Kyle, Scott McEwen"
                    },
                    "img": {
                        "S": "https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_SX300.jpg"
                    },
                    "title": {
                        "S": "American Sniper"
                    }
                }
            },
            {
                "M": {
                    "id": {
                        "S": "tt0120737"
                    },
                    "author": {
                        "S": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens"
                    },
                    "img": {
                        "S": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
                    },
                    "title": {
                        "S": "The Lord of the Rings: The Fellowship of the Ring"
                    }
                }
            }
        ]
    }
}
