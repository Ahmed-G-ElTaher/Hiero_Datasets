// Sample dataset
const datasets = [
    {
        id: 1,
        title: "Hieroglyphic Layout Analysis (HLA) Dataset",
        category: "Layout Analysis",
        year: "2025",
        description: "Dataset that include artifacts images form musuems. its include 883 images. it have 2 annotations --> 'line' and 'Cartouche'  ",
        downloads: 2,
        size: "3.0 GB",
        format: "JSON",
        wget: "https://drive.google.com/uc?export=download&id=1VTIm39iV-KfDr4wzQC7Z2mpkj1hJzk7L",
        doi: "10.1234/climate.2024.001",
        citation: "Smith, J., et al. (2024). Global Climate Change Indicators Dataset 2000-2023. Nature Climate Data, 5(1), 1-15.",
        preview: "https://github.com/Ahmed-G-ElTaher/Hiero_Datasets/blob/main/1(1).png"
    },
    {
        id: 2,
        title: "Signs Segmentation (SS) Dataset",
        category: "Segmentation",
        year: "2025",
        description: "Dataset that contain Hieroglyphic Signs and its annotations for segmentation. its classes include the direction of the sign --> 'left_sign','right_sign' and 'dual_sign' ",
        downloads: 2,
        size: "53 MiB",
        format: "JSON",
        wget: "wget https://data.research-repository.org/health/covid19-metrics-2023.zip",
        doi: "10.1234/health.2023.002",
        citation: "Johnson, M., et al. (2023). COVID-19 Global Health Metrics Database. The Lancet Digital Health, 2(3), 45-60.",
        preview: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Social Media Impact on Mental Health",
        category: "social",
        year: "2023",
        description: "Research data on the correlation between social media usage and mental health indicators.",
        downloads: 2,
        size: "756 MB",
        format: "JSON, XLSX",
        wget: "wget https://data.research-repository.org/social/sm-mental-health-2023.zip",
        doi: "10.1234/social.2023.003",
        citation: "Brown, A., et al. (2023). Social Media and Mental Health Dataset. Journal of Digital Psychology, 8(2), 112-128.",
        preview: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
    }
];
const dataset2 = [
    {
        id: 1,
        title: "Global Climate Change Indicators 2000-2023",
        category: "climate",
        year: "2024",
        description: "Comprehensive dataset of global climate indicators including temperature, precipitation, and sea level changes.",
        downloads: 1234,
        size: "2.3 GB",
        format: "CSV, JSON",
        wget: "wget https://data.research-repository.org/climate/gcc-indicators-2024.zip",
        doi: "10.1234/climate.2024.001",
        citation: "Smith, J., et al. (2024). Global Climate Change Indicators Dataset 2000-2023. Nature Climate Data, 5(1), 1-15.",
        preview: "https://images.unsplash.com/photo-1561481538-059fc89c1ce1?q=80&w=800&auto=format&fit=crop"
    }
];


// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    displayDatasets(datasets);
    initializeStats();
    displayCitations();
});

// Display datasets
function displayDatasets(data) {
    const grid = document.getElementById('datasetGrid');
    grid.innerHTML = '';

    data.forEach(dataset => {
        const card = document.createElement('div');
        card.className = 'dataset-card';
        card.innerHTML = `
            <div class="dataset-preview">
                <img src="${dataset.preview}" alt="${dataset.title} preview" loading="lazy">
            </div>
            <h3>${dataset.title}</h3>
            <div class="meta">
                <span>${dataset.category} | ${dataset.year} | ${dataset.size}</span>
            </div>
            <p class="description">${dataset.description}</p>
            <div class="meta">
                <span>${dataset.downloads} downloads | Format: ${dataset.format}</span>
            </div>
            <div class="dataset-details">
                <div class="wget-command">
                    <label>Download Command:</label>
                    <div class="code-block">
                        <code>${dataset.wget}</code>
                        <button onclick="copyToClipboard('${dataset.wget}')" class="copy-btn">Copy</button>
                    </div>
                </div>
            </div>
            <a href="#" class="download-btn" onclick="downloadDataset(${dataset.id})">Download Dataset</a>
        `;
        grid.appendChild(card);
    });
}

// Display citations
function displayCitations() {
    const citationsSection = document.getElementById('citationsSection');
    citationsSection.innerHTML = '<h2>Dataset Citations</h2>';
    
    const citationsList = document.createElement('div');
    citationsList.className = 'citations-list';
    
    dataset2.forEach(dataset => {
        const citationCard = document.createElement('div');
        citationCard.className = 'citation-card';
        citationCard.innerHTML = `
            <h3>${dataset.title}</h3>
            <div class="citation-info">
                <label>DOI: <a href="https://doi.org/${dataset.doi}" target="_blank">${dataset.doi}</a></label>
                <div class="citation-text">
                    <p>${dataset.citation}</p>
                </div>
            </div>
        `;
        citationsList.appendChild(citationCard);
    });
    
    citationsSection.appendChild(citationsList);
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Search functionality
function searchDatasets() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredDatasets = datasets.filter(dataset => 
        dataset.title.toLowerCase().includes(searchTerm) ||
        dataset.description.toLowerCase().includes(searchTerm)
    );
    displayDatasets(filteredDatasets);
}

// Filter functionality
function filterDatasets() {
    const category = document.getElementById('categoryFilter').value;
    const year = document.getElementById('yearFilter').value;

    let filteredDatasets = datasets;

    if (category) {
        filteredDatasets = filteredDatasets.filter(dataset => dataset.category === category);
    }
    if (year) {
        filteredDatasets = filteredDatasets.filter(dataset => dataset.year === year);
    }

    displayDatasets(filteredDatasets);
}

// Download handler
function downloadDataset(id) {
    const dataset = datasets.find(d => d.id === id);
    if (dataset) {
        alert(`Downloading ${dataset.title}...\nThis would typically initiate the actual download.`);
    }
}

// Initialize statistics
function initializeStats() {
    const stats = {
        datasets: datasets.length,
        downloads: datasets.reduce((sum, dataset) => sum + dataset.downloads, 0),
        researchers: 1500 // Example static number
    };

    document.getElementById('datasetCount').textContent = stats.datasets;
    document.getElementById('downloadCount').textContent = stats.downloads;
    document.getElementById('researcherCount').textContent = stats.researchers;
}

// Contact form handler
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    Email.send({
        SecureToken: "YOUR_SECURE_TOKEN", // Replace with your SMTP.js secure token
        To: 'ahmed.g.eltaher@gmail.com',
        From: email,
        Subject: `New message from ${name}`,
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
    }).then(
        response => alert('Thank you for your message! We will respond soon.')
    ).catch(
        error => alert('Failed to send message. Please try again later.')
    );

    event.target.reset();
}