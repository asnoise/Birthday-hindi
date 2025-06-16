document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('wishForm');
    const generateBtn = document.getElementById('generateBtn');
    const resultDiv = document.getElementById('result');
    const shortUrlInput = document.getElementById('shortUrl');
    const copyBtn = document.getElementById('copyBtn');
    const whatsappShareLink = document.getElementById('whatsappShare');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        generateBtn.disabled = true;
        generateBtn.innerText = 'Generating...';

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const imageFile = document.getElementById('image').files[0];
        
        let imageDataUrl = '';

        if (imageFile) {
            // Convert image to Base64
            imageDataUrl = await toBase64(imageFile);
        }

        // Base URL for the wish page
        const baseUrl = `${window.location.origin}${window.location.pathname.replace('index.html', '')}wish.html`;
        
        // Create a long URL with all the data
        const longUrl = new URL(baseUrl);
        longUrl.searchParams.append('name', encodeURIComponent(name));
        longUrl.searchParams.append('message', encodeURIComponent(message));
        if (imageDataUrl) {
            longUrl.searchParams.append('image', encodeURIComponent(imageDataUrl));
        }

        // --- URL Shortening using TinyURL API (Free and no key needed) ---
        try {
            const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl.href)}`);
            if (!response.ok) throw new Error('Network response was not ok');
            
            const shortUrl = await response.text();

            // Display the result
            shortUrlInput.value = shortUrl;
            whatsappShareLink.href = `https://api.whatsapp.com/send?text=A special birthday wish for you! 🎉 Check it out: ${shortUrl}`;
            resultDiv.classList.remove('hidden');

        } catch (error) {
            console.error('Failed to shorten URL:', error);
            // Agar API fail ho jaye, to lamba URL hi dikha do
            shortUrlInput.value = longUrl.href;
            alert('Could not shorten URL. Please use the long URL.');
            resultDiv.classList.remove('hidden');
        } finally {
            generateBtn.disabled = false;
            generateBtn.innerText = 'Generate Wish Link';
        }
    });

    // Copy button functionality
    copyBtn.addEventListener('click', () => {
        shortUrlInput.select();
        document.execCommand('copy');
        copyBtn.innerText = 'Copied!';
        setTimeout(() => {
            copyBtn.innerText = 'Copy';
        }, 2000);
    });
});

// Helper function to convert a file to Base64
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
