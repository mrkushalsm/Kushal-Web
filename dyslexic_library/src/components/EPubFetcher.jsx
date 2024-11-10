import React, { useState, useEffect } from 'react';
import ePub from 'epubjs';

function EPubFetcher({ isbn }) {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isbn) return;

        const fetchBookData = async () => {
            setLoading(true);
            setError(null);

            try {
                // Project Gutenberg search URL (example: search by title, author, or ISBN)
                const searchUrl = `https://www.gutenberg.org/ebooks/search/?query=${isbn}`;

                const response = await fetch(searchUrl);
                const text = await response.text();

                // Parse the HTML to find the EPUB link
                const epubLink = extractEpubLink(text);

                if (epubLink) {
                    loadEPUB(epubLink);
                } else {
                    setError('EPUB not available or book not found.');
                }
            } catch (err) {
                setError('Error fetching book data.');
            } finally {
                setLoading(false);
            }
        };

        const extractEpubLink = (htmlText) => {
            const match = htmlText.match(/href="(\/ebooks\/\d+\.epub)"/);
            return match ? `https://www.gutenberg.org${match[1]}` : null;
        };

        const loadEPUB = (epubUrl) => {
            const bookInstance = ePub(epubUrl);
            setBook(bookInstance);
        };

        fetchBookData();
    }, [isbn]);

    useEffect(() => {
        if (book) {
            // Render the EPUB book into the HTML element with id 'epub-container'
            book.renderTo('epub-container');
        }
    }, [book]);

    return (
        <div>
            <h1>EPUB Reader</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div id="epub-container" style={{ height: '600px', overflowY: 'auto' }}></div>
        </div>
    );
}

export default EPubFetcher;
