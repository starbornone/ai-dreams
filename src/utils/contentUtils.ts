// Content-related utility functions

export function findSimilarContent(keywords: string[], allContent: any[], limit: number = 3) {
  if (keywords.length === 0) return allContent.slice(0, limit);

  const scoredContent = allContent.map((content) => {
    const title = content.title?.toLowerCase() || '';
    const tags = content.tags?.map((tag: string) => tag.toLowerCase()) || [];
    const categoryName = content.category?.name?.toLowerCase() || '';
    const categorySlug = content.category?.slug?.toLowerCase() || '';

    let score = 0;
    keywords.forEach((keyword) => {
      const keywordLower = keyword.toLowerCase();

      // Common word endings (to handle singular/plural and other variations)
      const wordVariants = generateWordVariants(keywordLower);

      // Check title for main keyword and its variants
      if (title.includes(keywordLower)) {
        score += 5;
      } else if (wordVariants.some((variant) => title.includes(variant))) {
        score += 3;
      }

      // Check for partial matches in longer words
      const titleWords = title.split(/\s+/);
      if (titleWords.some((word) => word.startsWith(keywordLower) && word.length > keywordLower.length)) {
        score += 2;
      }

      // Check tags
      if (
        tags.some((tag) => {
          // Exact match
          if (tag === keywordLower) return true;
          // Tag includes keyword
          if (tag.includes(keywordLower)) return true;
          // Keyword includes tag
          if (keywordLower.includes(tag) && tag.length > 3) return true;
          // Tag contains a variant
          return wordVariants.some((variant) => tag.includes(variant));
        })
      ) {
        score += 2;
      }

      // Check category
      if (
        (categoryName &&
          (categoryName.includes(keywordLower) || wordVariants.some((variant) => categoryName.includes(variant)))) ||
        (categorySlug &&
          (categorySlug.includes(keywordLower) || wordVariants.some((variant) => categorySlug.includes(variant))))
      ) {
        score += 2;
      }
    });

    return { ...content, score };
  });

  const filtered = scoredContent
    .filter((content) => content.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return filtered.length > 0 ? filtered : allContent.slice(0, limit);
}

/**
 * Generates common variants of a word to improve matching
 */
function generateWordVariants(word: string): string[] {
  if (word.length <= 3) return []; // Skip very short words

  const variants: string[] = [];

  // Common English suffixes and their alternatives
  const suffixRules: [RegExp, string][] = [
    // Plural forms
    [/s$/, ''], // "cats" -> "cat"
    [/$/, 's'], // "cat" -> "cats"
    [/es$/, ''], // "classes" -> "class"
    [/$/, 'es'], // "class" -> "classes"
    [/ies$/, 'y'], // "technologies" -> "technology"
    [/y$/, 'ies'], // "technology" -> "technologies"

    // Verb forms and tenses
    [/ing$/, ''], // "running" -> "run"
    [/ing$/, 'e'], // "writing" -> "write"
    [/$/, 'ing'], // "run" -> "running"
    [/ed$/, ''], // "walked" -> "walk"
    [/ed$/, 'e'], // "liked" -> "like"
    [/$/, 'ed'], // "walk" -> "walked"

    // Adjective forms
    [/er$/, ''], // "bigger" -> "big"
    [/$/, 'er'], // "big" -> "bigger"
    [/est$/, ''], // "biggest" -> "big"
    [/$/, 'est'], // "big" -> "biggest"
  ];

  // Apply each rule to generate variants
  for (const [pattern, replacement] of suffixRules) {
    const newWord = word.replace(pattern, replacement);
    if (newWord !== word && newWord.length > 3) {
      variants.push(newWord);
    }
  }

  return [...new Set(variants)]; // Remove duplicates
}
