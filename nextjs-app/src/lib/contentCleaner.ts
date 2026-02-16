import { ContentItem, CleaningOptions } from '@/types/content';

export class ContentCleaner {
  static clean(content: string, options: CleaningOptions = {}): string {
    let result = content;

    // Trim whitespace
    if (options.trim !== false) {
      result = result.trim();
    }

    // Remove HTML tags
    if (options.removeHtml) {
      result = result.replace(/<[^>]*>/g, '');
    }

    // Remove URLs
    if (options.removeUrls) {
      result = result.replace(/https?:\/\/[^\s]+/g, '');
    }

    // Remove special characters
    if (options.removeSpecialChars) {
      result = result.replace(/[^a-zA-Z0-9\s.,!?\-'"]/g, '');
    }

    // Remove extra whitespace
    if (options.removeExtraSpaces !== false) {
      result = result.replace(/\s+/g, ' ');
    }

    // Normalize punctuation
    if (options.normalizePunctuation) {
      result = result.replace(/([.!?])\s+/g, '$1 ');
    }

    // Remove line breaks
    if (options.removeLineBreaks) {
      result = result.replace(/\n+/g, ' ');
    }

    // Convert to lowercase
    if (options.toLowerCase) {
      result = result.toLowerCase();
    }

    // Convert to uppercase
    if (options.toUpperCase) {
      result = result.toUpperCase();
    }

    // Remove numbers
    if (options.removeNumbers) {
      result = result.replace(/\d+/g, '');
    }

    return result.trim();
  }

  static getStats(original: string, cleaned: string): { charRemoved: number; percentReduced: number; wordsBefore: number; wordsAfter: number } {
    const charRemoved = original.length - cleaned.length;
    const percentReduced = Math.round((charRemoved / (original.length || 1)) * 100);
    const wordsBefore = original.trim().split(/\s+/).filter(w => w).length;
    const wordsAfter = cleaned.trim().split(/\s+/).filter(w => w).length;

    return {
      charRemoved,
      percentReduced,
      wordsBefore,
      wordsAfter,
    };
  }
}

export function filterContentByMetadata(content: ContentItem[], metadataFilters: Record<string, any>): ContentItem[] {
  return content.filter(item => {
    const matches = Object.entries(metadataFilters).every(([key, value]) => {
      const metadataValue = item.metadata?.[key];
      if (!metadataValue) return false;

      if (Array.isArray(value)) {
        return value.some(val =>
          typeof val === 'string' ? metadataValue.toString().includes(val) :
            typeof val === 'number' ? metadataValue === val :
              typeof val === 'boolean' ? metadataValue === val : false
        );
      }

      return typeof value === 'string' ? metadataValue.toString().includes(value) :
        typeof value === 'number' ? metadataValue === value :
          typeof value === 'boolean' ? metadataValue === value : false;
    });
    return matches;
  });
}