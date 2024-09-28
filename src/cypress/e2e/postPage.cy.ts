describe('Post Page', () => {
  beforeEach(() => {
    cy.visit('/posts/test-post');
  });

  it('displays the post title and content', () => {
    cy.get('h1').should('contain', 'Test Post');
    cy.get('p').should('contain', 'This is a test post content');
  });

  it('navigates to category page on category link click', () => {
    cy.get('a[href="/categories/tech"]').click();
    cy.url().should('include', '/categories/tech');
    cy.get('h1').should('contain', 'Tech Posts');
  });

  it('shows 404 page for non-existent post', () => {
    cy.visit('/posts/non-existent-post', { failOnStatusCode: false });
    cy.get('p').should('contain', 'Post not found');
  });
});
