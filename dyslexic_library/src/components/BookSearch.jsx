import { useState } from 'react';

function BookSearch() {
    // State to hold the search query, book data, and loading state
    const [query, setQuery] = useState('');
    const [bookData, setBookData] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to handle the form submission
    const handleSearch = async (event) => {
        event.preventDefault();

        if (!query) return;  // Don't search if there's no query

        setLoading(true);
        setBookData(null);

        // Fetch data from Open Library API
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);

            // If we have results, set the first book as the book data
            if (data.docs && data.docs.length > 0) {
                const firstBook = data.docs[0];
                setBookData(firstBook);
            } else {
                setBookData(null);  // No books found
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Book Search</h1>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter book title"
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Searching..." : "Search"}
                </button>
            </form>

            {bookData ? (
                <div>
                    <h2>Book Title: {bookData.title}</h2>
                    <p>Author: {bookData.author_name ? bookData.author_name.join(", ") : "Unknown"}</p>
                    {bookData.isbn && bookData.isbn[0] ? (
                        <p>ISBN: {bookData.isbn[0]}</p>
                    ) : (
                        <p>No ISBN available</p>
                    )}
                </div>
            ) : (
                !loading && query && <p>No books found for "{query}"</p>
            )}
        </div>
    );
}

export default BookSearch;
