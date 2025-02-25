import type { News } from '@/interfaces/News'

let dataNews: Array<News> = [];

// This function will be called to load the data
export async function loadNewsData(): Promise<News[]> {
    try {
        const response = await fetch('https://raw.githubusercontent.com/RamezHany/IGCCe-tr/refs/heads/main/news.json');
        const data = await response.json();
        dataNews = data.news;
        return dataNews;
    } catch (error) {
        console.error('Error loading news data:', error);
        return [];
    }
}

// Initial load of data
if (typeof window !== 'undefined') {
    loadNewsData();
}

export { dataNews };
