/// <reference types="cypress" />
import { MountWithMantine } from '../../cypress/support/mantine';
import ArticleList from '../../src/components/ArticleList';

// Mock article data
const mockArticles = [
  {
    id: 100000009910307,
    title: 'My Brother Has Schizophrenia. This Is How I Love Him.',
    abstract: 'I can’t make Tim better. But he has made me a better doctor.',
    media: [
      {
        'media-metadata': [
          {},
          {},
          {
            url: 'https://static01.nyt.com/images/2025/01/12/fashion/12MODERN-SHANDRO/12MODERN-SHANDRO-mediumThreeByTwo440.jpg',
          },
        ],
      },
    ],
    source: 'New York Times',
    url: 'https://www.nytimes.com/2025/01/10/style/modern-love-brother-schizophrenia-how-i-love-him.html',
  },
  {
    id: 100000009910324,
    title:
      'Giuliani Found in Contempt of Court Over Continued Defamation of Election Workers',
    abstract:
      'In November, Rudy Giuliani repeated accusations against the women at least four times, after Donald J. Trump won the 2024 presidential election.',
    media: [
      {
        'media-metadata': [
          {},
          {},
          {
            url: 'https://static01.nyt.com/images/2025/01/10/multimedia/10DC-RUDY-gfvb/10DC-RUDY-gfvb-mediumThreeByTwo440.jpg',
          },
        ],
      },
    ],
    source: 'New York Times',
    url: 'https://www.nytimes.com/2025/01/10/us/politics/giuliani-contempt-defamation-election-workers.html',
  },
];

describe('<ArticleList />', () => {
  beforeEach(() => {
    const mockUseArticles = () => ({
      isLoading: false,
      articles: mockArticles,
    });

    cy.mount(MountWithMantine(<ArticleList useArticles={mockUseArticles} />));
  });

  it('displays loading skeletons when loading', () => {
    const mockUseArticles = () => ({
      isLoading: true,
      articles: [],
    });

    cy.mount(MountWithMantine(<ArticleList useArticles={mockUseArticles} />));

    cy.get('[data-testid="article-skeleton"]').should('have.length', 12);
  });

  it('renders articles when loaded', () => {
    const mockUseArticles = () => ({
      isLoading: false,
      articles: mockArticles,
    });

    cy.mount(MountWithMantine(<ArticleList useArticles={mockUseArticles} />));
    cy.get(
      'a[href="https://www.nytimes.com/2025/01/10/style/modern-love-brother-schizophrenia-how-i-love-him.html"]'
    ).should('exist');
    cy.get(
      'a[href="https://www.nytimes.com/2025/01/10/us/politics/giuliani-contempt-defamation-election-workers.html"]'
    ).should('exist');
  });

  it('displays article details correctly', () => {
    cy.contains('Trending').should('exist');
    cy.contains(
      'Good morning. These stories are most popular with our readers'
    ).should('exist');

    mockArticles.forEach((article) => {
      cy.contains(article.title).should('exist');
      cy.contains(article.abstract).should('exist');
      cy.contains(article.source).should('exist');
      cy.get(`img[src="${article.media[0]['media-metadata'][2].url}"]`).should(
        'exist'
      );
    });
  });
});
