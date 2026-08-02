import { z } from 'zod';
import { agentOutputSchema } from './schema';

describe('agentOutputSchema', () => {
  it('OpenAI strict Structured Outputs に optional フィールドを渡さない', () => {
    const jsonSchema = z.toJSONSchema(agentOutputSchema) as unknown as {
      properties: {
        suggestions: {
          items: {
            properties: Record<string, unknown>;
            required: string[];
          };
        };
      };
    };
    const station = jsonSchema.properties.suggestions.items;

    expect(station.required).toEqual(Object.keys(station.properties));
  });
});
