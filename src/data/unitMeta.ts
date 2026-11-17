import { UnitMeta } from '@/types/course';

export const UNIT_META: UnitMeta[] = [
  {
    id: 'unit1',
    shortLabel: 'Unit I',
    roman: 'I',
    title: 'Introduction to Information Retrieval Systems',
    subtitle:
      'IRS definitions, evaluation objectives, functional normalization flow, DBMS/DL/DW relationships, and Search/Browse/Miscellaneous capabilities.',
    topicCount: 8,
    colorVar: '--v-teal',
  },
  {
    id: 'unit2',
    shortLabel: 'Unit II',
    roman: 'II',
    title: 'Cataloging, Indexing & Data Structures',
    subtitle:
      'Cataloging & indexing processes, information extraction, stemming algorithms, Inverted Files, N-Grams, PAT Trees, Signature Files, XML/Hypertext & HMMs.',
    topicCount: 9,
    colorVar: '--v-blue',
  },
  {
    id: 'unit3',
    shortLabel: 'Unit III',
    roman: 'III',
    title: 'Automatic Indexing & Document/Term Clustering',
    subtitle:
      'Classes of automatic indexing, statistical & probabilistic weighting, NLP/Concept/Hypertext indexing, thesaurus generation (KWOC/KWIC/KWAC), item clustering & HAC dendrograms.',
    topicCount: 8,
    colorVar: '--v-teal',
  },
  {
    id: 'unit4',
    shortLabel: 'Unit IV',
    roman: 'IV',
    title: 'User Search Techniques & Information Visualization',
    subtitle:
      'Query statements & binding, similarity measures (Cosine/Dice/Jaccard), Rocchio relevance feedback, SDI, weighted Boolean/fuzzy models, Web/Agents & visualization.',
    topicCount: 8,
    colorVar: '--v-amber',
  },
  {
    id: 'unit5',
    shortLabel: 'Unit V',
    roman: 'V',
    title: 'Text Search Algorithms & Multimedia Retrieval',
    subtitle:
      'Streaming text architecture, Brute-Force, Boyer–Moore & KMP matching, GESCAN & FDF hardware search, and Spoken/Non-Speech Audio, Graph, Imagery & Video retrieval.',
    topicCount: 8,
    colorVar: '--v-violet',
  },
];
